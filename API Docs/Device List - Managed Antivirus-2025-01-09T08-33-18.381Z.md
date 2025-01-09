                                            # Device List - Managed Antivirus


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: mav_scan_device_list**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=mav_scan_device_list**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Managed Antivirus specified device list.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                         


                                                        From Dashboard 2019.08.13 this call defaults to version **2** (Bitdefender).


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        _1_
                                                        


                                                        _2_
                                                        


                                                    
                                                    
                                                        2


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =mav_scan_device_list**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=mav_scan_device_list&deviceid=**DEVICEID&v=VERSION
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **VIPRE engine:** the following example response displays data for scans on a device running the Managed Antivirus VIPRE engine.


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?>


                                                        <scans>


                                                         <scan>


                                                             <threateventid>136</threateventid>


                                                             <deviceid>6164</deviceid>


                                                             <status>3</status>


                                                             <scantype>Deep scan</scantype>


                                                             <event_type>1</event_type>


                                                             <scanstartdatetime>2011-05-18 12:00:01</scanstartdatetime>


                                                             <scanenddatetime>2011-05-18 12:30:49</scanenddatetime>


                                                             <threat_count>1</threat_count>


                                                             <trace_count>1</trace_count>


                                                             <quarantine_count>1</quarantine_count>


                                                             <cookies_scanned>0</cookies_scanned>


                                                             <files_scanned>20837</files_scanned>


                                                             <folders_scanned>2046</folders_scanned>


                                                             <registry_scanned>16528</registry_scanned>


                                                             <processes_scanned>25</processes_scanned>


                                                             <scan_errors>2</scan_errors>


                                                             <duration>00:30:48</duration>


                                                         </scan>


                                                        </scans>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Field Descriptions**
                                                        


                                                    
                                                
                                                
                                                    
                                                        A scans element containing zero or more entries (scan elements in XML), each scan having:


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        threateventid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Unique identifier of the threat.


                                                    
                                                
                                                
                                                    
                                                        deviceid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Unique identifier of the device being monitored


                                                    
                                                
                                                
                                                    
                                                        status


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Numeric representation of the scan status, one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        3


                                                                    
                                                                    
                                                                        Finished


                                                                    
                                                                
                                                                
                                                                    
                                                                        4


                                                                    
                                                                    
                                                                        Canceled


                                                                    
                                                                
                                                                
                                                                    
                                                                        5


                                                                    
                                                                    
                                                                        Error


                                                                    
                                                                
                                                                
                                                                    
                                                                        6


                                                                    
                                                                    
                                                                        Paused


                                                                    
                                                                
                                                                
                                                                    
                                                                        7


                                                                    
                                                                    
                                                                        Running


                                                                    
                                                                
                                                            
                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        0


                                                                    
                                                                    
                                                                        Scan Finished Normally


                                                                    
                                                                
                                                                
                                                                    
                                                                        1


                                                                    
                                                                    
                                                                        Scan Aborted


                                                                    
                                                                
                                                                
                                                                    
                                                                        2


                                                                    
                                                                    
                                                                        Scan Stopped


                                                                    
                                                                
                                                                
                                                                    
                                                                        3


                                                                    
                                                                    
                                                                        Scan In Progress


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        scantype


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Scan type, one of


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quick scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deep scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        Active protection


                                                                    
                                                                
                                                                
                                                                    
                                                                        Custom Scan


                                                                    
                                                                
                                                            
                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Active Protection


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quick


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deep


                                                                    
                                                                
                                                                
                                                                    
                                                                        Custom


                                                                    
                                                                
                                                                
                                                                    
                                                                        Behavioral


                                                                    
                                                                
                                                                
                                                                    
                                                                        IDS


                                                                    
                                                                
                                                                
                                                                    
                                                                        Device


                                                                    
                                                                
                                                            
                                                        
                                                        VIPRE Engine: Please note that where a scan is still running the VIPRE engine will have _in progress _appended to the scantype.


                                                    
                                                
                                                
                                                    
                                                        event_type


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Event type, one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine **
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        0


                                                                    
                                                                    
                                                                        Quick Scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        1


                                                                    
                                                                    
                                                                        Deep Scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        2


                                                                    
                                                                    
                                                                        Unquarantine


                                                                    
                                                                
                                                                
                                                                    
                                                                        3


                                                                    
                                                                    
                                                                        Quarantine deleted


                                                                    
                                                                
                                                                
                                                                    
                                                                        4


                                                                    
                                                                    
                                                                        Quarantine event


                                                                    
                                                                
                                                                
                                                                    
                                                                        5


                                                                    
                                                                    
                                                                        Agent threat update


                                                                    
                                                                
                                                                
                                                                    
                                                                        6


                                                                    
                                                                    
                                                                        Agent software update


                                                                    
                                                                
                                                                
                                                                    
                                                                        7


                                                                    
                                                                    
                                                                        Active Proctection


                                                                    
                                                                
                                                                
                                                                    
                                                                        9


                                                                    
                                                                    
                                                                        Custom Scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        10


                                                                    
                                                                    
                                                                        System Scan


                                                                    
                                                                
                                                            
                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        1


                                                                    
                                                                    
                                                                        Active Protection scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        2


                                                                    
                                                                    
                                                                        Quick scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        3


                                                                    
                                                                    
                                                                        Deep scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        4


                                                                    
                                                                    
                                                                        Custom scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        5


                                                                    
                                                                    
                                                                        Behavioral scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        6


                                                                    
                                                                    
                                                                        IDS scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        7


                                                                    
                                                                    
                                                                        Device scan


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        scanstartdatetime


                                                    
                                                    
                                                        datetime


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Scan start date and time in agent local time.


                                                        For VIPRE engine scans currently in progress the time string also includes the number of days/hours/minutes since the scan began.


                                                    
                                                
                                                
                                                    
                                                        scanenddatetime


                                                    
                                                    
                                                        datetime


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Scan end date and time in agent local time (for scans that have already completed)


                                                    
                                                
                                                
                                                    
                                                        threat_count


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of threats detected


                                                    
                                                
                                                
                                                    
                                                        trace_count


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of traces detected


                                                    
                                                
                                                
                                                    
                                                        quarantine_count


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of threats quarantined


                                                    
                                                
                                                
                                                    
                                                        cookies_scanned


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of cookies scanned


                                                    
                                                
                                                
                                                    
                                                        files_scanned


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of files scanned


                                                    
                                                
                                                
                                                    
                                                        folders_scanned


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of folders scanned


                                                        Note: for Bitdefender engine scans this is always 0 as Bitdefender does not scan by folder.


                                                    
                                                
                                                
                                                    
                                                        registry_scanned


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of registry entries scanned


                                                    
                                                
                                                
                                                    
                                                        processes_scanned


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of processes scanned


                                                    
                                                
                                                
                                                    
                                                        scan_errors


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of scan errors


                                                        Note: for Bitdefender engine scans this is always 0.


                                                    
                                                
                                                
                                                    
                                                        duration


                                                    
                                                    
                                                        hours:min:sec


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Time taken to carry out scan in hours, minutes, and seconds. 


                                                        This field is empty for scans that are still in progress.


                                                    
                                                
                                                
                                                    
                                                        engine


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        no


                                                    
                                                    
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
                                                    
                                                
                                            
                                        