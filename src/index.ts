import { NSightClient } from "./client.js";
import { ClientEndpoints } from "./endpoints/clients.js";
import { MonitoringEndpoints } from "./endpoints/monitoring.js";
import { AntivirusEndpoints } from "./endpoints/antivirus.js";
import { BackupEndpoints } from "./endpoints/backup.js";
import { AssetEndpoints } from "./endpoints/assets.js";
import { SettingsEndpoints } from "./endpoints/settings.js";
import { PatchEndpoints } from "./endpoints/patches.js";
import { TaskEndpoints } from "./endpoints/tasks.js";
import { ActiveDirectoryEndpoints } from "./endpoints/active-directory.js";
import type { NSightConfig, Territory } from "./types/common.js";

/**
 * Full-coverage client for the N-able N-sight RMM Data Extraction API.
 *
 * @example
 * ```ts
 * import { NSightApi } from "n-able-n-sight-api";
 *
 * const api = new NSightApi({
 *   server: "https://www.systemmonitor.us",
 *   apiKey: process.env.NS_API_KEY!,
 *   rateLimitMs: 0, // disable for interactive use
 * });
 *
 * const clients = await api.clients.list();
 * const sites = await api.clients.listSites(clientId);
 * const threats = await api.antivirus.listThreats(deviceId);
 * ```
 */
export class NSightApi {
  private readonly _client: NSightClient;

  /** Client, Site & Device management */
  readonly clients: ClientEndpoints;
  /** Monitoring checks & results */
  readonly monitoring: MonitoringEndpoints;
  /** Antivirus update checks & Managed Antivirus (MAV) */
  readonly antivirus: AntivirusEndpoints;
  /** Backup check history & Backup & Recovery (MOB) */
  readonly backup: BackupEndpoints;
  /** Asset tracking — hardware, software, licenses */
  readonly assets: AssetEndpoints;
  /** Dashboard settings — general & wall chart */
  readonly settings: SettingsEndpoints;
  /** Windows patch management */
  readonly patches: PatchEndpoints;
  /** Automated task execution */
  readonly tasks: TaskEndpoints;
  /** Active Directory user listing */
  readonly activeDirectory: ActiveDirectoryEndpoints;

  constructor(config: NSightConfig) {
    this._client = new NSightClient(config);

    this.clients = new ClientEndpoints(this._client);
    this.monitoring = new MonitoringEndpoints(this._client);
    this.antivirus = new AntivirusEndpoints(this._client);
    this.backup = new BackupEndpoints(this._client);
    this.assets = new AssetEndpoints(this._client);
    this.settings = new SettingsEndpoints(this._client);
    this.patches = new PatchEndpoints(this._client);
    this.tasks = new TaskEndpoints(this._client);
    this.activeDirectory = new ActiveDirectoryEndpoints(this._client);
  }

  /** Create API instance from a territory shorthand. */
  static fromTerritory(territory: Territory, apiKey: string, options?: Omit<NSightConfig, "server" | "apiKey">): NSightApi {
    const client = NSightClient.fromTerritory(territory, apiKey, options);
    // Reconstruct config from the client — a bit indirect but avoids exposing internals
    return new NSightApi({
      server: (client as any).server,
      apiKey,
      ...options,
    });
  }

  /** Detect territory from a dashboard URL. */
  static detectTerritory = NSightClient.detectTerritory;

  /**
   * Make a raw request to any service endpoint.
   * Use this for undocumented or new endpoints not yet wrapped.
   */
  async request<T = unknown>(serviceName: string, params?: Record<string, string | number | boolean>): Promise<T> {
    return this._client.request<T>(serviceName, params);
  }

  /** Get raw XML response for any service endpoint. */
  async requestRaw(serviceName: string, params?: Record<string, string | number | boolean>): Promise<string> {
    return this._client.requestRaw(serviceName, params);
  }

  /** Get self-documentation for any service endpoint (describe=true). */
  async describe(serviceName: string): Promise<unknown> {
    return this._client.describe(serviceName);
  }
}

// Re-export everything
export { NSightClient } from "./client.js";
export * from "./types/index.js";
export { ClientEndpoints } from "./endpoints/clients.js";
export { MonitoringEndpoints } from "./endpoints/monitoring.js";
export { AntivirusEndpoints } from "./endpoints/antivirus.js";
export { BackupEndpoints } from "./endpoints/backup.js";
export { AssetEndpoints } from "./endpoints/assets.js";
export { SettingsEndpoints } from "./endpoints/settings.js";
export { PatchEndpoints } from "./endpoints/patches.js";
export { TaskEndpoints } from "./endpoints/tasks.js";
export { ActiveDirectoryEndpoints } from "./endpoints/active-directory.js";
