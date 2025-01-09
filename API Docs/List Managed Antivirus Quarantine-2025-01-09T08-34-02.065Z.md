                                            # List Managed Antivirus Quarantine


                                            
                                                
                                                    
                                                        ### Service name: list_mav_quarantine


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mav_quarantine**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists the contents of Managed Antivirus (MAV) quarantine. The items parameter controls whether to include CURRENT (default), PREVIOUS or ALL items.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        
                                                            

### Parameters


                                                        


                                                    
                                                
                                                
                                                    
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


                                                    
                                                
                                                
                                                    
                                                        **Items**
                                                        


                                                    
                                                    
                                                        One of: CURRENT, PREVIOUS, ALL; default is CURRENT


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        _CURRENT_
                                                        


                                                        _PREVIOUS_
                                                        


                                                        _ALL_
                                                        


                                                    
                                                    
                                                        CURRENT


                                                    
                                                
                                                
                                                    
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


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_mav_quarantine**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mav_quarantine&deviceid=**DEVICEID**&items=**ITEMS&v=VERSION
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **VIPRE engine:** the following example response displays data for scans on a device running the Managed Antivirus VIPRE engine.


                                                    
                                                
                                                
                                                    
                                                         <?xml version="1.0" ?>


                                                        <result created="2013-10-09T10:55:41+01:00" host="SERVER" status="OK">


                                                         <quarantined_item>


                                                         <quarantine_id>[unique id for the quarantine item]</quarantine_id>


                                                         <scan_start>[start date and time of scan which quarantined this item]_</_scan_start>


                                                         <scan_end>[end date and time of scan which quarantined this item]</scan_end>


                                                         <guid>[unique quarantine identifier on the device]</guid>


                                                         <threat_name>[name of threat]</threat>


                                                         <threat_category>[category of threat]</category>


                                                         <status>


                                                        [if current item, one of: QUARANTINED, RELEASE_PENDING, DELETE_PENDING, FAILED_TO_RELEASE, FAILED_TO_DELETE]
                                                        


                                                        [if previous item, one of: RELEASED, DELETED]
                                                        


                                                         </status>


                                                         <scan_type>[one of: QUICK, DEEP, ACTIVE, CUSTOM]</scan_type>


                                                         <traces>


                                                          <trace>


                                                          <type>[see list_mav_scans trace types]</type>


                                                          <description>[description of what has been quarantined]</description>


                                                          </trace>


                                                        [...more trace entries if they exist...]
                                                        


                                                         </traces>


                                                         </quarantined_item>


                                                             [...more quarantined_item entries if they exist...]
                                                        


                                                        </result>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        
                                                            

