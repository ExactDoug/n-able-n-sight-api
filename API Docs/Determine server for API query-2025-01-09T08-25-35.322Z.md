                                            # Determine server for API query


                                            The API Key is associated with the [Agent Key user](setupdashboardusers.htm), permissions and assigned [Client Groups](client_groups.htm). If the Agent Key user has been assigned to a Client Group that contains either no Clients or a subset of Clients, API calls made using the generated API Key can only return data associated with the Clients in the assigned Client Group.
        Where security requires that the Agent Key user access to Client information within N-sight RMM must be restricted, we recommend that the [Agent Key  Access is revoked](disable_pak.htm). 


                                            When you use the Data Extraction API, you enter URL queries that require the server URL for your N-sight RMM account territory.


                                            `https://server/api/?apikey=yourAPIkey&service=service_name¶meter=xxx`
                                            


                                            
                                                The database server to query is dependent on the territory your account is registered under. The current territories and their URLs are:


                                                
                                                    
                                                        
                                                            
                        Territory
                    
                                                            
                        URL
                    
                                                        
                                                    
                                                    
                                                        
                                                            
                        Americas
                    
                                                            
                        https://www.am.remote.management/
                    
                                                        
                                                        
                                                            
                        Asia
                    
                                                            
                        https://wwwasia.system-monitor.com/
                    
                                                        
                                                        
                                                            
                        Australia
                    
                                                            
                        https://www.system-monitor.com/ 
                    
                                                        
                                                        
                                                            
                        Europe
                    
                                                            
                        https://wwweurope1.systemmonitor.eu.com/
                    
                                                        
                                                        
                                                            
                        France (FR)
                    
                                                            
                        https://wwwfrance.systemmonitor.eu.com/
                    
                                                        
                                                        
                                                            
                        France1
                    
                                                            
                        https://wwwfrance1.systemmonitor.eu.com/
                    
                                                        
                                                        
                                                            
                        Germany
                    
                                                            
                        https://wwwgermany1.systemmonitor.eu.com/
                    
                                                        
                                                        
                                                            
                        Ireland
                    
                                                            
                        https://wwwireland.systemmonitor.eu.com/
                    
                                                        
                                                        
                                                            
                        Poland
                    
                                                            
                        https://wwwpoland1.systemmonitor.eu.com/
                    
                                                        
                                                        
                                                            
                        United Kingdom 
                    
                                                            
                        https://www.systemmonitor.co.uk/ 
                    
                                                        
                                                        
                                                            
                        United States
                    
                                                            
                        https://www.systemmonitor.us/ 
                    
                                                        
                                                    
                                                
                                                For example,  a user in the United Kingdom uses the server URL: **https://www.systemmonitor.co.uk/**


                                            
                                            The following is a sample query for listing servers from the United Kingdom territory:

`https://www.systemmonitor.co.uk/api/?apikey=1234567890abcdefg&service=list_servers&siteid=123`
                                            ## Determine API Server URL from N-sight RMM URL


                                            If you are unsure of your N-sight RMM account territory:


                                            * Look at the URL you use to access N-sight RMM as it may include a region reference, or
* If the URL does not mention a region, for example a custom domain, append **/dashboard** to one of above URLs and attempt login to your N-sight RMM at the prompt. Based on the United Kingdom this would look like: **https://www.systemmonitor.co.uk/dashboard**
* If you cannot determine the region from a custom N-sight RMM URL. Open a command prompt or terminal on the device and perform an nslookup on the custom N-sight RMM URL:
* nslookup dashboard.custom.domain...Non-authoritative answer:Name:    dashboard.systemmonitor.co.uk...

                                            ## Where do you want to go?


                                            * [Generate an API Key](api_key.htm)
                                                

                                        