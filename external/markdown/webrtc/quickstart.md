# Getting started with WebRTC

## Overview

WebRTC is technology that allows browsers and other devices to interact and communicate with each other in real-time. Supporting browsers do
not need extra plug-ins or downloads -- it all works natively in the browser.

Using Bandwidth's APIs, you can write audio and video enabled applications that run in browsers or mobile devices, and connect phone calls to
and from these devices.


## Hello World

Our WebRTC "hello world" sample app will show you how to receive calls and make outbound calls, all from your web browser. 

Please visit our [Bandwidth Examples](https://github.com/Bandwidth/examples) repo to find a _webrtc\_hello\_world_ folder in NodeJS and Java (with a React front-end).

Follow the instructions in the README to add your Bandwidth credentials and application settings, and you should have a working demo!


## How it works

For the purposes of this guide, we will walk you through the sample app in *NodeJS*, but the idea is the same in all languages.


### Creating a session and participants

When you run `npm start` and the the web page is loaded, the frontend code calls the backend route `/connectionInfo`:

*./frontend/src/App.tsx*

```javascript
// This effect connects to our server backend to get a device token
// It will only run the first time this component renders
  useEffect(() => {
    fetch("/connectionInfo").then(async (response) => {
      const responseBody = await response.json();
      setToken(responseBody.token);
      setVoiceApplicationPhoneNumber(responseBody.voiceApplicationPhoneNumber);
      setOutboundPhoneNumber(responseBody.outboundPhoneNumber);
    });
  }, []);
```

Which returns some information about the application, but most importantly, creates the browser user as a WebRTC participant:

*./src/server.ts*

```javascript
/**
 * The browser will hit this endpoint to get a session and participant ID
 */
app.get("/connectionInfo", async (req, res) => {
  const { id, token } = await createParticipant("hello-world-browser");
  res.send({
    token: token,
    voiceApplicationPhoneNumber: voiceApplicationPhoneNumber,
    outboundPhoneNumber: outboundPhoneNumber,
  });
});
```

If you look deeper into the `createParticipant` call, you can see we're using the Bandwidth WebRTC HTTP API
to create the participant with `AUDIO` permissions and a tag of "hello-world-browser":

*./src/server.ts*

```javascript
/**
 * Create a new participant and saves their ID to our app's state map
 */
const createParticipant = async (tag: string): Promise<Participant> => {
  // Create a new participant
  let createParticipantResponse = await axios.post(
    `${callControlUrl}/participants`,
    {
      callbackUrl: "https://example.com",
      publishPermissions: ["AUDIO"],
      tag: tag,
    },
    {
      auth: {
        username: username,
        password: password,
      },
    }
  );
```

This API call returns a `participant` object and a `token` we can use to authorize a device. In this case, our WebRTC Browser SDK.

We also take our newly created `participant.id` and add it to our WebRTC session:

*./src/server.ts*

```javascript
  const participant = createParticipantResponse.data.participant;
  const token = createParticipantResponse.data.token;
  const participantId = participant.id;
  console.log(`created new participant ${participantId}`);

  // Add participant to session
  const sessionId = await getSessionId();
  await axios.put(
    `${callControlUrl}/sessions/${sessionId}/participants/${participant.id}`,
    {
      sessionId: sessionId,
    },
    {
      auth: {
        username: username,
        password: password,
      },
    }
  );

  return {
    id: participantId,
    token: token,
  };
};
```

A quick note on this: the `getSessionId()` method is a convenience method in this example that will automatically create and keep track of a `sessionId` that we use as a "conference" or "room" to 
connect our participants.

Once that's all done, the `createParticipant` call from `/connectionInfo` (remember? that's where this all started!)
returns a `token` and some other info to our frontend.


### A word about "subscriptions"

In the example above, you may have noticed that we pass in `sessionId` when we add the participant to the session. But `sessionId` is already a path param in the REST URL, so what gives?

By doing that, you're telling Bandwidth WebRTC to _subscribe_ this participant to everyone else in the session, and _subscribe_ everyone in the session to this participant! You could also include a
list of explicit participants, if you wanted to only subscribe them to one or two other people.

