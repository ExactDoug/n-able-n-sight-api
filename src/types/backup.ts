/** Backup check history day status */
export type BackupStatus =
  | "NOTINSTALLED"
  | "NOTRUN"
  | "PASSINACTIVE"
  | "PASS"
  | "CLEAREDINACTIVE"
  | "CLEARED"
  | "FAILINACTIVE"
  | "FAIL"
  | "OVERDUE"
  | "DEVICEOVERDUE";

/** Backup check history day */
export interface BackupHistoryDay {
  date: string;
  status: BackupStatus;
}

/** Backup check history response */
export interface BackupHistory {
  checks: { name: string } | { name: string }[];
  days: { day: BackupHistoryDay | BackupHistoryDay[] };
}

/** MOB session type */
export type MobSessionType = "BACKUP" | "RESTORE";

/** MOB session plugin type */
export type MobPlugin =
  | "FILE_SYSTEM"
  | "SYSTEM_STATE"
  | "EXCHANGE"
  | "NETWORK_SHARES"
  | "VMWARE"
  | "MSSQL"
  | "SHAREPOINT"
  | "ORACLE";

/** MOB session status */
export type MobSessionStatus =
  | "COMPLETED"
  | "INTERRUPTED"
  | "COMPLETED_WITH_ERRORS"
  | "FAILED"
  | "NOT_STARTED"
  | "CANCELED";

/** Backup & Recovery session from list_mob_sessions */
export interface MobSession {
  session_id: string;
  type: MobSessionType;
  storage_account_id: number;
  plugin: MobPlugin;
  start: string;
  end: string;
  selection_size: number;
  selection_item_count: number;
  size_change: number;
  item_count_change: number;
  removed_item_count: number;
  processed_size: number;
  processed_item_count: number;
  transferred_size: number;
  error_count: number;
  status: MobSessionStatus;
}

/** Backup slot in selection size response */
export interface BackupSlot {
  slotid: number;
  "@_active": string;
  /** Plugin sizes are dynamic keys like FsBackupPlugin, SystemStateBackupPlugin, etc. */
  [key: string]: unknown;
}

/** Device in selection size response */
export interface SelectionSizeDevice {
  deviceid: number;
  name: string;
  "@_active": string;
  slot: BackupSlot | BackupSlot[];
  total: number;
}

/** Site in selection size response */
export interface SelectionSizeSite {
  siteid: number;
  name: string;
  "@_active": string;
  workstations: { workstation?: SelectionSizeDevice | SelectionSizeDevice[] };
  servers: { server?: SelectionSizeDevice | SelectionSizeDevice[] };
  total: number;
}

/** Client in selection size response */
export interface SelectionSizeClient {
  clientid: number;
  name: string;
  "@_active": string;
  site: SelectionSizeSite | SelectionSizeSite[];
  total: number;
}

/** Selection size response */
export interface SelectionSizeResponse {
  client: SelectionSizeClient | SelectionSizeClient[];
  total: number;
}

/** Parameters for mob/mob_list_selection_size */
export interface SelectionSizeParams {
  clientid: number;
  siteid: number;
  deviceid: number;
  year: number;
  month: number;
}
