import type { NSightClient } from "../client.js";

export class TaskEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** Trigger an Automated Task to run now. Returns minutes until it starts. */
  async runNow(checkId: number): Promise<unknown> {
    return this.client.request("task_run_now", { checkid: checkId });
  }
}
