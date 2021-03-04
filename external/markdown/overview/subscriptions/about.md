# Subscriptions

Bandwidth uses HTTP Callbacks (also known as [webhooks](../guides/webhooks.md)) to send [number ordering & porting events](../../numbers/callbacks/orderNotification.md) to any publicly addressable url.

In order to successfully use the Number Ordering & Porting APIs you need to configure an `subscription` for each `orderType` (in table below). Each subscription is account global and each **account** can have multiple subscriptions per `orderType`.

Subscriptions contain the `URL` & `CallbackCreds` to authenticate and send [number ordering & porting events](../../numbers/callbacks/about.md) for each state change.

Because processing times may vary across all order types, Bandwidth recommends the use of subscriptions to receive webhook notifications upon order completion, as opposed to polling the resource ID with <code class="get">GET</code> requests until the desired state is returned.

![Subscriptions](static/images/subscriptions.png)

### Base Url
`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions`

### Capabilities
| Verb                               | Path                                                                                   | about                                         |
|:-----------------------------------|:---------------------------------------------------------------------------------------|:----------------------------------------------|
| <code class="get">GET</code>       | [`/api/accounts/{accountId}/subscriptions`](getSubscriptions.md)                       | List all subscriptions                        |
| <code class="post">POST</code>     | [`/api/accounts/{accountId}/subscriptions`](postSubscriptions.md)                      | Create an subscription                        |
| <code class="get">GET</code>       | [`/api/accounts/{accountId}/subscriptions/{subscriptionId}`](getSubscriptionsId.md)    | Get information about a specific subscription |
| <code class="put">PUT</code>       | [`/api/accounts/{accountId}/subscriptions/{subscriptionId}`](putSubscriptionsId.md)    | Make changes to an subscription               |
| <code class="delete">DELETE</code> | [`/api/accounts/{accountId}/subscriptions/{subscriptionId}`](deleteSubscriptionsId.md) | Delete an subscription                        |

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
| `csrs`                   | `COMPLETE`, `FAILED`, `ACTION_REQUIRED`                                                                             |
| `emergencyNotificationGroup` | `COMPLETE`, `FAILED` |
| `emergencyEndpointGroup` | `COMPLETE`, `FAILED` |

### Event Types
| Event type       | Description                                                                                                                                                                                                                                                                                                                                                     |
|:-----------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `MESSAGING_LOST` | Sent when TNs in your account are impacted due to orders outside of your account. For example, a `MESSAGING_LOST` event is reported on a TN with hosted messaging service in your account when a port in order placed by another account on the same TN is executed. An order placed in your account to remove the TN will NOT report a `MESSAGING_LOST` event. |
