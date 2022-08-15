---
id: credentials
title: How to create API Credentials
slug: /account/credentials
description: A general overview of Bandwidth's API Credentials
keywords:
  - bandwidth
  - API
  - credentials
image: ../../static/img/bandwidth-logo.png
---

This guide will cover the creation of an API user and generation of credentials for interacting with Bandwidth's APIs.

## Creating an API User

An account admin is required to create API credentials that allow software developers to authenticate their applications to Bandwidth's APIs.

1. Log into the [Bandwidth Dashboard](https://dashboard.bandwidth.com/).
2. In the top navigation menu, select **Account** and click **Users**.
3. Click **Add**.
4. Enter a username, first and last name, email address, and work phone number. This is a critical step as it’ll be used for validation later.

:::note
The email used must be different from your existing dashboard account. The username can't be changed once the user is created, so please make sure to double-check it before saving. The phone number must be typed in a 10-digit format. Each user will need to verify it using the same exact format.
:::

5. **Administration level:** An account admin can manage users, while a basic user can only edit and view their own profile.

<img
  src={require('../../static/img/adminstration-level.png').default}
  alt="Admin Level"
  class="center"
/>

6. **User access methods:** Determine how this user should interact with the Bandwidth Dashboard or APIs by selecting one of the following user access methods:

    - **Allow user credentials to authenticate API:** This user will be allowed to use their credentials specifically to authenticate API calls. Since API users are expected to do automated processes, they won't be required to reset their password but also will not be able to use it to log into the Bandwidth Dashboard. To address this, many developers choose to have two sets of credentials: one to access the Bandwidth Dashboard and another API-only to validate API calls.

<img
  src={require('../../static/img/api-access-level.png').default}
  alt="API Access"
  class="center"
/>

Important: You can also check both boxes, but it should only be done in special cases and isn't recommended for most users. Although we don't force password resets for users with API-only or both access methods, we do encourage you to enforce your own automated password reset best practices.

7. **Password:** As an account admin, you must set this user's password.
8. **Roles:** Set the permissions for this account. From here, click to toggle the permissions your user will need to access for their job. User role definitions are available below.
9. **Accounts:** If your company has multiple Bandwidth Dashboard accounts, you can grant access to those here.
10. Click **Save Changes.**
11. The user will receive an email containing their username and asking them to verify their account information. Once they verify it, they'll receive a second email containing their password. If you didn't create a password for the user, they'll be able to do so themselves.

## API Credentials

All of Bandwidth's APIs are protected with Basic Authorization over HTTPS. Basic Authorization requires the user's `username:password` pair to be encoded with [base64](https://en.wikipedia.org/wiki/Base64) as part of the `Authorization` HTTP header from the API user you created.

:::tip
Usernames and Passwords are **case sensitive**!
:::

### Credentials Snapshot

| Credential Name | Description                                                                                                                                                   | Example                                            |
|:----------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| `username`      | Your API user's **username**                                                                                                                                  | `jdoe`                                             |
| `password`      | Your API user's **password**                                                                                                                                  | `correct-horse-battery-staple`                     |
| `accountId`     | Your unique **account id**. The `accountId` is used as part of the url to make API requests, e.g. `https://dashboard.bandwidth.com/api/accounts/{accountId}/` | `920012`                                           |

## Where to next?

Now that you have successfully created API user credentials, start using them to build with Bandwidth!
- [Search and order phone numbers](/docs/numbers/guides/searchingForNumbers/)
- [Voice Quick Start Guide](/docs/voice/quickStart/)
- [Messaging Quick Start Guide](/docs/messaging/quickStart/)