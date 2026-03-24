/** Check information from list_checks */
export interface Check {
  checkid: number;
  name: string;
  type: string;
  status: string;
  /** Check-specific fields vary by check type */
  [key: string]: unknown;
}

/** Failing check from list_failing_checks */
export interface FailingCheck {
  checkid: number;
  name: string;
  type: string;
  status: string;
  deviceid: number;
  devicename: string;
  siteid: number;
  sitename: string;
  clientid: number;
  clientname: string;
  [key: string]: unknown;
}

/** Check result from list_fmt_check_result */
export interface CheckResult {
  checkid: number;
  status: string;
  log: string;
  [key: string]: unknown;
}

/** Check history entry */
export interface CheckHistoryEntry {
  date: string;
  status: string;
}

/** Device monitoring details from list_device_monitoring_details */
export interface DeviceMonitoringDetails {
  [key: string]: unknown;
}
