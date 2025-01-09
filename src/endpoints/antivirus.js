class AntivirusEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listSupportedProducts() {
    return this.apiClient.makeRequest('list_supported_av_products');
  }

  async getDefinitions(productId) {
    this.apiClient.validateParameters({ productId }, ['productId']);
    return this.apiClient.makeRequest('list_av_definitions', {
      productid: productId
    });
  }

  async getDefinitionReleaseDate(productId, version) {
    this.apiClient.validateParameters(
      { productId, version }, 
      ['productId', 'version']
    );
    return this.apiClient.makeRequest('get_av_definition_release_date', {
      productid: productId,
      version: version
    });
  }

  async listAntivirusHistory(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_av_history', {
      deviceid: deviceId
    });
  }

  // Managed Antivirus (MAV) specific endpoints
  async listMAVScans(deviceId, details = false, version = 2) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_mav_scans', {
      deviceid: deviceId,
      details: details ? 'YES' : 'NO',
      v: version
    });
  }

  async listMAVThreats(deviceId, version = 2) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_mav_threats', {
      deviceid: deviceId,
      v: version
    });
  }

  async listMAVQuarantine(deviceId, version = 2) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('list_mav_quarantine', {
      deviceid: deviceId,
      v: version
    });
  }

  async startMAVScan(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('mav_scan_start', {
      deviceid: deviceId
    });
  }

  async pauseMAVScan(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('mav_scan_pause', {
      deviceid: deviceId
    });
  }

  async resumeMAVScan(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('mav_scan_resume', {
      deviceid: deviceId
    });
  }

  async cancelMAVScan(deviceId) {
    this.apiClient.validateParameters({ deviceId }, ['deviceId']);
    return this.apiClient.makeRequest('mav_scan_cancel', {
      deviceid: deviceId
    });
  }
}

module.exports = AntivirusEndpoints;