This gives you lots of flexibility and control over what each participants receives and sends in a session. You can [read more about sessions in our API documentation](https://dev.bandwidth.com/webrtc/methods/sessions/about.html).


### Connecting the WebRTC browser SDK and publishing media

Once the frontend has a valid device token, we can use this to connect our WebRTC Browser SDK to the session:

*./frontend/src/App.tsx*

```javascript
// Connect to Bandwidth WebRTC
bandwidthRtc
.connect({
  deviceToken: token,
})
.then(async () => {
  console.log("connected to bandwidth webrtc!");
  // Publish the browser's microphone
  await bandwidthRtc.publish({
    audio: true,
    video: false,
  });
  console.log("browser mic is streaming");
});
```

This `deviceToken` authorizes our browser as a participant in our WebRTC session. In this example, you can see
we want the participant to publish `audio` but not `video`.

Side note: even if this browser set `video: true`, they would not be able to publish video with this token! In our server's `createParticipant` call, we set our `publishPermissions` for this participant to only `AUDIO`.

This gives the server-side application total control over how pariticpants interact in a WebRTC session.


### Receiving audio streams in the browser

Now that our browser is connected, whenever another participant joins the session and starts or stops publishing,
we will receive notifications via the `onStreamAvailable` and `onStreamUnavailable` events in our browser SDK:

*./frontend/src/App.tsx*

```javascript
// This event will fire any time a new stream is sent to us
    bandwidthRtc.onStreamAvailable((rtcStream: RtcStream) => {
      console.log("receiving audio!");
      setRemoteStream(rtcStream);
    });

    // This event will fire any time a stream is no longer being sent to us
    bandwidthRtc.onStreamUnavailable((endpointId: string) => {
      console.log("no longer receiving audio");
      setRemoteStream(undefined);
    });
  });
```

In this example, we just keep track of the latest stream that's available. In more complicated applications, you may
want to handle multiple streams from multiple participants.

Once a stream is available, `setRemoteStream` will set state, and our `video` component will render on the page
and play the media stream (which in this case, is just audio):

*./frontend/src/App.tsx*

```javascript
remoteStream ? (
  <div>
    <video
      playsInline
      autoPlay
      style={{ display: "none" }}
      ref={(videoElement) => {
        if (videoElement && remoteStream && videoElement.srcObject !== remoteStream.mediaStream) {
          // Set the video element's source object to the WebRTC MediaStream
          videoElement.srcObject = remoteStream.mediaStream;
        }
      }}
    ></video>
    Hooray! You're connected!
  </div>
)
```

Now we're all ready to go, but there's only 1 participant in the session! That's not any fun. How can we add another
participant so they can interact with this browser?

### Receiving an inbound phone call

One way to add a participant is to support an inbound phone call, which creates an audio conference between the browser and phone.

Our sample app does just this, using Bandwidth's Voice API! Read more about how to create a [Bandwidth Voice API application]
(https://github.com/Bandwidth/examples/tree/master/nodejs/webrtc-hello-world).

In our backend example code, we support the `/incomingCall` callback from our Voice API application:

*./src/server.ts*

```javascript
/**
 * Bandwidth's Voice API will hit this endpoint when we receive an incoming call
 */
app.post("/incomingCall", async (req, res) => {
  const callId = req.body.callId;
  console.log(`received incoming call ${callId} from ${req.body.from}`);
  const participant = await createParticipant("hello-world-phone");
  calls.set(callId, participant);

  // This is the response payload that we will send back to the Voice API to transfer the call into the WebRTC session
  const bxml = await generateTransferBxml(participant.token);

  // Send the payload back to the Voice API
  res.contentType("application/xml").send(bxml);
  console.log(`transferring call ${callId} to session ${sessionId} as participant ${participant.id}`);
});
```

When we receive a phone call, we again call `createParticipant`, which creates a new participant with `AUDIO` `publishPermission`
and adds them to our session. 

Like the browser participant, this call returns a `token` that authorizes the phone to publish and subscribe streams in our session. 
But in the browser, we did this with our `publish` and `onStreamAvailable` methods. How do we publish and subscribe streams on a phone?

We use a handy feature of Bandwidth's Voice API called a `transfer`. By returning the BXML from the `generateTransferBxml` method, this
callback tells the API to transfer the call into the WebRTC session! All of the hard parts of transcoding and mixing streams is
handled by Bandwidth's WebRTC platform.

Once the transfer is made, the browser participant's `onStreamAvailable` event will fire and connect the phone call's audio
to the browser's audio.

Go ahead and try it yourself! Again, this is a simple example, but you can see how you can extend this to create conference calls with
multiple browsers and phones.


### Making an outbound phone call

Another way to add a participant to this session is to have the browser make an _outbound_ call to a phone. The browser will still be
a participant, publishing and receiving audio, but this app will also use Bandwidth's Voice API to make an outbound call from the server and
connect it into the session.

Our frontend code has a nice big button to make an outbound call (make sure you set `OUTBOUND_PHONE_NUMBER` in your `.env` file or this 
won't work!). When you click it, it calls the `callOutboundPhoneNumber` method:

*./frontend/src/App.tsx*

```javascript
// Initiate a call to the outbound phone number listed
  const callOutboundPhoneNumber = () => {
    console.log(`calling ${outboundPhoneNumber}`);
    fetch("/callPhone").then(async (response) => {
      if (response.ok) {
        console.log("Ringing...");
      } else {
        console.log("Something went wrong");
      }
    })
  }
```

Aside from the excellent error handling, you can see we simply make a call to the server on the route `/callPhone`. Lets see
what that does:

*./src/server.ts*

```javascript
/**
 * The browser will hit this endpoint to initiate a call to the outbound phone number
 */
app.get("/callPhone", async (req, res) => {
  if (!outboundPhoneNumber) {
    console.log("no outbound phone number has been set");
    res.status(400).send();
  }
  const participant = await createParticipant("hello-world-phone");
  await callPhone(outboundPhoneNumber, participant);
  res.status(204).send();
});
```

By now you should see a pattern -- we call `createParticipant` again, just like we did for our browser, and just like we did for our
inbound call. Again, this call creates a participant and adds them into our session. Now we call the `callPhone` method:

*./src/server.ts*

```javascript
/**
 * Ask Bandwidth's Voice API to call the outbound phone number, with an answer callback url that
 * includes the participant ID
 */
const callPhone = async (phoneNumber: string, participant: Participant) => {
  try {
    let response = await axios.post(
      `https://voice.bandwidth.com/api/v2/accounts/${accountId}/calls`,
      {
        from: voiceApplicationPhoneNumber,
        to: phoneNumber,
        answerUrl: `${voiceCallbackUrl}/callAnswered`,
        disconnectUrl: `${voiceCallbackUrl}/callStatus`,
        applicationId: voiceApplicationId,
      },
      {
        auth: {
          username: username,
          password: password,
        },
      }
    );
    const callId = response.data.callId;
    calls.set(callId, participant);
    console.log(`initiated call ${callId} to ${outboundPhoneNumber}...`);
  } catch (e) {
    console.log(`error calling ${outboundPhoneNumber}: ${e}`);
  }
};
```

Since we're initiating the call, we tell Bandwidth's Voice API to place a call and which routes we want our callbacks to go to. We associate
our participant we created earlier with the callId so we can tie these together in our callback `/callAnswered`:

*./src/server.ts*

```javascript
/**
 * Bandwidth's Voice API will hit this endpoint when an outgoing call is answered
 */
