import type { NSightClient } from "../client.js";

export class ActiveDirectoryEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** List Active Directory user details for a site. */
  async listUsers(siteId: number): Promise<unknown> {
    return this.client.request("list_active_directory_users", { siteid: siteId });
  }
}
