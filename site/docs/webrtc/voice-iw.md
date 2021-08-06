---
id: voice-iw
title: Voice Interworking
slug: /webrtc/voice-iw
description: A description of available options for interworking with Bandwidth Programmable Voice
keywords:
  - bandwidth
  - webrtc
  - video
image: ../../static/img/bandwidth-logo.png
---

## Connecting WebRTC to Programmable Voice

Bandwidth has a demonstrated history of excellence in IP voice technologies, including comprehensive CPaaS Programmable Voice and Messaging capabilities. The introduction of WebRTC capabilities provides the opportunity to combine the strength and diversity of our Programmable Voice capabilities with our highly controllable WebRTC capabilities to yield a rich and flexible platform that allows our customers to extend their business with a broad range of communication capabilities.

One of the steps we have taken to enable this capability suite is to ensure that our Programmable Voice (PV) and WebRTC platforms and APIs combine their respective strengths when integrated.

When PV calls interwork with WebRTC communications, control of the behavior of the voice call is managed by the extensive suite of PV capabilities. Bandwidth offers “Bxml” scripts to control call events using action verbs. This gives you the ability to create flexible solutions that enable your application to create voice calls, receive voice calls, and control and monitor changes made to these calls.

And by combining our WebRTC and programmable voice APIs, you can create composite call flows that meet your needs.

The interaction between PV and WebRTC is initiated under application control from the PV side of the platform.

![Summary of interconnection](../../static/img/webrtc-pv-summary.png "summary")

To interconnect a WebRTC participant to the PV network capabilities, the customer application creates a WebRTC session and a participant for the session. This information is sent by your application to the PV platform which has been authorized to send a SIP invite to a WebRTC SIP URI. This URI contains a UUI header that contains a participant token which enables the system to securely identify and interconnect the voice capabilities and the WebRTC participants.

Once an answer is received on this transaction, an interconnection is established between WebRTC and Voice.

You are able to decide how the flow of the call will proceed based on Bxml verbs that are chosen on setting up the interconnection. Three call control verbs that can be used are: Transfer, Bridge, and Conference, each of which creates a different application experience

| PV Verb used | Solution Characteristics summary |
| Transfer | The simplest application behavior, with limited opportunity to invoke services on the PV call leg. |
| Bridge | Suitable for single-leg interconnection where features might be required for the PV call leg, with slightly higher complexity required in the application |
| Conference | Enables multiple participants on the PV side of the interconnection, and a full range of PV features and capabilities to be applied on the OV call leg. Additional costs are incurred for the use of the voice conference bridge. |

These three interaction models are described in greater detail below.

## TRANSFER

The transfer verb creates a single PV call with two endpoints. You can set one end to WebRTC, and the other for a phone number

![Transfer Verb Model](../../static/img/webrtc-pv-transfer.png "Transfer")

An everyday use case for this method is when people use Bandwidth phone numbers as a proxy. If you run a business and wish to protect your personal number, then transfer would be a good option.

Use of the Transfer Bxml Verb creates a single call that will typically be taken down from end to end when it is complete (or times out waiting for an answer). The call ends if the person you are transferring to does not respond. Also, any modifications to the call will take down the connection between WebRTC and the Voice Network.

