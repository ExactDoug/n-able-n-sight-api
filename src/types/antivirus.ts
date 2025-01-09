import { ApiResponse, DeviceId, BaseParams } from './common';

// Antivirus Types
export type AntivirusEngine = 'VIPRE' | 'Bitdefender';
export type ScanType = 'QUICK' | 'DEEP' | 'ACTIVE' | 'CUSTOM';
export type ScanStatus = 'COMPLETED' | 'INTERRUPTED' | 'COMPLETED_WITH_ERRORS' | 'FAILED' | 'NOT_STARTED' | 'CANCELED';
export type ThreatStatus = 'QUARANTINED' | 'DELETED' | 'CLEANED' | 'IGNORED';

// Scan Interfaces
export interface ScanResult {
  session_id: string;
  type: ScanType;
  status: ScanStatus;
  start_time: string;
  end_time?: string;
  threats_found: number;
  items_scanned: number;
  errors: number;
}

export interface Threat {
  name: string;
  category: string;
  status: ThreatStatus;
  detection_time: string;
  file_path?: string;
}

export interface QuarantineItem {
  id: string;
  threat_name: string;
  quarantine_time: string;
  status: ThreatStatus;
  original_path?: string;
}

// Response Interfaces
export interface ScanResponse extends ApiResponse {
  scan: ScanResult;
}

export interface ThreatResponse extends ApiResponse {
  threats: Threat[];
}

export interface QuarantineResponse extends ApiResponse {
  items: QuarantineItem[];
}

// Parameter Interfaces
export interface ScanParams extends BaseParams {
  deviceid: DeviceId;
  engine_version?: number;
}

export interface ListScansParams extends ScanParams {
  details?: boolean;
}

export interface QuarantineParams extends ScanParams {
  items?: 'CURRENT' | 'PREVIOUS' | 'ALL';
}

export interface QuarantineActionParams extends BaseParams {
  deviceid: DeviceId;
  guids: string | string[];
}

// Antivirus Endpoints Interface
export interface AntivirusEndpoints {
  listMAVScans(params: ListScansParams): Promise<ScanResponse>;
  listMAVThreats(params: ScanParams): Promise<ThreatResponse>;
  listMAVQuarantine(params: QuarantineParams): Promise<QuarantineResponse>;
  startMAVScan(params: ScanParams): Promise<ApiResponse>;
  pauseMAVScan(params: ScanParams): Promise<ApiResponse>;
  resumeMAVScan(params: ScanParams): Promise<ApiResponse>;
  cancelMAVScan(params: ScanParams): Promise<ApiResponse>;
  releaseFromQuarantine(params: QuarantineActionParams): Promise<ApiResponse>;
  deleteFromQuarantine(params: QuarantineActionParams): Promise<ApiResponse>;
}