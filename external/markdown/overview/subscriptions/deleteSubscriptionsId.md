## Remove Subscription

Delete an existing subscription

### Request URL
DELETE `https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}}`

### HTTP Example: Delete an subscription

#### Request
```http
DELETE https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response
```http
HTTP/1.1 200 OK
```
