# N-able N-sight RMM API Development Kit

This package provides a complete development kit for working with the N-able N-sight RMM Data Extraction API, including:

## Contents

1. **Postman Collection** (`n-able-n-sight-postman-collection.json`)
   - Complete API endpoint documentation
   - Request/response examples
   - Built-in rate limiting
   - Environment variable templates

2. **TypeScript Definitions** (`src/types/`)
   - `active-directory.ts`: Active Directory user and group types
   - `antivirus.ts`: Managed antivirus types
   - `backup.ts`: Backup and recovery types
   - `client-site.ts`: Client and site management types
   - `common.ts`: Shared type definitions
   - `index.ts`: Type exports
   - `monitoring.ts`: Device monitoring types
   - `patch-management.ts`: Patch management types
   - `tasks.ts`: Task management types

3. **API Documentation** (`API Docs/`)
   - Detailed endpoint documentation
   - Usage examples
   - Error handling
   - Best practices

## Setup

1. **Postman Setup**
   - Import `n-able-n-sight-postman-collection.json` into Postman
   - Create a new environment with variables:
     - `server`: Your N-able N-sight server URL
     - `apikey`: Your API key

2. **TypeScript Integration**
   - Copy the `src/types` directory into your project
   - Import types as needed:
   ```typescript
   import { Client, Site } from './types/client-site';
   import { BackupSession } from './types/backup';
   // etc.
   ```

## Rate Limiting

The collection includes automatic rate limiting via a pre-request script that enforces a 90-second delay between requests to comply with API limitations.

## Type Definitions

The TypeScript definitions provide type safety and IntelliSense support for:
- Request parameters
- Response structures
- Configuration objects
- Common utilities

## Documentation

Refer to the `API Docs/` directory for:
- Detailed endpoint descriptions
- Request/response examples
- Error codes and handling
- Best practices and usage tips

## Usage Example

```typescript
import { Client } from './types/client-site';
import { DeviceMonitoring } from './types/monitoring';

// Example typed response handling
async function getClientDevices(clientId: string): Promise<DeviceMonitoring[]> {
  const response = await fetch(`${server}/api/?apikey=${apikey}&service=list_device_monitoring_details&clientid=${clientId}`);
  const data = await response.json();
  return data.devices as DeviceMonitoring[];
}
```

## Contributing

When adding new endpoints or updating existing ones:
1. Update the Postman collection
2. Add corresponding TypeScript types
3. Update the documentation
4. Test with the provided type definitions

## License

This development kit is provided as-is under the MIT license.