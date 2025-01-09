                                            # Quarantine List


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        
                                                            

### Service name: mav_quarantine_list


                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=mav_quarantine_list**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        List Managed Antivirus quarantined threats on the specified device


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        
                                                            

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


                                                    
                                                
                                                
                                                    
                                                        **v**
                                                        


                                                    
                                                    
                                                        Managed Antivirus engine version


                                                        **1** VIPRE engine 


                                                        **2** Bitdefender engine


                                                         


                                                        From Dashboard 2019.08.13 this call defaults to version **2** (Bitdefender).


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        **no**
                                                        


                                                    
                                                    
                                                        _1_
                                                        


                                                        _2_
                                                        


                                                    
                                                    
                                                        2


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =mav_quarantine_list**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=mav_quarantine_list&deviceid=**DEVICEID&v=VERSION
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **VIPRE engine:** the following example response displays data for scans on a device running the Managed Antivirus VIPRE engine.


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?> 


                                                        <quarantines> 


                                                         <quarantine> 


                                                                 <quarantineguid>{5CCB948F-6F4D-4AEF-93F8-78A8C2D50DE2}</quarantineguid> 


                                                                 <statusid>1</statusid> 


                                                                 <group>0</group> 


                                                                 <quarantineStatus>Quarantined</quarantineStatus> 


                                                                 <eventDate>2011-05-18 12:30:49</eventDate> 


                                                                 <threatName>EICAR (v)</threatName> 


                                                                 <traces>1</traces> 


                                                                 <eventtype>Deep scan</eventtype> 


                                                         </quarantine> 


                                                        </quarantines>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        
                                                            

### Fields Description


                                                        


                                                    
                                                
                                                
                                                    
                                                        A quarantine's element containing zero or more entries (quarantine elements in XML), each quarantine element having:


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        quarantineguid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Unique identifier of an instance in quarantine.


                                                        For the Bitdefender engine the value is an integer rather than a true 'GUID' and is the same as the quarantine_id field above. The value returned can however be passed into the 'guids' parameter of the [mav_quarantine_release](api_mav_quar_release.htm) or [mav_quarantine_remove](api_mav_quar_remove.htm) services.


                                                    
                                                
                                                
                                                    
                                                        statusid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Numeric representation of quarantine status:


                                                        
                                                            
                                                                
                                                                    
                                                                        1


                                                                    
                                                                    
                                                                        Quarantined


                                                                    
                                                                
                                                                
                                                                    
                                                                        2


                                                                    
                                                                    
                                                                        Release pending


                                                                    
                                                                
                                                                
                                                                    
                                                                        3


                                                                    
                                                                    
                                                                        Released


                                                                    
                                                                
                                                                
                                                                    
                                                                        4


                                                                    
                                                                    
                                                                        Delete pending


                                                                    
                                                                
                                                                
                                                                    
                                                                        5


                                                                    
                                                                    
                                                                        Deleted


                                                                    
                                                                
                                                                
                                                                    
                                                                        6


                                                                    
                                                                    
                                                                        Reported


                                                                    
                                                                
                                                                
                                                                    
                                                                        7


                                                                    
                                                                    
                                                                        Failed to quarantine


                                                                    
                                                                
                                                                
                                                                    
                                                                        8


                                                                    
                                                                    
                                                                        Failed to release from quarantine


                                                                    
                                                                
                                                                
                                                                    
                                                                        9


                                                                    
                                                                    
                                                                        Failed to delete from quarantine


                                                                    
                                                                
                                                            
                                                        
                                                        Values 1 to 5 inclusive may be returned for either the VIPRE or Bitdefender engines.


                                                        Values 6 to 9 inclusive are only applicable to VIPRE engine.


                                                    
                                                
                                                
                                                    
                                                        group


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Action group identifier:


                                                        
                                                            
                                                                
                                                                    
                                                                        0


                                                                    
                                                                    
                                                                        Item is presently quarantined


                                                                        (quarantined / pending removal or release / removal or release failed)


                                                                    
                                                                
                                                                
                                                                    
                                                                        1


                                                                    
                                                                    
                                                                        Item is not presently quarantined


                                                                        (released / deleted / failed to quarantine / reported)


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        quarantineStatus


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Text representation of quarantine status. One of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE or Bitdefender Engines**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quarantined


                                                                    
                                                                
                                                                
                                                                    
                                                                        Release pending


                                                                    
                                                                
                                                                
                                                                    
                                                                        Released


                                                                    
                                                                
                                                                
                                                                    
                                                                        Delete pending


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deleted


                                                                    
                                                                
                                                            
                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine Only**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Reported


                                                                    
                                                                
                                                                
                                                                    
                                                                        Failed to quarantine


                                                                    
                                                                
                                                                
                                                                    
                                                                        Failed to release from quarantine


                                                                    
                                                                
                                                                
                                                                    
                                                                        Failed to delete from quarantine


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        eventDate


                                                    
                                                    
                                                        datetime


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Date and time quarantine event recorded.


                                                    
                                                
                                                
                                                    
                                                        threatName


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Name of the recorded threat


                                                    
                                                
                                                
                                                    
                                                        traces


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of recorded traces 


                                                        Note: For Bitdefender there is only ever one trace per quarantine item so this will always contain the value 1.


                                                    
                                                
                                                
                                                    
                                                        eventtype


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Description of the scan event type:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quick Scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deep Scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        Unquarantine


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quarantine deleted


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quarantine event


                                                                    
                                                                
                                                                
                                                                    
                                                                        Agent threat update


                                                                    
                                                                
                                                                
                                                                    
                                                                        Agent software update


                                                                    
                                                                
                                                                
                                                                    
                                                                        Active protection


                                                                    
                                                                
                                                                
                                                                    
                                                                        Custom scan


                                                                    
                                                                
                                                                
                                                                    
                                                                        System event


                                                                    
                                                                
                                                            
                                                        
                                                        For Bitdefender this field is not always populated, if it is the value will be one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Active Protection


                                                                    
                                                                
                                                                
                                                                    
                                                                        Quick


                                                                    
                                                                
                                                                
                                                                    
                                                                        Deep


                                                                    
                                                                
                                                                
                                                                    
                                                                        Custom


                                                                    
                                                                
                                                                
                                                                    
                                                                        Behavioral


                                                                    
                                                                
                                                                
                                                                    
                                                                        IDS


                                                                    
                                                                
                                                                
                                                                    
                                                                        Device


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        