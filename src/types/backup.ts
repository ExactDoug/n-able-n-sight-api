import { DeviceId, ApiResponse } from './common';

/**
 * Backup plugin types supported by the system
 */
export enum BackupPlugin {
    FILE_SYSTEM = 'FILE_SYSTEM',
    SYSTEM_STATE = 'SYSTEM_STATE',
    EXCHANGE = 'EXCHANGE',
    NETWORK_SHARES = 'NETWORK_SHARES',
    VMWARE = 'VMWARE',
    MSSQL = 'MSSQL',
    SHAREPOINT = 'SHAREPOINT',
    ORACLE = 'ORACLE'
}

/**
 * Type of backup operation
 */
export enum BackupOperationType {
    BACKUP = 'BACKUP',
    RESTORE = 'RESTORE'
}

/**
 * Status of a backup session
 */
export enum BackupSessionStatus {
    COMPLETED = 'COMPLETED',
    INTERRUPTED = 'INTERRUPTED',
    COMPLETED_WITH_ERRORS = 'COMPLETED_WITH_ERRORS',
    FAILED = 'FAILED',
    NOT_STARTED = 'NOT_STARTED',
    CANCELED = 'CANCELED'
}

/**
 * Represents a single backup or restore session
 */
export interface BackupSession {
    /** Unique identifier for the backup session */
    session_id: string;
    /** Type of operation (backup/restore) */
    type: BackupOperationType;
    /** ID of the storage account used */
    storage_account_id: number;
    /** Plugin used for the backup */
    plugin: BackupPlugin;
    /** Start time in UTC */
    start: string;
    /** End time in UTC */
    end: string;
    /** Total size in bytes of data included in backup */
    selection_size: number;
    /** Number of items included in backup */
    selection_item_count: number;
    /** Size difference in bytes from previous backup */
    size_change: number;
    /** Change in number of items from previous backup */
    item_count_change: number;
    /** Items removed from storage during backup */
    removed_item_count: number;
    /** Total bytes of data processed */
    processed_size: number;
    /** Total number of items processed */
    processed_item_count: number;
    /** Total bytes of data transferred */
    transferred_size: number;
    /** Number of errors encountered */
    error_count: number;
    /** Final status of the session */
    status: BackupSessionStatus;
}

/**
 * Parameters for listing backup sessions
 */
export interface ListBackupSessionsParams {
    /** Device ID to list sessions for */
    deviceid: DeviceId;
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Parameters for getting backup selection size
 */
export interface BackupSelectionSizeParams {
    /** Device ID to get selection size for */
    deviceid: DeviceId;
    /** Month to get size for (1-12) */
    month: number;
    /** Year to get size for (YYYY) */
    year: number;
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Response for listing backup sessions
 */
export interface ListBackupSessionsResponse extends ApiResponse {
    /** Array of backup sessions */
    sessions: BackupSession[];
}

/**
 * Response for backup selection size
 */
export interface BackupSelectionSizeResponse extends ApiResponse {
    /** Size in bytes */
    size: number;
}

/**
 * Backup & Recovery endpoint methods
 */
export interface BackupEndpoints {
    /** List backup sessions for a device */
    listSessions(params: ListBackupSessionsParams): Promise<ListBackupSessionsResponse>;
    /** Get backup selection size for a device */
    getSelectionSize(params: BackupSelectionSizeParams): Promise<BackupSelectionSizeResponse>;
}