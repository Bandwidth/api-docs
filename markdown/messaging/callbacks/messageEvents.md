# Message Events

Bandwidth uses HTTP Callbacks (also known as [webhooks](https://webhooks.pbworks.com/w/page/13385124/FrontPage)) to send these events to any publicly addressable url.

## Message Callbacks Concepts

* All Message callbacks are sent as a list/array `[ {} ]` to the webhook url in the application.
* You **MUST** Reply with a `HTTP 2xx` status code for _every_ callback/delivery receipt.  Bandwidth will retry _every_ callback over the next 24 hours until a `HTTP 2xx` code is received for the callback.  After 24 hours, Bandwidth will no longer try to send the callback
* Bandwidth's Messaging platform has a 10 second timeout for callbacks. This means your server must respond to the callback request within 10 seconds, otherwise the platform will try again at a later time.
* Because we guarantee "at least once delivery" of events, it is possible (but not common) to receive duplicate message events. Your server should be able to handle duplicates.

## Incoming Message Concepts
* For incoming messages sent to your numbers, a callback will also be received, notifying your [Application](../../account/applications/about.md) of the incoming message. For group messages where you own multiple recipient phone numbers, you will receive a distinct event and `messageId` for each individual recipient.

## Outgoing Message Callbacks and Delivery Receipts Concepts

* Callbacks will be sent via an HTTP POST request to the Callback URL for the [Application](../../account/applications/about.md) associated with the `applicationId` field sent with the [send message](../methods/messages/createMessage.md) payload. You will get a callback for any event related to that message.
  * For example, you will get an HTTP callback when your message is delivered, or blocked. In addition, you will get an event for any kind of Delivery Receipt that the destination carrier sends back, regarding the delivery of your message.

* For each outbound message, you **will** receive either (but not both) a [Message Delivered](msgDelivered.md) or [Message Failed](messageFailed.md) event.
  * It is essential to check the direction of the message in the callback you receive. For example, if your use case depends on responding to inbound messages, you do not want to respond to an outbound message callback. This could create a loop of messages being sent from your account as you continuously respond to outbound message callbacks.

* ⚠️  Delivery receipts are now supported for MMS & Group Messaging. During this beta phase, you will need to request this functionality to be enabled on your account. Once enabled you will need to support all three possible callback events for MMS (Message Delivered, Message Failed, & Message Queued callbacks). [Visit our Support Site](https://support.bandwidth.com/hc/en-us/articles/360051643414-How-do-I-enable-MMS-Delivery-Receipts-when-sending-messages-) to learn more about enabling MMS DLR on your account.

| Event                                      | Direction | Description                                                                      |
|:-------------------------------------------|:----------|:---------------------------------------------------------------------------------|
| [Incoming Group Message](incomingGroup.md) | `in`      | Bandwidth sends this event for each incoming group message                       |
| [Incoming Text Message](incomingSingle.md) | `in`      | Bandwidth sends this event for each incoming text message                        |
| [Message Delivered](msgDelivered.md)       | `out`     | Bandwidth sends this event when the text is delivered to the downstream carrier. |
| [Message Failed](messageFailed.md)         | `out`     | Bandwidth sends this event when the message contents were unable to be delivered |
| [Message Sending (MMS only)](messageSending.md) | `out`  | Bandwidth sends this event when the MMS message is in the process of being sent to the downstream carrier. The delivery receipt has not been received yet to indicate final success or failure. |