In general, the Transfer verb is used in inbound or outbound WebRTC/Voice calls to create the call from scratch when the call happens. Here’s a [general example](https://github.com/Bandwidth-Samples/webrtc-hello-world-ts) of how you can use the Transfer verb:

Bandwidth's Voice API will hit a provisioned callback endpoint when you receive an incoming call

```
    app.post("/incomingCall", async (req, res) => { const callId = req.body.callId;
        console.log(`received incoming call ${callId} from ${req.body.from}`);
        const participant = await createParticipant("hello-world-ts-phone");
        calls.set(callId, participant);
```

This generates the response payload containing the Transfer verb that is sent back to the PV API to transfer the call into the WebRTC session

```
    const bxml = WebRtcController.generateTransferBxml(participant.token);
```

This sends the payload back to the Voice API

```
    res.contentType("application/xml").send(bxml);
    console.log(`transferring call ${callId} to session ${sessionId} as participant
            ${participant.id}`);
    });
```

For an outbound call, Bandwidth's Voice API will hit a callback endpoint when an outgoing call is answered

```
    app.post("/callAnswered", async (req, res) => { const callId = req.body.callId;
        console.log(`received answered callback for call ${callId} tp ${req.body.to}`);
        const participant = calls.get(callId);
        if (!participant) {
            console.log(`no participant found for ${callId}!`);
            res.status(400).send();
        return; }
```

When an outbound call is answered, the response payload contains the Transfer verb that is returned to the Voice API to transfer the call into the WebRTC session

```
    const bxml = `&lt;?xml version="1.0" encoding="UTF-8" ?>&lt;Response>
          &lt;SpeakSentence voice="julie">Thank you. Connecting you to your conference now.&lt;/SpeakSentence>
          ${WebRtcController.generateTransferBxmlVerb(participant.token)}
        &lt;/Response>`;
```

This sends the payload back to the Voice API

```
    res.contentType("application/xml").send(bxml);
    console.log(`transferring call ${callId} to session ${sessionId} as participant
            ${participant.id}`);
    });
```

There’s a limitation to what can be done with Transfer: the fact that there is a single call recognized by the PV platform means that changes to that call will impact the WebRTC interconnection. Once the transfer is complete, you can redirect the call to another point using the [TransferComplete](https://dev.bandwidth.com/voice/bxml/callbacks/transferComplete.html) callback, however this will result in the removal of the WebRTC leg of the call. To do this, you need to specify the transferCompleteUrl attribute. The above example can be found in [Hello-world repository](https://github.com/Bandwidth-Samples/webrtc-hello-world-ts).

## BRIDGE

This verb creates two independent calls. Each call has ends which can be set to either a phone number or WebRTC. You can modify each call without breaking down the entire end-to-end communication between the webrtc and voice network sides of the communication.

Using WebRTC, you can still maintain the bridge after the voice call leaves. Various modifications can be made while the bridge exists, unlike the Transfer verb.

![Bridge Verb Model](../../static/img/webrtc-pv-bridge.png "Bridge")

Here’s [an example](https://github.com/Bandwidth-Samples/webrtc-voicebridge-ts) of how you can use the Bridge Verb:

Bandwidth's Voice API calls the webRTC infrastructure with the participant token in the UUI SIP header to allow the correlation ofV2 voice and the webRTC infrastructure

```
    const callSipUri = async (participant: ParticipantInfo) => {
        const body = {
            from: voiceApplicationPhoneNumber,
            to: "sip:sipx.webrtc.bandwidth.com:5060",
            answerUrl: `${voiceCallbackUrl}/bridgeCallAnswered`,
            uui: `${participant.token};encoding=jwt`,
```

This [/bridgeCallAnswered](<https://github.com/Bandwidth-Samples/webrtc-voicebridge-ts/blob/main/src/server.ts#:~:text=*/-,app.post(%22/bridgeCallAnswered%22%2C%20async%20(req%2C%20res)%20%3D%3E%20%7B,%7D)%3B,-/**>) API call links your WebRTC session with Programmable Voice. Then, Bandwidth's Voice API will hit the [/callAnswered](<https://github.com/Bandwidth-Samples/webrtc-voicebridge-ts/blob/main/src/server.ts#:~:text=app.post(%22/callAnswered,%7D)%3B>) endpoint when an outgoing call is answered. The two independent calls can be established synchronously or in parallel, providing the flexibility in management of the endpoints. For example, a single webRTC-side call can be established that connects to a series of PV-side calls, without the need to set up the entire end-end experience for each new voice caller. You can find the complete code and instructions for the sample above in the [bridge repository](https://github.com/Bandwidth-Samples/webrtc-voicebridge-ts).

If reducing delays in interconnection of voice and WebRTC legs is important, the best option would be to use the bridge verb, which allows setting up the legs in parallel, or establishing one leg early in anticipation of the end to end call.

## Conference

Although use of the Conference verbe has higher costs than the previous methods, it would be the most sustainable option for dealing with a large group of voice callers. If you expect more than two voice callers in one session, the Conference method is effective if Programmable Voice services are needed for those callers. You can have 20 calls in a conference and keep the session for 24 hours. You also have the freedom to add and remove participants from the conference.

![Conference Verb Model](../../static/img/webrtc-pv-conference.png "Conference")

Conferencing is actively supported by both the WebRTC and Voice platforms, however, if both platforms are interconnected, and the power of PV is needed on the voice-only call legs, use of the Conference Bxml verb has value. If fine-grained control over media in a conference scenario is needed, or of video is required in the conference, it is likely wise to use the conferencing capability inherent in the WebRTC platform and APIs.

Here’s a [code snippet](https://github.com/Bandwidth-Samples/webrtc-voiceconf-ts) of how the Conference verb is used:

Bandwidth's Voice API calls the webRTC infrastructure with the participant token in the UUI SIP header to allow the correlation ofV2 voice and the webRTC infrastructure

```
    const callSipUri = async (participant: ParticipantInfo) => {
        const body = {
            from: voiceApplicationPhoneNumber,
            to: "sip:sipx.webrtc.bandwidth.com:5060",
            answerUrl: `${voiceCallbackUrl}/bridgeCallAnswered`,
            uui: `${participant.token};encoding=jwt`,
```

This API call links your WebRTC session with Programmable Voice

```
    app.post("/bridgeCallAnswered", async (req, res) => { const callId = req.body.callId;
        console.log(
            `received answered callback for bridging call ${callId} to ${req.body.to}`
        );
        // preserve the call-leg
        let data: CallData = {
            from: req.body.from,
            to: req.body.to,
            bridge: true,
        };
        voiceCalls.set(callId, data); // preserve the info on the bridge leg in the calls map.
```

Create a new conference and link it with your WebRTC session

```
    const conf = new Conference({
        name: sessionId,
        callIdsToCoach: undefined,
    });
    const speak = new SpeakSentence({
        sentence: "Thank you. Connecting you to your conference now.",
        voice: "julie",
    });
    const resp = new Response();
    resp.add(speak);
    resp.add(conf);
    console.log("creating Programmable Voice conference bridge:", resp.toBxml());
    res.contentType("application/xml").send(resp.toBxml());
```

When your outgoing call is answered, our Voice API hits this [/callAnswered](<https://github.com/Bandwidth-Samples/webrtc-voiceconf-ts/blob/main/src/server.ts#:~:text=*/-,app.post(%22/callAnswered%22%2C%20async%20(req%2C%20res)%20%3D%3E%20%7B,%7D)%3B,-/**>) endpoint to connect you to a conference. The above snippets can be found in the [Conference repository](https://github.com/Bandwidth-Samples/webrtc-voiceconf-ts).

So far, you have read about only 3 of our call control verbs. There are many options available to you, and these can be found in the [developer docs](https://dev.bandwidth.com/voice/bxml/about.html).
