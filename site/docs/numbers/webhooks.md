---
id: webhooks
title: About
slug: /numbers/webhooks   
description: A general overview of Bandwidth's number API webhooks
keywords:
  - bandwidth
  - numbers
  - webhooks
hide_title: True
image: ../../static/img/bw-icon.svg
---

Bandwidth uses HTTP [webhooks](https://webhooks.pbworks.com/w/page/13385124/FrontPage) to send events to any publicly addressable url.

## Order Notification Webhooks

This public webhook API will be used to notify customers of events and changes that occur with various feature and service orders that are being processed by the Bandwidth Numbers API on their behalf. In general this notification webhook will be called whenever an order that is in-scope changes state or has a note added to it.

In order to receive notifications, you must first create a subscription.

If the customer's endpoint is unavailable, the Bandwidth Dashboard API callback service will not retry the order notification webhook.

| Event | Description |
|:------|:------------|
| [Order Notification Webhooks](webhooks/orderWebhook) | Bandwidth sends this event for each **order status** update as defined by the subscription |
| [Event Notification Webhooks](webhooks/eventWebhook) | Bandwidth sends this event for each **event** update as defined by the subscription |

## Portout Validation Webhooks

This Callback API will be used with pre-qualified customers to confirm the validity of a port-out request when it is submitted by the winning carrier. The API call will define the end user owner of the Telephone Number in terms of FCC-approved information to aid in assessing the validity of the request.

Please contact [support](https://support.bandwidth.com) to enable Portout Validation.

If the customer's endpoint is unavailable, the Bandwidth Dashboard API webhook service will retry the portout validation webhook to the customer's endpoint 8 times over a period of 40 minutes (once every 5 minutes).

| Event | Description |
|:------|:------------|
| [Portout Validation Webhooks](webhooks/portoutValidationWebhook) | Bandwidth sends this event when a Portout request is initiated on a number in your account. Please contact [support](https://support.bandwidth.com) to enable Portout Validation. |

## Authentication

Bandwidth allows you to enable basic authentication on the webhooks received from the different services. For messaging and voice, credentials would be set on the messaging or voice application created in the Bandwidth Dashboard. In a subscription, the basic authentication credentials would be set in the POST request to [create a subscription](./../account/subscriptions.mdx). To authenticate, Bandwidth follows the basic HTTP authentication framework outlined in RFC 7235.

Essentially, if you have basic authentication enabled for a webhook, Bandwidth will send a request with no authorization header attached and expect a 401 response that includes a WWW-AUTHENTICATE header containing a challenge. An example of that header could look like WWW-AUTHENTICATE: Basic realm="".

Once the proper 401 HTTP response is received, Bandwidth will send a second request that includes an authorization header and webhook body. The authorization header will include the credentials given in either the application settings or subscription creation, encoded in base64.

It is important to note that if the WWW-AUTHENTICATE header is not received alongside the 401 response, Bandwidth will **not** try a second request and your the callback will not be received by your server. More information about this practice can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication).
