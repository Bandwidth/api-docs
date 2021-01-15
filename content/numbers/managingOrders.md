# Managing Orders

## Overview

* [About](#about)
* [Associating Notes with Work Orders](#notes-with-orders)
* [Order Change Notifications](#change)
* [Email Notifications](#email-notifications)
* [Callback URL Notifications](#callback-notifications)

## About {#about}

The Bandwidth Phone Number API uses an “order” model for tracking the changes requested to the provisioned information that controls our customer and end-user experiences.   Major changes to the configuration of the network such as Ordering numbers, Porting in numbers, Porting numbers out, Disconnecting numbers are tracked with work-orders that record the changes and track them through the related work-flow.

## Associating Notes with Work Orders {#notes-with-orders}

The following API calls are used to add notes to various types of work-orders, allowing events that involve the work-order to be tracked and reviewed.  The API can be used with users that have credentials to manage and modify the account that owns the work-order(s).

## Order Change Notifications {#change}

The Bandwidth Phone Number API has the capability to monitor portins and other work-order types for meaningful events and status changes, and notify one or more email addresses of those events.  The events that cause notification emails are state changes for all viable states for the applicable order-types, as well as for all events that add a Note to the order in question.

| Order Type          | State Change                                                                                                                                                                                                                                                                                                                                            |
|:--------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Port-ins            | `PENDING_DOCUMENTS`, `SUBMITTED`, `REQUESTED_SUPP`, `FOC`, `COMPLETE`, `EXCEPTION`, `SNAPBACK`, `REQUESTED_CANCEL`, `CANCELLED` <br> <br> Note that the `PENDING_DOCUMENTS` status is transient, and will be typically be followed immediately by `SUBMITTED` or `CANCELLED`.  It remains as part of the work-flow for backwards compatibility reasons. |
| Phone Number Orders | `SUBMITTED`, `PARTIAL`, `COMPLETE`                                                                                                                                                                                                                                                                                                                      |
| Portouts            | `COMPLETE`                                                                                                                                                                                                                                                                                                                                              |
| Disconnects         | `COMPLETE`                                                                                                                                                                                                                                                                                                                                              |

### Email Notifications {#email-notifications}

The email notification capability enables a user with permissions on an account to configure any email address for notifications.  This level of freedom was provided to allow credentialed users the flexibility to control the destination of the notifications, even if the destination does not share an email address with the account or user.

The email notification capability also processes responses (replies) to notifications, inserting the reply text into the Notes field of a work order.  This allows the work order to retain a record of the correspondence applicable to the evolution of that order.

A subscription is a request to be notified by email of events that happen to outstanding work orders.  Subscriptions are associated with accounts, and apply to some or all of the work orders managed by that account.  The API for the notification framework is dedicated to the management of these subscriptions.

Subscriptions can apply to a specific `orderId`, or to all order-ids of a certain type.  If the `orderId` is omitted in the subscription request it means that the subscription request is applicable to all orders of that type.

Deletion of subscriptions is supported on a one-by-one basis.  Deleting all subscriptions associated with an order requires a <code class="get">GET</code> request of all of those Subscriptions, and deleting them one by one.

## Callback URL Notifications {#callback-notifications}

The Bandwidth Phone Number API also allows the establishment of a “callback” URL that can be used to monitor work-orders or changes.   Rather than receiving an email, the callback URL is invoked, allowing the monitoring system to be notified about the order changes in a machine-to-machine manner.

To create a Notifications Callback Subscription the customer creates a <code class="post">POST</code> request to the item being monitored (typically an Order or Port-in ) the user creates a <code class="post">POST</code> request to the subscriptions resource associated with the account.

If the `OrderId` field is omitted, then the subscription will apply to all orders of the indicated OrderType.

The `<Expiry>` value can be very large (100 years in seconds).  Note that even in the case of a long expiry, the subscription will be removed once the order (if specified) reaches a final state.

Updating a subscription is done via a <code class="put">PUT</code> request to the subscription. This can be used to update the expiry request.   Requests to update the expiry are at the whim of the Bandwidth Phone Number API.

Note that the initial state changes for an order may happen very quickly, so subscribing to an order once the system creates it needs to account for the fact that the initial state may be different based on timing factors.  It is recommended that the application creating the subscription check the order status after the subscription is created to ensure the correct initial condition.

It is possible to remove specific subscriptions by ID.

Once a subscription with a callback URL is active, changes to the works-orders that are part of the active subscription will be notified by a <code class="post">POST</code> to the provided URL
<br>
<br>
