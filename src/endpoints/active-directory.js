class ActiveDirectoryEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }

  async listUsers(siteId) {
    this.apiClient.validateParameters({ siteId }, ['siteId']);
    return this.apiClient.makeRequest('list_active_directory_users', {
      siteid: siteId
    });
  }

  async getUserDetails(siteId, userId) {
    this.apiClient.validateParameters(
      { siteId, userId },
      ['siteId', 'userId']
    );
    return this.apiClient.makeRequest('get_ad_user_details', {
      siteid: siteId,
      userid: userId
    });
  }

  async listGroups(siteId) {
    this.apiClient.validateParameters({ siteId }, ['siteId']);
    return this.apiClient.makeRequest('list_ad_groups', {
      siteid: siteId
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