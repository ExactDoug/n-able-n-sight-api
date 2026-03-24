import { XMLParser } from "fast-xml-parser";
import { NSightConfig, NSightApiError, TERRITORIES, type Territory } from "./types/common.js";

const DEFAULT_RATE_LIMIT_MS = 90_000;
const DEFAULT_TIMEOUT_MS = 30_000;

export class NSightClient {
  private readonly apiKey: string;
  private readonly server: string;
  private readonly rateLimitMs: number;
  private readonly timeoutMs: number;
  private lastRequestTime = 0;

  private readonly xmlParser = new XMLParser({
    ignoreAttributes: false,
    attributeNamePrefix: "@_",
    parseAttributeValue: false,
    numberParseOptions: { leadingZeros: false, hex: false, eNotation: false },
    trimValues: true,
    processEntities: false,
  });

  constructor(config: NSightConfig) {
    if (!config.apiKey) throw new Error("apiKey is required");
    if (!config.server) throw new Error("server is required");

    this.apiKey = config.apiKey;
    // Normalize: strip trailing slash
    this.server = config.server.replace(/\/+$/, "");
    this.rateLimitMs = config.rateLimitMs ?? DEFAULT_RATE_LIMIT_MS;
    this.timeoutMs = config.timeoutMs ?? DEFAULT_TIMEOUT_MS;
  }

  /** Create client from a territory name */
  static fromTerritory(territory: Territory, apiKey: string, options?: Omit<NSightConfig, "server" | "apiKey">): NSightClient {
    const server = TERRITORIES[territory];
    if (!server) {
      throw new Error(`Unknown territory: ${territory}. Valid: ${Object.keys(TERRITORIES).join(", ")}`);
    }
    return new NSightClient({ apiKey, server, ...options });
  }

  /** Detect territory from a dashboard URL */
  static detectTerritory(url: string): Territory | null {
    for (const [key, serverUrl] of Object.entries(TERRITORIES)) {
      if (url.includes(new URL(serverUrl).hostname)) {
        return key as Territory;
      }
    }
    return null;
  }

  /**
   * Make a raw API request and return the parsed XML as a JS object.
   * This is the low-level method — endpoint classes use this internally.
   * Also available for calling undocumented/new endpoints directly.
   */
  async request<T = unknown>(serviceName: string, params: Record<string, string | number | boolean> = {}): Promise<T> {
    await this.enforceRateLimit();

    const url = this.buildUrl(serviceName, params);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(url.toString(), {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const xml = await response.text();
      return this.parseResponse<T>(xml);
    } catch (error) {
      if (error instanceof NSightApiError) throw error;
      if (error instanceof Error && error.name === "AbortError") {
        throw new Error(`Request timed out after ${this.timeoutMs}ms`);
      }
      throw error;
    } finally {
      clearTimeout(timeout);
      this.lastRequestTime = Date.now();
    }
  }

  /**
   * Make a request and return raw XML string (unparsed).
   * Useful for debugging or when you need the raw response.
   */
  async requestRaw(serviceName: string, params: Record<string, string | number | boolean> = {}): Promise<string> {
    await this.enforceRateLimit();

    const url = this.buildUrl(serviceName, params);

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(url.toString(), {
        signal: controller.signal,
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      return await response.text();
    } finally {
      clearTimeout(timeout);
      this.lastRequestTime = Date.now();
    }
  }

  /**
   * Call any service with describe=true to get its self-documentation.
   */
  async describe(serviceName: string): Promise<unknown> {
    return this.request(serviceName, { describe: "true" });
  }

  private buildUrl(serviceName: string, params: Record<string, string | number | boolean>): URL {
    const url = new URL(`${this.server}/api/`);
    url.searchParams.set("apikey", this.apiKey);
    url.searchParams.set("service", serviceName);

    for (const [key, value] of Object.entries(params)) {
      url.searchParams.set(key, String(value));
    }

    return url;
  }

  private parseResponse<T>(xml: string): T {
    const parsed = this.xmlParser.parse(xml);

    // The root element varies: <result> for most calls, <settings> for settings calls
    const root = parsed.result ?? parsed.settings ?? parsed;

    // Check for API error
    if (root["@_status"] === "FAIL" && root.error) {
      throw new NSightApiError(
        Number(root.error.errorcode),
        String(root.error.message),
      );
    }

    // Return the data payload — strip the result wrapper
    // Most calls wrap data in <items>, some don't
    if (root.items !== undefined) {
      return root.items as T;
    }

    return root as T;
  }

  private async enforceRateLimit(): Promise<void> {
    if (this.rateLimitMs <= 0) return;

    const elapsed = Date.now() - this.lastRequestTime;
    if (this.lastRequestTime > 0 && elapsed < this.rateLimitMs) {
      const waitMs = this.rateLimitMs - elapsed;
      await new Promise((resolve) => setTimeout(resolve, waitMs));
    }
  }
}
