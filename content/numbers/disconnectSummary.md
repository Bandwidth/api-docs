{% multimethod %}
{% endmultimethod %}

# Phone Number Disconnect Summary {#top}

Disconnecting a phone number leaves it in all applicable inventories, but makes it available for activation with a new subscriber.

## Assumptions
* You have a [Bandwidth](https://dashboard.bandwidth.com) account
* You have at least one Phone Number to disconnect.

## Overview

* [Disconnecting a Phone Number](#disconnect-phone-number)
* [Fetching Disconnect Info](#get-disconnect-info)

## Disconnecting a Phone Number {#disconnect-phone-number}

When a phone number is disconnected from your account it will remain available for you to reconnect to for a short period of time before being released back into Bandwidth's public inventory pool. You will not be charged for calls made to this number during the holding period. The duration of the holding period depends on demand for numbers from that area. 

### Base URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects`

#### Basic Authentication

Bandwidth's Phone Number API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

{% extendmethod %}

### Request Parameters

| Parameter             | Required | Description                                                                                                                       |
|:----------------------|:---------|:----------------------------------------------------------------------------------------------------------------------------------|
| `Name`                | Yes      | The name of the order. Max length restricted to 50 characters                                                                     |
| `TelephoneNumberList` | Yes      | A list of telephone numbers to disconnect.                                                                                        |
| `DisconnectMode`      | No       | The severity of disconnect order. Typically `Normal`.                                                                             |
| `Protected`           | No       | Change protected status of telephones during disconnection. Possible values: `TRUE`, `FALSE`, `UNCHANGED`. Typically `UNCHANGED`. |

{% common %}

### Example: Create a disconnect request for 2 Phone Numbers

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0"?>
<DisconnectTelephoneNumberOrder>
    <name>training run</name>
    <DisconnectTelephoneNumberOrderType>
        <TelephoneNumberList>
            <TelephoneNumber>5405514342</TelephoneNumber>
            <TelephoneNumber>7034343704</TelephoneNumber>
        </TelephoneNumberList>
    </DisconnectTelephoneNumberOrderType>
</DisconnectTelephoneNumberOrder>
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects/df2gc2e2-653d-466c-945d-8f292f09ce55

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DisconnectTelephoneNumberOrderResponse>
    <orderRequest>
        <OrderCreateDate>2018-01-23T21:00:23.802Z</OrderCreateDate>
        <id>df2gc2e2-653d-466c-945d-8f292f09ce55</id>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>5405514342</TelephoneNumber>
                <TelephoneNumber>7034343704</TelephoneNumber>
            </TelephoneNumberList>
            <DisconnectMode>normal</DisconnectMode>
        </DisconnectTelephoneNumberOrderType>
    </orderRequest>
    <OrderStatus>RECEIVED</OrderStatus>
</DisconnectTelephoneNumberOrderResponse>
```

{% endextendmethod %}

## Fetching Disconnect Information {#get-disconnect-info}
A <code class="get">GET</code> Request to an existing disconnect will return it's status as well as any information originally used to create the disconnect.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects/{{disconnectId}}`

{% extendmethod %}

### Query Parameters

There are no query parameters for fetching information about an existing disconnect.

{% common %}

### Example: Fetch Disconnect Information

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/disconnects/df2gc2e2-653d-466c-945d-8f292f09ce55 HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DisconnectTelephoneNumberOrderResponse>
    <DisconnectedTelephoneNumberList>
        <TelephoneNumber>5405514342</TelephoneNumber>
        <TelephoneNumber>7034343704</TelephoneNumber>
    </DisconnectedTelephoneNumberList>
    <ErrorList/>
    <orderRequest>
        <OrderCreateDate>2015-01-20T21:05:58.026Z</OrderCreateDate>
        <id>df2gc2e2-653d-466c-945d-8f292f09ce55</id>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>7034343704</TelephoneNumber>
                <TelephoneNumber>5405514342</TelephoneNumber>
            </TelephoneNumberList>
            <DisconnectMode>normal</DisconnectMode>
        </DisconnectTelephoneNumberOrderType>
    </orderRequest>
    <OrderStatus>COMPLETE</OrderStatus>
</DisconnectTelephoneNumberOrderResponse>

```

{% endextendmethod %}