app.post("/callAnswered", async (req, res) => {
  const callId = req.body.callId;
  console.log(`received answered callback for call ${callId} tp ${req.body.to}`);

  const participant = calls.get(callId);
  if (!participant) {
    console.log(`no participant found for ${callId}!`);
    res.status(400).send();
    return;
  }

  // This is the response payload that we will send back to the Voice API to transfer the call into the WebRTC session
  const bxml = await generateTransferBxml(participant.token);

  // Send the payload back to the Voice API
  res.contentType("application/xml").send(bxml);
  console.log(`transferring call ${callId} to session ${sessionId} as participant ${participant.id}`);
});
```

When Bandwidth's Voice API hits our callback, they will give us the `callId`. We can look up our `participant` object with that
and, much like our inbound call, we use the `participant.token` to tell Bandwidth's Voice API to transfer the
call into our WebRTC session.

You should notice the `generateTransferBxml` call works exactly like it did in our `/incomingCall` route. Once the call is
transfered, Bandwidth's WebRTC platform makes the phone call look like another WebRTC participant in our
session, and will trigger each browser's `onStreamAvailable` method with the call's audio stream.

Since we've already got our code set up to stream audio, we don't have to do anything else. 

Give it a try yourself!


## Wrapping up

Hopefully this tutorial was helpful to understand how Bandwidth's WebRTC and Voice API platforms
can be combined to make powerful, real-time communication applications.

And it's not limited to just audio and phones! You can use the same `session`, `participant` and `onStreamAvailable` 
ideas to create web based video streaming or screen sharing applications.

