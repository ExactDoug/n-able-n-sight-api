/** Device type filter options */
export type DeviceType = "server" | "workstation" | "mobile_device";

/** Client record from list_clients */
export interface Client {
  name: string;
  clientid: number;
  view_dashboard: number;
  view_wkstsn_assets: number;
  dashboard_username: string;
  timezone: string;
  creation_date: string;
  server_count: number;
  workstation_count: number;
  mobile_device_count: number;
  device_count: number;
}

/** Site record from list_sites */
export interface Site {
  siteid: number;
  name: string;
  connection_ok: number;
  creation_date: string;
  primary_router: string;
  secondary_router: string;
}

/** Check count breakdown in device listings */
export interface CheckCount {
  dsc_247: number;
  pass: number;
  clear: number;
  fail: number;
}

/** Server device from list_servers */
export interface ServerDevice {
  id: number;
  name: string;
  description: string;
  username: string;
  status: string;
  checkcount: CheckCount | CheckCount[];
  /** Feature flags */
  takecontrol: number;
  patch: number;
  mav: number;
  mob: number;
  systray: number;
  mavbreck: number;
  webprotection: number;
  riskintelligence: number;
}

/** Workstation device from list_workstations */
export interface WorkstationDevice {
  id: number;
  name: string;
  description: string;
  username: string;
  status: string;
  checkcount: CheckCount | CheckCount[];
  takecontrol: number;
  patch: number;
  mav: number;
  mob: number;
  systray: number;
  mavbreck: number;
  webprotection: number;
  riskintelligence: number;
}

/** Site with nested devices from list_devices_at_client */
export interface SiteWithDevices {
  id: number;
  name: string;
  server?: ServerDevice | ServerDevice[];
  workstation?: WorkstationDevice | WorkstationDevice[];
}

/** Client with nested sites from list_devices_at_client */
export interface ClientWithDevices {
  id: number;
  name: string;
  site: SiteWithDevices | SiteWithDevices[];
}

/** Agentless asset device */
export interface AgentlessDevice {
  id: number;
  name: string;
  description: string;
  status: string;
}
