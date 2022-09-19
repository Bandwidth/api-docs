---
id: overview
title: Key Concepts
slug: /webrtc/overview
description: What's a webRTC ?
keywords:
  - bandwidth
  - webrtc
  - video
image: '@site/static/img/bw-icon.svg'
---

## More details on Bandwidth WebRTC

WebRTC utilizes two forms of communication: the media streams themselves and signaling. Signaling is responsible for:

- Setting up media streams between local and remote endpoints by negotiating and exchanging connectivity and media format information.
- Acting as a control channel where messages are exchanged about devices and streams coming and going

Bandwidth’s signaling implementation relies on session and participant objects, which must be set up in order for media streams to be created. The Bandwidth WebRTC API allows you to create and manage sessions, participants, and the streams they are subscribed to.  The signalling model also includes a dialog capability that allows for user to application events to be passed between the customer application and the end user, to communicate key state and event information.  The dialog capability is currently in Limited Availabliity.

## Streams

For any camera or microphone that you want to connect to Bandwidth WebRTC you will be working with the [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) that it creates. MediaStreams must be tied to a DOM element on a webpage. A participant can subscribe to more than one stream, as is the case for audio and video streams, or even multiple video streams as is often the case when screen sharing. Streams can also be aliased so that participants can subscribe to a particular subset of streams.

## Participants

Before you can connect a stream to WebRTC, you will need a participant. You can basically think of a participant as a person using the system - although there can be programmatic participants. When you create a participant you will receive a participant ID and an authentication token in return. The token must be supplied when connecting with the Bandwidth WebRTC SDK.

When creating a participant using the SDK you will provide a participant object that contains a JSON description for a tag, should you want to provide one (discussed below), and permissions - which can be AUDIO and/or VIDEO.

Permissions for an Audio-only participant:

```
var participantBody = new BandwidthWebRTC.Participant(
     {"tag" : "participant-uuid","publishPermissions" : ["AUDIO"]});
```

Permissions for a Video participant (with Audio too):

```
var participantBody = new BandwidthWebRTC.Participant(
     {"tag" : "participant-uuid","publishPermissions" : ["AUDIO", "VIDEO"]});
```

### A note on dialed-in participants

You can have people in your WebRTC session (audio or video) who are dialed in on a phone using our SIP Interconnection feature. These participants will need to call a number that is served by a Bandwidth Voice API application, in that application you will `<transfer>` the call to a special SIP URI with an authentication token to allow them to join the session.

More can be found on this in our [quickstart guide](/docs/webrtc/quickstart).

## Sessions

Sessions are a concept that allow you to group multiple participants together - depending on your use case, this may be analogous to something like a meeting, appointment, call, or event. Participants and their streams are connected to one another via subscriptions, described below.

### Limitations

There is a limit of 20 participants in a session.

### Participant-Session Membership

