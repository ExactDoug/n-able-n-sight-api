class ClientSiteEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listClients(deviceType = null) {
    const parameters = {};
    if (deviceType) {
      parameters.devicetype = deviceType;
    }
    return this.apiClient.makeRequest('list_clients', parameters);
  }

  async listSites(clientId) {
    this.apiClient.validateParameters({ clientId }, ['clientId']);
    return this.apiClient.makeRequest('list_sites', { clientid: clientId });
  }

  async listServers(siteId) {
    this.apiClient.validateParameters({ siteId }, ['siteId']);
    return this.apiClient.makeRequest('list_servers', { siteid: siteId });
  }

  async listWorkstations(siteId) {
    this.apiClient.validateParameters({ siteId }, ['siteId']);
    return this.apiClient.makeRequest('list_workstations', { siteid: siteId });
  }

  async listDevicesAtClient(clientId, deviceType = 'server') {
    this.apiClient.validateParameters({ clientId }, ['clientId']);
    return this.apiClient.makeRequest('list_devices_at_client', {
      clientid: clientId,
      devicetype: deviceType
    });
  }
}

module.exports = ClientSiteEndpoints;