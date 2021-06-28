## List Subscriptions

List all subscriptions on your account

### Request URL
GET `https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions`

### HTTP Example: List all subscriptions

#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SubscriptionsResponse>
    <Subscriptions>
        <Subscription>
            <SubscriptionId>0b3aa54d-0ce5-4f5b-bd75-1c30967b197f</SubscriptionId>
            <OrderType>orders</OrderType>
            <EmailSubscription>
                <Email>bwtest@gmail.com</Email>
                <DigestRequested>NONE</DigestRequested>
            </EmailSubscription>
        </Subscription>
        <Subscription>
            <SubscriptionId>ddf05927-780f-4f8f-89ab-e581f52f5f20</SubscriptionId>
            <CallbackSubscription>
                <URL>"https://company.com/iriscallback"</URL>
                <Expiry>30000</Expiry>
                <Status>some message containing status code and response body of last callback</Status>
                <CallbackCredentials>
                    <BasicAuthentication>
                        <Username>iris</Username>
                    </BasicAuthentication>
                </CallbackCredentials>
            </CallbackSubscription>
        </Subscription>
        <Subscription>
            <SubscriptionId>1b2av54d-0ce5-4f5b-bd75-1c30967b197f</SubscriptionId>
            <EventType>MESSAGING_LOST</EventType>
            <EmailSubscription>
                <Email>bwtest@gmail.com</Email>
                <DigestRequested>DAILY</DigestRequested>
            </EmailSubscription>
        </Subscription>
        <Subscription>
            <SubscriptionId>1cf05927-780f-4f8f-89ab-e581f52f5e12</SubscriptionId>
            <EventType>MESSAGING_LOST</EventType>
            <CallbackSubscription>
                <URL>"https://company.com/iriscallback"</URL>
                <Expiry>30000</Expiry>
                <Status>some message containing status code and response body of last callback</Status>
                <CallbackCredentials>
                    <BasicAuthentication>
                        <Username>iris</Username>
                    </BasicAuthentication>
                </CallbackCredentials>
            </CallbackSubscription>
        </Subscription>
    </Subscriptions>
</SubscriptionsResponse>
```
