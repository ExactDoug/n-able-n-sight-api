                                            # List Backup Check History


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                             


                                            **API Call Frequency** — Each API call uses system resources when querying and returning data. To avoid performance issues, do not send automated API calls  using a frequency less than 90 seconds. We may contact you if we detect API activity that negatively impacts system performance.


                                            
                                                
                                                    
                    Service name:** list_backup_history**
                                                
                                                
                                                    
                                                        URL


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=**list_backup_history
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        Description


                                                    
                                                    
                                                        List status of Backup Checks on device for last 60 days.


                                                        The starting date for the response is the current day within the account timezone.


                                                        Only currently active checks are considered. Once a check is deleted, its historical data will not be available. 


                                                        For checks that have been added within the last 60 days and run at least once, PASS will be returned for the days prior to the initial run, assuming the device was online on that day. For checks that are added and have yet to run, NOTRUN will be returned for all days.


                                                        Empty <checks/> and <days/> elements will be returned when there are no active antivirus checks configured for a device.


                                                        In cases when more than one Backup Check is configured to run on a device, the status reported will be the most significant status of all Backup Checks on that day. See Example Response for more detail.


                                                    
                                                
                                            
                                            
                                                
                                                
                                                
                                                
                                                
                                                
                                                
                                                    
                                                        Parameter
                                                        Description
                                                        Type
                                                        Required
                                                        Options
                                                        Default
                                                    
                                                
                                                
                                                    
                                                        
                                                            [describe](describe.htm)
                                                            


                                                        
                                                        
                                                            Optional. Returns a description of the service. 


                                                        
                                                        
                                                            boolean 


                                                        
                                                        
                                                            no 


                                                        
                                                        
                                                            true


                                                        
                                                        
                                                            0


                                                        
                                                    
                                                    
                                                        
                                                            deviceid


                                                        
                                                        
                                                            The deviceid must be a valid id


                                                        
                                                        
                                                            integer


                                                        
                                                        
                                                            yes


                                                        
                                                        
                                                            0


                                                        
                                                        
                                                            0


                                                        
                                                    
                                                
                                            
                                            
                                                
                                                    
                    Example Service Call =list_backup_history
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service=list_backup_history&deviceid=DEVICEID


                                                    
                                                
                                                
                                                    
                    Example Response
                
                                                
                                                
                                                    ```
<?xml version="1.0" ?>
<result created="2014-08-04T15:29:15+01:00" host="SERVER" status="OK">
<checks>
 <name>Backup Check - Symantec Backup Exec 2010</name>
</checks>
<days>
 <day>
 <date>2014-05-06</date>
 <status>NOTINSTALLED</status>
</day>
<days>
 <day>
 <date>2014-05-07</date>
 <status>PASS</status>
</day>
<days>
 <day>
 <date>2014-05-08</date>
 <status>FAIL</status>
</day>
<days>
 <day>
 <date>2014-05-09</date>
 <status>PASS</status>
</day>
<days>
 <day>
 <date>2014-05-10</date>
 <status>FAILINACTIVE</status>
</day>
<days>
 <day>
 <date>2014-05-11</date>
 <status>DEVICEOVERDUE</status>
</day>
<days>
 <day>
 <date>2014-05-12</date>
 <status>NOTINSTALLED</status>
</day>
 ...
</result>
```


                                                    
                                                
                                            
                                            
                                                
                                                    
					Fields Description
				
                                                
                                                
                                                    
					Field
				
                                                    
					Type
				
                                                    
					Can Be Empty
				
                                                    
					Description

                                                
                                                
                                                    
					checks/name
				
                                                    
					string
				
                                                    
					no
				
                                                    
					Name of the backup check (if any) running on this device. A name element will exist for each active check
				
                                                
                                                
                                                    
					days/day/date
				
                                                    
					date
				
                                                    
					no
				
                                                    
					Time data for the Checks
				
                                                
                                                
                                                    
					days/day/status
				
                                                    
					string
				
                                                    
					no
				
                                                    
					Status of the Backup Check(s) on that day. Can be one of the following values. If there is more than one than Backup Check configured to run on the device, the status value will be the highest ranked value from the list below. So for example, if one check is marked as PASS for that day, and another is marked as FAIL, the status returned will be FAIL.
					
								Status
							
								Meaning
							**NOTINSTALLED**
								Device had yet to be installed on the day
							**NOTRUN**
								Check has never run on the device. In this scenario, **NOTRUN** will be present on each day
							**PASSINACTIVE **
								Last check run was PASS, but the check did not run on the day for one of the following reasons:
								The device was offline at the time the check should have ran
								The check was not configured to run on that particular day
							**PASS**
								Check passed
							**CLEAREDINACTIVE**
								The check was previously CLEARED, but did not run on the day for the same reasons listed in PASSINACTIVE
							**CLEARED**
								The check failed but was cleared (acknowledged)
							**FAILINACTIVE**
								Last check run was FAIL, but the check did not run on the day for one of the reasons listed in PASSINACTIVE
							**FAIL**
								Check failed
							**OVERDUE**
								The device was marked on overdue on that day (applies to Servers only)
							
                                                
                                            
                                            
                                                
                                                
                                                
                                                
                                                    
                                                        Example Associated Service Calls
                                                    
                                                    
                                                        Parameter
                                                        Call
                                                        URL Format
                                                    
                                                    
                                                        DeviceID
                                                        [list_devices_at_client](listing_devices_at_client_.htm)
                                                        
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_devices_at_client&clientid=**CLIENTID**&devicetype=**server
                                                    
                                                    
                                                        [list_servers](listing_servers.htm)
                                                        
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_servers&siteid=**SITEID 
                                                    
                                                    
                                                        [list_workstations](listing_workstations_.htm)
                                                        
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_workstations&siteid=**SITEID
                                                    
                                                    
                                                        SiteID
                                                        [list_sites](listing_sites.htm)
                                                        
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_sites&clientid=**CLIENTID
                                                    
                                                    
                                                        ClientID
                                                        [list_clients](listing_clients_.htm)
                                                        
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_clients**
                                                    
                                                
                                            
                                            ##   Where do you want to go?


                                            * Learn about the Backup Check: [Windows](agent_checkhelp_backupcheck.htm) and [Mac](agent_checkhelp_osx_backupcheck.htm)
* Review the supported Backup products for: [Windows](supportedbackupproducts.htm)
* Generate an [API key](api_key.htm) and view the [server URLs](determine_url.htm).

                                        