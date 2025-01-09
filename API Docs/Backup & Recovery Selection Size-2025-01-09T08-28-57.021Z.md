                                            # Backup & Recovery Selection Size


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: mob/mob_list_selection_size**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**mob/mob_list_selection_size**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Returns the Backup & Recovery - previously known as Managed Online Backup - (MOB) selection size for the specified device for the entered month and year combination. Please be aware that the backup values stated in this API call are in Bytes. If you require this information in Megabyte, divide the backup values by 1048576 (or _backup value/1024/1024_) and for Gigabytes divide the backup values by 1073741824 (or_ backup value/1024/1024/1024_).


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                    
                                                
                                                
                                                    
                                                        **clientid**
                                                        


                                                    
                                                    
                                                        The id of the client for which information is to be returned. 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        yes
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                                
                                                    
                                                        **siteid**
                                                        


                                                    
                                                    
                                                        The id of the site for which information is to be returned. 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        yes
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                                
                                                    
                                                        **deviceid**
                                                        


                                                    
                                                    
                                                        The id of the device for which information is to be returned. 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        yes
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                                
                                                    
                                                        **year**
                                                        


                                                    
                                                    
                                                        The year to query 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                                
                                                    
                                                        **month**
                                                        


                                                    
                                                    
                                                        The month to query (month number)


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =mob/mob_list_selection_size**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**mob/mob_list_selection_size&month=**MONTH_NUMBER**&year=**YEAR**&clientid=**CLIENTID**&siteid=**SITEID**&deviceid=**DEVICEID
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?> 


                                                        <result created="2013-03-08T15:07:54+00:00" host="Server" status="OK">


                                                           <selection>


                                                              <client active="true">


                                                                 <clientid>1</clientid>


                                                                 <name>


                                                                    <![CDATA[Test Client1]]>


                                                                 </name>


                                                                 <site active="true">


                                                                    <siteid>1</siteid>


                                                                    <name>


                                                                       <![CDATA[Test Site11]]>


                                                                    </name>


                                                                    <workstations>


                                                                       <workstation active="false">


                                                                          <deviceid>1</deviceid>


                                                                          <name>


                                                                             <![CDATA[Removed Device]]>


                                                                          </name>


                                                                          <slot active="true">


                                                                             <slotid>1</slotid>


                                                                             <SystemStateBackupPlugin>2097152</SystemStateBackupPlugin>


                                                                             <FsBackupPlugin>1048576</FsBackupPlugin>


                                                                          </slot>


                                                                          <total>3145728</total>


                                                                       </workstation>


                                                                       <workstation active="true">


                                                                          <deviceid>2</deviceid>


                                                                          <name>


                                                                             <![CDATA[Active Device 2]]>


                                                                          </name>


                                                                          <slot active="false">


                                                                             <slotid>2</slotid>


                                                                             <FsBackupPlugin>1048576</FsBackupPlugin>


                                                                          </slot>


                                                                          <total>1048576</total>


                                                                       </workstation>


                                                                       <workstation active="true">


                                                                          <deviceid>3</deviceid>


                                                                          <name>


                                                                             <![CDATA[Active Device 3]]>


                                                                          </name>


                                                                          <slot active="true">


                                                                             <slotid>3</slotid>


                                                                             <NetworkSharesBackupPlugin>2097172</NetworkSharesBackupPlugin>


                                                                             <SystemStateBackupPlugin>2097152</SystemStateBackupPlugin>


                                                                             <FsBackupPlugin>16717655425</FsBackupPlugin>


                                                                          </slot>


                                                                          <total>16721849749</total>


                                                                       </workstation>


                                                                    </workstations>


                                                                    <servers/>


                                                                    <total>16726044053</total>


                                                                 </site>


                                                                 <site active="true">


                                                                    <siteid>2</siteid>


                                                                    <name>


                                                                       <![CDATA[Test Site21]]>


                                                                    </name>


                                                                    <workstations/>


                                                                    <servers>


                                                                       <server active="true">


                                                                          <deviceid>4</deviceid>


                                                                          <name>


                                                                             <![CDATA[Active Device Server 4]]>


                                                                          </name>


                                                                          <slot active="true">


                                                                             <slotid>4</slotid>


                                                                             <SystemStateBackupPlugin>16715155489</SystemStateBackupPlugin>


                                                                             <NetworkSharesBackupPlugin>18715155425</NetworkSharesBackupPlugin>


                                                                          </slot>


                                                                          <total>35430310914</total>


                                                                       </server>


                                                                    </servers>


                                                                    <total>35430310914</total>


                                                                 </site>


                                                                 <total>52156354967</total>


                                                              </client>


                                                              <client active="true">


                                                                 <clientid>2</clientid>


                                                                 <name>


                                                                    <![CDATA[Test Client2]]>


                                                                 </name>


                                                                 <site active="true">


                                                                    <siteid>3</siteid>


                                                                    <name>


                                                                       <![CDATA[Test Site32]]>


                                                                    </name>


                                                                    <workstations>


                                                                       <workstation active="true">


                                                                          <deviceid>5</deviceid>


                                                                          <name>


                                                                             <![CDATA[Active Device 5]]>


                                                                          </name>


                                                                          <slot active="true">


                                                                             <slotid>5</slotid>


                                                                             <FsBackupPlugin>19715155425</FsBackupPlugin>


                                                                          </slot>


                                                                          <slot active="false">


                                                                             <slotid>6</slotid>


                                                                             <SystemStateBackupPlugin>19815155425</SystemStateBackupPlugin>


                                                                          </slot>


                                                                          <total>39530310850</total>


                                                                       </workstation>


                                                                    </workstations>


                                                                    <servers/>


                                                                    <total>39530310850</total>


                                                                 </site>


                                                                 <total>39530310850</total>


                                                              </client>


                                                              <client active="false">


                                                                 <clientid>4</clientid>


                                                                 <name>


                                                                    <![CDATA[Removed Client]]>


                                                                 </name>


                                                                 <site active="false">


                                                                    <siteid>6</siteid>


                                                                    <name>


                                                                       <![CDATA[Removed Site]]>


                                                                    </name>


                                                                    <workstations>


                                                                       <workstation active="false">


                                                                          <deviceid>6</deviceid>


                                                                          <name>


                                                                             <![CDATA[Removed Device 2]]>


                                                                          </name>


                                                                          <slot active="false">


                                                                             <slotid>7</slotid>


                                                                             <SystemStateBackupPlugin>199155425</SystemStateBackupPlugin>


                                                                          </slot>


                                                                          <total>199155425</total>


                                                                       </workstation>


                                                                    </workstations>


                                                                    <servers/>


                                                                    <total>199155425</total>


                                                                 </site>


                                                                 <total>199155425</total>


                                                              </client>


                                                              <total>91885821242</total>


                                                           </selection>


                                                        </result>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Field Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        selection/total


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Total selection size for account in bytes.


                                                    
                                                
                                                
                                                    
                                                        client/clientid


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Unique ID of the client.


                                                    
                                                
                                                
                                                    
                                                        client/name


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Name of the client.


                                                    
                                                
                                                
                                                    
                                                        client@active


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        True if the client still exists.


                                                    
                                                
                                                
                                                    
                                                        client/total


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Total selection size for client in bytes.


                                                    
                                                
                                                
                                                    
                                                        site/siteid


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Unique ID of the site.


                                                    
                                                
                                                
                                                    
                                                        site/name


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Name of the client.


                                                    
                                                
                                                
                                                    
                                                        site@active


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        True if the site still exists.


                                                    
                                                
                                                
                                                    
                                                        site/total


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Total selection size for site in bytes.


                                                    
                                                
                                                
                                                    
                                                        server/deviceid


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Unique ID of the device.


                                                    
                                                
                                                
                                                    
                                                        server/name


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Name of the device.


                                                    
                                                
                                                
                                                    
                                                        server@active


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        True if the device still exists.


                                                    
                                                
                                                
                                                    
                                                        workstation/deviceid


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Unique ID of the device.


                                                    
                                                
                                                
                                                    
                                                        workstation/name


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Name of the device.


                                                    
                                                
                                                
                                                    
                                                        workstation@active


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        True if the device still exists.


                                                    
                                                
                                                
                                                    
                                                        server or workstation/total


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Total selection size for device in bytes.


                                                    
                                                
                                                
                                                    
                                                        slot/slotid


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Unique ID of the Backup & Recovery slot.


                                                    
                                                
                                                
                                                    
                                                        slot@active


                                                    
                                                    
                                                        String


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        True if the slot is actively being used by a device.


                                                    
                                                
                                                
                                                    
                                                        slot/*Plugin


                                                    
                                                    
                                                        Integer


                                                    
                                                    
                                                        No


                                                    
                                                    
                                                        Selected size of storage in bytes for plugin.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        