                                            # List Managed Antivirus Scans


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: list_mav_scans**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mav_scans**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Returns list of Managed Antivirus scans for a device; these could be in-progress or complete.


                                                        The information is available as summaries (details=NO) or with threats, quarantine and errors included (details=YES).


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                    
                                                
                                                
                                                    
                                                        **details**
                                                        


                                                    
                                                    
                                                        Level of information displayed


                                                        YES for details; NO for summary


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        _NO_
                                                        


                                                        _YES_
                                                        


                                                    
                                                    
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


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_mav_scans**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_mav_scans&deviceid=**DEVICEID**&details=**DETAIL&v=VERSION
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Responses**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **VIPRE engine:** the following example response displays data for scans on a device running the Managed Antivirus VIPRE engine.


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?>


                                                        <result created="2012-04-05T10:48:40+01:00" host="SERVER" status="OK">


                                                        <scan>[example when details=YES]


                                                         <type>[one of: QUICK, DEEP, ACTIVE or CUSTOM]</type>


                                                         <status>[one of: NONE, PENDING, PENDING_AGENT, FINISHED, CANCELED, ERROR, PAUSED, RUNNING]</status>


                                                         <start>2013-01-15 05:41:55[UTC start time]</start>


                                                         <end>2013-01-15 05:41:55[UTC end time; only included if scanning complete]</end>


                                                         <cookies_scanned>0</cookies_scanned>


                                                         <registry_scanned>0</registry_scanned>


                                                         <files_scanned>1</files_scanned>


                                                         <folders_scanned>0</folders_scanned>


                                                         <processes_scanned>0</processes_scanned>


                                                         <threats>[only included when at least one threat is discovered AND details=YES]


                                                         <threat>


                                                          <name>Worm.Win32.Downad.Gen (v)</name>


                                                          <category>Worm.W32</category>


                                                          <status>[one of: QUARANTINED, RELEASE_PENDING, RELEASED, DELETE_PENDING, DELETED, REPORTED, FAILED_TO_QUARANTINE, FAILED_TO_RELEASE, FAILED_TO_DELETE]</status>


                                                          <quarantine>[only included when item(s) quarantined]


                                                          <item>


                                                           <guid>{55778734-483C-4BCF-A0F5-4C78ED28CBE1}</guid>


                                                           <count>1[number of files (or other scanned entities) included with this quarantine item]</count>


                                                           <deleted>[YES or NO]</deleted>


                                                          </item>


                                                        [...more item entries if they exist...]
                                                        


                                                          </quarantine>


                                                          <traces>


                                                          <trace>


                                                           <type>[one of: COOKIE, PROCESS, REGISTRY_ENTRY, FILE, FOLDER, ARCHIVE, PROCESS_MODULE, DEVICE_DRIVER, DLL_EXPORT, SYSTEM_DLL_EXPORT, MASTER_BOOT_RECORD, ROOTKIT, SYSTEM_MODULE, HOOK, UNKNOWN]</type>


                                                           <description>[e.g. filename, or registry key with value, or reference to a process etc.]</description>


                                                          </trace>


                                                        [...more trace entries if they exist...]
                                                        


                                                          </traces>


                                                         </threat>


                                                        [...more threat entries if they exist...]
                                                        


                                                         </threats>


                                                         <errors>[only included if at least one scan error occurred AND details=YES]


                                                         <error>


                                                          <item>[filename or identifier]</item>


                                                          <reason>[scan error - see below]</reason>


                                                         </error>


                                                        [...more error entries if they exist...]
                                                        


                                                         </errors>


                                                        </scan>


                                                        <scan>[example when details=NO, i.e. a summary]


                                                         <type>QUICK</type>


                                                         <status>FINISHED</status>


                                                         <start>2013-01-15 08:59:50</start>


                                                         <end>2013-01-15 09:03:57</end>


                                                         <cookies_scanned>0</cookies_scanned>


                                                         <registry_scanned>29563</registry_scanned>


                                                         <files_scanned>3297</files_scanned>


                                                         <folders_scanned>818</folders_scanned>


                                                         <processes_scanned>35</processes_scanned>


                                                         <threat_count>37</threat_count>


                                                         <quarantine_count>4</quarantine_count>


                                                         <error_count>3</error_count>


                                                        </scan>


                                                        [...more scan entries if they exist...]
                                                        


                                                        </result>


                                                        </example>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Field Descriptions**
                                                        


                                                    
                                                
                                                
                                                    
                                                        A result element containing zero or more entries (scan elements in XML), each scan having:


                                                    
                                                
                                                
                                                    
                                                        **field**
                                                        


                                                    
                                                    
                                                        **included**
                                                        


                                                    
                                                    
                                                        **description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **type**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
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


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **status**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Scan status, one of:


                                                        
                                                            
                                                                
                                                                    
                                                                        **VIPRE Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        NONE


                                                                    
                                                                
                                                                
                                                                    
                                                                        PENDING


                                                                    
                                                                
                                                                
                                                                    
                                                                        PENDING_AGENT


                                                                    
                                                                
                                                                
                                                                    
                                                                        FINISHED


                                                                    
                                                                
                                                                
                                                                    
                                                                        CANCELED


                                                                    
                                                                
                                                                
                                                                    
                                                                        ERROR


                                                                    
                                                                
                                                                
                                                                    
                                                                        PAUSED


                                                                    
                                                                
                                                                
                                                                    
                                                                        RUNNING


                                                                    
                                                                
                                                            
                                                        
                                                        
                                                            
                                                                
                                                                    
                                                                        **Bitdefender Engine**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        Scan Finished Normally


                                                                    
                                                                
                                                                
                                                                    
                                                                        Scan Aborted


                                                                    
                                                                
                                                                
                                                                    
                                                                        Scan Stopped


                                                                    
                                                                
                                                                
                                                                    
                                                                        Scan In Progress


                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **start**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Scan start time, e.g. 2013-06-21 19:18:17


                                                        For VIPRE engine scans the time is UTC


                                                        For Bitdefender engine scans the time is the agent local time.


                                                    
                                                
                                                
                                                    
                                                        **end**
                                                        


                                                    
                                                    
                                                        if scanning complete


                                                    
                                                    
                                                        Scan end time, e.g. 2013-06-21 19:27:35


                                                        For VIPRE engine scans the time is UTC


                                                        For Bitdefender engine scans the time is the agent local time.


                                                    
                                                
                                                
                                                    
                                                        **cookies_scanned**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Number of cookies scanned


                                                    
                                                
                                                
                                                    
                                                        **registry_scanned**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Number of registry entries scanned


                                                    
                                                
                                                
                                                    
                                                        **files_scanned**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Number of files scanned


                                                    
                                                
                                                
                                                    
                                                        **folders_scanned**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Number of folders scanned


                                                        Note: For Bitdefender engine scans this is always 0 as the Bitdefender engine does not scan by folder.


                                                    
                                                
                                                
                                                    
                                                        **processes_scanned**
                                                        


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Number of processes scanned


                                                    
                                                
                                                
                                                    
                                                        **threat_count**
                                                        


                                                    
                                                    
                                                        if details=NO


                                                    
                                                    
                                                        Count of threats found


                                                    
                                                
                                                
                                                    
                                                        **quarantine_count**
                                                        


                                                    
                                                    
                                                        if details=NO


                                                    
                                                    
                                                        Count of items quarantined


                                                    
                                                
                                                
                                                    
                                                        **error_count**
                                                        


                                                    
                                                    
                                                        if details=NO,


                                                        or if v>1 and engine is Bitdefender


                                                    
                                                    
                                                        Count of errors encountered


                                                    
                                                
                                                
                                                    
                                                        **threats**
                                                        


                                                    
                                                    
                                                        if details=YES


                                                    
                                                    
                                                        List of threats, each threat having: 


                                                        
                                                            
                                                                
                                                                    
                                                                        **field**
                                                                        


                                                                    
                                                                    
                                                                        **description**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        **name**
                                                                        


                                                                    
                                                                    
                                                                        Name of threat, e.g. Worm.Win32.Downad.Gen (v)


                                                                    
                                                                
                                                                
                                                                    
                                                                        **category**
                                                                        


                                                                    
                                                                    
                                                                        Category of threat, e.g. Worm.W32


                                                                        Note: the threat category names can differ between the VIPRE and Bitdefender engines.


                                                                    
                                                                
                                                                
                                                                    
                                                                        **status**
                                                                        


                                                                    
                                                                    
                                                                        Threat status, one of:


                                                                        
                                                                            
                                                                                
                                                                                    
                                                                                        **VIPRE Engine **
                                                                                        


                                                                                    
                                                                                
                                                                                
                                                                                    
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


                                                                                    
                                                                                
                                                                            
                                                                        
                                                                        Note: for Bitdefender the value represents the status of the most recent operation within the set of traces relating to this threat - there is also a separate status field within each individual trace entry which may be more useful (see below).


                                                                    
                                                                
                                                                
                                                                    
                                                                        **quarantine**
                                                                        


                                                                    
                                                                    
                                                                        (only included if item(s) quarantined during this scan)List of items quarantined; each item having: 


                                                                        
                                                                            
                                                                                
                                                                                    
                                                                                        **field**
                                                                                        


                                                                                    
                                                                                    
                                                                                        **description**
                                                                                        


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **guid**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Unique id on the device for the quarantined item


                                                                                        For Bitdefender scans, this field is not always populated and if present contains an integer rather than a 'GUID' string. This ID is more readily available from the [mav_quarantine_list](managed_antivirus_quarantine_l.htm) and [list_mav_quarantine](api_mav_list_quarantine.htm) services.


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **count**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Number of files (or other scanned entities, e.g. registry entries) moved to quarantine for this item.


                                                                                        Note: For Bitdefender engine scans this is always 1 as there is only ever one trace per quarantine item.


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **deleted**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Has the quarantined item been deleted?


                                                                                        YES or NO


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **type**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Field only included for Bitdefender scans contains the type of the quarantined item with the value one of:


                                                                                        
                                                                                            
                                                                                                
                                                                                                    
                                                                                                        File


                                                                                                    
                                                                                                    
                                                                                                        Process


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Http


                                                                                                    
                                                                                                    
                                                                                                        Boot Sector


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Cookie


                                                                                                    
                                                                                                    
                                                                                                        Registry


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        POP3


                                                                                                    
                                                                                                    
                                                                                                        ADS Stream


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        SMTP


                                                                                                    
                                                                                                
                                                                                            
                                                                                        
                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **description**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Field only included for Bitdefender engine scans contains the path of the quarantined item trace on the device.


                                                                                    
                                                                                
                                                                            
                                                                        
                                                                    
                                                                
                                                                
                                                                    
                                                                        **traces**
                                                                        


                                                                    
                                                                    
                                                                        List of traces of the threat, each trace having: 


                                                                        
                                                                            
                                                                                
                                                                                    
                                                                                        **field**
                                                                                        


                                                                                    
                                                                                    
                                                                                        **description**
                                                                                        


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **type**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Type of trace. one of:


                                                                                        
                                                                                            
                                                                                                
                                                                                                    
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


                                                                                                    
                                                                                                
                                                                                            
                                                                                        
                                                                                        
                                                                                            
                                                                                                
                                                                                                    
                                                                                                        **Bitdefender Engine**
                                                                                                        


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        File


                                                                                                    
                                                                                                    
                                                                                                        Process


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Http


                                                                                                    
                                                                                                    
                                                                                                        Boot Sector


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Cookie


                                                                                                    
                                                                                                    
                                                                                                        Registry


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        POP3


                                                                                                    
                                                                                                    
                                                                                                        ADS Stream


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        SMTP


                                                                                                    
                                                                                                
                                                                                            
                                                                                        
                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **description**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Could be: 


                                                                                        
                                                                                            
                                                                                                
                                                                                                    
                                                                                                        a filename


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        a registry key with value


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        a reference to a process


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        etc


                                                                                                    
                                                                                                
                                                                                            
                                                                                        
                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        **status**
                                                                                        


                                                                                    
                                                                                    
                                                                                        Field only included for Bitdefender engine scans contains status of this trace with the value one of:


                                                                                        
                                                                                            
                                                                                                
                                                                                                    
                                                                                                        Ignored


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Detected


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Deleted


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Blocked


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Quarantined


                                                                                                    
                                                                                                
                                                                                                
                                                                                                    
                                                                                                        Cleaned


                                                                                                    
                                                                                                
                                                                                            
                                                                                        
                                                                                    
                                                                                
                                                                            
                                                                        
                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **errors**
                                                        


                                                    
                                                    
                                                        if details=YES and at least one scanning error occurred and the engine is VIPRE


                                                    
                                                    
                                                        This field is only present for scans performed by the VIPRE engine and only when at least one scanning error occurred. It provides a list of errors which occurred while scanning, each having:


                                                        
                                                            
                                                                
                                                                    
                                                                        **field**
                                                                        


                                                                    
                                                                    
                                                                        **description**
                                                                        


                                                                    
                                                                
                                                                
                                                                    
                                                                        **item**
                                                                        


                                                                    
                                                                    
                                                                        filename or identifier


                                                                    
                                                                
                                                                
                                                                    
                                                                        **reason**
                                                                        


                                                                    
                                                                    
                                                                        
                                                                            
                                                                                
                                                                                    
                                                                                        CREATE_FILE


                                                                                    
                                                                                    
                                                                                        STOP_SERVICE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        DELETE_FILE


                                                                                    
                                                                                    
                                                                                        DELETE_SERVICE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        COPY_FILE


                                                                                    
                                                                                    
                                                                                        LIST_REGISTRY_KEYS


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        MOVE_FILE


                                                                                    
                                                                                    
                                                                                        LIST_REGISTRY_VALUES


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        READ_FILE_ADS


                                                                                    
                                                                                    
                                                                                        OPEN_REGISTRY_VALUE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        LIST_FOLDER_CONTENTS


                                                                                    
                                                                                    
                                                                                        CREATE_REGISTRY_VALUE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        CREATE_FOLDER


                                                                                    
                                                                                    
                                                                                        DELETE_REGISTRY_VALUE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        DELETE_FOLDER


                                                                                    
                                                                                    
                                                                                        LOAD_REGISTRY_VALUE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        COPY_FOLDER


                                                                                    
                                                                                    
                                                                                        GET_REGISTRY_VALUE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        MOVE_FOLDER


                                                                                    
                                                                                    
                                                                                        SET_REGISTRY_VALUE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        LIST_PROCESSES


                                                                                    
                                                                                    
                                                                                        REBOOT_DELETE_FILE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        LIST_PROCESS_MODULES


                                                                                    
                                                                                    
                                                                                        REBOOT_DELETE_FOLDER


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        OPEN_PROCESS


                                                                                    
                                                                                    
                                                                                        REBOOT_DELETE_REGISTRY_KEY


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        CREATE_PROCESS


                                                                                    
                                                                                    
                                                                                        REBOOT_DELETE_REGISTRY_VALUE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        SUSPEND_PROCESS


                                                                                    
                                                                                    
                                                                                        CORRUPT_ARCHIVE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        RESUME_PROCESS


                                                                                    
                                                                                    
                                                                                        PASSWORD_PROTECTED_ARCHIVE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        KILL_PROCESS


                                                                                    
                                                                                    
                                                                                        ARCHIVE_NESTED_TOO_DEEP


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        LIST_SERVICES


                                                                                    
                                                                                    
                                                                                        REMEDIATION_FAILURE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        OPEN_SERVICE


                                                                                    
                                                                                    
                                                                                        OPERATION_NOT_IMPLEMENTED


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        START_SERVICE


                                                                                    
                                                                                    
                                                                                        FAILED_TO_QUARANTINE


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        PAUSE_SERVICE


                                                                                    
                                                                                    
                                                                                        UNKNOWN 


                                                                                    
                                                                                
                                                                                
                                                                                    
                                                                                        RESUME_SERVICE


                                                                                    
                                                                                
                                                                            
                                                                        
                                                                    
                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        **engine**
                                                        


                                                    
                                                    
                                                        if v > 1


                                                    
                                                    
                                                        Managed Antivirus engine where this data originates from, either VIPRE or Bitdefender


                                                    
                                                
                                            
                                             


                                             


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                             


                                            The scan information for both the Bitdefender and VIPRE Managed Antivirus engines will go back for one year (where available).


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        