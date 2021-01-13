# Messaging Billing and MPS Guidelines {#top}

## About {#about}

This guide will walk through the recommended approach to managing queues and rate limits for use with the Messaging API. Over the past years mobile telecom operators have begun to block what is deemed automated traffic (**A2P**) sent over standard local telephone numbers IE: (919)-430-5555. The amount of messages sent in this way have increased due to spreading automated traffic (A2P) across multiple local telephone numbers to bypass volumetric filters. This process is called "snowshoeing" and as a result, the mobile operators are not only blocking volumetrically, but are also finger-printing content and preemptively blocking messages even from a "fresh" phone number.

## Overview

* [Billing information](#billing)
* [How Bandwidth Helps](#how-bandwidth-helps)
    * [A2P Best Practices](#a2p-best-practices)
* [Default Rate Limits](#default-rate-limit)
* [Managing Messages](#managing-messages)
    * [Back-off and Retry](#backoff-and-retry)
    * [Throttling](#throttle)
    * [Queue Management](#queue-management)

## Assumptions
* You are familiar with:
  * [CTIA Best Practices (PDF)](https://api.ctia.org/wp-content/uploads/2019/07/190719-CTIA-Messaging-Principles-and-Best-Practices-FINAL.pdf)
  * [The TCPA _Telephone Consumer Protection Act_](https://transition.fcc.gov/cgb/policy/TCPA-Rules.pdf)

## Billing {#billing}
Sending SMS and single recipient MMS are billed and added to your MPS (message per second) limit. Sending group MMS is billed and added to your MPS limit **per recipient of the group MMS**.

Billing/pricing information can be found at [Bandwidth's home page](https://www.bandwidth.com/pricing/).

---

## How Bandwidth Helps {#how-bandwidth-helps}

In response to the ever changing (& unregulated) landscape of telecommunications and text messaging, Bandwidth has implemented a new rate-limit process and look-ahead Spam filtering service to help our customers ensure deliver-ability of their messages.

More information about the types of messaging Bandwidth supports can be found in the ["What is P2P and A2P Messaging?"](https://support.bandwidth.com/hc/en-us/articles/360010861013-What-is-P2P-and-A2P-Messaging-) article.

### Spam filtering and A2P Best Practice

Bandwidth uses the same network protection technology as the mobile telco operators. This allows us to screen messages before they're sent to the downstream carrier. By checking before Bandwidth passes the message along, we're able to work with you to understand and fix any potential issues with the message. This maintains your telephone number deliverability reputation and helps build predictable traffic patterns. If the message is marked as Spam we will send a notification to the `application` specified in the [create message](./methods/messages/createMessage.md) request.

At Bandwidth, we want to help our customers follow [best practices for toll-free (A2P) messaging](https://support.bandwidth.com/hc/en-us/articles/360005440954-Toll-Free-A2P-Use-Case-Best-Practices). All messaging traffic is required to comply with relevant laws and regulations, including (but not limited to) the [Telephone Consumer Protection Act (TCPA)](https://transition.fcc.gov/cgb/policy/TCPA-Rules.pdf).  Please note, this article does not constitute legal advice.

---

## Default Messaging Rate Limits and Queues {#default-rate-limit}

All Bandwidth messaging products are rate limited in some fashion and messages will be queued internally to send out.

Rate limits on messages are applied to segment count, not API request. This means that a 2 segment message would count as 2 messages against your rate limit.

For more information about rate limits and queues, please visit the links below:

* [What are Bandwidth’s default rate limits for messaging?](https://support.bandwidth.com/hc/en-us/articles/360014169214-What-are-Bandwidth-s-default-rate-limits-for-messaging-)
* [How does Bandwidth message queuing work?](https://support.bandwidth.com/hc/en-us/articles/360014275073-How-does-Bandwidth-message-queuing-work-)

### 429 – Too Many Requests

It is important to note, when you max out your account level rate limit and your queue size has been exceeded, you will receive a [429 - Too Many Requests error.](errors/httpErrors.md#http-429)

### Sample Message Rate Limit Response

You will receive this error response if:

* Your **per account** queue is full

```http
Status: 429 Too Many Requests
Content-Type: application/json; charset=utf-8
```

```json
{
  "type": "max-message-queue-size-exceeded",
  "description": "The SMS queue for your account is full and cannot accept more messages right now. Your allowed rate is 60 messages per minute. The capacity of this queue is 900 messages (15 minutes). Reduce your message sending rate, or contact support to increase your allowed rate."
}
```

## Managing Messages {#managing-messages}

| Method             | Description                                                                                                                                                                 | Use-cases                                                                                                                                                       |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Back-off and Retry | Try to send messages as quickly as possible to Bandwidth. When you hit the rate limit, add a small delay and try again. If it fails, then add some more delay and try again | Works best for use-cases that need to send lots of messages with no priority:<br> - Day before appointment reminders <br> - Receipts <br> - Opted-in Promotions |
| Throttle           | Only send messages to Bandwidth as quickly as your dequeue rates                                                                                                            | Works best with any use case, but favors pure P2P                                                                                                               |
| Queue Management   | Utilizing a queue system such as [RabbitMQ](https://www.rabbitmq.com/) or [Mosquitto](https://mosquitto.org/)                                                               | Works best for use-cases that intermingle massive campaigns with realtime traffic. Enables full control over message priority and time-to-live                  |


### Back-off and Retry {#backoff-and-retry}

Back-off and Retry adaptively increases delay to attempt to find the quickest possible call pacing without hitting rate limits. The pseudocode below shows a simple example using a linear coefficient to adjust delay. Introducing randomness or "jitter" into the delay can help reduce successive collisions.

```python
retries = 0
coefficient = 2 // coefficient to increase delay
delay = some milliseconds (small amount)
DO
status = Get the result of the asynchronous operation.
IF status = SUCCESS
    retry = false
ELSE IF status = TIMEOUT
    retry = true
    retries = retries + 1
    WAIT delay
    delay = coefficient * delay
END IF
WHILE (retry AND (retries < MAX_RETRIES))
```

### Throttling {#throttle}

Throttling paces the asynchronous operations based on a specified time duration. Using a duration just longer than the rate limit will help ensure calls are completed as they are sent without having to resend due to rate limiting.

```python
retries = 0
DO
status = Get the result of the asynchronous operation.
IF status = SUCCESS
    retry = false
ELSE IF status = TIMEOUT
    retry = true
    retries = retries + 1
    WAIT some milliseconds
END IF
WHILE (retry AND (retries < MAX_RETRIES))
```

### Queue Management {#queue-management}

Queue Management requires configuring and maintaining a queue of asynchronous operations, http API calls for example, facilitating linear control over when the operation is executed. The pseudocode below shows a simple queuing solution. For complex queuing tasks, consider using a queue system such as [RabbitMQ](https://www.rabbitmq.com/) or [Mosquitto](https://mosquitto.org/).

```python
1. CONFIGURE_QUEUE size, storage, etc
2. PUSH_TO_QUEUE add async operation data to queue
3. SUBSCRIBE_TO_QUEUE get async operation from queue

 BEGIN_HANDLER
 DO
   message = extracted from queue of async operations
   status = execute async operation with message
   IF status = SUCCESS
      retry = false
   ELSE IF status = TIMEOUT
      retry = true
      retries = retries + 1
      WAIT delay
   END IF
 WHILE (retry AND (retries < MAX_RETRIES))
 END_HANDLER
```
