import { ApiResponse, ClientId, SiteId, DeviceId, DeviceType, BaseParams } from './common';

// Client interfaces
export interface Client {
  clientid: ClientId;
  name: string;
  view_dashboard: 0 | 1;
  view_wkstsn_assets: 0 | 1;
  dashboard_username?: string;
  timezone?: string;
  creation_date?: string;
  server_count: number;
  workstation_count: number;
  mobile_device_count: number;
  device_count: number;
}

export interface ClientResponse extends ApiResponse {
  items: {
    client: Client[];
  };
}

// Site interfaces
export interface Site {
  siteid: SiteId;
  name: string;
  connection_ok: 0 | 1;
  creation_date?: string;
  primary_router?: string;
  secondary_router?: string;
}

export interface SiteResponse extends ApiResponse {
  items: {
    site: Site[];
  };
}

// Device interfaces
export interface Device {
  deviceid: DeviceId;
  name: string;
  status: string;
  lastseen?: string;
  os?: string;
  ip?: string;
  mac?: string;
  version?: string;
}

export interface DeviceResponse extends ApiResponse {
  items: {
    device: Device[];
  };
}

// Parameter interfaces
export interface ListClientsParams extends BaseParams {
  devicetype?: DeviceType;
}

export interface ListSitesParams extends BaseParams {
  clientid: ClientId;
}

export interface ListDevicesParams extends BaseParams {
  siteid: SiteId;
}

export interface ListDevicesAtClientParams extends BaseParams {
  clientid: ClientId;
  devicetype: DeviceType;
}

// Client/Site endpoints interface
export interface ClientSiteEndpoints {
  listClients(params?: ListClientsParams): Promise<ClientResponse>;
  listSites(params: ListSitesParams): Promise<SiteResponse>;
  listServers(params: ListDevicesParams): Promise<DeviceResponse>;
  listWorkstations(params: ListDevicesParams): Promise<DeviceResponse>;
  listDevicesAtClient(params: ListDevicesAtClientParams): Promise<DeviceResponse>;
}