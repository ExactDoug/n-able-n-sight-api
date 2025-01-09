                                            # Describe parameter


                                            Providing the _describe=true_ parameter as part of the API service call returns a _description_ of the entered call, the available _parameters_, an _example_ of its output and a returned _fielddescription._


                                            To utilize this parameter simply append _describe=true_ to the API service call. For example:


                                            
                                                https://SERVER/api/?apikey=yourAPIkey&service=list_sites&describe=true
                                                


                                                https://SERVER/api/?apikey=yourAPIkey&service=list_fmt_check_result&describe=true
                                                


                                                https://SERVER/api/?apikey=yourAPIkey&service=list_failing_checks&describe=true 
                                                


                                            
                                            ## Example — describe parameter 


                                            https://SERVER/api/?apikey=yourAPIkey&service=list_sites&describe=true
                                            


                                            
                                                ### Example response

```
<?xml version="1.0" ?>
<result created="2015-07-20T12:24:06+01:00" host="SERVER" status="OK">
<service>
<name>list_sites</name>
      <url>
https://SERVER/api/default.php?apikey=api_token&service=list_sites<br />&required_parameters=required_parameters<br />
[&optional_parameters=optional_parameters]
</url>
<description>Lists all sites for a client.</description>
<parameters>
<parameter>
<name>describe</name>
<type>boolean</type>
<default>0</default>
<values>true</values>
<description>Optional. Returns a description of the service.</description>
<required>no</required>
</parameter>
<parameter>
<name>clientid</name>
<type>integer</type>
<default>0</default>
<values>0</values>
<description>The clientid must be a valid id.</description>
<required>yes</required>
</parameter>
</parameters>
<example>
<?xml version="1.0" ?>
 <result created="2009-09-24T16:16:18+01:00" host="SERVER" status="OK">
  <items>
   <site>
    <siteid>21251</siteid>
    <name>DESIO</name>
    <connection_ok>1</connection_ok>
    <creation_date>2009-06-01</creation_date>
    <primary_router>www.prime.com</primary_router>
    <secondary_router>www.second.com<secondary_router>
   </site>
   ..... more <site> nodes
  </items>
</result>
</example>
<fielddescriptions>
<table id="details-table" width="100%" style="text-align:left; border:1px solid;" cellspacing="5" cellpadding="3" valign="top">
 <tr bgcolor="#cccccc">
  <th>Field</th>
  <th>Type</th>
  <th>Can Be Empty</th>
  <th>Description</th>
 </tr>
 <tr valign="top">
  <td>siteid</td>
  <td>integer</td>
  <td>no</td>
  <td>Unique identifier of site</td>
 </tr>
 <tr valign="top">
  <td>name</td>
  <td>string</td>
  <td>no</td>
  <td>name of site</td>
 </tr>
 <tr valign="top">
  <td>primary_router</td>
  <td>string</td>
  <td>yes</td>
  <td>IP address or hostname of primary router at site</td>
 </tr>
 <tr valign="top">
  <td>secondary_router</td>
  <td>string</td>
  <td>yes</td>
  <td>IP address or hostname of secondary router at site (if dual routing used)</td>
 </tr>
 <tr valign="top">
  <td>connection_ok</td>
  <td>integer (1 or 0)</td>
  <td>no</td>
  <td>In the event that one or more servers at that site have stopped sending data, have we been able to reach the site (ping)<br />
 0 site unreachable<br />
 1 site reachable
</td>
 </tr>
 <tr valign="top">
  <td>creation_date</td>
  <td>date</td>
  <td>yes</td>
  <td>Creation date of site.</td>
 </tr>
</table>
</fielddescriptions>
</service>
</result>
	
```


                                            
                                        