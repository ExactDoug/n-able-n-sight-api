import type { NSightClient } from "../client.js";

export class PatchEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** List all software patches for a device. */
  async listAll(deviceId: number): Promise<unknown> {
    return this.client.request("patch_list_all", { deviceid: deviceId });
  }

  /** Approve patches for a device. */
  async approve(deviceId: number, patchIds: number | number[]): Promise<unknown> {
    return this.client.request("patch_approve", {
      deviceid: deviceId,
      patchids: this.formatIds(patchIds),
    });
  }

  /** Set patches to "do nothing" for a device. */
  async doNothing(deviceId: number, patchIds: number | number[]): Promise<unknown> {
    return this.client.request("patch_do_nothing", {
      deviceid: deviceId,
      patchids: this.formatIds(patchIds),
    });
  }

  /** Set patches to "ignore" for a device. */
  async ignore(deviceId: number, patchIds: number | number[]): Promise<unknown> {
    return this.client.request("patch_ignore", {
      deviceid: deviceId,
      patchids: this.formatIds(patchIds),
    });
  }

  /** Reprocess patches for a device. */
  async reprocess(deviceId: number, patchIds: number | number[]): Promise<unknown> {
    return this.client.request("patch_reprocess", {
      deviceid: deviceId,
      patchids: this.formatIds(patchIds),
    });
  }

  /** Retry patches for a device. */
  async retry(deviceId: number, patchIds: number | number[]): Promise<unknown> {
    return this.client.request("patch_retry", {
      deviceid: deviceId,
      patchids: this.formatIds(patchIds),
    });
  }

  private formatIds(ids: number | number[]): string {
    return Array.isArray(ids) ? ids.join(",") : String(ids);
  }
}
