class ActiveDirectoryEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listUsers(siteId, options = {}) {
    this.apiClient.validateParameters({ siteId }, ['siteId']);
    return this.apiClient.makeRequest('list_ad_users', {
      siteid: siteId,
      ...options
    });
  }

  async getUser(siteId, objectGUID, options = {}) {
    this.apiClient.validateParameters(
      { siteId, objectGUID },
      ['siteId', 'objectGUID']
    );
    return this.apiClient.makeRequest('get_ad_user', {
      siteid: siteId,
      objectGUID,
      ...options
    });
  }

  async searchUsers(siteId, query, options = {}) {
    this.apiClient.validateParameters(
      { siteId, query },
      ['siteId', 'query']
    );
    return this.apiClient.makeRequest('search_ad_users', {
      siteid: siteId,
      query,
      ...options
    });
  }

  async getUserHistory(objectGUID) {
    this.apiClient.validateParameters(
      { objectGUID },
      ['objectGUID']
    );
    return this.apiClient.makeRequest('get_ad_user_history', {
      objectGUID
    });
  }

  // Helper method to parse objectGUID from user response
  static parseObjectGuid(userData) {
    try {
      return userData.attributes.objectGUID;
    } catch (error) {
      throw new Error('Unable to parse objectGUID from user data');
    }
  }

  // Helper method to get user status description
  static getUserStatus(statusId) {
    const statuses = {
      0: 'Unchanged',
      1: 'Change Unknown',
      2: 'Modified',
      3: 'New',
      4: 'Deleted',
      5: 'Restored'
    };
    return statuses[statusId] || 'Unknown';
  }
}

module.exports = ActiveDirectoryEndpoints;