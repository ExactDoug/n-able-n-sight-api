import type { NSightClient } from "../client.js";

export class AssetEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** List device asset details (returns assetid needed by other asset calls). */
  async getDeviceDetails(deviceId: number): Promise<unknown> {
    return this.client.request("list_device_asset_details", { deviceid: deviceId });
  }

  /** List all hardware for an asset. Get assetid from getDeviceDetails(). */
  async listHardware(assetId: number): Promise<unknown> {
    return this.client.request("list_all_hardware", { assetid: assetId });
  }

  /** List all software (by type) for an asset. Get assetid from getDeviceDetails(). */
  async listSoftware(assetId: number): Promise<unknown> {
    return this.client.request("list_all_software", { assetid: assetId });
  }

  /** List all software license groups for the account. */
  async listLicenseGroups(): Promise<unknown> {
    return this.client.request("list_license_groups");
  }

  /** List software in a license group. */
  async listLicenseGroupItems(groupId: number): Promise<unknown> {
    return this.client.request("list_license_group_items", { groupid: groupId });
  }

  /** List all client license counts. */
  async listClientLicenseCount(): Promise<unknown> {
    return this.client.request("list_client_license_count");
  }

  /** List licensed software for an asset. */
  async listLicensedSoftware(assetId: number): Promise<unknown> {
    return this.client.request("list_licensed_software", { assetid: assetId });
  }
}
