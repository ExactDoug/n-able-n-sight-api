/** AD user status codes */
export enum AdUserStatus {
  Unchanged = 0,
  ChangeUnknown = 1,
  Modified = 2,
  New = 3,
  Deleted = 4,
  Restored = 5,
}

/** Active Directory user from list_active_directory_users */
export interface AdUser {
  "@_objectGUID": string;
  "@_status": number;
  "@_device": number;
  /** AD user fields are dynamic based on Available Fields configuration */
  [key: string]: unknown;
}
