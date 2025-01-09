                                            # Quarantine Remove


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name: mav_quarantine_remove**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=mav_quarantine_remove**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Delete threats from the Managed Antivirus quarantine on the specified device


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                    
                                                
                                                
                                                    
                                                        **guids**
                                                        


                                                    
                                                    
                                                        The data parameter is one (or more as a sequence of comma seperated values) GUID code(s) as return by **[mav_quarantine_list](managed_antivirus_quarantine_l.htm) quarantineguid**


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        **yes**
                                                        


                                                    
                                                    
                                                        0


                                                    
                                                    
                                                        0


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =mav_quarantine_remove**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=mav_quarantine_remove&deviceid=**DEVICEID**&guids=**GUID,{GUID},{GUID}
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response: Success**
                                                        


                                                    
                                                
                                                
                                                    
                                                         <?xml version="1.0" ?>


                                                        <result created="2011-08-25T15:54:05" host="SERVER" status="OK"> 


                                                         <msg /> 


                                                        </result> 


                                                    
                                                
                                                
                                                    
                                                        **Example Response: Failure**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0" ?>


                                                        <result created="2011-08-25T15:54:05" host="SERVER" status="FAIL"> 


                                                         <msg>{fail message}</msg> 


                                                        </result>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Fields Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        msg


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Message related to the action status.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                
                                                
                                                
                                                    
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
                                                    
                                                
                                            
                                        