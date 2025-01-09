                                            # Listing Hardware


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: list_all_hardware**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_all_hardware**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists all hardware for the given asset.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                    
                                                
                                                
                                                    
                                                        **assetid**
                                                        


                                                    
                                                    
                                                        The assetid must be a valid asset id. 


                                                        The required assetid is referenced in the [list_device_asset_details](listing_device_asset_details.htm) call.


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_all_hardware**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_all_hardware&assetid=**ASSETID


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?> 


                                                        <result created="2009-10-01T12:20:26+01:00" host="SERVER" status="OK">


                                                        <items>


                                                         <hardware>


                                                           <hardwareid>694760</hardwareid> 


                                                           <manufacturer>Broadcom</manufacturer> 


                                                           <name>Broadcom NetLink (TM) Gigabit Ethernet</name> 


                                                           <details>AdapterType=Ethernet 802.3 MACAddress=00:16:58:CC:DD:FF</details> 


                                                           <hardware_type>1</hardware_type> 


                                                         </hardware>


                                                         ... more <hardware> nodes ...


                                                        </items>


                                                        </result>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                
                                                    
                                                        **Fields Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        hardwareid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        The unique identifier of the hardware on this asset


                                                    
                                                
                                                
                                                    
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


                                                                
                                                            
                                                        
                                                         


                                                         


                                                         


                                                        
                                                             


                                                        
                                                    
                                                
                                                
                                                    
                                                        manufacturer


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        The manufacturer of the hardware.


                                                    
                                                
                                                
                                                    
                                                        name


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        The name of the hardware.


                                                    
                                                
                                                
                                                    
                                                        details


                                                    
                                                    
                                                        text


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Any other details of the hardware.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                    
                                                        **Example Associated Service Calls **
                                                        
                                                    
                                                    
                                                        **Parameter**
                                                        
                                                        **Call**
                                                        
                                                        **URL Format**
                                                        
                                                    
                                                    
                                                        AssetID
                                                        [list_device_asset_details](listing_device_asset_details.htm)
                                                        
                                                        
                                                            https://SERVER/api/?apikey=yourAPIkey&service=**list_device_asset_details&deviceid=**DEVICEID


                                                        
                                                    
                                                    
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
                                                    
                                                
                                            
                                        