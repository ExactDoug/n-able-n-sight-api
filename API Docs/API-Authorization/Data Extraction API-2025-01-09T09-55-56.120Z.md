                                            # Data Extraction API


                                            Our system gathers a lot of valuable data and displays it in the All Devices view and in our reports. You can also extract and use the data gathered by N-sight RMM using our Data Extraction API. For example, you can:


                                            * [Directly import API data into a spreadsheet](api_excel.htm) for analysis and manipulation
* Extract the data to a database to run your own reports
* Populate your customer's asset database
* Integrate the monitoring system with a third-party vendor

                                            To use the Data Extraction API, you enter URL queries in the following format:

`https://server/api/?apikey=yourAPIkey&service=service_name¶meter=xxx`
                                            When you enter a URL query, you must insert the following items:


                                            
                                                
                                                
                                                
                                                    
                                                        Item
                                                        Description
                                                    
                                                
                                                
                                                    
                                                        server
                                                        [Determine server for API query](determine_url.htm)
                                                        
                                                    
                                                    
                                                        yourAPIkey
                                                        [Generate an API Key](api_key.htm)
                                                        
                                                    
                                                    
                                                        service_name
                                                        Each API Call has a unique service name. For example, the service name for Listing Clients is `list_clients`.
                                                    
                                                    
                                                        parameters and their values
                                                        Each API Call can have required and optional parameters. For example, Listing Clients has the following parameters: `describe` and `devicetype` 
                                                    
                                                
                                            
                                            For more information about API Calls, their service names and parameters, see [API Calls](api_calls.htm).


                                             


                                            Our Data Extraction API is not OData (Open Data Protocol) compatible. 


                                        