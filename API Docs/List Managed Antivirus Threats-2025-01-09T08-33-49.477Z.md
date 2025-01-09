                                            # List Managed Antivirus Threats


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: list_mav_threats**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mav_threats**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists the most recently found occurrence of each different threat found on a device scanned with Managed Antivirus (MAV). 


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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
                                                        


                                                    
                                                    
                                                        The deviceid must be a valid device id. 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                                
                                                    
                                                        **v**
                                                        


                                                    
                                                    
                                                        Managed Antivirus engine version


                                                        **1** VIPRE engine 


                                                        **2** Bitdefender engine


                                                         


                                                        From Dashboard 2019.08.13 this call defaults to version **2** (Bitdefe


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        _1_
                                                        


                                                        _2_
                                                        


                                                    
                                                    
                                                        2


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_mav_threats**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mav_threats&deviceid=**DEVICEID&v=VERSION
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **VIPRE engine:** the following example response displays data for scans on a device running the Managed Antivirus VIPRE engine.


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?>


                                                        <example>


                                                        <result created="2013-10-09T10:55:41+01:00" host="SERVER" status="OK">


                                                         <threat>


                                                         <name>[name of threat]</name>


                                                         <category>[category of threat]</category>


                                                         <last_event>[date and time of last scan which detected this threat]</last_event>


                                                         <last_status>[one of: QUARANTINED, RELEASE_PENDING, RELEASED, DELETE_PENDING, DELETED, REPORTED, FAILED_TO_QUARANTINE, FAILED_TO_RELEASE, FAILED_TO_DELETE]</last_status>


                                                         <last_scan_type>[one of: QUICK, DEEP, ACTIVE, CUSTOM]</last_scan_type>


                                                         <last_trace_count>[number of traces of the threat found during last scan which detected this threat]</last_trace_count>


                                                         </threat>


                                                        [...more threat entries if they exist...]
                                                        


                                                        </result>


                                                        </example>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Field Descriptions**
                                                        


                                                    
                                                
                                                
                                                    
                                                        A mav_threats element containing zero or more entries (threat elements in XML), each threat having: 


                                                    
                                                
                                                
                                                    
                                                        **field**
                                                        


                                                    
                                                    
                                                        **description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **name**
                                                        


                                                    
                                                    
                                                        Name of threat


                                                    
                                                
                                                
                                                    
                                                        **category**
                                                        


                                                    
                                                    
                                                        Category of threat


                                                        Note: the threat category names can differ between the VIPRE and Bitdefender engines.


                                                    
                                                
                                                
                                                    
                                                        **last_event**
                                                        


                                                    
                                                    
                                                        For the VIPRE engine, the UTC end date and time of last scan which detected this threat.


                                                        For the Bitdefender engine, the end date and time of the last scan with detected this threat, or if applicable the date and time of the last quarantine action.


                                                    
                                                
                                                
                                                    
                                                        **last_status**
                                                        


                                                    
                                                    
                                                        Status of the threat on the device, one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        QUARANTINED 


                                                                    
                                                                
                                                                
                                                                    
                                                                        RELEASE_PENDING


                                                                    
                                                                
                                                                
                                                                    
                                                                        RELEASED


                                                                    
                                                                
                                                                
                                                                    
                                                                        DELETE_PENDING


                                                                    
                                                                
                                                                
                                                                    
                                                                        DELETED


                                                                    
                                                                
                                                                
                                                                    
                                                                        REPORTED


                                                                    
                                                                
                                                                
                                                                    
                                                                        FAILED_TO_QUARANTINE 


                                                                    
                                                                
                                                                
                                                                    
                                                                        FAILED_TO_RELEASE


                                                                    
                                                                
                                                                
                                                                    
                                                                        FAILED_TO_DELETE


                                                                    
                                                                
                                                            
                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Ignored


                                                                    
                                                                
                                                                
                                                                    
                                                                        Detected


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deleted


                                                                    
                                                                
                                                                
                                                                    
                                                                        Blocked


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quarantined


                                                                    
                                                                
                                                                
                                                                    
                                                                        Cleaned


                                                                    
                                                                
                                                                
                                                                    
                                                                        QuarantineRestored


                                                                    
                                                                
                                                                
                                                                    
                                                                        QuarantineDeleted


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **last_scan_type**
                                                        


                                                    
                                                    
                                                        Scan type, one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        QUICK


                                                                    
                                                                
                                                                
                                                                    
                                                                        DEEP


                                                                    
                                                                
                                                                
                                                                    
                                                                        ACTIVE


                                                                    
                                                                
                                                                
                                                                    
                                                                        CUSTOM


                                                                    
                                                                
                                                            
                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Active Protection


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quick


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deep


                                                                    
                                                                
                                                                
                                                                    
                                                                        Custom


                                                                    
                                                                
                                                                
                                                                    
                                                                        Behavioral


                                                                    
                                                                
                                                                
                                                                    
                                                                        IDS


                                                                    
                                                                
                                                                
                                                                    
                                                                        Device


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **last_trace_count**
                                                        


                                                    
                                                    
                                                        Number of traces of the threat found during last scan which detected this threat


                                                    
                                                
                                                
                                                    
                                                        **engine**
                                                        


                                                    
                                                    
                                                        Managed Antivirus engine where this data originates from, either VIPRE or Bitdefender (field only present where v>1)


                                                    
                                                
                                            
                                             


                                            Further information may be available via [list_mav_scans](api_list_mav_scans.htm) with details=YES.


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        