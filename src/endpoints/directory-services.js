class DirectoryServicesEndpoints {
  constructor(apiClient) {
    this.apiClient = apiClient;
    this.adEndpoints = new (require('./active-directory'))(apiClient);
  }

  // Get combined user and group information for a site
  async getSiteDirectoryInfo(siteId) {
    this.apiClient.validateParameters({ siteId }, ['siteId']);

    const [users, groups] = await Promise.all([
      this.adEndpoints.listUsers(siteId),
      this.adEndpoints.listGroups(siteId)
    ]);

    return {
      users,
      groups,
      summary: {
        totalUsers: users?.length || 0,
        totalGroups: groups?.length || 0,
        newUsers: users?.filter(u => u.status === 3).length || 0,
        deletedUsers: users?.filter(u => u.status === 4).length || 0
      }
    };
  }

  // Track changes in directory over time
  async getDirectoryChanges(siteId, days = 30) {
    const info = await this.getSiteDirectoryInfo(siteId);
    
    // Group changes by type
    const changes = {
      new: [],
      modified: [],
      deleted: [],
      restored: []
    };

    info.users?.forEach(user => {
      switch (user.status) {
        case 3: changes.new.push(user); break;
        case 2: changes.modified.push(user); break;
        case 4: changes.deleted.push(user); break;
        case 5: changes.restored.push(user); break;
      }
    });

    return {
      siteId,
      periodDays: days,
      changes,
      summary: {
        totalChanges: Object.values(changes)
          .reduce((sum, arr) => sum + arr.length, 0)
      }
    };
  }

  // Helper to get user membership details
  async getUserMemberships(siteId, userId) {
    const [userDetails, groups] = await Promise.all([
      this.adEndpoints.getUserDetails(siteId, userId),
      this.adEndpoints.listGroups(siteId)
    ]);

    const memberships = groups?.filter(group => 
      group.members?.includes(userDetails.objectGUID)
    ) || [];

    return {
      user: userDetails,
      groups: memberships,
      summary: {
        totalMemberships: memberships.length
      }
    };
  }
}

module.exports = DirectoryServicesEndpoints;