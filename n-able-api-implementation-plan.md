# N-able N-sight RMM API Implementation Plan

## 1. Environment Setup

### 1.1 Postman Environment Variables
```json
{
  "server": "<territory-specific-url>",
  "apikey": "<your-api-key>",
  "territory": {
    "type": "enum",
    "values": [
      "www.am.remote.management",
      "wwwasia.system-monitor.com",
      "www.system-monitor.com",
      "wwweurope1.systemmonitor.eu.com",
      "wwwfrance.systemmonitor.eu.com",
      "wwwfrance1.systemmonitor.eu.com",
      "wwwgermany1.systemmonitor.eu.com", 
      "wwwireland.systemmonitor.eu.com",
      "wwwpoland1.systemmonitor.eu.com",
      "www.systemmonitor.co.uk",
      "www.systemmonitor.us"
    ]
  }
}
```

### 1.2 Collection Settings
- Set global delay between requests: 90000ms (90 seconds)
- Enable SSL certificate verification
- Set default timeout: 30000ms
- Add API Key authorization at collection level

## 2. Postman Collection Structure

### 2.1 Root Collection: "N-able N-sight RMM API"
Description: Data Extraction API for N-able N-sight RMM platform

#### 2.2 Primary Folders

1. **Client & Site Management**
   - List Clients
   - List Sites
   - List Servers
   - List Workstations
   - List Agentless Assets
   - Device Monitoring Details

2. **Asset Tracking**
   - Hardware Listing
   - Software Listing
   - License Groups
   - Device Asset Details
   - Custom Fields

3. **Monitoring & Checks**
   - Failing Checks
   - Check Configuration
   - Performance History
   - Drive Space History
   - Check Notes Management

4. **Antivirus Management**
   - List AV Products
   - Definition Updates
   - Quarantine Management
   - Scan Management
   - Threat History

5. **Backup & Recovery**
   - Backup History
   - Session Management
   - Selection Size
   - Recovery Points

6. **Patch Management**
   - Windows Updates
   - Patch Status
   - Deployment History
   - Missing Updates

7. **Settings & Configuration**
   - General Settings
   - Wallchart Settings
   - User Management
   - System Configuration

8. **Task Management**
   - Run Task Now
   - Task History
   - Scheduled Tasks
   - Task Results

9. **Directory Services**
   - Active Directory Users
   - Group Management
   - User Details

### 2.3 Request Template Structure
Each request will follow this pattern:

```
Request Name: [Service Name] - [Human Readable Name]
Method: GET
URL: {{server}}/api/
Query Params:
  - apikey: {{apikey}}
  - service: [service_name]
  - [additional parameters]
Description: [Detailed description + parameter explanations]
Example Response: [Sample XML response]
```

## 3. Endpoint Manifest

### 3.1 Manifest Structure
```typescript
interface Endpoint {
  serviceName: string;
  humanName: string;
  description: string;
  category: Category;
  parameters: {
    required: Parameter[];
    optional: Parameter[];
  };
  response: {
    format: "XML";
    fields: ResponseField[];
  };
  rateLimit: boolean;
  examples: {
    request: string;
    response: string;
  }[];
}

interface Parameter {
  name: string;
  type: "string" | "integer" | "boolean";
  description: string;
  defaultValue?: any;
  validation?: string;
}

interface ResponseField {
  path: string;
  type: string;
  description: string;
  canBeEmpty: boolean;
}
```

### 3.2 Categories & Endpoints

1. **Client & Site Management**
   ```yaml
   - service: list_clients
     required: []
     optional: [devicetype]
   
   - service: list_sites
     required: [clientid]
     optional: []
   
   - service: list_servers
     required: [siteid]
     optional: []
   ```
   [Additional endpoints to be documented]

2. **Asset Tracking**
   ```yaml
   - service: list_all_hardware
     required: [deviceid]
     optional: []
   
   - service: list_all_software
     required: [deviceid]
     optional: [type]
   ```
   [Additional endpoints to be documented]

[Categories 3-9 to be fully documented]

## 4. Implementation Steps

### 4.1 Phase 1: Base Structure
1. Create collection
2. Set up environments
3. Configure authorization
4. Implement rate limiting
5. Create folder structure

### 4.2 Phase 2: Core Endpoints
1. Client/Site management
2. Device listing
3. Basic monitoring
4. Essential settings

### 4.3 Phase 3: Advanced Endpoints
1. Antivirus management
2. Backup operations
3. Patch management
4. Task automation

### 4.4 Phase 4: Testing & Documentation
1. Test all endpoints
2. Document response patterns
3. Add examples
4. Create usage guides

## 5. Special Considerations

### 5.1 Rate Limiting
- Implement Pre-request Scripts for timing
- Track last request timestamp
- Force 90-second delays
- Add retry logic

### 5.2 Error Handling
```javascript
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Check for API errors", function () {
    var xmlData = xml2Json(responseBody);
    pm.expect(xmlData.result.status).to.eql("OK");
});
```

### 5.3 Response Parsing
- XML to JSON conversion
- Response validation
- Data extraction helpers
- Error message parsing

### 5.4 Authentication
- API key validation
- Territory-specific handling
- Permission checking
- Key rotation support

## 6. Documentation Requirements

### 6.1 Request Documentation
- Purpose
- Required permissions
- Parameter details
- Example usage
- Response format
- Common errors
- Rate limit notes

### 6.2 Collection Documentation
- Setup guide
- Environment configuration
- Authentication setup
- Usage patterns
- Best practices
- Troubleshooting
- Rate limit handling

## 7. Testing Strategy

### 7.1 Test Cases
1. Authentication validation
2. Parameter validation
3. Rate limit compliance
4. Error handling
5. Response format
6. Data accuracy
7. Performance metrics

### 7.2 Test Scripts
```javascript
// Pre-request Script Template
let lastRequest = pm.variables.get("lastRequest");
let now = Date.now();
if (lastRequest && (now - lastRequest) < 90000) {
    let delay = 90000 - (now - lastRequest);
    setTimeout(function() {}, delay);
}
pm.variables.set("lastRequest", now);

// Test Script Template
pm.test("Response format", function () {
    pm.expect(pm.response.headers.get('Content-Type'))
      .to.include('application/xml');
});
```

## 8. Migration Plan

### 8.1 Phases
1. Basic endpoints setup
2. Core functionality testing
3. Advanced endpoint implementation
4. Production deployment
5. Documentation completion

### 8.2 Timeline
- Phase 1: 2 days
- Phase 2: 3 days
- Phase 3: 4 days
- Phase 4: 3 days
- Total: 12 days

## 9. Next Steps

1. Set up Postman environment
2. Create base collection structure
3. Implement core endpoints
4. Document first set of endpoints
5. Begin testing framework
6. Review and adjust plan as needed

