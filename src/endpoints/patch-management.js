class PatchManagementEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listAllPatches(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('patch_list_all', {
      deviceid: deviceId
    });
  }

  async approvePatch(deviceId, patchIds) {
    this.apiClient.validateParameters(
      { deviceId, patchIds },
      ['deviceId', 'patchIds']
    );
    return this.apiClient.makeRequest('patch_approve', {
      deviceid: deviceId,
      patchids: Array.isArray(patchIds) ? patchIds.join(',') : patchIds
    });
  }

  async ignorePatch(deviceId, patchIds) {
    this.apiClient.validateParameters(
      { deviceId, patchIds },
      ['deviceId', 'patchIds']
    );
    return this.apiClient.makeRequest('patch_ignore', {
      deviceid: deviceId,
      patchids: Array.isArray(patchIds) ? patchIds.join(',') : patchIds
    });
  }

  async doNothingWithPatch(deviceId, patchIds) {
    this.apiClient.validateParameters(
      { deviceId, patchIds },
      ['deviceId', 'patchIds']
    );
    return this.apiClient.makeRequest('patch_do_nothing', {
      deviceid: deviceId,
      patchids: Array.isArray(patchIds) ? patchIds.join(',') : patchIds
    });
  }

  async reprocessPatch(deviceId, patchIds) {
    this.apiClient.validateParameters(
      { deviceId, patchIds },
      ['deviceId', 'patchIds']
    );
    return this.apiClient.makeRequest('patch_reprocess', {
      deviceid: deviceId,
      patchids: Array.isArray(patchIds) ? patchIds.join(',') : patchIds
    });
  }

  async retryPatch(deviceId, patchIds) {
    this.apiClient.validateParameters(
      { deviceId, patchIds }, 
      ['deviceId', 'patchIds']
    );
    return this.apiClient.makeRequest('patch_retry', {
      deviceid: deviceId,
      patchids: Array.isArray(patchIds) ? patchIds.join(',') : patchIds
    });
  }
}

module.exports = PatchManagementEndpoints;