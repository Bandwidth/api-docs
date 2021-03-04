## Remove Application

Delete an existing application

### Request URL

DELETE `https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}}`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.


### HTTP Example: Delete an application
#### Request
```http
DELETE https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml
```
