---
id: credentials
title: Credentials
slug: /account/credentials
description: A general overview of Bandwidth's API Credentials
keywords:
  - bandwidth
  - API
  - credentials
image: '@site/static/img/bw-icon.svg'
---

This guide will cover the credentials for interacting with Bandwidth's APIs.

## Basic Authorization

All of Bandwidth's APIs are protected with Basic Authorization over HTTPS. Basic Authorization requires the user's `username:password` pair to be encoded with [base64](https://en.wikipedia.org/wiki/Base64) as part of the `Authorization` HTTP header.

⚠️ Usernames and Passwords are **case sensitive**!

### Credentials Snapshot

| Credential Name | Description                                                                                                                                                   | Example                                            |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| `username`      | Your API user's **username**                                                                                                                                  | `jdoe`                                             |
| `password`      | Your API user's **password**                                                                                                                                  | `correct-horse-battery-staple`                     |
| `accountId`     | Your unique **account id**. The `accountId` is used as part of the url to make API requests, e.g. `https://dashboard.bandwidth.com/api/accounts/{accountId}/` | `920012`                                           |

## Creating an API User

Bandwidth provides a 'user-based' permission and authentication scheme. It's recommended to [create a new user](https://support.bandwidth.com/hc/en-us/articles/115007187088-How-to-Create-New-Users-in-the-Bandwidth-Dashboard) with **ONLY** API access and the necessary roles on your account. The API user can be leveraged to access all of Bandwidth's APIs.


:::note
By default users with no assigned role(s) will have the ability to perform GET requests against the following endpoints:
* Orders:  
  * `https://eng.dashboard.bandwidth.com/api/accounts/{accountId}/orders`
* Order Details: 
  * `https://eng.dashboard.bandwidth.com/api/accounts/{accountId}/orders{orderId}`
* SIP Peer Details: 
  * `https://eng.dashboard.bandwidth.com/api/accounts/{accountId}/sites/{siteId}/sippeers`
* Admin Edge Settings: 
  * `https://eng.dashboard.bandwidth.com/api/accounts/{accountId}/products/edgemanagement/settings`
* Subscriptions API: 
  * `https://eng.dashboard.bandwidth.com/api/accounts/{accountId}/subscriptions`
:::

## API User Credentials

⚠️ The API user is meant to be separate from your Dashboard user and **should not** be used to access the Dashboard. Further, your Dashboard user **should not** be used to access Bandwidth's APIs.

Unlike other user types, an API user is not required to update their password.
