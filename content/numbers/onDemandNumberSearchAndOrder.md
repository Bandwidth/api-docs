{% multimethod %}
{% endmultimethod %}

# Search and order Phone Numbers with Callbacks {#top}

## About {#about}

This guide will walk through the recommended approach to searching and ordering phone numbers using the Bandwidth [Phone Number API](https://dashboard.bandwidth.com).  This will cover how to setup a subscription to manage phone number order alerts, how to search for available phone numbers, and finally how to order phone numbers.

## Differences between Polling & Callbacks

Phone number ordering in the Bandwidth Dashboard is asyncronous through creating an "order". The orders are then processed and the order status is updated asyncronously.  Bandwidth recommends configuring your account with a [subscription](../../account/subscriptions/about.md) and following this guide for the most performant integration.

### Use-cases

This guide is best suited for use-cases where an end-user is assigned a **new** specific phone number and may want to customize their phone number.

In the case where a user would like to keep their existing phone number, follow the [porting guide](./portingPhoneNumbers.md).

## Steps

1. [Create Subscription](#create-subscription)
2. [Search for Phone Numbers](#search-for-phone-numbers)
3. [Create order for Phone Numbers](#order-phone-numbers)
4. [Receive HTTP Callback with order status](#receive-callback)
5. [Fetch information about order (_optional_)](#get-order-info)


## Create Subscription for Orders {#create-subscription}

The Bandwidth Phone Number API allows users to manage notifications on their account through the `/subscriptions` resource.  Subscriptions can be configured to send a HTTP Callback to a valid publicly addressable URL or send an email to a valid email address.

This guide _only_ covers creating a `<CallbackSubscription>`.  For more information see the full guide on [managing subscriptions](../../account/subscriptions/about.md).

### Base URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

{% extendmethod %}

### Basic Parameters

| Parameter                | Required | Description                                                                                                                                                 |
|:-------------------------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<OrderType>`            | Yes      | The Specific type of order in which to configure the subscription. <br> For this guide, the value is: `orders`                                              |
| `<CallbackSubscription>` | Yes      | Contains the information about the callback url                                                                                                             |
| `<URL>`                  | Yes      | The URL to send the <code class="post">POST</code> request when order status changes. <br><br> Part of the `<CallbackSubscription>` element.                |
| `<Expiry>`               | Yes      | How long to keep the subscription active. <br> Can be very large (100 years in seconds `3153600000`) <br><br> Part of the `<CallbackSubscription>` element. |
| `<CallbackCredentials>`  | No       | Container for the authentication credentials for the specified `URL`  <br><br> Part of the `<CallbackSubscription>` element.                                |
| `<BasicAuthentication>`  | No       | Container for Basic Authentication credentials.                                                                                                             |
| `<UserName>`             | No       | Username for Basic Authentication scheme. <br> Max 100 characters  <br><br> Part of the `<BasicAuthentication>` element.                                    |
| `<Password>`             | No       | Password for Basic Authentication scheme. <br> Encrypted at rest and never returned by the API <br><br> Part of the `<BasicAuthentication>` element.        |
| `<PublicKey>`            | No       | A BASE64 encoded public key that matches the server specified in the `URL`  <br><br> Part of the `<BasicAuthentication>` element.                           |

{% common %}

### Example XML to Create Subscription

```http
POST https://dashboard.../{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
```xml
<Subscription>
    <OrderType>orders</OrderType>
    <CallbackSubscription>
        <URL>https://your-secure-url.com</URL>
        <Expiry>3153600000</Expiry>
        <CallbackCredentials>
            <BasicAuthentication>
                <Username>User15</Username>
                <Password>Hunter15</Password>
            </BasicAuthentication>
            <PublicKey>LS0[...]LS0tLQ0K</PublicKey>
        </CallbackCredentials>
    </CallbackSubscription>
</Subscription>
```

{% endextendmethod %}

## Searching For Phone Numbers {#search-for-phone-numbers}
Finding numbers can be achieved by searching the Bandwidth inventory.

This step is optional – the telephone numbers can be ordered directly using search criteria, but if there is need to examine the numbers before activating them on the account, the search can be used to return a list of available numbers. Searching **only** provides a list of available numbers that match the search criteria.

There are a number of search approaches that can be used; the NPA NXX search is used for this example.  Please see the [guide on [searching phone numbers](./searchForNumbers.md) for the other applicable search types.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers`

#### Basic Authentication

Bandwidth's Phone Number API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

{% extendmethod %}

### Query Parameters

| Parameters | Description                                                                                                                                                                                                                                                            |
|:-----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `npaNxx`   | NPA NXX combination to be searched. <br> - Valid npa values:[2-9] for the first digit, and [0-9] for both the second and third digits. <br> - Valid Nxx values:[2-9] for the first digit, and [0-9] for both the second and third digits. <br> - Valid x values [0-9]. |

This example only demonstrates searching by `NPA NXX` to learn about the different search types and filtering see the guide on [searching phone numbers](./searchForNumbers.md).

{% common %}

### Example: Search by NPA NXX

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers?npaNxx=540551&quantity=7 HTTP/1.1
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

{% endextendmethod %}

## Order Phone Numbers {#order-phone-numbers}

* To successfully order a Phone Number that was previously returned in a search on the `/availableNumbers` you will create a `<ExistingTelephoneNumberOrderType>` with a `<TelephoneNumberList>` containing at least 1 phone number.
* There is no guarantee that the a telephone number appearing in search results will still be available by the time an order request is processed.
* In this example, the `<TelephoneNumber>`s are known by the previous search.
* It is worth noting that most orders complete very quickly (less than 1 second).

### Base URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders`

#### Basic Authentication

Bandwidth's Phone Number API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../guides/accountCredentials.md) document.

{% extendmethod %}

### Common Request Parameters

| Parameter               | Required | Description                                                                                                                                                                                                                                                                                                                                          |
|:------------------------|:---------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<Name>`                | Yes      | The name of the order. Max length restricted to 50 characters.                                                                                                                                                                                                                                                                                       |
| `<CustomerOrderId>`     | No       | Optional value for Id set by customer                                                                                                                                                                                                                                                                                                                |
| `<SiteId>`              | Yes      | The ID of the Site (_or sub-account_) that the SIP Peer is to be associated with.                                                                                                                                                                                                                                                                    |
| `<PeerId>`              | No       | The ID of the SIP Peer (_or location_) that the telephone numbers are to be assigned to. <br> <br> ⚠️ The `PeerId` **MUST** already exist under the `Site` (_or sub-account_) <br><br> EX: `/accounts/{accountId}/sites/{siteId}/sippeers/{PeerId}`                                                                                                           |
| `<PartialAllowed>`      | No       | By default all order submissions are **not** fulfilled partially. Setting the `PartialAllowed` to false would trigger the entire order to be fulfilled (any error encountered such as 1 TN not being available would fail all TNs in the order) <br><br> Default: `false`                                                                            |
| `<BackOrderRequested>`  | No       | `BackOrderRequested` will indicate to the system that if the entire quantity of numbers is not available on the first attempt to fill the new number order, the request will be repeated periodically until the request is successful or canceled. <br> `true` - Backorder numbers if the entire quantity is not available <br><br> Default: `false` |
| `<TelephoneNumberList>` | Yes      | A list of telephone numbers to order.                                                                                                                                                                                                                                                                                                                |
| `<TelephoneNumber>`     | Yes      | `TelephoneNumberList` must have at least one `TelephoneNumber` to order  <br><br> Part of the `<TelephoneNumberList>` element.                                                                                                                                                                                                                       |

{% common %}

### Example: Order 1 Number Returned in the Search above

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Order>
    <CustomerOrderId>123456789</CustomerOrderId>
    <Name>My Custom Name or UUID of a customer session</Name>
    <ExistingTelephoneNumberOrderType>
        <TelephoneNumberList>
            <TelephoneNumber>5402278098</TelephoneNumber>
        </TelephoneNumberList>
    </ExistingTelephoneNumberOrderType>
    <SiteId>743</SiteId>
</Order>
```

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders/c9dg306c-gdh7-77j7-812c-0520c8f49123

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <Order>
        <CustomerOrderId>1234567896</CustomerOrderId>
        <Name>Existing Number Order 3</Name>
        <OrderCreateDate>2018-03-20T19:51:20.886Z</OrderCreateDate>
        <BackOrderRequested>false</BackOrderRequested>
        <id>c9dg306c-gdh7-77j7-812c-0520c8f49123</id>
        <ExistingTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>5402278098</TelephoneNumber>
            </TelephoneNumberList>
        </ExistingTelephoneNumberOrderType>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>13606</SiteId>
    </Order>
    <OrderStatus>RECEIVED</OrderStatus>
</OrderResponse>
```

{% endextendmethod %}

## Receive HTTP Callback with Order Status {#receive-callback}

The Bandwidth Phone Number API will send a HTTP Callback (webhook) to the URL specified in the `<URL>...</URL>` when [creating the subscription](#create-subscription).

The HTTP Callback will contain information if the order was successful or failed.  For our example here, if status is **anything other than `COMPLETE`** the order has failed.  The most likely scenario is that another customer ordered the desired phone number between the time 'searched' and 'ordered'.  If the order is **not** `COMPLETE`, either try ordering a different phone number, or [search for more numbers](#search-for-phone-numbers).

{% extendmethod %}

### Callback Request Parameters

| Parameter                     | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
|:------------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<Status>`                    | Following this tutorial should only yield two possible `Status` values: <br> - `COMPLETE` : The order succeeded and all phone numbers requested were ordered and will be sent in the `<CompletedTelephoneNumbers>` list. <br> - `FAILED` : The order _did not_ succeed (at least 1 phone number sent in the order was unable to be ordered). <br><br> To learn more about the order states, see the [Advanced Ordering Overview](advancedOrdering.md#ordering-overview) |
| `<SubscriptionId>`            | The unique Id associated with the subscription that was configured for `orders`. This is the same value that is returned in `Location` Header when [creating the subscription](#create-subscription).                                                                                                                                                                                                                                                                   |
| `<Message>`                   | A specific message related to the order.                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `<OrderId>`                   | The unique Id associated with the order. This is the same value that is returned in the `Location` Header when [creating the order](#order-phone-numbers)                                                                                                                                                                                                                                                                                                               |
| `<OrderType>`                 | The specific type of order that was created. <br> For this example, the value will be `orders`. <br><br>For more information see [managing subscriptions](../../account/subscriptions/about.md)                                                                                                                                                                                                                                                                                    |
| `<CompletedTelephoneNumbers>` | Contains the list of Phone Numbers that were attempted to be ordered.                                                                                                                                                                                                                                                                                                                                                                                                   |
| `<TelephoneNumber>`           | The actual Phone Number that was attempted to be ordered.  <br><br> Part of the `<CompletedTelephoneNumbers>` element.                                                                                                                                                                                                                                                                                                                                                  |

{% common %}

### Example: Successful Phone Number Order

```http
POST https://your-server.com HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notification>
    <Status>COMPLETE</Status>
    <SubscriptionId>d8274fa6-e49b-469a-93bf-c7dd17615950</SubscriptionId>
    <Message>Created a new number order for 1 number from WASHINGTON, VA</Message>
    <OrderId>a8ef295b-fcf4-44a7-945c-0520c8f49123</OrderId>
    <OrderType>orders</OrderType>
    <CompletedTelephoneNumbers>
        <TelephoneNumber>5402278098</TelephoneNumber>
    </CompletedTelephoneNumbers>
</Notification>
```

### Example: Failed Phone Number Order

```http
POST https://your-server.com HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Notification>
    <Status>FAILED</Status>
    <SubscriptionId>333643f0-3eac-4c8f-8b15-c712f49e09fe</SubscriptionId>
    <Message>5005: The telephone number is unavailable for ordering</Message>
    <OrderId>4a58b348-892c-4426-8900-97fc4555c42c</OrderId>
    <OrderType>orders</OrderType>
    <CompletedTelephoneNumbers>
       <TelephoneNumber>5402278098</TelephoneNumber>
    </CompletedTelephoneNumbers>
</Notification>
```

{% endextendmethod %}

## Fetching Order Information {#get-order-info}

A <code class="get">GET</code> Request to an existing order will return it's status as well as any information originally used to create the order.

In the example below the `orderId` is the `orderId` returned in the 'location' header of the [order phone numbers](#order-phone-numbers) response.

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
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/orders/4a58b348-892c-4426-8900-97fc4555c42c HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

### Example: Successful Order Response

For this example, look for OrderStatus == COMPLETED and the CompletedNumbers list, and CompletedQuantity == 1 to verify the order was successful.

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <CompletedQuantity>1</CompletedQuantity>
    <CreatedByUser>jbm</CreatedByUser>
    <ErrorList/>
    <FailedNumbers/>
    <LastModifiedDate>2018-03-21T15:28:06.438Z</LastModifiedDate>
    <OrderCompleteDate>2018-03-21T15:28:06.438Z</OrderCompleteDate>
    <Order>
        <CustomerOrderId>123456789</CustomerOrderId>
        <Name>Existing Number Order</Name>
        <OrderCreateDate>2018-03-21T15:28:06.359Z</OrderCreateDate>
        <PeerId>546348</PeerId>
        <BackOrderRequested>false</BackOrderRequested>
        <ExistingTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>5405511247</TelephoneNumber>
            </TelephoneNumberList>
        </ExistingTelephoneNumberOrderType>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>13606</SiteId>
    </Order>
    <OrderStatus>COMPLETE</OrderStatus>
    <CompletedNumbers>
        <TelephoneNumber>
            <FullNumber>5405511247</FullNumber>
        </TelephoneNumber>
    </CompletedNumbers>
    <Summary>1 number ordered in (540)</Summary>
    <FailedQuantity>0</FailedQuantity>
</OrderResponse>
```

### Example: Unsuccessful Order Response

Otherwise, note that OrderStatus == FAILED, the Error Description text, and the FailedNumbers list.

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <CompletedQuantity>0</CompletedQuantity>
    <CreatedByUser>jbm</CreatedByUser>
    <ErrorList>
        <Error>
            <Code>5005</Code>
            <Description>The telephone number is unavailable for ordering</Description>
            <TelephoneNumber>5402278098</TelephoneNumber>
        </Error>
    </ErrorList>
    <FailedNumbers>
        <FullNumber>5402278098</FullNumber>
    </FailedNumbers>
    <LastModifiedDate>2018-03-21T15:20:36.212Z</LastModifiedDate>
    <OrderCompleteDate>2018-03-21T15:20:36.212Z</OrderCompleteDate>
    <Order>
        <CustomerOrderId>1234567896</CustomerOrderId>
        <Name>Existing Number Order 234</Name>
        <OrderCreateDate>2018-03-21T15:20:36.153Z</OrderCreateDate>
        <PeerId>546348</PeerId>
        <BackOrderRequested>false</BackOrderRequested>
        <ExistingTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>5402278098</TelephoneNumber>
            </TelephoneNumberList>
        </ExistingTelephoneNumberOrderType>
        <PartialAllowed>true</PartialAllowed>
        <SiteId>13606</SiteId>
    </Order>
    <OrderStatus>FAILED</OrderStatus>
    <CompletedNumbers/>
    <Summary>1 number requested</Summary>
    <FailedQuantity>1</FailedQuantity>
</OrderResponse>
```

{% endextendmethod %}
