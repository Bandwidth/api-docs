## Create Subscription

Create a new [subscription](about.md)

### Request URL
POST `https://dashboard.bandwidth.com/api/accounts/{{account}}/subscriptions`

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

### Order Types
| Order type               | Notified states                                                                                                     |
|:-------------------------|:--------------------------------------------------------------------------------------------------------------------|
| `portins`                | `PENDING_DOCUMENTS`, `SUBMITTED`, `FOC`, `REQUESTED_SUPP`, `COMPLETE`, `CANCELLED`, `EXCEPTION`, `REQUESTED_CANCEL` |
| `orders`                 | `COMPLETE`, `PARTIAL`, `BACKORDERED`, `FAILED`                                                                      |
| `portouts`               | `COMPLETE`                                                                                                          |
| `disconnects`            | `COMPLETE`, `PARTIAL`, `FAILED`                                                                                     |
| `dldas`                  | `RECEIVED`, `PROCESSING`, `COMPLETE`, `PARTIAL`, `FAILED`                                                           |
| `lsrorders`              | `PENDING`, `FOC`, `EXCEPTION`, `COMPLETE`, `CANCELLED`, `PARTIAL`, `FAILED`                                         |
| `e911s`                  | `RECEIVED`, `PROCESSING`, `COMPLETE`, `ADJUSTED_COMPLETE`, `PARTIAL`, `ADJUSTED_PARTIAL`, `FAILED`                  |
| `tnoptions`              | `RECEIVED`, `PROCESSING`, `COMPLETE`, `PARTIAL`, `FAILED`                                                           |
| `externalTns`            | `COMPLETE`, `PARTIAL`, `FAILED`                                                                                     |
| `lidb`                   | `PROCESSING`, `COMPLETE`, `PARTIAL`, `FAILED`                                                                       |
| `bulkPortins`            | `DRAFT`, `IN_PROGRESS`, `NEEDS_ATTENTION`, `PARTIAL`, `COMPLETED`, `CANCELLED`                                      |
| `importtnorders`         | `COMPLETE`, `PARTIAL`, `FAILED`, `EXCEPTION`                                                                        |
| `removeImportedTnOrders` | `PROCESSING`, `COMPLETE`, `PARTIAL`, `FAILED`                                                                       |
| `csrs`                   | `COMPLETE`, `FAILED`, `ACTION_REQUIRED`                                                                             |
| `emergencyNotificationGroup` | `COMPLETE`, `FAILED` |
| `emergencyEndpointGroup` | `COMPLETE`, `FAILED` |

### Event Types
| Event type       | Description                                                                                                                                                                                                                                                                                                                                                     |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MESSAGING_LOST` | Sent when TNs in your account are impacted due to orders outside of your account. For example, a `MESSAGING_LOST` event is reported on a TN with hosted messaging service in your account when a port in order placed by another account on the same TN is executed. An order placed in your account to remove the TN will NOT report a `MESSAGING_LOST` event. |


### HTTP Example 1: Create subscription for OrderType Orders

#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
    <OrderType>orders</OrderType>
    <CallbackSubscription>
        <URL>[valid publically addressable URL]</URL>
        <Expiry>3122064000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username> [username] </Username>
                <Password> [password] </Password>
            </BasicAuthentication>
            <PublicKey>kQgQ0VSVElGSUNBVEUtLS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```

#### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://.../accounts/{{accountId}}/subscriptions/{{subscriptionId}}
```

### HTTP Example 2: Create a subscription for a specific portins order Id

#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
    <OrderType>portins</OrderType>
    <OrderId>ee456cfb-d237-4adc-b3f8-9db03d2e62a2<OrderId>
    <CallbackSubscription>
        <URL>[valid publically addressable URL]</URL>
        <Expiry>3122064000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username> [username] </Username>
                <Password> [password] </Password>
            </BasicAuthentication>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```

#### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://.../accounts/{{accountId}}/subscriptions/{{subscriptionId}}
```

### HTTP Example 3: Create a subscription for MESSAGING_LOST Events

#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
    <EventType>MESSAGING_LOST</EventType>
    <CallbackSubscription>
        <URL>[valid publically addressable URL]</URL>
        <Expiry>3122064000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username> [username] </Username>
                <Password> [password] </Password>
            </BasicAuthentication>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```

#### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://.../accounts/{{accountId}}/subscriptions/{{subscriptionId}}
```
