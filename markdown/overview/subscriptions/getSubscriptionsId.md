## Fetch Subscription info
Get information about an existing Subscription

### Request URL
GET `https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}}`

### HTTP Example: Fetch an subscription

#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{subscriptionId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Subscription>
    <SubscriptionId>991a60d7-a612-48a5-a86e-326b51997cac</SubscriptionId>
    <OrderType>portins</OrderType>
    <CallbackSubscription>
        <URL>http://customer.com:8087/path/BandwidthHandler</URL>
        <Expiry>4283455101</Expiry>
        <Status>200 OK</Status>
    </CallbackSubscription>
</Subscription>
```
