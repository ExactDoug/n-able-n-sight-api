import { DeviceId, SiteId, ApiResponse } from './common';

/**
 * Status of an Active Directory user
 */
export enum ADUserStatus {
    /** No changes detected */
    UNCHANGED = 0,
    /** Change state unknown */
    CHANGE_UNKNOWN = 1,
    /** User was modified */
    MODIFIED = 2,
    /** New user */
    NEW = 3,
    /** User was deleted */
    DELETED = 4,
    /** User was restored */
    RESTORED = 5
}

/**
 * Common AD user attributes
 */
export interface ADUserAttributes {
    /** User's display name */
    displayName?: string;
    /** User's email address */
    mail?: string;
    /** User's principal name */
    userPrincipalName?: string;
    /** User's SAM account name */
    sAMAccountName?: string;
    /** Whether account is enabled */
    enabled?: boolean;
    /** When password last set */
    pwdLastSet?: string;
    /** When account last logged in */
    lastLogon?: string;
    /** User's department */
    department?: string;
    /** User's title */
    title?: string;
    /** User's manager DN */
    manager?: string;
    /** When account was created */
    whenCreated?: string;
    /** When account was last modified */
    whenChanged?: string;
    /** Account expiration date */
    accountExpires?: string;
    /** Distinguished name */
    distinguishedName?: string;
    /** Group memberships */
    memberOf?: string[];
}

/**
 * Active Directory user information
 */
export interface ADUser extends ADUserAttributes {
    /** Unique identifier (GUID) for the user */
    objectGUID: string;
    /** Current status of the user */
    status: ADUserStatus;
    /** ID of device where user was found */
    device: DeviceId;
    /** Any additional custom attributes */
    [key: string]: any;
}

/**
 * Parameters for listing AD users
 */
export interface ListADUsersParams {
    /** Site ID to list users for */
    siteid: SiteId;
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Response for listing AD users
 */
export interface ListADUsersResponse extends ApiResponse {
    /** Array of AD users */
    users: ADUser[];
}

/**
 * Parameters for getting specific AD user
 */
export interface GetADUserParams {
    /** Site ID to get user from */
    siteid: SiteId;
    /** Object GUID of user */
    objectGUID: string;
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Response for getting AD user
 */
export interface GetADUserResponse extends ApiResponse {
    /** User information */
    user: ADUser;
}

/**
 * Parameters for searching AD users
 */
export interface SearchADUsersParams {
    /** Site ID to search in */
    siteid: SiteId;
    /** Search query string */
    query: string;
    /** Optional attributes to return */
    attributes?: string[];
    /** Optional describe parameter */
    describe?: boolean;
}

/**
 * Response for searching AD users
 */
export interface SearchADUsersResponse extends ApiResponse {
    /** Array of matching users */
    users: ADUser[];
    /** Total count of matches */
    total: number;
}

/**
 * Group membership change tracking
 */
export interface ADGroupMembershipChange {
    /** Group distinguished name */
    group: string;
    /** Type of change */
    change: 'added' | 'removed';
    /** When change occurred */
    when: string;
}

/**
 * User change history
 */
export interface ADUserChangeHistory {
    /** Object GUID of user */
    objectGUID: string;
    /** Previous status */
    previousStatus: ADUserStatus;
    /** New status */
    newStatus: ADUserStatus;
    /** When change occurred */
    timestamp: string;
    /** Changed attributes */
    changedAttributes: string[];
    /** Group membership changes */
    groupChanges: ADGroupMembershipChange[];
}

/**
 * Response for user change history
 */
export interface ADUserHistoryResponse extends ApiResponse {
    /** Array of changes */
    changes: ADUserChangeHistory[];
}

/**
 * Active Directory endpoint methods
 */
export interface ActiveDirectoryEndpoints {
    /** List all AD users for a site */
    listUsers(params: ListADUsersParams): Promise<ListADUsersResponse>;
    /** Get specific AD user by GUID */
    getUser(params: GetADUserParams): Promise<GetADUserResponse>;
    /** Search for AD users */
    searchUsers(params: SearchADUsersParams): Promise<SearchADUsersResponse>;
    /** Get user change history */
    getUserHistory(objectGUID: string): Promise<ADUserHistoryResponse>;
}