{% multimethod %}
{% endmultimethod %}

# Order Notification Event

The notification callback API is used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Numbers API on their behalf. In general this notification callback will be called whenever an order that is in-scope changes state or has a note added to it. Alternatively, notification callback will be called whenever a subscribed event occurs

When an order changes OR when numbers in customer account are impacted due to orders placed outside of their account the Bandwidth Dashboard API will POST a pre-defined payload to our customer at the URL that they have defined by use of the `/accounts/{{accountId}}/subscriptions` API call. Please see the [subscription documentation](../../account/subscriptions/about.md) to understand how to register the notification callback API with the Bandwidth Numbers API.

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
| `emergencyNotificationGroup` | `COMPLETE`, `FAILED` |
| `emergencyEndpointGroup` | `COMPLETE`, `FAILED` |

{% extendmethod %}


### Parameters

| Parameter                   | Type                        | Description                                                                                                                                                  |
|:----------------------------|:----------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `SubscriptionId`            | `String`                    | Subscription ID that the notification is in response to.                                                                                                     |
| `OrderType`                 | `String`                    | Type of order that the notification applies to.                                                                                                              |
| `OrderId`                   | `String`                    | Order ID of the order that has changed                                                                                                                       |
| `CustomerOrderId`           | `String`                    | Customer order ID of the order that has changed (the element is considered optional, and will only be provided if the related order has a Customer Order Id) |
| `Status`                    | `String`                    | New state of the order                                                                                                                                       |
| `Message`                   | `String`                    | Message if one was attached as part of the state change. This will often be present in error cases.                                                          |
| `Note`                      | `String`                    | Body of any note that was attached to the order, if applicable.                                                                                              |
| `CompletedTelephoneNumbers` | List of `<TelephoneNumber>` | List of the completed telephone numbers for Port-in/Port-out/New Number/Disconnect orders in terminal state                                                  |

{% common %}
### Example 1 of 1: Order Notification

```http
POST /your_url HTTP/1.1
Content-Type: application/xml; charset=utf-8

<?xml version="1.0"?>
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <OrderType>OrderId</OrderType>
    <CustomerOrderId>...</CustomerOrderId>
    <Status>COMPLETE</Status>
    <CompletedTelephoneNumbers>
        <TelephoneNumber> ... </TelephoneNumber>
    </CompletedTelephoneNumbers>
</Notification>
```

{% endextendmethod %}
