class AssetTrackingEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listHardware(assetId) {
    this.apiClient.validateParameters({ assetId }, ['assetId']);
    return this.apiClient.makeRequest('list_all_hardware', { assetid: assetId });
  }

  async listSoftware(assetId) {
    this.apiClient.validateParameters({ assetId }, ['assetId']);
    return this.apiClient.makeRequest('list_all_software', { assetid: assetId });
  }

  async listLicenseGroups() {
    return this.apiClient.makeRequest('list_license_groups');
  }

  async listDeviceAssetDetails(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_device_asset_details', { deviceid: deviceId });
  }

  async listLicenseGroupItems(groupId) {
    this.apiClient.validateParameters({ groupId }, ['groupId']);
    return this.apiClient.makeRequest('list_license_group_items', { groupid: groupId });
  }

  async listClientLicenseCount() {
    return this.apiClient.makeRequest('list_client_license_count');
  }
}

module.exports = AssetTrackingEndpoints;