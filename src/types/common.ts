// API Configuration
export interface NAbleApiConfig {
  apiKey: string;
  server: string;
}

// Territory definition
export interface Territory {
  name: string;
  url: string;
}

export interface Territories {
  territories: {
    [key: string]: Territory;
  };
}

// Common response fields
export interface ApiResponse {
  status: 'OK' | 'FAIL';
  created: string;
  host: string;
}

// Error response
export interface ErrorResponse extends ApiResponse {
  status: 'FAIL';
  error: {
    errorcode: number;
    message: string;
  };
}

// Pagination parameters
export interface PaginationParams {
  page?: number;
  pageSize?: number;
}

// Device types
export type DeviceType = 'server' | 'workstation' | 'mobile_device';

// Base parameter interface
export interface BaseParams {
  describe?: boolean;
}

// ID types for type safety
export type ClientId = number;
export type SiteId = number;
export type DeviceId = number;
export type AssetId = number;
export type CheckId = number;
export type TaskId = number;

// Custom field definition
export interface CustomField {
  name: string;
  value: string | number | boolean;
}