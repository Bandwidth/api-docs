---
id: about
title: About
slug: /webrtc
description: A general overview of Bandwidth's account services
keywords:
  - bandwidth
  - webrtc
  - video
hide_title: true
image: ../../static/img/bandwidth-logo.png
---

## Summary

WebRTC is technology that allows browsers and other devices to interact and communicate with each other in real-time. Supporting browsers do not need extra plug-ins or downloads -- it all works natively in the browser.

Using Bandwidth's APIs, you can write audio and video enabled applications that run in browsers or mobile devices, and connect phone calls to and from these devices.

### Browsers

Part of the Magic of WebRTC was the choice to embed a standard real-time media handling capability into all browsers, allowing real time communicaions between any collection of desktopp and mobile browsers using a globally adopted standard.

Standard browser APIs for access to sources of media ( [getUserMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia) for camera and microphone, [getDisplayMedia](https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getDisplayMedia) for screen content) and [The RTCPeerConnection API](https://developer.mozilla.org/en-US/docs/Web/API/RTCPeerConnection) for controlling media flows to remote endpoints enable all parties to exchange real time media in an efficient and uniform manner.

### Media

One of the intended sideeffects of the browser-centric approach taken with WebRTC is the broad spectrum of media that can be exchanged, and the flexibility available in exchanging that media. The enpoints of any media streams are free to free to adapt the to constraints of the channel with a suite of codecs, and additional application-specific data can be exchanged using WebRTC data channels.

Whether it is voice, video, screen-sharing or applicaion-specific data, WebRTC supports it.

### Programmibility

The astute reader will notice that nothing above mentions finding / addressing the other participants in a communication, and nothing above mentions control at the session level for adding and removing participants in a session. That is because the browser WebRTC infrastructure leaves all of that to the controlling application. WebRTC is explicitly unopinionated on that front.

Although this sounds like a deficiency it results in flexibility in creation of applications and communication patterns that ideally suit the creator's intended use.

## Bandwidth WebRTC

Bandwidth enhances the use of WebRTC by wrapping standard WebRTC capabilities in an API and SDK suite that simplifies the creation of communication applications that fully leverage the power of both WebRTC and the Bandwidth voice network.

- coordination of browser and application for session participation
- the overall model allowing fine-grained control
- the interaction with the V2 Voice capability set

At a very high level the model simplifies the browser and server-level interactions with the media and signalling/session control levels:

<center>
<img src="simple.svg" alt="The simplest view of Bandwidth WebRTC" width="50%"/>
</center>

### Secure Coordination of Server, Browser, and Media

In the Bandwidth WebRTC model all media flows are mediated by Bandwidth Media Control Units (MCUs and FCUs). This allows application control over the media characteristics of the communication, and facilitates interaction with the Bandwidth Programmable Voice network.

If you create an application to do some cool WebRTC stuff, one of the implied requirements is security: the media sessions that are candidates to participate in a session should be secured prior to admission. In the Bandwidth solution a JWT is issued for every participant in a session, and that JWT is used in establishing media connections to the Media Server infrastructure, and thus to the other participants in the communication. These secure tokens are minted and issued by the server application logic, and used to coordinate with media streams that are admitted into the communication.

Secure Server to Server interaction provides secure access to the Bandwidth WebRTC and Programmable voice capabilities, and secure tokens are exchanged with the Browser component to allow controlled and secure access to media flows.

### Fine Grained Control: Application Flexibility

The model underlying Bandwidth's WebRTC soution allows the application to control the flows of media with exquisite precision. There are 4 levels of control that can be controlled, in increasing levels of precision...

- **sessions** - groups of users involved in a communication
- **participants** - the addressable members that are involved in a session
- **subscriptions** - essentially who "listens to" who. It is possible to create complex topologies to address specific application needs
- **media** - the specific media that is exchanged between any subscribed participants and/or sessions

With these elements under applicaiton control almost any real time communication imaginable can be identified.

The details of this model and its control are covered in the document section [Bandwidth WebRTC Model Details](overview.md)

### PSTN Intimacy

But that's not all... :-)

Bandwidth brings a comprehensive Programmable Voice network capability to the overall equation, and the Bandwidth WebRTC capabilities are designed to integrate with these capabilities in a way that enhances both the WebRTC and the Programmable Voice capabilities. The customer application can control both capability sets plus the integration of those capabilities.

This enables creation of Browser-based endpoints that participate in voice network, WebRTC video communication that extends into the PSTN, and everything in between.

<center>
<img src="end-end_media_and_signaling.svg" alt="Interaction with the Bandwidth Programmable Voice network" width="80%"/>
</center>

The Programmable Voice uses SIP URI and User-User information to place, transfer, bridge, or conference WebRTC endpoints into PSTN calls. On the WebRTC side of the equation, the interconnection with the Programmable Voice shows up as a WebRTC participant in the overall WebRTC communication, controlled with the same level of fine-grained control described above.

## Learning about WebRTC

The internet is your friend, and there is lots of information out there.

A couple of valueable sites are...

- [The Mozilla MDN](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API) for browser details
- [The W3C](https://www.w3.org/TR/webrtc/)
- [An industry perspective](https://bloggeek.me/what-is-webrtc/)
