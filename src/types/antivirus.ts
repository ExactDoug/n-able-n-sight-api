/** MAV engine version */
export type MavEngineVersion = 1 | 2;

/** Supported AV product from list_supported_av_products */
export interface AvProduct {
  productid: number;
  name: string;
}

/** AV definition from list_av_definitions */
export interface AvDefinition {
  version: string;
  release_date: string;
}

/** AV history entry (daily status) from list_av_history */
export interface AvHistoryDay {
  date: string;
  status: string;
}

/** MAV scan summary from list_mav_scans (details=NO) */
export interface MavScanSummary {
  scanid: number;
  type: string;
  status: string;
  start: string;
  end: string;
  threats_found: number;
  items_scanned: number;
  [key: string]: unknown;
}

/** MAV scan detail from list_mav_scans (details=YES) */
export interface MavScanDetail extends MavScanSummary {
  threats?: MavThreat[];
  quarantine?: MavQuarantineItem[];
  errors?: MavScanError[];
}

/** MAV threat from list_mav_threats */
export interface MavThreat {
  threatid: number;
  name: string;
  path: string;
  category: string;
  action: string;
  status: string;
  scanid: number;
  date: string;
  [key: string]: unknown;
}

/** MAV quarantine item from list_mav_quarantine / mav_quarantine_list */
export interface MavQuarantineItem {
  quarantineguid: string;
  name: string;
  path: string;
  date: string;
  category: string;
  [key: string]: unknown;
}

/** MAV scan error */
export interface MavScanError {
  message: string;
  [key: string]: unknown;
}

/** MAV scan device list item from mav_scan_device_list */
export interface MavDeviceListItem {
  [key: string]: unknown;
}

/** Quarantine items filter */
export type QuarantineItemsFilter = "CURRENT" | "PREVIOUS" | "ALL";

/** Scan action response (start/pause/resume/cancel) */
export interface MavScanActionResponse {
  message: string;
  [key: string]: unknown;
}
