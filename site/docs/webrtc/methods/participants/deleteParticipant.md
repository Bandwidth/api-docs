---
id: todo
title: todo
slug: /todo
description: todo
keywords:
  - todo
hide_title: true
image: ../../static/img/bandwidth-logo.png
---


## Delete participant by ID


### Request URL
<code class="delete">DELETE</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants/{participantId}`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---






### Example: Delete participant by ID


```bash
curl -X DELETE 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants/{participantId}' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
```

> Responds

```json

```

### Potential Error Responses

```http
HTTP/1.1 400 (Bad Request)
Content-Type: application/json
```

```http
HTTP/1.1 401 (Unauthorized)
Content-Type: application/json
```

```http
HTTP/1.1 403 (Access Denied)
Content-Type: application/json
```

```http
HTTP/1.1 50x (Unexpected Error)
Content-Type: application/json
```

