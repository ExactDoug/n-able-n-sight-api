import { DeviceId, ApiResponse } from './common';

/**
 * Status of a patch
 */
export enum PatchStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
    IGNORED = 'IGNORED',
    DO_NOTHING = 'DO_NOTHING',
    INSTALLED = 'INSTALLED',
    FAILED = 'FAILED'
}

/**
 * Severity level of a patch
 */
export enum PatchSeverity {
    CRITICAL = 'CRITICAL',
    IMPORTANT = 'IMPORTANT',
    MODERATE = 'MODERATE',
    LOW = 'LOW',
    UNSPECIFIED = 'UNSPECIFIED'
}

/**
 * Information about a specific patch
 */
export interface Patch {
    /** Unique identifier for the patch */
    patch_id: string;
    /** KB article number */
    kb_article: string;
    /** Title of the patch */
    title: string;
    /** Description of what the patch addresses */
    description: string;
    /** Current status of the patch */
    status: PatchStatus;
    /** Severity level of the patch */
    severity: PatchSeverity;
    /** Date the patch was released */
    release_date: string;
    /** Size of the patch in bytes */
    size: number;
    /** Whether a reboot is required */
    requires_reboot: boolean;
    /** Date the patch was last modified */
    last_modified: string;
}

/**
 * Parameters for listing patches
 */
export interface ListPatchesParams {
    /** Device ID to list patches for */
    deviceid: DeviceId;
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Parameters for patch operations (approve/ignore/do_nothing)
 */
export interface PatchOperationParams {
    /** Device ID to perform operation on */
    deviceid: DeviceId;
    /** Array of patch IDs to operate on */
    patch_ids: string[];
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Response for listing patches
 */
export interface ListPatchesResponse extends ApiResponse {
    /** Array of patches */
    patches: Patch[];
}

/**
 * Response for patch operations
 */
export interface PatchOperationResponse extends ApiResponse {
    /** Number of patches affected */
    affected_count: number;
    /** Array of patch IDs that were processed */
    processed_patches: string[];
    /** Array of any errors encountered */
    errors?: {
        patch_id: string;
        message: string;
    }[];
}

/**
 * Parameters for reprocessing patches
 */
export interface ReprocessPatchParams {
    /** Device ID to reprocess patches for */
    deviceid: DeviceId;
    /** Optional array of specific patch IDs to reprocess */
    patch_ids?: string[];
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Parameters for retrying failed patches
 */
export interface RetryPatchParams {
    /** Device ID to retry patches for */
    deviceid: DeviceId;
    /** Optional array of specific patch IDs to retry */
    patch_ids?: string[];
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Response for reprocess/retry operations
 */
export interface PatchRetryResponse extends ApiResponse {
    /** Number of patches queued for retry */
    queued_count: number;
    /** Array of patch IDs queued */
    queued_patches: string[];
}

/**
 * Patch Management endpoint methods
 */
export interface PatchManagementEndpoints {
    /** List all patches for a device */
    listPatches(params: ListPatchesParams): Promise<ListPatchesResponse>;
    /** Approve patches for a device */
    approvePatches(params: PatchOperationParams): Promise<PatchOperationResponse>;
    /** Set patches to do nothing */
    doNothingPatches(params: PatchOperationParams): Promise<PatchOperationResponse>;
    /** Ignore patches */
    ignorePatches(params: PatchOperationParams): Promise<PatchOperationResponse>;
    /** Reprocess patches */
    reprocessPatches(params: ReprocessPatchParams): Promise<PatchRetryResponse>;
    /** Retry failed patches */
    retryPatches(params: RetryPatchParams): Promise<PatchRetryResponse>;
}