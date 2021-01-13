{% multimethod %}
{% endmultimethod %}

# Search And Order Phone Numbers by Polling {#top}

This guide will take you through the _basics_ of searching and ordering phone numbers with the Bandwidth Phone Number API.

## Differences between Polling & Callbacks

Phone number ordering in the Bandwidth Dashboard is asyncronous through creating an "order". The orders are then processed and the order status is updated asyncronously.  Bandwidth recommends configuring your account with a [subscription](../../account/subscriptions/about.md) and following the [Order Phone Number with Callbacks guide](onDemandNumberSearchAndOrder.md) instead of polling the order status for the `<OrderStatus>`.

## Assumptions
* You have a [Bandwidth](https://dashboard.bandwidth.com) account

## Overview
* [Searching for new Phone Numbers](#search-for-phone-numbers)
* [Ordering Phone Numbers](#order-phone-numbers)
* [Fetching Order Info](#get-order-info)
* [Disconnecting a Phone Number](#disconnect-phone-number)
* [Fetching Disconnect Info](#get-disconnect-info)

## Searching For Phone Numbers {#search-for-phone-numbers}
Finding numbers can be achieved by searching the Bandwidth inventory.

This step is optional – the telephone numbers can be ordered directly using search criteria, but if there is need to examine the numbers before activating them on the account, the search can be used to return a list of available numbers.

There are a number of search approaches that can be used; the NPA NXX search is used for this example.  Please see the [API documentation](../apiReference.md) for the other applicable search types.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers`

#### Basic Authentication

Bandwidth's Phone Number API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

{% extendmethod %}

### Query Parameters

| Parameters                       | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
|:---------------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `areaCode`                       | The allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits.                                                                                                                                                                                                                                                                                                                                                                  |
| `npaNxx`<br> -or- <br> `npaNxxx` | NPA NXX combination to be searched. <br> - Valid npa values:[2-9] for the first digit, and [0-9] for both the second and third digits. <br> - Valid Nxx values:[2-9] for the first digit, and [0-9] for both the second and third digits. <br> - Valid x values [0-9].                                                                                                                                                                                                   |
| `rateCenter`                     | The abbreviation for the Rate Center                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `state`                          | The two-letter abbreviation of the state the RateCenter is in.                                                                                                                                                                                                                                                                                                                                                                                                           |
| `city`                           | The name of the city.                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `zip`                            | A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) zip-code value.                                                                                                                                                                                                                                                                                                                                                                                                          |
| `lata`                           | A maximum five digit (XXXXX) numeric format.                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `localVanity`                    | Requested vanity number. Valid range is from 4 to 7 alphanumeric characters                                                                                                                                                                                                                                                                                                                                                                                              |
| `tollFreeVanity`                 | The Toll Free requested vanity number. Valid range is from 4 to 7 alphanumeric characters                                                                                                                                                                                                                                                                                                                                                                                |
| `tollFreeWildCardPattern`        | The requested Toll Free 3 digit wild card pattern. Examples: `8**`, `80*`, `87*`, etc.                                                                                                                                                                                                                                                                                                                                                                                   |
| `quantity`                       | The desired quantity of requested numbers. Values range from 1-5000. If no quantity is specified, the default of 5000 is returned.                                                                                                                                                                                                                                                                                                                                       |
| `enableTNDetail`                 | If set to true, a list of details associated with the telephone number (rate center abbreviation, rate center host city, state, and LATA) will be displayed along with the telephone number. This value is set to false by default.                                                                                                                                                                                                                                      |
| `LCA`                            | Local Calling Area. If this parameter is specified then Telephone Numbers that are likely in the Local Calling Area of the stated Rate Center, NPANXX or NPANNXX will be returned, in addition to those that *exactly* match the query will be returned. Since LCA logic is not always symmetric and not always inclusive of RC and NPANXX search criteria, this result reflects somewhat of an approximation. The parameter value is true or false. The default is true |
| `endsIn`                         | Intended to use with localVanity only. The parameter value is true or false. If set to true, the search will look for only numbers which end in specified localVanity, otherwise localVanity sequence can be met anywhere in last 7 number digits. The default is false.                                                                                                                                                                                                 |
| `orderBy`                        | The field by which the returned numbers will be sorted. Only supported if at least one of the following search criteria is specified: npaNxx or npaNxxx, rateCenter, city, zip, tollFreeVanity, tollFreeWildCardPattern. Allowed values are fullNumber, npaNxxx, npaNxx, and areaCode>                                                                                                                                                                                   |
| `protected`                      | A query parameter, that governs, how the Protected status of numbers impacts the search results: <br> - `None` : The numbers returned in the payload will not contain any numbers that are tagged as Protected <br> - `ONLY` :The numbers returned in the payload will all be tagged as Protected. No "unProtected" numbers will be returned <br> - `MIXED` : The protected status of the numbers will be ignored in the search - all types of numbers will be returned  |

{% common %}

### Example: Search by NPA NXX

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers?npaNxx=540551&quantity=10 HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>7</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>5405514342</TelephoneNumber>
        <TelephoneNumber>5405515330</TelephoneNumber>
        <TelephoneNumber>5405515329</TelephoneNumber>
        <TelephoneNumber>5402278098</TelephoneNumber>
        <TelephoneNumber>5402270905</TelephoneNumber>
        <TelephoneNumber>5402278089</TelephoneNumber>
        <TelephoneNumber>5402278090</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

>  ℹ️  Notice that only 7 of 10 were returned = that is all that were currently available in that npanxx combination.  Any of these numbers can be reserved or immediately ordered

{% endextendmethod %}

## Order Phone Numbers {#order-phone-numbers}

Ordering Phone Numbers for use with the network uses requires you to order specific phone numbers that have been discovered in a search.   This is only **one** of a number of ways to acquire and activate phone numbers.


### Base URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders`

#### Basic Authentication

Bandwidth's Phone Number API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

{% extendmethod %}

### Common Request Parameters

**EVERY** type of order can/must include the parameters below

| Parameter            | Required | Description                                                                                                                                                                                                                                                                                                                                          |
|:---------------------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Quantity`           | No       | The desired quantity of requested numbers. values range from 1-5000. <br><br> Default: `5000`                                                                                                                                                                                                                                                        |
| `Name`               | Yes      | The name of the order. Max length restricted to 50 characters.                                                                                                                                                                                                                                                                                       |
| `CustomerOrderId`    | No       | Optional value for Id set by customer                                                                                                                                                                                                                                                                                                                |
| `SiteId`             | Yes      | The ID of the Site (_or sub-account_) that the SIP Peer is to be associated with.                                                                                                                                                                                                                                                                    |
| `PeerId`             | No       | The ID of the SIP Peer (_or location_) that the telephone numbers are to be assigned to. <br> <br> ⚠️ The `PeerId` **MUST** already exist under the `Site` (_or sub-account_) EX: `/accounts/{accountId}/sites/{siteId}/sippeers/{PeerId}`                                                                                                           |
| `PartialAllowed`     | No       | By default all order submissions are fulfilled partially. Setting the `PartialAllowed` to false would trigger the entire order to be fulfilled (any error encountered such as 1 TN not being available would fail all TNs in the order) <br><br> Default: `false`                                                                                    |
| `BackOrderRequested` | No       | `BackOrderRequested` will indicate to the system that if the entire quantity of numbers is not available on the first attempt to fill the new number order, the request will be repeated periodically until the request is successful or canceled. <br> `true` - Backorder numbers if the entire quantity is not available <br><br> Default: `false` |

### Order Type Specific Request Parameters

These parameters _may or may not_ be required based on the type of order.  Check out the reference documentation for more information on the different types of orders

| Parameter                                                                  | Description                                                                                                                                                                                                                                                                                                                                                                                                 |
|:---------------------------------------------------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `TelephoneNumberList`                                                      | A list of telephone numbers to order                                                                                                                                                                                                                                                                                                                                                                        |
| `AreaCode`                                                                 | Allowed ranged: [2-9] for the first digit and [0, 9] for both the second and third digits.                                                                                                                                                                                                                                                                                                                  |
| `RateCenter`                                                               | A text Rate Center name. Must be combined with State information                                                                                                                                                                                                                                                                                                                                            |
| `State`                                                                    | The two-letter abbreviation of the state                                                                                                                                                                                                                                                                                                                                                                    |
| `City`                                                                     | The name of the city that the Ordered telephone numbers should apply to                                                                                                                                                                                                                                                                                                                                     |
| `Zip`                                                                      | A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) format value.                                                                                                                                                                                                                                                                                                                                               |
| `Lata`                                                                     | A maximum five-digit (XXXXX) numeric format.                                                                                                                                                                                                                                                                                                                                                                |
| `EnableLCA`                                                                | If set to `true`, local calling access numbers will be returned for Rate Center, NPA-NXX and NPANXXX orders if numbers are not available for the given criteria. <br><br> Default: `true`.                                                                                                                                                                                                                  |
| `Npa-Nxx` <br> -or- <br> `Npa-Nxxxx` <br><br> ⚠️ with `EnableLCA` : `true` | NpaNxx combination to be searched. <br> Valid Npa values: [2-9] for the first digit, and [0-9] for both the second and third digits. <br> Valid Nxx values: [2-9] for the first digit, and [0-9] for both the second and third digits. <br> Valid Xxvalues [0-9]. <br><br> ℹ️  If set to true, enables the ability to get local calling access numbers if numbers are not available for the given criteria. |
| `LocalVanity`                                                              | A text string used to request a regular vanity number. Valid range is between 4 and 7 alphanumeric characters.                                                                                                                                                                                                                                                                                              |
| `EndsIn`                                                                   | Intended to use with `LocalVanity` only. <br> -`true` : the search will look for only numbers which end in specified `LocalVanity` <br> -`false`: `LocalVanity` sequence can be met anywhere in last 7 number digits. <br><br> Default: `false`                                                                                                                                                             |
| `TollFreeVanity`                                                           | A text string used to request a toll free vanity number. Valid range is between 4 and 7 alphanumeric characters.                                                                                                                                                                                                                                                                                            |
| `TollFreeWildCardPattern`                                                  | A 3-digit wild card pattern for specifying toll free prefixes, comprised of 8 followed by two stars, a digit and a star or two digits                                                                                                                                                                                                                                                                       |
| `ReservationIdList`                                                        | If a telephone number or numbers have been previously reserved, the ReservationIdList provides the IDs necessary to release the numbers. This only applies to reserved numbers - if no reservation has been placed on the numbers this list is not required.                                                                                                                                                |
| `TnAttributes`                                                             | Attributes to be assigned to the telephone number. Optional parameter. Possible values: `Protected`                                                                                                                                                                                                                                                                                                         |

{% common %}

### Example: Search **AND** Order 1 Number in Area Code

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Order>
    <AreaCodeSearchAndOrderType>
        <AreaCode>910</AreaCode>
        <Quantity>1</Quantity>
    </AreaCodeSearchAndOrderType>
    <SiteId>461</SiteId>
</Order>
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders/47955555-ce10-456e-8cb9-eb13b9f14cfd

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <Order>
        <OrderCreateDate>2018-01-23T19:56:29.678Z</OrderCreateDate>
        <BackOrderRequested>false</BackOrderRequested>
        <id>47955555-67aa-4adb-8c0f-b6894e60c0dc</id>
        <AreaCodeSearchAndOrderType>
            <AreaCode>910</AreaCode>
            <Quantity>1</Quantity>
        </AreaCodeSearchAndOrderType>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>461</SiteId>
    </Order>
    <OrderStatus>RECEIVED</OrderStatus>
</OrderResponse>
```


{% endextendmethod %}

## Fetching Order Information {#get-order-info}

A <code class="get">GET</code> Request to an existing order will return it's status as well as any information originally used to create the order.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders/{{orderId}}`

#### Basic Authentication

Bandwidth's Phone Number API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

{% extendmethod %}

### Query Parameters

There are no query parameters for fetching information about an existing order.

{% common %}

### Example: Fetch Order Information

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders/d30eda5a-ce10-456e-8cb9-eb13b9f14cfd HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <CompletedQuantity>1</CompletedQuantity>
    <CreatedByUser>jbm</CreatedByUser>
    <LastModifiedDate>2018-01-23T19:56:29.782Z</LastModifiedDate>
    <OrderCompleteDate>2018-01-23T19:56:29.782Z</OrderCompleteDate>
    <Order>
        <OrderCreateDate>2018-01-23T19:56:29.678Z</OrderCreateDate>
        <PeerId>651681</PeerId>
        <BackOrderRequested>false</BackOrderRequested>
        <AreaCodeSearchAndOrderType>
            <AreaCode>910</AreaCode>
            <Quantity>1</Quantity>
        </AreaCodeSearchAndOrderType>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>24717</SiteId>
    </Order>
    <OrderStatus>COMPLETE</OrderStatus>
    <CompletedNumbers>
        <TelephoneNumber>
            <FullNumber>9102414365</FullNumber>
        </TelephoneNumber>
    </CompletedNumbers>
    <Summary>1 number ordered in (910)</Summary>
    <FailedQuantity>0</FailedQuantity>
</OrderResponse>
```

{% endextendmethod %}

## Disconnecting a Phone Number {#disconnect-phone-number}

Disconnecting a phone number leaves it in all applicable inventories, but makes it available for activation with a new subscriber.

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

#### Basic Authentication

Bandwidth's Phone Number API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

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