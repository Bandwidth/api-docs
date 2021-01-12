# WebRTC Concept Overview

WebRTC is technology that allows browsers and other devices to interact and communicate with each other in real-time. Supporting browsers do not need extra plug-ins or downloads -- it all works natively in the browser.

Using Bandwidth's APIs, you can write audio and video enabled applications that run in browsers or mobile devices, and connect phone calls to and from these devices.

WebRTC utilizes two forms of communication: the media streams themselves and signaling. Signaling is responsible for:

- Setting up media streams between local and remote endpoints by negotiating and exchanging connectivity and media format information.
- Acting as a control channel where messages are exchanged about devices and streams coming and going

Bandwidth’s signaling implementation relies on the concepts of sessions and participants, which must be set up in order for media streams to be created. The Bandwidth WebRTC API allows you to create and manage sessions, participants, and the streams they are subscribed to.

# Streams

For any camera or microphone that you want to connect to Bandwidth WebRTC you will be working with the [MediaStream](https://developer.mozilla.org/en-US/docs/Web/API/MediaStream) that it creates. MediaStreams must be tied to a DOM element on a webpage and a Participant can subscribe to more than one stream, as is the case for audio and video streams, or even multiple video streams as is often the case when screen sharing. Streams can also be aliased so that Participants can subscribe to a particular subset of Streams.

# Participants

Before you can connect a stream to WebRTC, you will need a Participant. You can basically think of a participant as a person using the system - although there can be programmatic participants. When you create a Participant you will receive a Participant ID and an authentication token in return. The token must be supplied when connecting with the Bandwidth WebRTC SDK.

When creating a Participant using the SDK you will provide a Participant object that contains a json description for a tag, should you want to provide one (discussed below), and permissions - which can be AUDIO and/or VIDEO.

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

## Participant Tags

You can add a tag to a participant to help you identify them with a friendly name. Participant Tag information is passed on to your Billing Reports, which can facilitate billing of clients if you do pass-through billing or auditing. These can also be used to allow for easier understanding or grouping of participants.

Example uses of a Participant Tags:

- Externally safe User UUIDs to make it easier to associate participants with internal users
- Externally safe Account UUIDs to assist with allocating costs from a Billing Report.

### Restrictions/Limitations

- Tags MUST NOT include Personally Identifying Information (PII). We recommend using UUIDs if you need to reference customers or users.
- No uniqueness is enforced by the WebRTC system for tags. Duplicates are acceptable.
- A Participant tag is limited to 50 characters

## A note on dialed-in participants

You can have people in your WebRTC session (audio or video) who are dialed in on a phone using our SIP Interconnection feature. These participants will need to call a number that is served by a Bandwidth Voice API application, in that application you will `<transfer>` the call to a special SIP URI with an authentication token to allow them to join the session.

More can be found on this in our [quickstart guide](https://dev.bandwidth.com/webrtc/guides/quickstart.html).

# Sessions

Sessions are a concept that allows you to easily group multiple Participants together - depending on your use case, this may be analogous to something like a meeting, appointment, call, or event. Participants and their streams are associated with one another via subscriptions, described below.

## Limitations

There is a limit of 20 participants in a session. This includes all participants, whether they are Audio-only, Audio & Video, or dialed-in participants.

## Session Tags

You can add a tag to a session to help you identify them with friendly names. Session Tag information is passed on to your Billing Reports, which can facilitate billing of clients if you do pass-through billing or auditing. These can also be used to allow for easier understanding or grouping of sessions.

Example uses of a Participant Tags:

- Meeting IDs to make it easier to associate a session with internal scheduling or management
- Externally safe Account UUIDs to assist with allocating costs from a Billing Report.

### Restrictions/Limitations

- Tags MUST NOT include Personally Identifying Information (PII). We recommend using UUIDs if you need to reference customers or users.
- No uniqueness is enforced by the WebRTC system for tags. Duplicates are acceptable.
- A Session tag is limited to 50 characters

# Subscriptions

When a Participant receives the audio or video Streams from another Participant, it is via a Subscription. Subscriptions are very flexible, allowing for the creation of custom scenarios where participants may hear or see some people and devices, but not others. Subscriptions can be created three levels: \

- At the Session level
- At the Participant level
- At the Participant Stream level

Subscriptions are the “glue” that tie Participants and Sessions together, and as such a set of endpoints exist for creating, reading, or updating subscriptions, all including the session and participant IDs in the URL path:

```
/sessions/{sessionId}/participants/{participantId}/subscriptions
```

Note that Subscriptions can be updated in real time during a call by calling these endpoints in order to change the experience based on your own business logic.

The request and response bodies for these endpoints contain the subscription information for an individual participant. The types of subscriptions and how to specify them in the API are described below.

## Session Level

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

## Participant Level

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

## Participant Stream Level

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

# Client vs Server - 3rd Party Call Control

Bandwidth’s WebRTC platform utilizes Third Party Call Control, meaning that none of the participants in the call actually control the media flow. Control of the call (or Call Control) is instead managed by a third party, or the server (i.e your web application). This is done to ease coordination and increase security.

In practical terms, this means that your server application will need to manage the subscriptions that are established between the participants. We have created helper methods to simplify cases where everyone in a session should be “fully wired” together. But you still maintain the ability to create custom situations, such as a manager ‘whisper’ in a contact center - where the caller can’t hear the manager, but the contact center agent can.
