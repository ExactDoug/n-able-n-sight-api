import type { NSightClient } from "../client.js";
import type { DeviceMonitoringDetails } from "../types/monitoring.js";

export class MonitoringEndpoints {
  constructor(private readonly client: NSightClient) {}

  /** List all monitoring information for a device. */
  async getDeviceDetails(deviceId: number): Promise<DeviceMonitoringDetails> {
    return this.client.request("list_device_monitoring_details", { deviceid: deviceId });
  }

  /** List all checks configured on a device. */
  async listChecks(deviceId: number): Promise<unknown> {
    return this.client.request("list_checks", { deviceid: deviceId });
  }

  /** List failing checks for a device. */
  async listFailingChecks(deviceId: number): Promise<unknown> {
    return this.client.request("list_failing_checks", { deviceid: deviceId });
  }

  /** Get formatted check result. */
  async getCheckResult(deviceId: number, checkId: number): Promise<unknown> {
    return this.client.request("list_fmt_check_result", {
      deviceid: deviceId,
      checkid: checkId,
    });
  }

  /** Get check history for a specific check on a device. */
  async getCheckHistory(deviceId: number, checkId: number): Promise<unknown> {
    return this.client.request("list_check_history", {
      deviceid: deviceId,
      checkid: checkId,
    });
  }
}
