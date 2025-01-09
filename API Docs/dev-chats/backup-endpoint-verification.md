# Backup Endpoint Verification Results

## Test Environment
- Server: www.systemmonitor.us
- Device: HTF-AIO-ROBIN (ID: 4893951)
- Test Date: 2025-01-09

## Endpoint Status

### list_mob_sessions
- Status: OK
- Service name verified: list_mob_sessions
- Response: Full backup session history
- Notable findings:
  - Daily FILE_SYSTEM backups at 01:45 UTC
  - Daily SYSTEM_STATE backups at 03:00 UTC
  - All recent sessions completed successfully
  - No errors reported in recent sessions

### mob/mob_list_selection_size
- Status: OK
- Service name verified: mob/mob_list_selection_size
- Current backup selection size:
  - File System: 126.89 GB
  - System State: 17.24 GB
  - Total: 144.13 GB

## Conclusion
Both backup endpoints are functioning correctly. The service names in the documentation are accurate:
- list_mob_sessions (not list_backup_sessions)
- mob/mob_list_selection_size (not get_backup_selection_size)

The Postman collection should be updated to use these correct service names.