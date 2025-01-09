# N-able N-sight RMM API Postman Collection

This document provides instructions for using the N-able N-sight RMM Data Extraction API Postman collection.

## Setup

### Environment Variables

The collection requires two environment variables to be set in Postman:

- `server`: Your N-able N-sight server URL
- `apikey`: Your API key for authentication

To set these up:

1. Create a new environment in Postman
2. Add the following variables:
   - `server` (e.g., "https://your-regional-systemmonitor-server.com")
   - `apikey` (Get this from N-able N-sight - see API Docs/Generate an API Key.md)

### Rate Limiting

The collection includes automatic rate limiting via a pre-request script that enforces a 90-second delay between requests to comply with API limitations.

## Available Endpoints

### Client & Site Management

#### List Clients
```
GET {{server}}/api/?apikey={{apikey}}&service=list_clients
```

Optional Parameters:
- `devicetype`: Filter by device type
  - Values: "server", "workstation", "mobile_device"

Returns a list of all clients. When devicetype is specified, shows only clients with active devices of that type.

#### List Sites
```
GET {{server}}/api/?apikey={{apikey}}&service=list_sites&clientid={{clientid}}
```

Required Parameters:
- `clientid`: ID of the client to list sites for

Returns all sites for the specified client.

### Asset Tracking

#### List Hardware
```
GET {{server}}/api/?apikey={{apikey}}&service=list_all_hardware&assetid={{assetid}}
```

Required Parameters:
- `assetid`: Asset ID to list hardware for

Returns detailed hardware component information for the specified asset.

### Monitoring

#### List Device Monitoring Details
```
GET {{server}}/api/?apikey={{apikey}}&service=list_device_monitoring_details&deviceid={{deviceid}}
```

Required Parameters:
- `deviceid`: Device ID to get monitoring details for

Returns comprehensive monitoring information for the specified device.

### Antivirus Management

#### List Managed Antivirus Scans
```
GET {{server}}/api/?apikey={{apikey}}&service=list_mav_scans&deviceid={{deviceid}}
```

Required Parameters:
- `deviceid`: Device ID to list scans for

Optional Parameters:
- `details`: Set to true for detailed scan information
- `engine_version`: Specific engine version to filter by

Example Response:
```json
{
  "scan": {
    "session_id": "abc123",
    "type": "QUICK",
    "status": "COMPLETED",
    "start_time": "2024-01-09T08:00:00Z",
    "end_time": "2024-01-09T08:15:00Z",
    "threats_found": 0,
    "items_scanned": 1500,
    "errors": 0
  }
}
```

#### List Managed Antivirus Threats
```
GET {{server}}/api/?apikey={{apikey}}&service=list_mav_threats&deviceid={{deviceid}}
```

Required Parameters:
- `deviceid`: Device ID to list threats for

Example Response:
```json
{
  "threats": [
    {
      "name": "Trojan.Generic",
      "category": "Malware",
      "status": "QUARANTINED",
      "detection_time": "2024-01-09T07:30:00Z",
      "file_path": "C:\\Users\\...\\suspicious.exe"
    }
  ]
}
```

#### List Quarantine Items
```
GET {{server}}/api/?apikey={{apikey}}&service=list_mav_quarantine&deviceid={{deviceid}}
```

Required Parameters:
- `deviceid`: Device ID to list quarantine for

Optional Parameters:
- `items`: Filter quarantine items ('CURRENT', 'PREVIOUS', 'ALL')

#### Scan Control Operations

##### Start Scan
```
POST {{server}}/api/?apikey={{apikey}}&service=start_mav_scan&deviceid={{deviceid}}
```

##### Pause Scan
```
POST {{server}}/api/?apikey={{apikey}}&service=pause_mav_scan&deviceid={{deviceid}}
```

##### Resume Scan
```
POST {{server}}/api/?apikey={{apikey}}&service=resume_mav_scan&deviceid={{deviceid}}
```

##### Cancel Scan
```
POST {{server}}/api/?apikey={{apikey}}&service=cancel_mav_scan&deviceid={{deviceid}}
```

