                                            # Listing Device Asset Details


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: list_device_asset_details**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_device_asset_details**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists device asset details identified by deviceid.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_device_asset_details**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_device_asset_details&deviceid=**DEVICEID


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?> 


                                                        <result created="2010-08-30T14:38:59+01:00" host="SERVER" status="OK">


                                                          <client>DOMAIN\foo.user</client>


                                                          <chassistype>Laptop</chassistype>


                                                          <ip>192.168.200.66</ip>


                                                          <mac1>01:23:45:67:89:AA</mac1>


                                                          <mac2>01:23:45:67:89:BB</mac2>


                                                          <mac3>01:23:45:67:89:CC</mac3>


                                                          <user>FOO-LAPTOP</user>


                                                          <manufacturer>LENOVO</manufacturer>


                                                          <model>0657KFG</model>


                                                          <os>Microsoft Windows 7 Professional</os>


                                                          <serialnumber>00000-000-0000000-00000</serialnumber>


                                                          <productkey>ABCDE-12345-ABCDE-12345-XXXXX</productkey>


                                                          <role>0</role>


                                                          <servicepack>0</servicepack>


                                                          <ram>2684354560</ram>


                                                          <scantime>2010-06-30 11:09:00</scantime>


                                                          <custom1 customname="Asset Number">12345</custom1>


                                                          <custom2 customname="Warranty">3 years</custom2>


                                                          <custom3 customname="Test">test custom field</custom3>


                                                          <!-- up to custom10, if available -->


                                                          <hardware>


                                                            <item>


                                                              <hardwareid>123456</hardwareid>


                                                              <name>Realtek RTL8139 Family PCI Fast Ethernet NIC</name>


                                                              <type>0</type>


                                                              <manufacturer>Realtek</manufacturer>


                                                              <details>AdapterType=Ethernet 802.3 MACAddress=01:23:45:67:89:AA


                                                              </details>


                                                              <status></status>


                                                              <deleted>0</deleted>


                                                              <modified>0</modified>


                                                            </item>


                                                            <!-- more items -->


                                                          </hardware>


                                                          <software>


                                                            <item>


                                                              <name>Acrobat.com</name>


                                                              <softwareid>123456</softwareid>


                                                              <version>14.0.8064.0206</version>


                                                              <install_date>2010-01-26 00:00:00</install_date>


                                                              <type>All</type>


                                                              <deleted>0</deleted>


                                                              <modified>0</modified>


                                                            </item>


                                                            <!-- more items -->


                                                          </software>


                                                        </result>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                
                                                    
                                                        **Fields Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        hardware_type


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        The type of hardware:


                                                        
                                                            
                                                            
                                                            
                                                                
                                                                    1


                                                                
                                                                
                                                                    Network Adapter


                                                                
                                                            
                                                            
                                                                
                                                                    2


                                                                
                                                                
                                                                    BIOS


                                                                
                                                            
                                                            
                                                                
                                                                    3


                                                                
                                                                
                                                                    Sound device


                                                                
                                                            
                                                            
                                                                
                                                                    4


                                                                
                                                                
                                                                    Motherboard


                                                                
                                                            
                                                            
                                                                
                                                                    5


                                                                
                                                                
                                                                    Keyboard


                                                                
                                                            
                                                            
                                                                
                                                                    6


                                                                
                                                                
                                                                    Pointing device


                                                                
                                                            
                                                            
                                                                
                                                                    7


                                                                
                                                                
                                                                    Monitor


                                                                
                                                            
                                                            
                                                                
                                                                    8


                                                                
                                                                
                                                                    Video Controller 


                                                                
                                                            
                                                            
                                                                
                                                                    9


                                                                
                                                                
                                                                    Disk Drive


                                                                
                                                            
                                                            
                                                                
                                                                    10


                                                                
                                                                
                                                                    Logical Disk


                                                                
                                                            
                                                            
                                                                
                                                                    11


                                                                
                                                                
                                                                    Physical Memory


                                                                
                                                            
                                                            
                                                                
                                                                    12


                                                                
                                                                
                                                                    Cache Memory


                                                                
                                                            
                                                            
                                                                
                                                                    13


                                                                
                                                                
                                                                    Processor


                                                                
                                                            
                                                            
                                                                
                                                                    14


                                                                
                                                                
                                                                    Tape Drive


                                                                
                                                            
                                                            
                                                                
                                                                    15


                                                                
                                                                
                                                                    Optical Drive


                                                                
                                                            
                                                            
                                                                
                                                                    16


                                                                
                                                                
                                                                    Floppy Disk Drive


                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        role


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        The role performed by the asset


                                                        
                                                            
                                                                
                                                                    0, 1


                                                                
                                                                
                                                                    Windows Workstation


                                                                
                                                            
                                                            
                                                                
                                                                    2,3,4,5


                                                                
                                                                
                                                                    Windows Server


                                                                
                                                            
                                                            
                                                                
                                                                    101


                                                                
                                                                
                                                                    UNIX/Linux


                                                                
                                                            
                                                            
                                                                
                                                                    102


                                                                
                                                                
                                                                    Mac


                                                                
                                                            
                                                            
                                                                
                                                                    103


                                                                
                                                                
                                                                    Printer


                                                                
                                                            
                                                            
                                                                
                                                                    104


                                                                
                                                                
                                                                    Router


                                                                
                                                            
                                                            
                                                                
                                                                    105


                                                                
                                                                
                                                                    NAS


                                                                
                                                            
                                                            
                                                                
                                                                    106


                                                                
                                                                
                                                                    Other Network Device


                                                                
                                                            
                                                            
                                                                
                                                                    other


                                                                
                                                                
                                                                    Unknown


                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        chassistype


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Chassis type (physical workstations only): 


                                                        
                                                            
                                                                
                                                                     8, 9, 10, 11, 14


                                                                
                                                                
                                                                    laptop


                                                                
                                                            
                                                            
                                                                
                                                                    other


                                                                
                                                                
                                                                    desktop


                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        deleted


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Field installation status


                                                        
                                                            
                                                                
                                                                    0


                                                                
                                                                
                                                                    installed


                                                                
                                                            
                                                            
                                                                
                                                                    1


                                                                
                                                                
                                                                    recently deleted, listed for 4 days


                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        software / type


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Field software top


                                                        
                                                            
                                                                
                                                                    Hotfix


                                                                
                                                            
                                                            
                                                                
                                                                    Update


                                                                
                                                            
                                                            
                                                                
                                                                    Lilcenced


                                                                
                                                            
                                                            
                                                                
                                                                    All (as in all others)


                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        modified


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Field modified status


                                                        
                                                            
                                                                
                                                                    0


                                                                
                                                                
                                                                    not modified


                                                                
                                                            
                                                            
                                                                
                                                                    1


                                                                
                                                                
                                                                    modified


                                                                
                                                            
                                                        
                                                    
                                                
                                            
                                             


                                             The Operating System Install Date is included in the list_device_asset_details API call.


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        