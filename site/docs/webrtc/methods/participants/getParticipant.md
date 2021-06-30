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


## Get participant by ID


### Request URL
<code class="get">GET</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants/{participantId}`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| id                          | Unique id of the participant                                                                      
| callbackUrl                 | Full callback url to use for notifications about this participant                                 
| publishPermissions          | Defines if this participant can publish audio or video                                            
| sessions                    | List of session ids this participant is associated with                                           
| subscriptions               | Subscription information for this participant, which lists the sessions and IDs of Participants publishing media
| tag                         | User defined tag to associate with the participant
| deviceApiVersion            | The version of the signaling API the participant will use 





### Example: Get participant by ID


```bash
curl -X GET 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants/{participantId}' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
```

> Responds

```json
{
  "id"                  : "320e2af6-13ec-498d-8b51-daba52c37853",
  "callbackUrl"         : "https://example.com/callback",
  "publishPermissions"  : [
      "VIDEO",
      "AUDIO"
 ],
  "sessions"            : [
      "75c21163-e110-41bc-bd76-1bb428ec85d5"
 ],
  "subscriptions"       : {
      "sessionId"           : "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
      "participants"        : [
          {
              "participantId"       : "568749d5-04d5-483d-adf5-deac7dd3d521"
          },
          {
              "participantId"       : "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
          } 
     ]
 },
  "tag"                 : "participant1",
  "deviceApiVersion"    : "V2"
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


