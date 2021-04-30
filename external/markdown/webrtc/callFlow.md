## Call Flow

In this diagram we will review the interactions you will need in order to establish a working WebRTC session. To simplify the diagram, we are showing only one web browser in the session, but adding more merely follows the same pattern.


![alt_text](../../images/webrtc_callflow1.png "image_tooltip")


We start by creating a Session (1) and a Participant (2), and then adding the Participant to the Session (3) - when we do so, we will be specifying a Subscription to the SessionId within the _body_ parameter of the addParticipantToSession() call.

Next we serve a page to the user that has the required WebRTC components as well as the JWT that we received when we [made what call???].

Within our browser javascript implementation, we will be calling connect() (5) in order to establish our connection to the WebRTC platform. Once that is complete, we can call publish() (6) to start flowing media. 

When media is flowing to us, an onStreamAvailable listener will be triggered. [what do we do then?]

To remove this participant from the call, because the call has ended or just because just this participant is done, we call removeParticipantFromSession() (8) on the server side. If we only wanted to remove some subscriptions from this Participant, but leave them in the session otherwise, we can just call [WHAT?] from the server application.

At the conclusion of the session, the browser javascript should call disconnect() (9) to sever the websocket connection with the WebRTC platform. Once all other participants have similarly been disconnected, the server application can call deleteSession (10) for proper hygiene. All Sessions are concluded and cleaned up, along with associated Subscriptions, after 9 hours.


![alt_text](../../images/webrtc_callflow2.png "image_tooltip")


We start by initiating an outbound call via the Bandwidth VoiceAPI using the createCall() (1). Once that is established (you’ll receive a callback [XYZ]), you create a Session (2) and then create a Participant for this PSTN caller (3). 

When you’re ready to add the PSTN caller to the WebRTC Session, you will utilize the transferToWebRTC() function (4) to transfer the call. The WebRTC system will interconnect this call into the WebRTC system, transcoding as needed.

When you are ready to remove this Participant from the WebRTC Session, you call removeParticipantFromSession() (5). At this point, the PSTN call is still active, but no longer in the WebRTC Session, you may change to use modifyCall() to hang up the call, or choose to transfer it elsewhere.

To end the WebRTC Session, once all other Participants have been removed, you will call deleteSession() to delete the Session. All Sessions are deleted and cleaned up, along with associated Subscriptions, after 9 hours.
