class MonitoringEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getDeviceMonitoringDetails(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_device_monitoring_details', { 
      deviceid: deviceId 
    });
  }

  async listFailingChecks(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_failing_checks', { 
      deviceid: deviceId 
    });
  }

  async listChecks(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_checks', { 
      deviceid: deviceId 
    });
  }

  async getCheckResults(deviceId, checkId) {
    this.apiClient.validateParameters({ deviceId, checkId }, ['deviceId', 'checkId']);
    return this.apiClient.makeRequest('list_fmt_check_result', {
      deviceid: deviceId,
      checkid: checkId
    });
  }

  async listCheckHistory(deviceId, checkId) {
    this.apiClient.validateParameters({ deviceId, checkId }, ['deviceId', 'checkId']);
    return this.apiClient.makeRequest('list_check_history', {
      deviceid: deviceId,
      checkid: checkId
    });
  }
}

module.exports = MonitoringEndpoints;