                                            # Generate an API Key


                                            The API Key is associated with the [Agent Key user](setupdashboardusers.htm), permissions and assigned [Client Groups](client_groups.htm). If the Agent Key user has been assigned to a Client Group that contains either no Clients or a subset of Clients, API calls made using the generated API Key can only return data associated with the Clients in the assigned Client Group.
        Where security requires that the Agent Key user access to Client information within N-sight RMM must be restricted, we recommend that the [Agent Key  Access is revoked](disable_pak.htm). 


                                            When you use the Data Extraction API, you enter URL queries that require the API Key for your N-sight RMM account.


                                            `https://server/api/?apikey=yourAPIkey&service=service_name¶meter=xxx`
                                            


                                            To generate the  API Key to query the N-sight RMM system:


                                            The API Key is used to authenticate against the Public API. If you regenerate a new key, anything that uses the existing key to authenticate against the Public API will stop working. If you already have an API Key, we recommend you use it.


                                            1. Log in to N-sight RMM as a [Superuser or (non-Classic) Administrator level access](rp_default_permissions.htm), or using a login with the required [General](rp_main.htm) permissions enabled, or using the Agent Key (if [enabled](disable_pak.htm)).
            
1. On the [All Devices view](rmm_dashboard.htm), go to **Settings** > **General Settings**  > **API**.
1. Select **Generate** (or **Regenerate** when you are creating a new API Key) and record the API Key for future use.You can generate the API Key as often as required. Each regeneration overwrites the existing key.

[![](public_api_key_setting_thumb_500_0.png)](public_api_key_setting.png)


1. Enter the recipient email address in the **Email API Token to (optional)** field and click **Email Token** (Optional). The sent email includes the API Key and the server URL to query.


1. Select **OK** to apply.

                                            ## Where do you want to go?


                                            * [Determine server for API query](determine_url.htm)
                                                

                                        