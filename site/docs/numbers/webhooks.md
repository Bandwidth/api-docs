---
id: webhooks
title: Webhooks
slug: /numbers/webhooks   
description: A general overview of Bandwidth's number API webhooks
keywords:
  - bandwidth
  - numbers
  - webhooks
hide_title: true
image: ../../static/img/bandwidth-logo.png
---

# About

## Webhooks

Bandwidth uses HTTP [webhooks](https://webhooks.pbworks.com/w/page/13385124/FrontPage) to send events to any publicly addressable url.

## Order Notification Webhooks

This public webhook API will be used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Numbers API on their behalf. In general this notification webhook will be called whenever an order that is in-scope changes state or has a note added to it.

In order to receive notifications, you must first create a subscription.

If the customer's endpoint is unavailable, the Bandwidth Dashboard API callback service will not retry the order notification webhook.

| Event | Description |
|:------|:------------|
| [Order Notification Webhooks](webhooks/orderNotification) | Bandwidth sends this event for each **order status** update as defined by the subscription |
| [Event Notification Webhooks](webhooks/eventNotification) | Bandwidth sends this event for each **event** update as defined by the subscription |

## Portout Validation Webhooks

This Callback API will be used with pre-qualified customers to confirm the validity of a port-out request when it is submitted by the winning carrier. The API call will define the end user owner of the Telephone Number in terms of FCC-approved information to aid in assessing the validity of the request.

Please contact [support](https://support.bandwidth.com) to enable Portout Validation.

If the customer's endpoint is unavailable, the Bandwidth Dashboard API webhook service will retry the portout validation webhook to the customer's endpoint 8 times over a period of 40 minutes (once every 5 minutes).

| Event | Description |
|:------|:------------|
| Portout Validation Webhooks | Bandwidth sends this event when a Portout request is initiated on a number in your account. Please contact [support](https://support.bandwidth.com) to enable Portout Validation. |