### Field Descriptions


                                                        


                                                    
                                                
                                                
                                                    
                                                        A result element containing zero or more entries (quarantined_item elements in XML), each quarantined_item having:


                                                    
                                                
                                                
                                                    
                                                        **field**
                                                        


                                                    
                                                    
                                                        **description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **quarantine_id**
                                                        


                                                    
                                                    
                                                        Unique id for the quarantined item


                                                        For the Bitdefender engine the value is the same as the guid field below


                                                    
                                                
                                                
                                                    
                                                        **scan_start**
                                                        


                                                    
                                                    
                                                        Start time of scan


                                                        For the VIPRE engine the time is in UTC.


                                                        For the Bitdefender engine this field may be blank (Bitdefender can not always link quarantine items with scans) if it is provided the time will be in agent local time.


                                                    
                                                
                                                
                                                    
                                                        **scan_end**
                                                        


                                                    
                                                    
                                                        End time of scan


                                                        For the VIPRE engine the time is in UTC.


                                                        For the Bitdefender engine this field may be blank (Bitdefender can not always link quarantine items with scans) if it is provided the time will be in agent local time.


                                                    
                                                
                                                
                                                    
                                                        **guid**
                                                        


                                                    
                                                    
                                                        Unique identifier on the device for this quarantine item


                                                        For the Bitdefender engine the value is an integer rather than a true 'GUID' and is the same as the quarantine_id field above. The value returned can however be passed into the 'guids' parameter of the [mav_quarantine_release](api_mav_quar_release.htm) or [mav_quarantine_remove](api_mav_quar_remove.htm) services.


                                                    
                                                
                                                
                                                    
                                                        **threat_name**
                                                        


                                                    
                                                    
                                                        Name of threat


                                                    
                                                
                                                
                                                    
                                                        **threat_category**
                                                        


                                                    
                                                    
                                                        Category of threat


                                                        Note: the threat category names can differ between the VIPRE and Bitdefender engines


                                                    
                                                
                                                
                                                    
                                                        **status**
                                                        


                                                    
                                                    
                                                        Quarantine item status, one of


                                                        
                                                            
                                                                
                                                                    
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
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quarantined


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deleted


                                                                    
                                                                
                                                                
                                                                    
                                                                        Restored


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **scan_type**
                                                        


                                                    
                                                    
                                                        Scan type, one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        QUICK


                                                                    
                                                                
                                                                
                                                                    
                                                                        DEEP


                                                                    
                                                                
                                                                
                                                                    
                                                                        ACTIVE


                                                                    
                                                                
                                                                
                                                                    
                                                                        CUSTOM


                                                                    
                                                                
                                                            
                                                        
                                                        For the Bitdefender engine this field may be blank (Bitdefender can not always link quarantine items with scans). If a value is present it will be one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Active Protection


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quick


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deep


                                                                    
                                                                
                                                                
                                                                    
                                                                        Custom


                                                                    
                                                                
                                                                
                                                                    
                                                                        Behavioral


                                                                    
                                                                
                                                                
                                                                    
                                                                        IDS


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **traces**
                                                        


                                                    
                                                    
                                                        List of threats, each threat having: 


                                                        
                                                            
                                                                
                                                                    
                                                                        **field**
                                                                        


                                                                    
                                                                    
                                                                        **description**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        **type**
                                                                        


                                                                    
                                                                    
                                                                        Trace type, one of:


                                                                        
                                                                            
                                                                                
                                                                                    
                                                                                        **VIPRE Engine**
                                                                                        


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        COOKIE


                                                                                    
                                                                                    
                                                                                        DLL_EXPORT


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        PROCESS


                                                                                    
                                                                                    
                                                                                        SYSTEM_DLL


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        REGISTRY_ENTRY


                                                                                    
                                                                                    
                                                                                        EXPORT


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        FILE


                                                                                    
                                                                                    
                                                                                        MASTER_BOOT_RECORD


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        FOLDER


                                                                                    
                                                                                    
                                                                                        ROOTKIT


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        ARCHIVE


                                                                                    
                                                                                    
                                                                                        SYSTEM_MODULE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        PROCESS_MODULE


                                                                                    
                                                                                    
                                                                                        HOOK


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        DEVICE_DRIVER


                                                                                    
                                                                                    
                                                                                        UNKNOWN


                                                                                    
                                                                                
                                                                            
                                                                        
                                                                        For the Bitdefender engine this field may be blank, but a value is present it will be one of:


                                                                        
                                                                            
                                                                                
                                                                                    
                                                                                        **Bitdefender Engine**
                                                                                        


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        File


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        Http


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        Cookie


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        POP3


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        SMTP


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        Process


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        Boot Sector


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        Registry


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        ADS Stream


                                                                                    
                                                                                
                                                                            
                                                                        
                                                                    
                                                                
                                                                
                                                                    
                                                                        **description**
                                                                        


                                                                    
                                                                    
                                                                        Trace description stings, could be: 


                                                                        
                                                                            
                                                                                
                                                                                    
                                                                                        a filename


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        a registry key with value


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        a reference to a process


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        etc


                                                                                    
                                                                                
                                                                            
                                                                        
                                                                    
                                                                
                                                            
                                                        
                                                        Note: for the Bitdefender engine each quarantined item will always have exactly one trace element.


                                                    
                                                
                                                
                                                    
                                                        **engine**
                                                        


                                                    
                                                    
                                                        Managed Antivirus engine where this data originates from, either VIPRE or Bitdefender (field only present where v>1)


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        