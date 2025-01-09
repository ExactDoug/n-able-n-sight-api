                                            # Listing Software


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: list_all_software**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_all_software**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists software sectioned by type for given asset


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                        The required assetid is referenced in the **[list_device_asset_details](listing_device_asset_details.htm)**call


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_all_software**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service=**list_all_software&assetid=**ASSETID


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?> 


                                                        <result created="2009-10-01T12:47:15+01:00" host="SERVER" status="OK">


                                                        <items>


                                                         <software>


                                                           <softwareid>5341882</softwareid> 


                                                           <catalogid>239</catalogid> 


                                                           <name>Security Update for Windows Media Player (KB911564)</name> 


                                                           <version /> 


                                                           <install_date /> 


                                                         </software>


                                                         ... more <software> nodes ...


                                                        </items>


                                                        </result>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Fields Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        softwareid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        The unique identifier of the software on this asset


                                                    
                                                
                                                
                                                    
                                                        catalogid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        The unique identifier of the software


                                                    
                                                
                                                
                                                    
                                                        name


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        The name of the software


                                                    
                                                
                                                
                                                    
                                                        version


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        The version of the software installed on this asset


                                                    
                                                
                                                
                                                    
                                                        install_date


                                                    
                                                    
                                                        datetime


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        The date and time the software was installed


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        