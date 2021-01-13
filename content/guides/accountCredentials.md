{% raw %}
<section class="accountCredentials">
{% endraw %}

# Account Credentials {#top}

This guide will cover the different credentials for interacting with Bandwidth's APIs, and how to authenticate on each API.

## Basic Authorization

All of Bandwidth's APIs are protected with Basic Authorization over HTTPS. Basic Authorization requires the credential pair to be encoded with [base64](https://en.wikipedia.org/wiki/Base64) as part of the `Authorization` HTTP header.

⚠️ Username and Passwords are **case sensitive**!

### Credentials Snapshot {#snap-shot}

| Credential Name | Description                                                                                                                                                        | Example                                            |
|:----------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------|:---------------------------------------------------|
| `username`      | The **username** of your **API Credentials** for the [Bandwidth Dashboard](https://dashboard.bandwidth.com)                                                        | `jdoe`                                             |
| `password`      | The **password** of your **API Credentials** for the  [Bandwidth Dashboard](https://dashboard.bandwidth.com)                                                       | `correct-horse-battery-staple`                     |
| `accountId`     | Your unique account **id**.  The `accountId` is used as part of the url to make API requests. <br> Ex: `https://dashboard.bandwidth.com/api/accounts/{accountId}/` | `920012`                                           |

## Creating the API Credentials

Bandwidth provides a 'user-based' permission and authentication scheme. It's recommended to [create a new user](https://support.bandwidth.com/hc/en-us/articles/115007187088-How-to-Create-New-Users-in-the-Bandwidth-Dashboard) with **ONLY** API access and the possible "roles on your account".

It's worth noting the other user types besides API are forced to update password every 90 days.

## API Credentials 

All of Bandwidth's APIs leverage your API Credentials created specifically for API access.  The API Credential pair must be created as a unique set within Dashboard. Learn more about creating your API Credentials in the [support article](https://support.bandwidth.com/hc/en-us/articles/115007187088-How-to-Create-New-Users-in-the-Bandwidth-Dashboard).

⚠️ The API Credential pair are generally separate from your **Login Username & Password** and **should not** be used to access the dashboard.  Further, your login username and password **should not** be used to access Bandwidth's APIs.

<br>