A participant by itself cannot receive media. It must first be associated with, or a member of, a session. Only then can it receive media from other session participants. The [Add Participant to Session Endpoint](https://dev.bandwidth.com/apis/webrtc#operation/addParticipantToSession) is used to add a participant to a session. The participant being added and the target session are both indicated by ID in the URL path:

```
/sessions/{sessionId}/participants/{participantId}
```

After adding a participant to a session the participant’s subscription information can then be updated, which describes which media streams a participant will receive. Information about participant subscriptions can be optionally supplied in the request body for the [Add Participant to Session Endpoint](https://dev.bandwidth.com/apis/webrtc#operation/addParticipantToSession). Subscriptions can also be updated via a call to a separate endpoint for updating subscriptions, the [Update Participant Subscriptions Endpoint](https://dev.bandwidth.com/apis/webrtc#operation/updateParticipantSubscriptions). Subscriptions are described in further detail below.


## Subscriptions

When a participant receives the audio or video streams from another participant, it is via a subscription. A subscription describes which media streams a participant will receive. Note that a participant must be a member, or part of, a session before it can receive any media from other participants [(Participant-Session Membership)](#participant-session-membership).

Subscriptions are very flexible, allowing for the creation of custom scenarios where participants may hear or see some people and devices, but not others. Subscriptions can be created three levels:

- At the session level
- At the participant level
- At the participant stream level

Subscriptions are the “glue” that tie participants and sessions together, and as such a set of endpoints exist for creating, reading, or updating subscriptions, all including the session and participant ID whose subscriptions are being updated in the URL path:

```
/sessions/{sessionId}/participants/{participantId}/subscriptions
```

Note that subscriptions can be updated in real time during a voice or video call by calling these endpoints in order to change the experience based on your own business logic.

The request and response bodies for these endpoints contain the subscription information for an individual participant (namely, the participant ID in the URL path). The types of subscriptions and how to specify them in the API are described below.

### Session Level

A session level subscription subscribes a participant to all current and future participants of a session. It is specified simply with a session ID:

```
{
    "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772"
}
```

The session ID will always match the session ID in the URL path. As new participants are added to the session their streams will also be shared to those already in that session once they start to publish.

This can be accomplished in the SDK via the addParticipantToSession call.

```
    var body = new BandwidthWebRTC.Subscriptions({"sessionId" : sessionId});

    webRTCController.addParticipantToSession(accountId, sessionId, participant.id, body, function(error, response, context) { ... })
```

### Participant Level

A participant level subscription subscribes a participant to an explicit set of participants.

```
{
  sessionId: '0708314e-4c04-4bb0-b3c2-d3793e2f2159',
  participants: [ { participantId: '44d9868e-0d66-4acc-b1e1-fca13272adb4' } ]
}
```

```
{
    "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
    "participants": [
        {
            "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521"
        },
        {
            "participantId": "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
        }
    ]
}
```

### Participant Stream Level

A participant stream level subscription adds further detail to a participant based subscription with the inclusion of an optional list of logical device names, or `streamAliases`. The absence of a list of stream aliases means to subscribe to all devices exposed by a participant.

```
{
    "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
    "participants": [
        {
            "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521",
            "streamAliases": [ "microphone", "screenShare" ]
        },
        {
            "participantId": "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
        }
    ]
}
```

## Dialogs (Limited Availability)

Occasionally communications systems need to pass event data between users, or between users and the application that is controlling the flow of communications. 
These are evident in a "normal" phone call for example, where the event "they answered the call" are important to managing the communication, even once the session, 
participants and subscriptions have been solidified.  Dialogs will initially be used for interconnecting with voice telephone networks, but will be useful for other services  up as those services are developed.

A dialog is a resource that can optionally be associated with a participant.  Dialog resources have a "type" that governs the events that can be exchanged using that Participant.  The first dialog type that can be supported is the "SIP" dialog; it will be used for exchanging events with Telephone networks.

Creating a dialog requires a [POST to a specific participant](https://dev.bandwidth.com/apis/webrtc/#tag/Participants/operation/postDialog) that communicates the necessary data to establish the channel for communication of user-level events.  The POST is to the ID of the participant that the dialog is attached to.

```
/sessions/{sessionId}/participants/{participantId}/dialogs
```
 Dialogs contains state information to enable the setup of the end-end communication.  That state information is initially established in the creation of the dialog.  The payload body for the creation of a SIP dialog contains, not surprisingly, the to: and from: telephone numbers that result in the end-to-end connection.
 The POST body looks like...
 
 ```
 {
    "dialogType": "SIP",
    "dialogStateData": {
        "to"  : "+19195551212",
        "from": "+18045551212"
    }
}
```

Updates to established dialogs can be done by the customer application to enforce a state change, or can happen "in the outside world", resulting in a state change
that must be passed along to the customer application.

Changes to the dialog state imposed by the customer application are caused by [applying the PATCH method to the dialog](https://dev.bandwidth.com/apis/webrtc/#tag/Participants/operation/patchDialog).

Changes to the dialog state that result from events in the outside world (for example, a user answering a telephone) are communicated as a callback to the callback URL defined in the creation of the participant.  The Bandwidth WebRTC system will invoke the callback URL using a POST, including a payload that includes the important details
about the extrinsic state change.  An example of an event caused by the far-end user answering the phone would include standard callback fields, and the change of state to "ANSWERED".
 
 ```
{
  "event": "onSipDialogStateChange",
  "timestamp": "1628786234676",
  "participantId": "be199214-1a03-402a-a7b6-d002470a0465",
  "dialogId": "be199214-1a03-402a-a7b6-d002470a0465",
  "dialogStateData": {
    "state": "ANSWERED",
    "to": "+16136211234",
    "from": "+16136211234"
  }
}
```

## Tags

You can add a tag to sessions and participants to help you identify them with friendly names. Tag information is passed on to your Billing Reports, which can facilitate billing of clients if you do pass-through billing or auditing. These can also be used to allow for easier understanding or grouping of participants or sessions.

### Example uses of a Tag

- Participant based meeting IDs to make it easier to associate tagged participants with a session with internal scheduling or management
- Session-based meeting IDs make it easier to associate a session with internal scheduling or management
- Externally safe account UUIDs to assist with allocating costs from a Billing Report.

### Restrictions/Limitations

- Tags MUST NOT include Personally Identifying Information (PII). We recommend using UUIDs if you need to reference customers or users.
- No uniqueness is enforced by the WebRTC system for tags. Duplicates are acceptable.
- Tags are limited to 50 characters


## Client vs Server - 3rd Party Call Control

Bandwidth’s WebRTC platform utilizes Third Party Call Control, meaning that none of the participants in the call actually control the media flow. Control of the call (or Call Control) is instead managed by a third party, or the server (i.e your web application). This is done to ease coordination and increase security.

In practical terms, this means that your server application will need to manage the subscriptions that are established between the participants. We have created helper methods to simplify cases where everyone in a session should be “fully wired” together. But you still maintain the ability to create custom situations, such as a manager ‘whisper’ in a contact center - where the caller can’t hear the manager, but the contact center agent can.
