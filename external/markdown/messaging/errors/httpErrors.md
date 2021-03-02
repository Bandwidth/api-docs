# HTTP Errors when sending messages 

Bandwidth will respond with HTTP errors code when the message creation request fails. Any `4xx` or `5xx` HTTP response code will not be billed nor will the message be sent.

## 400 – BAD_REQUEST 

Bandwidth will return a `HTTP-400` Error when the request is malformed or invalid.  See the message of the error for tips before trying again.

### Parameters
| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| type                    | `string` | The Type of error.                               |
| description             | `string` | A detailed description of why the error occurred |

### Example: Invalid telephone numbers

```http
POST https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
  "from"          : "",
  "to"            : "",
  "text"          : "Hello this is a text message",
  "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
}
```

#### Responds

```http
Status: 400 Bad Request
Content-Type: application/json; charset=utf-8

{
  "type": "request-validation",
  "description": "Your request could not be accepted"
}
```

## 401 – UNAUTHORIZED 

Bandwidth returns a `HTTP-401` Error when the specified user does not have access to the account. Ensure the username and password are correct along with the correct account number. See the [security & credentials guide](../../guides/accountCredentials.md) for more information.

### Parameters

| Value     | Description          | Example                                |
|:----------|:---------------------|:---------------------------------------|
| type                    | `string` | The Type of error.                               |
| description             | `string` | A detailed description of why the error occurred |

### Example: Incorrect credentials sent

```http
POST https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
  "from"          : "+19192676804",
  "to"            : "+19195554444",
  "text"          : "Hello this is a text message",
  "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
}

```

#### Responds

```http
Status: 401 Unauthorized
Content-Type: application/json; charset=utf-8

{
    "type": "unauthorized",
    "description": "Authentication Failed"
}
```

## 403 – FORBIDDEN 

Bandwidth returns a `HTTP-403` error when the user does not have access to the messaging API.

### Parameters

| Value     | Description          | Example                                |
|:----------|:---------------------|:---------------------------------------|
| type                    | `string` | The Type of error.                               |
| description             | `string` | A detailed description of why the error occurred |

### Example: User does not have access

```http
POST https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
  "from"          : "+19192676804",
  "to"            : "+19195554444",
  "text"          : "Hello this is a text message",
  "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
}
```

#### Responds

```http
Status: 403 Forbidden
Content-Type: application/json; charset=utf-8

{
   "type": "forbidden",
   "description": "Access Denied"
}
```

## 404 – NOT_FOUND 

Bandwidth returns a `HTTP-404` when the path is not found. Ensure the path of the request is correct and adjust accordingly.

### Path nonexistent Error Schema

| Value     | Description            | Example                        |
|:----------|:-----------------------|:-------------------------------|
| timestamp | Time error Occurred    | `2019-07-29T17:21:43.751+0000` |
| status    | HTTP Status            | `404`                          |
| error     | Description of error   | `Not found`                    |
| message   | Any more information   | `no message found`             |
| path      | Path that wasn't found | `/happy`                       |

### Example: Path does not exist

```http
POST https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages/happy HTTP/1.1
Content-Type: application/json; charset=utf-8
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0

{
  "from"          : "+19192676804",
  "to"            : "+19195554444",
  "text"          : "Hello this is a text message",
  "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
}
```

#### Responds

```http
HTTP/1.1 404 Not Found
Content-Type: application/json;charset=UTF-8

{
  "timestamp": "2019-09-09T19:02:19.253+0000",
  "status": 404,
  "error": "Not Found",
  "message": "Not Found",
  "path": "/api/v2/users/{{accountId}}/messages/happy"
}
```

## 415 - UNSUPPORTED MEDIA TYPE 

Bandwidth returns a `HTTP-415` error when the content-type of the request is incorrect. Ensure the request header contains `Content-Type: application/json; charset=utf-8` and try again.

### Parameters

| Parameter   | Type     | Description                                      |
|:------------|:---------|:-------------------------------------------------|
| type        | `string` | Type of Error                                    |
| description | `string` | A detailed description of why the error occurred |

### Example: Incorrect content-type sent

```http
POST https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/plain;charset=UTF-8

{
  "from"          : "+19192676804",
  "to"            : "+19195554444",
  "text"          : "Hello this is a text message",
  "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
}
```

#### Responds

```http
Status: 415 Unsupported Media Type
Content-Type: application/json; charset=utf-8

{
  "type": "unsupported-content-type",
  "description": "Content type 'text/plain;charset=UTF-8' not supported. Please use 'application/json'"
}
```

## 429 - TOO MANY REQUESTS 

Bandwidth returns a `HTTP-429` error when the rate limit has been reached.

For more information about rate limits and queue management, see the [rate limits](../ratelimits.md) document.

### Parameters

| Parameter               | Type     | Description                                      |
|:------------------------|:---------|:-------------------------------------------------|
| type                    | `string` | The Type of error.                               |
| description             | `string` | A detailed description of why the error occurred |

### Example: Too many requests

```http
POST https://messaging.bandwidth.com/api/v2/users/{{accountId}}/messages HTTP/1.1
Authorization: Basic YXBpVG9rZW46YXBpU2VjcmV0
Content-Type: text/plain;charset=UTF-8

{
  "from"          : "+19192676804",
  "to"            : "+19195554444",
  "text"          : "Hello this is a text message",
  "applicationId" : "7fc9698a-b04a-468b-9e8f-91238c0d0086"
}
```

#### Responds

```http
HTTP/1.1 429 Too Many Requests
Content-Type: application/json; charset=utf-8

{
  "type": "max-message-queue-size-exceeded",
  "description": "The SMS queue for your account is full and cannot accept more messages right now. Your allowed rate is 60 messages per minute. The capacity of this queue is 900 messages (15 minutes). Reduce your message sending rate, or contact support to increase your allowed rate."
}
```
