                                            # Directly import API data into a spreadsheet


                                            The API Key is associated with the [Agent Key user](setupdashboardusers.htm), permissions and assigned [Client Groups](client_groups.htm). If the Agent Key user has been assigned to a Client Group that contains either no Clients or a subset of Clients, API calls made using the generated API Key can only return data associated with the Clients in the assigned Client Group.
        Where security requires that the Agent Key user access to Client information within N-sight RMM must be restricted, we recommend that the [Agent Key  Access is revoked](disable_pak.htm). 


                                            You can query the Data Extraction API URL to export data in an XML format to import into your choice of software for analysis and manipulation. You can choose several options to manipulate XML data such as  a [Microsoft Excel Power Query](data_dump_power_query.htm) or using [PivotTables](pivot_tables.htm).


                                            In this section, we show the basic steps to import data from the Data Extraction API into Microsoft Excel, and provide steps for the  [2010 edition](#Microsoft_Excel_2010).


                                             


                                            We recommend you ensure the API URL returns data before you attempt to import data to a spreadsheet.


                                             


                                            Due to the reduced feature set for Microsoft Excel online, not all these options may be available if you use the online version.
    


                                            ## []()Import the API data as XML


                                            To enable the Developer tab in the Excel ribbon:


                                            1. In Microsoft Excel, select the **File** tab, then go to **Options > Customize Ribbon**
1. In the Customize the Ribbon drop-down menu select **Main Tabs**
1. Select the **Developer** check box then **OK** to apply
1. [![](excel_api_thumb_300_0.png)](excel_api.png)
                                                

                                            To create XML Map: 


                                            1. Open a blank workbook
1. Go to the Developer tab and click on **Source**
1. Click the **XML Maps** button in the XML Source pane on the right
1. Click **Add**, enter the full API URL including the API Key and service call (Format example: https://SERVER/api/?apikey=yourAPIkey&service=list_failing_checks) in the File name then select **Open**
1. Click **OK** to create a schema based on the XML source data when prompted by Excel, then **OK** again in the XML Maps dialog
1. [![](api_excel_schema_thumb_300_0.png)](api_excel_schema.png)
                                                
1. To apply this schema to the workbook, hold "result" at the top of the XML schema in the "XML Source" pane then drag it to the target location in the spreadsheet (for example cell 'A1')
1. Right-click the location to import the API data to (for example cell 'A2') from the context menu select **XML > XML Import**[![](api_excel_populated_thumb_300_0.png)](api_excel_populated.png)


1. Enter the full API URL including the API Key and service call (Format example: https://SERVER/api/?apikey=yourAPIkey&service=list_failing_checks) then **Open**Excel connects to the API, retrieves the data and populates the workbook

 
1.  
1. To refresh the information in the workbook go to the Data tab, and click **Refresh All**.

                                            ## []()Microsoft Excel 2010


                                            [![api_excel_imported](api_excel_imported.zoom62_thumb_700_0.png)](api_excel_imported.zoom62.png)
                                            


                                            1. Launch Microsoft Excel and create a blank workbook
1. Click the **Data** tab then select **From Web** in the Get External Data section  
1. 
                                                    ![api_excel_get_data](api_excel_get_data.zoom73.png)
                                                
1. Enter the API URL in the **Address** field of the **New Web Query **dialog and click **Go**
1. The contents of the URL display in the dialog’s window and if everything is correct click **Import**![api_excel_new_query](api_excel_new_query.zoom68.png) 

The download of data into _Microsoft Excel_ begins (depending upon its configuration you may be required to accept an XML scheme informational message).


1. In the **Import Data** dialog, select the location where you want to put the data
				![api_excel_import_data](api_excel_import_data.png)


1. You can now manipulate and analyze the data  using _Microsoft Excel, _for example with [Pivot Tables](pivot_tables.htm) or a [Microsoft Excel Power Query](data_dump_power_query.htm).

                                        