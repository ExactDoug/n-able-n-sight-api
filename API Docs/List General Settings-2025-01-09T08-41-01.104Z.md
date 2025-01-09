                                            # List General Settings


                                            Use this API Call to query our Data Extraction API to extract data gathered by N-sight RMM.This section shows the service name and parameters needed in the API Call query, and provides examples of some queries and system responses.  For more information, see [Data Extraction API](data_extraction_api.htm).


                                            
                                                
                                                    
                                                        **Service name:****list_general_settings**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **URL**
                                                        


                                                    
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_general_settings**
                                                        


                                                        **&required_parameters=required_parameters**
                                                        


                                                        **[&optional_parameters=optional_parameters] **
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Description**
                                                        


                                                    
                                                    
                                                        Lists general settings for account


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
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


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Example Service Call =list_general_settings**
                                                        


                                                    
                                                
                                                
                                                    
                                                        https://SERVER/api/?apikey=yourAPIkey&service**=list_general_settings**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Example Response**
                                                        


                                                    
                                                
                                                
                                                    
                                                        <?xml version="1.0"?>


                                                        <settings created="2010-09-16T08:53:03+01:00" host="SERVERi">


                                                          <items>


                                                            <general>


                                                              <language>en_GB</language>


                                                              <clear24x7checks>1</clear24x7checks>


                                                              <cleardailysafetychecks>1</cleardailysafetycheck>


                                                              <notesbacklog>90</notesbacklog>


                                                              <forcenotes>0</forcenotes>


                                                              <vartimezone>Europe/London</vartimezone>


                                                            </general>


                                                          </items>


                                                        </settings>


                                                    
                                                
                                            
                                             


                                            
                                                
                                                    
                                                        **Field Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        **Field**
                                                        


                                                    
                                                    
                                                        **Type**
                                                        


                                                    
                                                    
                                                        **Can Be Empty**
                                                        


                                                    
                                                    
                                                        **Description**
                                                        


                                                    
                                                
                                                
                                                    
                                                        language


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Language representation


                                                    
                                                
                                                
                                                    
                                                        clear24x7checks 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        1 or 0 flag


                                                    
                                                
                                                
                                                    
                                                        cleardailysafetychecks


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        1 or 0 flag


                                                    
                                                
                                                
                                                    
                                                        notesbacklog 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        Number of days


                                                    
                                                
                                                
                                                    
                                                        forcenotes 


                                                    
                                                    
                                                        integer


                                                    
                                                    
                                                        no


                                                    
                                                    
                                                        1 or 0 flag


                                                    
                                                
                                                
                                                    
                                                        vartimezone 


                                                    
                                                    
                                                        string


                                                    
                                                    
                                                        yes


                                                    
                                                    
                                                        Account time zone


                                                    
                                                
                                            
                                        