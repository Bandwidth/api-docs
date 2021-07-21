---
id: about
title: About
slug: /messaging   
description: A general overview of Bandwidth's account services
keywords:
  - bandwidth
  - messaging
hide_title: true
image: ../../static/img/bandwidth-logo.png
---

## Base API URL

`https://messaging.bandwidth.com/api/v2/users/{accountId}`

## Messaging Overview

### Message Storage

Bandwidth's Messaging API supplies a GET method to allow you to query historical data regarding messages.

Once we have successfully delivered the webhook event and receive an `HTTP 2xx` response, Bandwidth allows you to query details about those messages. **However**, Bandwidth does not store any text message content for privacy reasons - only metadata.

### Message Webhooks

Bandwidth will attempt to deliver _every_ webhook until your server replies with a `HTTP 2xx` status code.  If the webhook request times out, or your server returns a code less than `HTTP 2xx` or greater than `HTTP 3xx` Bandwidth will try to deliver the webhook multiple times over the next 24 hours.

After 24 hours, if your server has not returned a `HTTP 2xx` code, Bandwidth will no longer try to deliver the webhook.

### Message Creation/Acceptance

The messaging API works off of an internal queuing system.  As such, when you <code class="post">POST</code> to the `v2/.../messages` to create a new message, Bandwidth will reply with an `HTTP 202 - Accepted`.  This indicates that the message has been placed on the queue

As the message progresses through the internal system you will receive a [Message Delivered](webhooks/msgDelivered.md) webhook when the message has been handed off to the downstream carrier.

If at any-point through the process the message fails, you will receive a detailed [Message Failed](webhooks/messageFailed.md) webhook with an error code describing the reason for failure.

### Message Segment Counts

This indicates the number of segments the original message from the user is broken into before sending over to carrier networks. Segmentation of messages depends on the size and encoding. Bandwidth will segment the message if the character count is over the below limits:

* 160 for GSM-7
* 70 for UCS-2
* For MMS messages the segment count will always be set to 1.

The value `segmentCount` is returned in the webhook events and the response when creating the message.

For mored detailed information on segment counts, please see our [character limits and concatenation practices](https://support.bandwidth.com/hc/en-us/articles/360010235373-What-Are-Bandwidth-s-SMS-Character-Limits-Concatenation-Practices-).

### MMS and Group Message Delivery Receipts

MMS and Group messages delivery receipts are currently in beta and you will need to enable them to receive them.
