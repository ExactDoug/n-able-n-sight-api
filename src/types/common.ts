/** Configuration for the API client */
export interface NSightConfig {
  /** API key generated from N-sight RMM Settings > General Settings > API */
  apiKey: string;
  /** Base server URL for your territory (e.g. "https://www.systemmonitor.us") */
  server: string;
  /** Minimum milliseconds between API calls. Default: 90000 (90s per N-able guidelines) */
  rateLimitMs?: number;
  /** Request timeout in milliseconds. Default: 30000 */
  timeoutMs?: number;
}

/** Territory identifiers and their server URLs */
export const TERRITORIES = {
  americas: "https://www.am.remote.management",
  asia: "https://wwwasia.system-monitor.com",
  australia: "https://www.system-monitor.com",
  europe: "https://wwweurope1.systemmonitor.eu.com",
  france: "https://wwwfrance.systemmonitor.eu.com",
  france1: "https://wwwfrance1.systemmonitor.eu.com",
  germany: "https://wwwgermany1.systemmonitor.eu.com",
  ireland: "https://wwwireland.systemmonitor.eu.com",
  poland: "https://wwwpoland1.systemmonitor.eu.com",
  uk: "https://www.systemmonitor.co.uk",
  us: "https://www.systemmonitor.us",
} as const;

export type Territory = keyof typeof TERRITORIES;

/** Raw XML result wrapper — status is always present */
export interface ApiResultRaw {
  "@_created": string;
  "@_host": string;
  "@_status": "OK" | "FAIL";
}

/** API error returned when status="FAIL" */
export interface ApiError {
  errorcode: number;
  message: string;
}

/** Thrown when the API returns status="FAIL" */
export class NSightApiError extends Error {
  constructor(
    public readonly errorCode: number,
    message: string,
  ) {
    super(message);
    this.name = "NSightApiError";
  }
}

/** Thrown when rate limit would be violated */
export class RateLimitError extends Error {
  constructor(
    public readonly retryAfterMs: number,
  ) {
    super(`Rate limited. Retry after ${retryAfterMs}ms`);
    this.name = "RateLimitError";
  }
}
