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


## Create a new session

Sessions are idempotent, so relevant parameters must be set in this function if desired


### Request URL
<code class="post">POST</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

<aside class="alert general">
<p>IMPORTANT NOTE ABOUT SESSION TAGS!</p>
You should not include sensitive or personally-identifiable information in any tag!
</aside>

---

### Request Body Parameters
| Parameter                   | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| tag                         | User defined tag to associate with the session                                                    


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| id                          | Unique id of the session                                                                                                                    
| tag                         | User defined tag to associate with the session                                                    





### Example: Create a new session


```bash
curl -X POST 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
	 --data-raw '
{
  "tag": "session1"
}'
```

> Responds

```json
{
  "id"                  : "75c21163-e110-41bc-bd76-1bb428ec85d5",
  "tag"                 : "session1"
}
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

