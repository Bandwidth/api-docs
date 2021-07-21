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


### Message Storage IE `GET /messages`

Bandwidth Messaging does not keep _any_ records to fetch later.  If you need to keep track of delivered, error-ed, received messages after you receive the corresponding callback event, you **MUST** store the events in the data-store of your choice.

Once we have successfully delivered the callback event and receive an `HTTP 2xx` response, Bandwidth can no longer provide any detail about that message.

### Message Callbacks

As the messaging API **does not** offer message storage or detailed messaging records, Bandwidth will attempt to deliver _every_ callback until your server replies with a `HTTP 2xx` status code.  If the callback request times out, or your server returns a code less than `HTTP 2xx` or greater than `HTTP 3xx` Bandwidth will try to deliver the callback multiple times over the next 24 hours.

After 24 hours, if your server has not returned a `HTTP 2xx` code, Bandwidth will no longer try to send the callback.

### Message Creation/Acceptance (`HTTP 202`)

The messaging API works off of an internal queuing system.  As such, when you <code class="post">POST</code> to the `v2/.../messages` to create a new message, Bandwidth will reply with an `HTTP 202 - Accepted`.  This indicates that the message has been placed on the queue

As the message progresses through the internal system you will receive a [Message Delivered](callbacks/msgDelivered.md) callback when the message has been handed off to the downstream carrier.

If at any-point through the process the message fails, you will receive a detailed [Message Failed](callbacks/messageFailed.md) callback with an error code describing the reason for failure.

### Message Segment Counts

This indicates the number of segments the original message from the user is broken into before sending over to carrier networks. Segmentation of messages depends on the size and encoding. Bandwidth will segment the message if the character count is over the below limits:

* 160 for GSM-7
* 70 for UCS-2
* For MMS messages the segment count will always be set to 1.

The value `segmentCount` is returned in the callback events and the response when creating the message.

For mored detailed information on segment counts, please see our [character limits and concatenation practices](https://support.bandwidth.com/hc/en-us/articles/360010235373-What-Are-Bandwidth-s-SMS-Character-Limits-Concatenation-Practices-).

### MMS and Group Message Delivery Receipts

MMS and Group messages delivery receipts are currently in beta and you will need to enable them to receive them.
