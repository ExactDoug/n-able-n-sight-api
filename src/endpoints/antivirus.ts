import type { NSightClient } from "../client.js";
import type { MavEngineVersion, QuarantineItemsFilter } from "../types/antivirus.js";

export class AntivirusEndpoints {
  constructor(private readonly client: NSightClient) {}

  // ── AV Update Check endpoints ──

  /** List all supported antivirus products (name and ID). */
  async listSupportedProducts(): Promise<unknown> {
    return this.client.request("list_supported_av_products");
  }

  /** List 20 most recent definition versions for an AV product. */
  async listDefinitions(productId: number): Promise<unknown> {
    return this.client.request("list_av_definitions", { productid: productId });
  }

  /** Get release date for a specific AV definition version. */
  async getDefinitionReleaseDate(productId: number, version: string): Promise<unknown> {
    return this.client.request("get_av_definition_release_date", {
      productid: productId,
      version,
    });
  }

  /** List AV update check history for a device (last 60 days). */
  async listAvHistory(deviceId: number): Promise<unknown> {
    return this.client.request("list_av_history", { deviceid: deviceId });
  }

  // ── Managed Antivirus (MAV) endpoints ──

  /** List quarantined threats on a device (per-device quarantine view). */
  async quarantineList(deviceId: number, version: MavEngineVersion = 2): Promise<unknown> {
    return this.client.request("mav_quarantine_list", {
      deviceid: deviceId,
      v: version,
    });
  }

  /** Release threats from quarantine. GUIDs from quarantineList(). */
  async quarantineRelease(deviceId: number, guids: string | string[]): Promise<unknown> {
    return this.client.request("mav_quarantine_release", {
      deviceid: deviceId,
      guids: Array.isArray(guids) ? guids.join(",") : guids,
    });
  }

  /** Delete threats from quarantine. GUIDs from quarantineList(). */
  async quarantineRemove(deviceId: number, guids: string | string[]): Promise<unknown> {
    return this.client.request("mav_quarantine_remove", {
      deviceid: deviceId,
      guids: Array.isArray(guids) ? guids.join(",") : guids,
    });
  }

  /** Start a MAV scan on a device. */
  async startScan(deviceId: number): Promise<unknown> {
    return this.client.request("mav_scan_start", { deviceid: deviceId });
  }

  /** Pause a running MAV scan on a device. */
  async pauseScan(deviceId: number): Promise<unknown> {
    return this.client.request("mav_scan_pause", { deviceid: deviceId });
  }

  /** Resume a paused MAV scan on a device. */
  async resumeScan(deviceId: number): Promise<unknown> {
    return this.client.request("mav_scan_resume", { deviceid: deviceId });
  }

  /** Cancel a MAV scan on a device. */
  async cancelScan(deviceId: number): Promise<unknown> {
    return this.client.request("mav_scan_cancel", { deviceid: deviceId });
  }

  /** Get MAV device list for a device. */
  async scanDeviceList(deviceId: number, version: MavEngineVersion = 2): Promise<unknown> {
    return this.client.request("mav_scan_device_list", {
      deviceid: deviceId,
      v: version,
    });
  }

  /** List MAV scans for a device. Use details=true for threats/quarantine/errors. */
  async listScans(deviceId: number, options?: { details?: boolean; version?: MavEngineVersion }): Promise<unknown> {
    return this.client.request("list_mav_scans", {
      deviceid: deviceId,
      details: options?.details ? "YES" : "NO",
      ...(options?.version !== undefined ? { v: options.version } : {}),
    });
  }

  /** List most recent occurrence of each threat found on a device. */
  async listThreats(deviceId: number, version: MavEngineVersion = 2): Promise<unknown> {
    return this.client.request("list_mav_threats", {
      deviceid: deviceId,
      v: version,
    });
  }

  /** List MAV quarantine contents. Filter: CURRENT (default), PREVIOUS, or ALL. */
  async listQuarantine(deviceId: number, items: QuarantineItemsFilter = "CURRENT"): Promise<unknown> {
    return this.client.request("list_mav_quarantine", {
      deviceid: deviceId,
      items,
    });
  }

  /** Update Bitdefender definitions on a device. */
  async updateDefinitions(deviceId: number): Promise<unknown> {
    return this.client.request("mav_definitions_update", { deviceid: deviceId });
  }
}
