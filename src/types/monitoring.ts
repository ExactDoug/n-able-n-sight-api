import { ApiResponse, DeviceId, CheckId, BaseParams } from './common';

// Check Status Types
export type CheckStatus = 'PASS' | 'FAIL' | 'WARNING' | 'UNKNOWN';

// Check Types
export interface Check {
  checkid: CheckId;
  name: string;
  type: string;
  status: CheckStatus;
  lastcheck?: string;
  nextcheck?: string;
  interval?: number;
}

export interface CheckResult {
  timestamp: string;
  status: CheckStatus;
  message?: string;
  data?: Record<string, any>;
}

export interface CheckHistory {
  checkid: CheckId;
  history: CheckResult[];
}

// Response Types
export interface MonitoringDetailsResponse extends ApiResponse {
  device: {
    checks: Check[];
    summary: {
      total: number;
      failing: number;
      warning: number;
    };
  };
}

export interface CheckResultResponse extends ApiResponse {
  check: {
    id: CheckId;
    results: CheckResult[];
  };
}

export interface CheckHistoryResponse extends ApiResponse {
  history: CheckHistory[];
}

// Parameter Types
export interface DeviceMonitoringParams extends BaseParams {
  deviceid: DeviceId;
}

export interface CheckResultsParams extends BaseParams {
  deviceid: DeviceId;
  checkid: CheckId;
}

export interface CheckHistoryParams extends BaseParams {
  deviceid: DeviceId;
  checkid: CheckId;
  days?: number;
}

// Monitoring Endpoints Interface
export interface MonitoringEndpoints {
  getDeviceMonitoringDetails(params: DeviceMonitoringParams): Promise<MonitoringDetailsResponse>;
  listFailingChecks(params: DeviceMonitoringParams): Promise<CheckResultResponse>;
  listChecks(params: DeviceMonitoringParams): Promise<CheckResultResponse>;
  getCheckResults(params: CheckResultsParams): Promise<CheckResultResponse>;
  listCheckHistory(params: CheckHistoryParams): Promise<CheckHistoryResponse>;
}