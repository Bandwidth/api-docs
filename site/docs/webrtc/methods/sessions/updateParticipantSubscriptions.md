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


## Update a participant's subscriptions

This is a full update that will replace the participant's subscriptions. First call `getParticipantSubscriptions` if you need the current subscriptions. Call this endpoint with no `Subscriptions` object to remove all subscriptions


### Request URL
<code class="put">PUT</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

### Request Body Parameters
| Parameter                   | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| sessionId                   | Session the subscriptions are associated with.                                                    
| participants                | IDs of Participants publishing media to be subscribed to, optionally including a subset of stream aliases. Optional.                                  






### Example: Update a participant's subscriptions


```bash
curl -X PUT 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/sessions/{sessionId}/participants/{participantId}/subscriptions' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
	 --data-raw '
{
  "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
  "participants": [
    {
        "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521"
    },
    {
        "participantId": "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7",
        "streamAliases": ["microphone1", "microphone2"]
    }
  ]
}'
```

> Responds

```json

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

