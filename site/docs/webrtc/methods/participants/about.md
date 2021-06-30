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
# Manage participants in a session

### Base URL

`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}/participants`

### Capabilities

| HTTP Method                 | Path                                            | Description                                                                                       
|:----------------------------|:------------------------------------------------|:--------------------------------------------------------------------------------------------------
| <code class="post">POST</code>| [`/participants`](createParticipant.md)         | Create a new participant under this account                                                       
| <code class="get">GET</code>| [`/participants/{participantId}`](getParticipant.md)            | Get participant by ID                                                                             
| <code class="delete">DELETE</code>| [`/participants/{participantId}`](deleteParticipant.md)         | Delete participant by ID                                                                          
