---
id: eventWebhook
title: Event Webhook
slug: /numbers/webhooks/eventWebhook
description: A general overview of Bandwidth's Event Notification Webhook
keywords:
  - bandwidth
  - numbers
  - webhooks
image: ../../static/img/bandwidth-logo.png
---

The notification webhook API is used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Numbers API on their behalf. In general this notification webhook will be called whenever an **event** occurs.

The event notifications occur when TNs in your account are impacted due to orders outside of your account. For example, a `MESSAGING_LOST` event is reported on a TN with hosted messaging service in your account when a port in order placed by another account on the same TN is executed.

An order placed in your account to remove the TN will NOT report a `MESSAGING_LOST` event.  Please see the subscription documentation to understand how to register the notification webhook API with the Bandwidth Numbers API.

### Parameters

| Parameter                  | Type                        | Description                                                    |
|:---------------------------|:----------------------------|:---------------------------------------------------------------|
| `SubscriptionId`           | `String`                    | Subscription ID that the notification is in response to.       |
| `EventType`                | `String`                    | Type of event that the notification applies to.                |
| `ImpactedTelephoneNumbers` | List of `<TelephoneNumber>` | List of the impacted telephone numbers for event notifications |

### Example 1 of 1: Event Notification

```http
POST your_url.com/webhookService HTTP/1.1
Content-Type: application/xml; charset=utf-8

<?xml version="1.0"?>
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <EventType>MESSAGING_LOST</EventType>
    <ImpactedTelephoneNumbers>
        <TelephoneNumber> ... </TelephoneNumber>
    </ImpactedTelephoneNumbers>
</Notification>
```
