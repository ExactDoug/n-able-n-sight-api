                                            # List Backup & Recovery Sessions


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: list_mob_sessions**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mob_sessions**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists all Backup & Recovery - previously known as Managed Online Backup - (MOB) sessions for a device.


                                                        Note: Backups are recorded in batches after the whole batch finishes; once recorded the information about all backup sessions is available for the lifespan of the device, whilst Backup & Recovery remains enabled. 


                                                        Please be aware that the backup values stated in this API call are in Bytes. If you require this information in Megabyte, divide the backup values by 1048576 (or _backup value/1024/1024_) and for Gigabytes divide the backup values by 1073741824 (or_ backup value/1024/1024/1024_).


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Parameters**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Post Variable**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Required**
                                                        


                                                    
                                                    
                                                        **Options**
                                                        


                                                    
                                                    
                                                        **Default**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **[describe](describe.htm)**
                                                        


                                                    
                                                    
                                                        Optional. Returns a description of the service. 


                                                    
                                                    
                                                        boolean 


                                                    
                                                    
                                                        no 


                                                    
                                                    
                                                        _true_
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                
                                                
                                                    
                                                        **deviceid**
                                                        


                                                    
                                                    
                                                        The deviceid must be a valid id


                                                    
                                                    
                                                        number


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_mob_sessions**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mob_sessions&deviceid=**DEVICEID
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <example>


                                                        <result created="2013-10-11T14:55:41+01:00" host="SERVER" status="OK">


                                                         <session>


                                                         <session_id>12345[unique id for the backup session]</session_id>


                                                         <type>[one of: BACKUP, RESTORE]</type>


                                                         <storage_account_id>139[id of the storage account used for storing this backup]</storage_account_id>


                                                         <plugin>[one of: FILE_SYSTEM, SYSTEM_STATE, EXCHANGE, NETWORK_SHARES, VMWARE, MSSQL, SHAREPOINT, ORACLE]</plugin>


                                                         <start>2013-03-17 00:06:57[start time, UTC]</start>


                                                         <end>2013-03-17 00:07:23[end time, UTC]</end>


                                                         <selection_size>132579334528[size in bytes of all data included in this backup]</selection_size>


                                                         <selection_item_count>22[number of items included in this backup]</selection_item_count> 


                                                         <size_change>843776[difference (in bytes) between this selection and the previous (using this plugin) selection; note there is no indiciation of bigger or smaller]</size_change>


                                                         <item_count_change>2[absolute difference in the number of items included in this backup versus previous backup (using this plugin)]</item_count_change>


                                                         <removed_item_count>0[number of items removed from backup storage as a result of this backup]</removed_item_count>


                                                         <processed_size>132579334528[amount (in bytes) of data processed]</processed_size>


                                                         <processed_item_count>22[number of items processed]</processed_item_count>


                                                         <transferred_size>955045456[amount (in bytes) of data transferred]</transferred_size>


                                                         <error_count>0[number of errors which occurred during this backup; no further information is available]</error_count>


                                                         <status>[one of: COMPLETED, INTERRUPTED, COMPLETED_WITH_ERRORS, FAILED, NOT_STARTED, CANCELED]</status>


                                                         </session>


                                                         [...more session entries if they exist...]
                                                        


                                                        </result>


                                                        </example>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Field Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        A mob_sessions element containing zero or more entries (session elements in XML), each session having:


                                                    
                                                
                                                
                                                    
                                                        **field**
                                                        


                                                    
                                                    
                                                        **description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **session_id**
                                                        


                                                    
                                                    
                                                        unique id for the backup session


                                                    
                                                
                                                
                                                    
                                                        **type**
                                                        


                                                    
                                                    
                                                        BACKUP


                                                        RESTORE


                                                    
                                                
                                                
                                                    
                                                        **storage_account_id**
                                                        


                                                    
                                                    
                                                        id of the storage account used for storing this backup


                                                    
                                                
                                                
                                                    
                                                        **plugin**
                                                        


                                                    
                                                    
                                                        FILE_SYSTEM


                                                        SYSTEM_STATE


                                                        EXCHANGE


                                                        NETWORK_SHARES


                                                        VMWARE


                                                        MSSQL


                                                        SHAREPOINT


                                                        ORACLE


                                                    
                                                
                                                
                                                    
                                                        **start**
                                                        


                                                    
                                                    
                                                        start time, UTC


                                                    
                                                
                                                
                                                    
                                                        **end**
                                                        


                                                    
                                                    
                                                        end time, UTC


                                                    
                                                
                                                
                                                    
                                                        **selection_size**
                                                        


                                                    
                                                    
                                                        size in bytes of all data included in this backup


                                                    
                                                
                                                
                                                    
                                                        **selection_item_count**
                                                        


                                                    
                                                    
                                                        number of items included in this backup


                                                    
                                                
                                                
                                                    
                                                        **size_change**
                                                        


                                                    
                                                    
                                                        difference (in bytes) between this selection and the previous (using this plugin) selection; note there is no indication of bigger or smaller


                                                    
                                                
                                                
                                                    
                                                        **item_count_change**
                                                        


                                                    
                                                    
                                                        absolute difference in the number of items included in this backup versus previous backup (using this plugin)


                                                    
                                                
                                                
                                                    
                                                        **removed_item_count**
                                                        


                                                    
                                                    
                                                        number of items removed from backup storage as a result of this backup


                                                    
                                                
                                                
                                                    
                                                        **processed_size**
                                                        


                                                    
                                                    
                                                        amount (in bytes) of data processed


                                                    
                                                
                                                
                                                    
                                                        **processed_item_count**
                                                        


                                                    
                                                    
                                                        number of items processed


                                                    
                                                
                                                
                                                    
                                                        **transferred_size**
                                                        


                                                    
                                                    
                                                        amount (in bytes) of data transferred


                                                    
                                                
                                                
                                                    
                                                        **error_count**
                                                        


                                                    
                                                    
                                                        number of errors which occurred during this backup; no further information is available


                                                    
                                                
                                                
                                                    
                                                        **status**
                                                        


                                                    
                                                    
                                                        COMPLETED


                                                        INTERRUPTED


                                                        COMPLETED_WITH_ERRORS


                                                        FAILED


                                                        NOT_STARTED


                                                        CANCELED


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                    
                                                        **Example Associated Service Calls **
                                                        
                                                    
                                                    
                                                        **Parameter**
                                                        
                                                        **Call**
                                                        
                                                        **URL Format**
                                                        
                                                    
                                                    
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
                                                    
                                                
                                            
                                        