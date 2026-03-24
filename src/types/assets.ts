/** Device asset details from list_device_asset_details */
export interface DeviceAssetDetails {
  assetid: number;
  [key: string]: unknown;
}

/** Hardware item from list_all_hardware */
export interface HardwareItem {
  [key: string]: unknown;
}

/** Software item from list_all_software */
export interface SoftwareItem {
  [key: string]: unknown;
}

/** License group from list_license_groups */
export interface LicenseGroup {
  groupid: number;
  name: string;
  [key: string]: unknown;
}

/** License group item from list_license_group_items */
export interface LicenseGroupItem {
  [key: string]: unknown;
}

/** Client license count from list_client_license_count */
export interface ClientLicenseCount {
  [key: string]: unknown;
}

/** Licensed software from list_licensed_software */
export interface LicensedSoftware {
  [key: string]: unknown;
}