#### Quarantine Management

##### Release from Quarantine
```
POST {{server}}/api/?apikey={{apikey}}&service=release_from_quarantine
```

Required Parameters:
- `deviceid`: Device ID
- `guids`: Single GUID or array of GUIDs to release

##### Delete from Quarantine
```
POST {{server}}/api/?apikey={{apikey}}&service=delete_from_quarantine
```

Required Parameters:
- `deviceid`: Device ID
- `guids`: Single GUID or array of GUIDs to delete

### Backup & Recovery

#### List Backup Sessions
```
GET {{server}}/api/?apikey={{apikey}}&service=list_backup_sessions&deviceid={{deviceid}}
```

Required Parameters:
- `deviceid`: Device ID to list backup sessions for

Optional Parameters:
- `describe`: Set to true for detailed session information

Example Response:
```json
{
  "sessions": [
    {
      "session_id": "backup123",
      "type": "BACKUP",
      "storage_account_id": 12345,
      "plugin": "FILE_SYSTEM",
      "start": "2024-01-09T00:00:00Z",
      "end": "2024-01-09T01:30:00Z",
      "selection_size": 1073741824,
      "selection_item_count": 1000,
      "size_change": 52428800,
      "item_count_change": 50,
      "removed_item_count": 10,
      "processed_size": 1073741824,
      "processed_item_count": 1000,
      "transferred_size": 52428800,
      "error_count": 0,
      "status": "COMPLETED"
    }
  ]
}
```

Supported Backup Plugins:
- FILE_SYSTEM: File system backups
- SYSTEM_STATE: System state backups
- EXCHANGE: Microsoft Exchange backups
- NETWORK_SHARES: Network share backups
- VMWARE: VMware virtual machine backups
- MSSQL: Microsoft SQL Server backups
- SHAREPOINT: SharePoint backups
- ORACLE: Oracle database backups

Session Status Values:
- COMPLETED: Backup completed successfully
- INTERRUPTED: Backup was interrupted
- COMPLETED_WITH_ERRORS: Backup completed but had errors
- FAILED: Backup failed
- NOT_STARTED: Backup hasn't started
- CANCELED: Backup was canceled

#### Get Backup Selection Size
```
GET {{server}}/api/?apikey={{apikey}}&service=get_backup_selection_size&deviceid={{deviceid}}&month={{month}}&year={{year}}
```

Required Parameters:
- `deviceid`: Device ID to get selection size for
- `month`: Month to get size for (1-12)
- `year`: Year to get size for (YYYY)

Optional Parameters:
- `describe`: Set to true for additional details

Example Response:
```json
{
  "size": 1073741824
}
```

### Patch Management

#### List Patches
```
GET {{server}}/api/?apikey={{apikey}}&service=list_patches&deviceid={{deviceid}}
```

Required Parameters:
- `deviceid`: Device ID to list patches for

Optional Parameters:
- `describe`: Set to true for detailed patch information

Example Response:
```json
{
  "patches": [
    {
      "patch_id": "KB5025221",
      "kb_article": "KB5025221",
      "title": "Windows Security Update",
      "description": "Security update for Windows",
      "status": "PENDING",
      "severity": "CRITICAL",
      "release_date": "2024-01-01T00:00:00Z",
      "size": 52428800,
      "requires_reboot": true,
      "last_modified": "2024-01-09T00:00:00Z"
    }
  ]
}
```

Patch Status Values:
- PENDING: Patch is available but not yet approved
- APPROVED: Patch has been approved for installation
- IGNORED: Patch has been marked to be ignored
- DO_NOTHING: Patch will not be installed
- INSTALLED: Patch has been successfully installed
- FAILED: Patch installation failed

Patch Severity Levels:
- CRITICAL: Highest priority security updates
- IMPORTANT: Important security or reliability updates
- MODERATE: Non-critical updates
- LOW: Optional or minor updates
- UNSPECIFIED: Severity not specified

#### Patch Operations

