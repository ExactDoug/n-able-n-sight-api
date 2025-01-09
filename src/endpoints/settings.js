class SettingsEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async getGeneralSettings() {
    return this.apiClient.makeRequest('list_general_settings');
  }

  async getWallchartSettings() {
    return this.apiClient.makeRequest('list_wallchart_settings');
  }

  // Helper method to validate customFields format
  validateCustomFields(customFields) {
    if (!Array.isArray(customFields)) {
      throw new Error('customFields must be an array');
    }
    
    customFields.forEach((field, index) => {
      if (!field.name || typeof field.name !== 'string') {
        throw new Error(`Custom field at index ${index} must have a valid name`);
      }
      if (!field.value && field.value !== '') {
        throw new Error(`Custom field at index ${index} must have a value (can be empty string)`);
      }
    });
  }

  // Helper to format custom fields for API
  formatCustomFields(customFields) {
    return customFields.reduce((acc, field, index) => {
      acc[`custom${index + 1}`] = field.value;
      acc[`custom${index + 1}name`] = field.name;
      return acc;
    }, {});
  }
}

module.exports = SettingsEndpoints;