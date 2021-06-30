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
# Bandwidth WebRTC API

Bandwidth WebRTC API

## Base URL
`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}`

## Conventions

## REST API Reference Index
| Verb                                            | Resource                                                                                          | Description                                                                                       
|:------------------------------------------------|:--------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------
| <code class="post">POST</code>                  | [`/participants`](participants/createParticipant.md)                                              | Create a new participant under this account                                                       
| <code class="get">GET</code>                    | [`/participants/{participantId}`](participants/getParticipant.md)                                                 | Get participant by ID                                                                             
| <code class="delete">DELETE</code>              | [`/participants/{participantId}`](participants/deleteParticipant.md)                                              | Delete participant by ID                                                                          
| <code class="post">POST</code>                  | [`/sessions`](sessions/createSession.md)                                                          | Create a new session                                                                              
| <code class="get">GET</code>                    | [`/sessions/{sessionId}`](sessions/getSession.md)                                                             | Get session by ID                                                                                 
| <code class="delete">DELETE</code>              | [`/sessions/{sessionId}`](sessions/deleteSession.md)                                                          | Delete session by ID                                                                              
| <code class="put">PUT</code>                    | [`/sessions/{sessionId}/participants/{participantId}`](sessions/addParticipantToSession.md)                                                | Add a participant to a session                                                                    
| <code class="delete">DELETE</code>              | [`/sessions/{sessionId}/participants/{participantId}`](sessions/removeParticipantFromSession.md)                                           | Remove a participant from a session                                                               
| <code class="get">GET</code>                    | [`/sessions/{sessionId}/participants/{participantId}/subscriptions`](sessions/getParticipantSubscriptions.md)                                            | Get a participant's subscriptions                                                                 
| <code class="put">PUT</code>                    | [`/sessions/{sessionId}/participants/{participantId}/subscriptions`](sessions/updateParticipantSubscriptions.md)                                         | Update a participant's subscriptions                                                              
