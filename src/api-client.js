class NAbleApiClient {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.server = config.server;
    this.lastRequestTime = 0;
    this.minRequestInterval = 90000; // 90 seconds in milliseconds
  }

  async makeRequest(serviceName, parameters = {}) {
    // Enforce rate limiting
    const now = Date.now();
    const timeSinceLastRequest = now - this.lastRequestTime;
    if (timeSinceLastRequest < this.minRequestInterval) {
      const delay = this.minRequestInterval - timeSinceLastRequest;
      await new Promise(resolve => setTimeout(resolve, delay));
    }

    // Build URL with parameters
    const url = new URL(`${this.server}/api/`);
    url.searchParams.append('apikey', this.apiKey);
    url.searchParams.append('service', serviceName);
    
    for (const [key, value] of Object.entries(parameters)) {
      url.searchParams.append(key, value);
    }

    // Make request
    try {
      const response = await fetch(url.toString());
      this.lastRequestTime = Date.now();

      if (!response.ok) {
        throw new Error(`API request failed: ${response.statusText}`);
      }

      const data = await response.text();
      return this.parseXmlResponse(data);
    } catch (error) {
      throw new Error(`API request failed: ${error.message}`);
    }
  }

  parseXmlResponse(xmlString) {
    // Parse XML response to JavaScript object
    // You may want to use a library like xml2js here
    // This is a placeholder implementation
    return xmlString;
  }

  // Helper method to validate required parameters
  validateParameters(parameters, required = []) {
    for (const param of required) {
      if (!(param in parameters)) {
        throw new Error(`Missing required parameter: ${param}`);
      }
    }
  }
}

module.exports = NAbleApiClient;