class BackupEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listBackupHistory(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_backup_history', {
      deviceid: deviceId
    });
  }

  async listBackupSessions(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_mob_sessions', {
      deviceid: deviceId
    });
  }

  async getSelectionSize(params) {
    const required = ['clientid', 'siteid', 'deviceid', 'year', 'month'];
    this.apiClient.validateParameters(params, required);
    
    return this.apiClient.makeRequest('mob/mob_list_selection_size', {
      clientid: params.clientid,
      siteid: params.siteid,
      deviceid: params.deviceid,
      year: params.year,
      month: params.month
    });
  }
}

module.exports = BackupEndpoints;