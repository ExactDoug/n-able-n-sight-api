import type { NSightClient } from "../client.js";
import type { GeneralSettings, WallChartSettings } from "../types/settings.js";

export class SettingsEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** List general account settings. */
  async getGeneral(): Promise<{ general: GeneralSettings }> {
    return this.client.request("list_general_settings");
  }

  /** List wall chart settings for the account. */
  async getWallChart(): Promise<WallChartSettings> {
    return this.client.request("list_wallchart_settings");
  }
}
