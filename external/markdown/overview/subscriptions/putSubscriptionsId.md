## Entirely Update Subscription
PUT method will replace **ALL** existing fields.

### Request URL
PUT `https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions/{{subscriptionId}}`

#### Basic Authentication
Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../account/bandwidthAccountCredentials.md) document.

### Supported Parameters
| Parameters                     | Mandatory                                               | Description                                                                                                                                                                                                                                                       |
|:-------------------------------|:--------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `OrderType`                    | No* (one of `OrderType` or `EventType` must be set) | The type of Order (see table below) of the subscription. Will send [Order Based Callbacks](../../../numbers/callbacks/orderNotification.md).                                                                                                                      |
| `EventType`                    | No* (one of `OrderType` or `EventType` must be set) | The type of Event (see table below) of the subscription  Will send [Event Based Callbacks](../../../numbers/callbacks/eventNotification.md).                                                                                                                      |
| `OrderId`                      | No                                                      | A unique `OrderId` of the same `OrderType`.  <br>Use the `OrderId` if you want to get callbacks for a **specific** order. Typically used for porting numbers.                                                                                                     |
| `CallbackSubscription`         | Yes                                                     | Container for the callback details                                                                                                                                                                                                                                |
| `Expiry`                       | Yes                                                     | The time **in seconds** to persist the subscription. Example Times: 99 years = `3122064000` seconds, 2 weeks = `1209600` seconds, 1 week = `604800` seconds, 1 day = `86400` seconds, 1 hour = `3600` seconds |
| `URL`                          | Yes                                                     | Url to receive callbacks for the specified `orderId` or `orderType`                                                                                                                                                                                               |
| `CallbackCredentials`          | No, but highly recommended                              | Container for the Auth                                                                                                                                                                                                                                            |
| `BasicAuthentication`          | -                                                       | Basic auth credentials to apply to your message & voice events                                                                                                                                                                                                    |
| `BasicAuthentication.Username` | No, but highly recommended                              | Basic auth `Username`                                                                                                                                                                                                                                             |
| `BasicAuthentication.Password` | No, but highly recommended                              | Basic auth `Password`                                                                                                                                                                                                                                             |
| `PublicKey`                    | No                                                      | BASE64 encoded public key matching the notification receiving server                                                                                                                                                                                              |

### HTTP Example: Remove the CallbackCreds from an subscription

#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
    <OrderType>orders</OrderType>
    <CallbackSubscription>
        <URL>[Same URL as before]</URL>
        <Expiry>3122064000</Expiry>
    </CallbackSubscription>
</Subscription>
```

#### Response
```http
HTTP/1.1 200 OK
```
