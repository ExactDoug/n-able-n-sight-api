* [Home](/) / 
* [Send requests](/docs/sending-requests/requests/) / 
* [Authentication and authorization](/docs/sending-requests/authorization/authorization/) / 
* [Authorization types](/docs/sending-requests/authorization/authorization-types/)
# Authorization types supported by Postman

Postman supports several types of authorization. Select a type from the **Auth Type** dropdown list on the **Authorization** tab of a request. You can choose an authorization type on requests, collections, or folders.


## [No auth](/docs/sending-requests/authorization/authorization-types/#no-auth)


Postman won't send authorization details with a request unless you specify an auth type. If your request doesn't require authorization, select the **Authorization** tab, then select **No Auth** from the **Auth Type** dropdown list.


## [API key](/docs/sending-requests/authorization/authorization-types/#api-key)


With API key auth, you send a key-value pair to the API either in the request headers or query parameters. In the request **Authorization** tab, select **API Key** from the **Auth Type** list. Enter your key name and value, and select either **Header** or **Query Params** from the **Add to** dropdown list. You can store your values in [variables](/docs/sending-requests/variables/variables-intro/) for extra security.


![API Key auth](https://assets.postman.com/postman-docs/v11/api-key-auth-selection-v11-12.jpg)
Postman appends the relevant information to your request **Headers** or the URL query string.


## [Bearer token](/docs/sending-requests/authorization/authorization-types/#bearer-token)


Bearer tokens enable requests to authenticate using an access key, such as a JSON Web Token (JWT). The token is a text string, included in the request header. In the request **Authorization** tab, select **Bearer Token** from the **Auth Type** dropdown list. In the **Token** field, enter your API key value. For added security, store it in a variable and reference the variable by name.


Postman appends the token value to the text `Bearer` in the required format to the request Authorization header as follows:


```
Copy`Bearer <Your API key>
`
```



If you need a custom prefix, use an [API Key](/docs/sending-requests/authorization/authorization-types/#api-key) with a key of **Authorization**.




## [JWT bearer](/docs/sending-requests/authorization/authorization-types/#jwt-bearer)



Postman also supports generating JWT bearer tokens to authorize requests. You can enter a payload in an editor, and JWT tokens are generated and added to the request. In the request **Authorization** tab, select **JWT Bearer** from the **Auth Type** dropdown list.



* **Add JWT token to** - Select **Request Header** or **Query Param** to specify how the JWT token will be added to your request.


* 
**Algorithm** - Select an algorithm to use for the JWT token. Supported algorithms include:


* **HS** - HMAC with SHA
* **RS** - RSA (RSASSA-PKCS1-v1_5) with SHA
* **ES** - ECDSA with SHA
* **PS** - RSA (RSASSA-PSS) with SHA


* 
**Secret** - The secret that's used with the HMAC-SHA algorithm.



* 
**Secret Base64 encoded** - Select if the secret is encoded in the base-64 format.



* 
**Private key** - The private key for signing the token for RS, ES, and PS algorithms. Select **Select file** to upload a private key in PKCS #8 format.



* 
**Payload** - Enter the payload data for your JWT token, in JSON format.




In the **Advanced configuration** section, you can also configure the following items. If you don't configure them, they're generated automatically.


* **Header prefix** - An optional prefix to use at the start of headers. This header prefix is part of the request and not a part of JWT.
* **Headers** - Any custom headers you also want to send in the JWT token. Headers pertaining to the selected algorithm are automatically added.

## [Basic auth](/docs/sending-requests/authorization/authorization-types/#basic-auth)


Basic authentication involves sending a verified username and password with your request. In the request **Authorization** tab, select **Basic Auth** from the **Auth Type** dropdown list.


Enter your API username and password in the **Username** and **Password** fields. For extra security, store these in [variables](/docs/sending-requests/variables/variables-intro/).


In the request **Headers**, the Authorization header passes the API a Base64 encoded string representing your username and password values, appended to the text `Basic` as follows:


```
Copy`Basic <Base64 encoded username and password>
`
```

Last modified: 2024/07/24

[← Public API authorization](/docs/sending-requests/authorization/authentication-for-public-apis/)[Digest →](/docs/sending-requests/authorization/digest-auth/)