                                            # List Wall Chart Settings


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name:****list_Wall Chart_settings**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_wallchart_settings**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists general Wall Chart settings for account, 0 (off) and 1 (on) for each.


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_wallchart_settings**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_wallchart_settings**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0"?>


                                                        <settings created="2010-08-30T14:30:50+01:00" host="SERVER">


                                                          <Wall Chart>


                                                            <servers>


                                                              <show24x7problems>1</show24x7problems>


                                                              <showdailysafetycheckproblems>1</showdailysafetycheckproblems>


                                                              <showautomatedtaskproblems>1</showautomatedTaskproblems>


                                                              <includeoverdueservers>1</includeoverdueservers>


                                                              <includeofflineservers>1</includeofflineservers>


                                                            </servers>


                                                            <workstations>


                                                              <show24x7problems>1</Show24x7problems>


                                                              <showdailysafetycheckproblems>1</showdailysafetycheckproblems>


                                                              <showautomatedtaskproplems>1</showautomatedtaskproblems>


                                                            </workstations>


                                                          </Wall Chart>


                                                        </settings>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Field Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        servers/show24x7problems


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Show 24x7 Problems 0 (off) and 1 (on)


                                                    
                                                
                                                
                                                    
                                                        servers/showdailysafetycheckproblems


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Show Daily Safety Check Problems 0 (off) and 1 (on)


                                                    
                                                
                                                
                                                    
                                                        servers/showautomatedtaskproblems


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Show Automated Task Problems 0 (off) and 1 (on)


                                                    
                                                
                                                
                                                    
                                                        servers/includeoverdueservers


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Include Overdue Servers 0 (off) and 1 (on)


                                                    
                                                
                                                
                                                    
                                                        servers/includeofflineservers


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Include Offline Servers 0 (off) and 1 (on)


                                                    
                                                
                                                
                                                    
                                                        workstations/show24x7problems


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Show 24x7 Problems 0 (off) and 1 (on)


                                                    
                                                
                                                
                                                    
                                                        workstations/showdailysafetycheckproblems


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Show Daily Safety Check Problems 0 (off) and 1 (on)


                                                    
                                                
                                                
                                                    
                                                        workstations/showautomatedtaskproblems


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Show Automated Task Problems 0 (off) and 1 (on)


                                                    
                                                
                                            
                                        