##### Approve Patches
```
POST {{server}}/api/?apikey={{apikey}}&service=approve_patches
```

Required Parameters:
- `deviceid`: Device ID
- `patch_ids`: Array of patch IDs to approve

Example Response:
```json
{
  "affected_count": 1,
  "processed_patches": ["KB5025221"],
  "errors": []
}
```

##### Ignore Patches
```
POST {{server}}/api/?apikey={{apikey}}&service=ignore_patches
```

Required Parameters:
- `deviceid`: Device ID
- `patch_ids`: Array of patch IDs to ignore

##### Do Nothing Patches
```
POST {{server}}/api/?apikey={{apikey}}&service=do_nothing_patches
```

Required Parameters:
- `deviceid`: Device ID
- `patch_ids`: Array of patch IDs to set as do nothing

#### Patch Retry Operations

##### Reprocess Patches
```
POST {{server}}/api/?apikey={{apikey}}&service=reprocess_patches
```

Required Parameters:
- `deviceid`: Device ID

Optional Parameters:
- `patch_ids`: Array of specific patch IDs to reprocess
- `describe`: Set to true for detailed response

Example Response:
```json
{
  "queued_count": 1,
  "queued_patches": ["KB5025221"]
}
```

##### Retry Failed Patches
```
POST {{server}}/api/?apikey={{apikey}}&service=retry_patches
```

Required Parameters:
- `deviceid`: Device ID

Optional Parameters:
- `patch_ids`: Array of specific patch IDs to retry
- `describe`: Set to true for detailed response

### Task Management

#### List Tasks
```
GET {{server}}/api/?apikey={{apikey}}&service=list_tasks&deviceid={{deviceid}}
```

Required Parameters:
- `deviceid`: Device ID to list tasks for

Optional Parameters:
- `status`: Filter by task status
- `type`: Filter by task type
- `describe`: Set to true for detailed task information

Example Response:
```json
{
  "tasks": [
    {
      "check_id": "task123",
      "name": "Daily Cleanup",
      "description": "Remove temporary files",
      "type": "SCRIPT",
      "status": "COMPLETED",
      "schedule_type": "DAILY",
      "last_run": "2024-01-09T00:00:00Z",
      "next_run": "2024-01-10T00:00:00Z",
      "last_result": "Success",
      "enabled": true
    }
  ]
}
```

Task Types:
- SCRIPT: Automated script execution
- COMMAND: Command line execution
- MAINTENANCE: System maintenance task
- CUSTOM: Custom task type

Task Status Values:
- PENDING: Task is scheduled but not yet started
- RUNNING: Task is currently executing
- COMPLETED: Task finished successfully
- FAILED: Task execution failed
- CANCELLED: Task was cancelled

Schedule Types:
- ONCE: Run once at specified time
- DAILY: Run every day
- WEEKLY: Run on specified days of the week
- MONTHLY: Run on specified days of the month
- ON_DEMAND: Run only when manually triggered

#### Run Task Now
```
POST {{server}}/api/?apikey={{apikey}}&service=run_task_now
```

Required Parameters:
- `checkid`: Task ID to run

Optional Parameters:
- `describe`: Set to true for detailed response

Example Response:
```json
{
  "time": 5,
  "message": "Task will start in 5 minutes"
}
```

#### Get Task Result
```
GET {{server}}/api/?apikey={{apikey}}&service=get_task_result&checkid={{checkid}}
```

Required Parameters:
- `checkid`: Task ID to get results for

Example Response:
```json
{
  "result": {
    "check_id": "task123",
    "status": "COMPLETED",
    "output": "Cleanup completed successfully",
    "start_time": "2024-01-09T00:00:00Z",
    "end_time": "2024-01-09T00:05:00Z",
    "exit_code": 0
  }
}
```

### Active Directory Management

#### List AD Users
```
GET {{server}}/api/?apikey={{apikey}}&service=list_ad_users&siteid={{siteid}}
```

Required Parameters:
- `siteid`: Site ID to list users for

Optional Parameters:
- `describe`: Set to true for detailed user information

