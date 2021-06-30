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


## Create a new participant under this account

Participants are idempotent, so relevant parameters must be set in this function if desired


### Request URL
<code class="post">POST</code>`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants`

#### Basic Authentication

Bandwidth WebRTC API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

---

<aside class="alert general">
<p>IMPORTANT NOTE ABOUT PARTICIPANT TAGS!</p>
You should not include sensitive or personally-identifiable information in any tag!
</aside>

---

### Request Body Parameters
| Parameter                   | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| callbackUrl                 | Full callback url to use for notifications about this participant                                 
| publishPermissions          | Defines the types of media this participant can publish. Accepted values: `AUDIO`,`VIDEO`
| tag                         | User defined tag to associate with the participant
| deviceApiVersion            | Optional parameter that sets the version of the signaling API the participant will use. Accepted values: `V2`,`V3`. Defaults to `V2`


### Response Attributes
| Property                    | Description                                                                                       
|:----------------------------|:--------------------------------------------------------------------------------------------------
| participant                 | A participant object                                                                              
| token                       | Auth token for the returned participant                                                           





### Example: Create a new participant under this account


```bash
curl -X POST 
  --url 'https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants' 
  -u '{username}:{password}' 
  -H 'Content-type: application/json' 
	 --data-raw '
{
  "callbackUrl": "https://example.com/callback",
  "publishPermissions": [
    "VIDEO",
    "AUDIO"
  ],
  "tag": "participant1"
}'
```

> Responds

```json
{
  "participant"         : {
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
      "deviceApiVersion": "V2"
 },
  "token"               : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiaWF0IjoxNTE2MjM5MDIyfQ.L8i6g3PfcHlioHCCPURC9pmXT7gdJpx3kOoyAfNUwCc"
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

