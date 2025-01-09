const NAbleApiClient = require('./api-client');
const ClientSiteEndpoints = require('./endpoints/client-site');
const AssetTrackingEndpoints = require('./endpoints/asset-tracking');
const MonitoringEndpoints = require('./endpoints/monitoring');
const AntivirusEndpoints = require('./endpoints/antivirus');
const BackupEndpoints = require('./endpoints/backup');
const PatchManagementEndpoints = require('./endpoints/patch-management');
const SettingsEndpoints = require('./endpoints/settings');
const TaskEndpoints = require('./endpoints/tasks');
const ActiveDirectoryEndpoints = require('./endpoints/active-directory');
const DirectoryServicesEndpoints = require('./endpoints/directory-services');

class NAbleApi {
  constructor(config) {
    this.apiClient = new NAbleApiClient(config);
    
    // Initialize endpoint groups
    this.clientSite = new ClientSiteEndpoints(this.apiClient);
    this.assetTracking = new AssetTrackingEndpoints(this.apiClient);
    this.monitoring = new MonitoringEndpoints(this.apiClient);
    this.antivirus = new AntivirusEndpoints(this.apiClient);
    this.backup = new BackupEndpoints(this.apiClient);
    this.patchManagement = new PatchManagementEndpoints(this.apiClient);
    this.settings = new SettingsEndpoints(this.apiClient);
    this.tasks = new TaskEndpoints(this.apiClient);
    this.activeDirectory = new ActiveDirectoryEndpoints(this.apiClient);
    this.directoryServices = new DirectoryServicesEndpoints(this.apiClient);
  }

  // Helper to detect territory from URL
  static detectTerritory(url) {
    const territories = require('./config/territories.json');
    for (const [key, territory] of Object.entries(territories.territories)) {
      if (url.includes(territory.url)) {
        return key;
      }
    }
    return null;
  }

  // Factory method to create API instance from dashboard URL
  static fromDashboardUrl(dashboardUrl, apiKey) {
    const territory = this.detectTerritory(dashboardUrl);
    if (!territory) {
      throw new Error('Could not detect territory from dashboard URL');
    }

    const territories = require('./config/territories.json');
    const server = territories.territories[territory].url;

    return new NAbleApi({
      apiKey,
      server
    });
  }

  // Helper to validate API configuration
  static validateConfig(config) {
    const required = ['apiKey', 'server'];
    for (const param of required) {
      if (!config[param]) {
        throw new Error(`Missing required configuration parameter: ${param}`);
      }
    }
    return true;
  }
}

module.exports = NAbleApi;