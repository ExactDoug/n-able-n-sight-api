                                            # Listing Clients


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        Service name: list_clients


                                                    
                                                
                                                
                                                    
                                                        URL


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPItoken&service**=list_clients**
                                                            **&required_parameters=required_parameters**
                                                            **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        Description


                                                    
                                                    
                                                        Lists all clients. If devicetype is given, the list will only show client that have active devices of that type.


                                                        Note: the dashboard_username field is populated where the deprecated Classic Client login was created.


                                                    
                                                
                                            
                                            
                                                
                                                    
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


                                                    
                                                
                                                
                                                    
                                                        **devicetype**
                                                        


                                                    
                                                    
                                                        The devicetype is optional but if used should be either "server" or "workstation" or "mobile_device" 


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        _server_
                                                        


                                                        _workstation_
                                                        


                                                        _mobile_device_
                                                        


                                                    
                                                    
                                                        server


                                                    
                                                
                                            
                                            
                                                
                                                    
                                                        **Example Service Call =list_clients**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPItoken&service=**list_clients**


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    ```
<?xml version="1.0" ?> 
<result created="2015-07-20T09:45:09+01:00" host="SERVER" status="OK">
<items>
<client>
<name>Test Client</name>
<clientid>123456789</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2014-04-30</creation_date>
<server_count>5</server_count>
<workstation_count>20</workstation_count>
<mobile_device_count>0</mobile_device_count>
<device_count>25</device_count>
</client>
<client>
<name>Test Client 2</name>
<clientid>123456799</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test2.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2014-11-18</creation_date>
<server_count>0</server_count>
<workstation_count>0</workstation_count>
<mobile_device_count>21</mobile_device_count>
<device_count>21</device_count>
</client>
...more client nodes...
</items>
</result>
```


                                                    
                                                
                                                
                                                    
                                                        **Example Service Call =list_clients&devicetype=server**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPItoken&service=**list_clients&devicetype=server**


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    ```
<?xml version="1.0" ?> 
<result created="2015-07-20T09:45:09+01:00" host="SERVER" status="OK">
<items>
<client>
<name>Test Client</name>
<clientid>123456789</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2014-04-30</creation_date>
<server_count>5</server_count>
<workstation_count>20</workstation_count>
<mobile_device_count>0</mobile_device_count>
<device_count>25</device_count>
</client>
<client>
<name>Test Client 4</name>
<clientid>123456791</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test4.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2015-05-10</creation_date>
<server_count>3</server_count>
<workstation_count>0</workstation_count>
<mobile_device_count>0</mobile_device_count>
<device_count>3</device_count>
</client>
...more client nodes...
</items>
</result>
					
```


                                                    
                                                
                                                
                                                    
                                                        **Example Service Call =list_clients&devicetype=workstation**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPItoken&service=**list_clients&devicetype=workstation**


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    ```
<?xml version="1.0" ?> 
<result created="2015-07-20T09:36:25+01:00" host="SERVER" status="OK">
<items>
<client>
<name>Test Client</name>
<clientid>123456789</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2014-04-30</creation_date>
<server_count>5</server_count>
<workstation_count>20</workstation_count>
<mobile_device_count>0</mobile_device_count>
<device_count>25</device_count>
</client>
<client>
<name>Test Client 3</name>
<clientid>123456797</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test3.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2015-01-06</creation_date>
<server_count>0</server_count>
<workstation_count>8</workstation_count>
<mobile_device_count>3</mobile_device_count>
<device_count>11</device_count>
</client>
...more client nodes...
</items>
</result>
					
```


                                                    
                                                
                                                
                                                    
                                                        **Example Service Call =list_clients&devicetype=mobile_device**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPItoken&service=**list_clients&devicetype=mobile_device**


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    ```
<?xml version="1.0" ?> 
<result created="2015-07-20T09:36:25+01:00" host="SERVER" status="OK">
<items>
<client>
<name>Test Client 2</name>
<clientid>123456799</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test2.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2014-11-18</creation_date>
<server_count>0</server_count>
<workstation_count>0</workstation_count>
<mobile_device_count>21</mobile_device_count>
<device_count>21</device_count>
</client>
<client>
<name>Test Client 3</name>
<clientid>123456797</clientid>
<view_dashboard>1</view_dashboard>
<view_wkstsn_assets>1</view_wkstsn_assets>
<dashboard_username>client@test3.it</dashboard_username>
<timezone>Europe/London</timezone>
<creation_date>2015-01-06</creation_date>
<server_count>0</server_count>
<workstation_count>8</workstation_count>
<mobile_device_count>3</mobile_device_count>
<device_count>11</device_count>
</client>
...more client nodes...
</items>
</result>
					
```


                                                    
                                                
                                            
                                            
                                                
                                                    
                                                        **Fields Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        name


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Name of client


                                                    
                                                
                                                
                                                    
                                                        clientid


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Unique identifier of client


                                                    
                                                
                                                
                                                    
                                                        view_dashboard


                                                    
                                                    
                                                        integer (1 or 0)


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Is dashboard access enabled for client? 


                                                        
                                                            
                                                                
                                                                    0


                                                                
                                                                
                                                                    No


                                                                
                                                            
                                                            
                                                                
                                                                    1


                                                                
                                                                
                                                                    Yes


                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        view_wkstsn_assets


                                                    
                                                    
                                                        integer (1 or 0)


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        If dashboard access is enabled for client, can client view workstations and assets (or servers only)? 


                                                        
                                                            
                                                                
                                                                    0


                                                                
                                                                
                                                                    No


                                                                
                                                            
                                                            
                                                                
                                                                    1


                                                                
                                                                
                                                                    Yes


                                                                
                                                            
                                                        
                                                    
                                                
                                                
                                                    
                                                        dashboard_username


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Username used to access client


                                                    
                                                
                                                
                                                    
                                                        timezone


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Timezone of client


                                                    
                                                
                                                
                                                    
                                                        creation_date


                                                    
                                                    
                                                        date


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Creation date of client


                                                    
                                                
                                                
                                                    
                                                        server_count


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Total number of active servers for client


                                                    
                                                
                                                
                                                    
                                                        workstation_count


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Total number of active workstations for client


                                                    
                                                
                                                
                                                    
                                                        mobile_device_count


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Total number of active mobile devices for client


                                                    
                                                
                                                
                                                    
                                                        device_count


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Total number of active devices for client


                                                    
                                                
                                            
                                        