# Listing Devices At Client

Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM. This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.

## Service Details

| Service name: list_devices_at_client |                                                                                                                                                        |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| URL                                  | https://SERVER/api/?apikey=yourAPIkey&service=list_devices_at_client&required_parameters=required_parameters[&optional_parameters=optional_parameters] |
| Description                          | Lists all devices of type 'server/workstation' for a client. Note: Default ordering first by sitename then by devicename                               |

## Parameters

| Post Variable | Description                                                 | Type    | Required | Options                            | Default |
| ------------- | ----------------------------------------------------------- | ------- | -------- | ---------------------------------- | ------- |
| describe      | Optional. Returns a description of the service.             | boolean | no       | true                               | 0       |
| clientid      | The clientid must be a valid id.                            | integer | yes      | 0                                  | 0       |
| devicetype    | The devicetype must be server, workstation or mobile_device | string  | yes      | server, workstation, mobile_device | server  |

## Response Fields

The response includes capability flags that indicate which services are available for each device:

- takecontrol: Remote control capability
- patch: Patch management capability
- mav: Managed antivirus capability
- mob: Mobile device management
- systray: System tray integration
- mavbreck: Legacy antivirus capability

## Example Response Structure

```xml
<?xml version="1.0"?>
<result created="2015-07-20T08T08:47:41+01:00" host="SERVER" status="OK">
  <items>
    <client>
      <id>30000077</id>
      <name>TestClient</name>
      <site>
        <id>30000083</id>
        <name>TestSite</name>
        <server>
          <id>30000192</id>
          <name>SERVER</name>
          <username>Company\Administrator</username>
          <description>Dashboard Description</description>
          <status>Ok</status>
          <checkcount>
            <dsc_247>1</dsc_247>
            <pass>3</pass>
            <clear>4</clear>
            <fail>5</fail>
          </checkcount>
          <takecontrol>1</takecontrol>
          <patch>0</patch>
          <mav>1</mav>
          <mob>1</mob>
          <systray>1</systray>
          <mavbreck>0</mavbreck>
        </server>
      </site>
    </client>
  </items>
</result>
```

## Important Notes

1. The capability flags (patch, mav, etc.) indicate whether specific services are available for a device
2. Check these flags before attempting to use related endpoints
3. A value of 0 indicates the service is not available, 1 indicates it is available
4. The response includes different device types (server, workstation, mobile_device) with slightly different fields