Example Response:
```json
{
  "users": [
    {
      "objectGUID": "550e8400-e29b-41d4-a716-446655440000",
      "status": "UNCHANGED",
      "device": "device123",
      "displayName": "John Doe",
      "mail": "john.doe@example.com",
      "userPrincipalName": "john.doe@domain.com",
      "sAMAccountName": "jdoe",
      "enabled": true,
      "department": "IT",
      "title": "System Administrator",
      "whenCreated": "2023-01-01T00:00:00Z",
      "whenChanged": "2024-01-09T00:00:00Z",
      "memberOf": [
        "CN=IT Staff,DC=domain,DC=com",
        "CN=Administrators,DC=domain,DC=com"
      ]
    }
  ]
}
```

User Status Values:
- UNCHANGED (0): No changes detected
- CHANGE_UNKNOWN (1): Change state unknown
- MODIFIED (2): User was modified
- NEW (3): New user
- DELETED (4): User was deleted
- RESTORED (5): User was restored

#### Get AD User
```
GET {{server}}/api/?apikey={{apikey}}&service=get_ad_user&siteid={{siteid}}&objectGUID={{objectGUID}}
```

Required Parameters:
- `siteid`: Site ID to get user from
- `objectGUID`: Object GUID of user

Optional Parameters:
- `describe`: Set to true for detailed user information

#### Search AD Users
```
GET {{server}}/api/?apikey={{apikey}}&service=search_ad_users&siteid={{siteid}}&query={{query}}
```

Required Parameters:
- `siteid`: Site ID to search in
- `query`: Search query string

Optional Parameters:
- `attributes`: Array of specific attributes to return
- `describe`: Set to true for detailed results

Example Response:
```json
{
  "users": [
    {
      "objectGUID": "550e8400-e29b-41d4-a716-446655440000",
      "displayName": "John Doe",
      "mail": "john.doe@example.com"
    }
  ],
  "total": 1
}
```

#### Get User Change History
```
GET {{server}}/api/?apikey={{apikey}}&service=get_ad_user_history&objectGUID={{objectGUID}}
```

Required Parameters:
- `objectGUID`: Object GUID of user

Example Response:
```json
{
  "changes": [
    {
      "objectGUID": "550e8400-e29b-41d4-a716-446655440000",
      "previousStatus": "UNCHANGED",
      "newStatus": "MODIFIED",
      "timestamp": "2024-01-09T00:00:00Z",
      "changedAttributes": ["title", "department"],
      "groupChanges": [
        {
          "group": "CN=IT Staff,DC=domain,DC=com",
          "change": "added",
          "when": "2024-01-09T00:00:00Z"
        }
      ]
    }
  ]
}
```

## Usage Tips

1. **Environment Selection**: Always ensure you have selected the correct environment before making requests.

2. **Rate Limiting**: The built-in rate limiting ensures compliance with API restrictions. Don't disable the pre-request script unless you have a specific reason.

3. **Variable Chaining**: Many endpoints require IDs obtained from previous requests. Use Postman's environment variables to store and chain these values:
   - First call "List Clients" to get a client ID
   - Store the client ID in your environment
   - Use that ID to call "List Sites"

4. **Error Handling**: If you receive errors:
   - Verify your API key is valid and not expired
   - Check that all required parameters are provided
   - Ensure you're not exceeding rate limits
   - Verify the server URL is correct and accessible

## Type Definitions

The API responses align with TypeScript definitions in the `src/types` directory. Refer to these types for detailed response structure information:

- Client/Site Management: `src/types/client-site.ts`
- Asset Tracking: `src/types/asset-tracking.ts`
- Monitoring: `src/types/monitoring.ts`
- Antivirus Management: `src/types/antivirus.ts`
- Backup & Recovery: `src/types/backup.ts`
- Patch Management: `src/types/patch-management.ts`
- Task Management: `src/types/tasks.ts`
- Active Directory Management: `src/types/active-directory.ts`

Common types and interfaces are defined in `src/types/common.ts`.