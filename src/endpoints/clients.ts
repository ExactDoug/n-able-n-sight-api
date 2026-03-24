import type { NSightClient } from "../client.js";
import type {
  Client,
  Site,
  ServerDevice,
  WorkstationDevice,
  AgentlessDevice,
  ClientWithDevices,
  DeviceType,
} from "../types/clients.js";

export class ClientEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** List all clients. Optionally filter by device type. */
  async list(deviceType?: DeviceType): Promise<{ client: Client | Client[] }> {
    const params: Record<string, string> = {};
    if (deviceType) params.devicetype = deviceType;
    return this.client.request("list_clients", params);
  }

  /** List all sites for a client. */
  async listSites(clientId: number): Promise<{ site: Site | Site[] }> {
    return this.client.request("list_sites", { clientid: clientId });
  }

  /** List all server devices at a site (includes top-level asset info). */
  async listServers(siteId: number): Promise<{ server: ServerDevice | ServerDevice[] }> {
    return this.client.request("list_servers", { siteid: siteId });
  }

  /** List all workstation devices at a site (includes agentless/mini-agent). */
  async listWorkstations(siteId: number): Promise<{ workstation: WorkstationDevice | WorkstationDevice[] }> {
    return this.client.request("list_workstations", { siteid: siteId });
  }

  /** List all agentless and mini-agent asset devices for a site. */
  async listAgentlessAssets(siteId: number): Promise<{ device: AgentlessDevice | AgentlessDevice[] }> {
    return this.client.request("list_agentless_assets", { siteid: siteId });
  }

  /** List all devices of a type for a client (nested by site). */
  async listDevicesAtClient(clientId: number, deviceType: DeviceType = "server"): Promise<{ client: ClientWithDevices }> {
    return this.client.request("list_devices_at_client", {
      clientid: clientId,
      devicetype: deviceType,
    });
  }

  /** Create a new client. */
  async addClient(name: string): Promise<unknown> {
    return this.client.request("add_client", { name });
  }

  /** Create a new site under a client. */
  async addSite(clientId: number, name: string, routerAddress?: string): Promise<unknown> {
    const params: Record<string, string | number> = { clientid: clientId, name };
    if (routerAddress) params.router_address = routerAddress;
    return this.client.request("add_site", params);
  }

  /** Generate a site installation package. */
  async getSiteInstallationPackage(siteId: number, type: DeviceType = "server"): Promise<unknown> {
    return this.client.request("get_site_installation_package", {
      siteid: siteId,
      type,
    });
  }
}
