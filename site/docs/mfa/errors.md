---
id: errors
title: Errors
slug: /mfa/errors
description: Bandwidth's MFA Errors
keywords:
  - bandwidth
  - voice
  - messaging
  - multi
  - factor
  - auth
  - authentication
image: '@site/static/img/bw-icon.svg'
---

Bandwidth will respond with HTTP error codes when there are any issues with Multi-Factor Authentication endpoints. Any `4xx` or `5xx` HTTP response code will not be billed. All of the errors except for `401` and `403` have a similar response format. Unifying all of the responses is in the works, so be sure to keep checking the page for updates!

## Overview

* [400 - Bad Request](#http-400)
* [401 - Unauthorized](#http-401)
* [403 - Forbidden](#http-403)
* [429 - Too Many Requests](#http-429)
* [500 - Internal Server Error](#http-500)

## 400 – BAD_REQUEST {#http-400}

Bandwidth will return a `HTTP-400` error when the request is malformed or invalid.  See the message of the error for tips before trying again.

### Parameters
| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| error                   | `string` | The message associated with the error            |
| requestId               | `string` | The associated requestId from AWS. Use this as a reference when contacting support |

### Example: Invalid from number

```http
POST https://mfa.bandwidth.com/api/v1/accounts/{{accountId}}/code/messaging HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
  "to"            : "",
  "from"          : "+12345678901",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "scope"         : "2FA",
  "digits"        : 7,
  "message"       : "Test code: {CODE}"
}
```

#### Responds

```http
Status: 400 Bad Request
Content-Type: application/json; charset=utf-8

{
  "error": "to number is required",
  "requestId": "abc12312-abcd-1234-abcd-1234abcd1234"
}
```

## 401 – UNAUTHORIZED {#http-401}

Bandwidth returns a `HTTP-401` Error when the specified user does not have access to the account. Ensure the username and password are correct along with the correct account number. See the [security & credentials guide](../../account/credentials) for more information.

### Parameters
| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| message                 | `string` | The message associated with the error            |

### Example: Incorrect credentials sent

```http
POST https://mfa.bandwidth.com/api/v1/accounts/{{accountId}}/code/messaging HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
  "to"            : "+12345678901",
  "from"          : "+12345678901",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "scope"         : "2FA",
  "digits"        : 7,
  "message"       : "Test code: {CODE}"
}

```

#### Responds

```http
Status: 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "message": "Unauthorized"
}
```

## 403 – FORBIDDEN {#http-403}

Bandwidth returns a `HTTP-403` error when the user does not have access to MFA.

### Parameters

| Value     | Description          | Example                                |
|:----------|:---------------------|:---------------------------------------|
| Message   | `string`             | The message associated with the error  |

### Example: User does not have access

```http
POST https://mfa.bandwidth.com/api/v1/accounts/{{accountId}}/code/messaging HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
  "to"            : "+12345678901",
  "from"          : "+12345678901",
  "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
  "scope"         : "2FA",
  "digits"        : 7,
  "message"       : "Test code: {CODE}"
}
```

#### Responds

```http
Status: 403 Forbidden
Content-Type: application/json; charset=utf-8

{
   "Message": "User is not authorized to access this resource with an explicit deny"
}
```

## 429 - TOO MANY REQUESTS {#http-429}

Bandwidth returns a `HTTP-429` error when the rate limit has been reached. This response code gets returned when the `verify` endpoint is called too many times with invalid codes.

### Parameters
| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| error                   | `string` | The message associated with the error            |
| requestId               | `string` | The associated requestId from AWS. Use this as a reference when contacting support |

### Example: Too many requests

```http
POST https://mfa.bandwidth.com/api/v1/accounts/{{accountId}}/code/verify HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/plain;charset=UTF-8

{
  "to"                       : "+12345678901",
  "applicationId"            : "93de2206-9669-4e07-948d-329f4b722ee2",
  "scope"                    : "2FA",
  "expirationTimeInMinutes"  : 3,
  "code"                     : "1234"
}
```

#### Responds

```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8

{
  "error": "This number has exceeded verification attempts, please wait 2 minutes",
  "requestId": "abc12312-abcd-1234-abcd-1234abcd1234"
}
```

## 500 - INTERNAL SERVER ERROR {#http-500}

Bandwidth returns a `HTTP-500` error when there is an unintended internal error on our end.

### Parameters
| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| error                   | `string` | The message associated with the error            |
| requestId               | `string` | The associated requestId from AWS. Use this as a reference when contacting support |

### Example: Internal error

```http
POST https://mfa.bandwidth.com/api/v1/accounts/{{accountId}}/code/verify HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/plain;charset=UTF-8

{
  "to"                       : "+12345678901",
  "applicationId"            : "93de2206-9669-4e07-948d-329f4b722ee2",
  "scope"                    : "2FA",
  "expirationTimeInMinutes"  : 3,
  "code"                     : "1234"
}
```

#### Responds

```http
HTTP/1.1 500 Internal Server Error
Content-Type: application/json; charset=utf-8

{
  "error": "Internal Error",
  "requestId": "abc12312-abcd-1234-abcd-1234abcd1234"
}
```
