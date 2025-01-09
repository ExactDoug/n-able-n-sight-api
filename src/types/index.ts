export * from './common';
export * from './client-site';
export * from './monitoring';
export * from './antivirus';
export * from './backup';
export * from './patch-management';
export * from './tasks';
export * from './active-directory';

// Main API interface
export interface NAbleApi {
  clientSite: import('./client-site').ClientSiteEndpoints;
  monitoring: import('./monitoring').MonitoringEndpoints;
  antivirus: import('./antivirus').AntivirusEndpoints;
  backup: import('./backup').BackupEndpoints;
  patchManagement: import('./patch-management').PatchManagementEndpoints;
  tasks: import('./tasks').TaskEndpoints;
  activeDirectory: import('./active-directory').ActiveDirectoryEndpoints;
}

// API Constructor
export interface NAbleApiConstructor {
  new(config: import('./common').NAbleApiConfig): NAbleApi;
  fromDashboardUrl(dashboardUrl: string, apiKey: string): NAbleApi;
  detectTerritory(url: string): string | null;
  validateConfig(config: import('./common').NAbleApiConfig): boolean;
}