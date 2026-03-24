import type { NSightClient } from "../client.js";
import type { SelectionSizeParams } from "../types/backup.js";

export class BackupEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** List backup check history for a device (last 60 days). */
  async listHistory(deviceId: number): Promise<unknown> {
    return this.client.request("list_backup_history", { deviceid: deviceId });
  }

  /** List all Backup & Recovery (MOB) sessions for a device. */
  async listSessions(deviceId: number): Promise<unknown> {
    return this.client.request("list_mob_sessions", { deviceid: deviceId });
  }

  /**
   * Get Backup & Recovery selection size for a device/month/year.
   * All size values are in bytes.
   * Divide by 1048576 for MB, 1073741824 for GB.
   */
  async getSelectionSize(params: SelectionSizeParams): Promise<unknown> {
    return this.client.request("mob/mob_list_selection_size", {
      clientid: params.clientid,
      siteid: params.siteid,
      deviceid: params.deviceid,
      year: params.year,
      month: params.month,
    });
  }
}
