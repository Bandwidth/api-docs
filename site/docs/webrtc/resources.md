---
id: resources
title: Resources
slug: /webrtc/resources
description: Another general overview of Bandwidth's account services
keywords:
  - bandwidth
  - webrtc
  - video
image: ../../static/img/bandwidth-logo.png
---

## SDKs

If you are an SDK user, there are a pair of them that you will want: a client SDK and a Server SDK:

- The Bandwidth Client SDKs

| Environment                                                        | Notes                                                                                 |
| ------------------------------------------------------------------ | ------------------------------------------------------------------------------------- |
| [Browser](https://www.npmjs.com/package/@bandwidth/webrtc-browser) | The Bandwidth Browser SDK                                                             |
| [IOS](https://github.com/Bandwidth/bandwidth-webrtc-swift)         | An OSS implementation of Bandwidth WebRTC suitable for iOS devices. Currently in Beta |
| [Android](https://github.com/Bandwidth/bandwidth-android)          | Bandwidth Android SDK. Currently in Beta                                              |

- The Bandwidth Server API SDKs

  | Language                                                                   | Notes                                  |
  | -------------------------------------------------------------------------- | -------------------------------------- |
  | [Node](https://www.npmjs.com/package/@bandwidth/webrtc)                    | WebRTC Only                            |
  | [C#](https://www.nuget.org/packages/Bandwidth.Sdk/)                        | Bandwidth's C# SDK includes WebRTC     |
  | [Ruby](https://rubygems.org/gems/bandwidth-sdk)                            | Bandwidth's Ruby SDK includes WebRTC   |
  | [Python](https://pypi.org/project/bandwidth-sdk/)                          | Bandwidth's Python SDK includes WebRTC |
  | [PHP](https://packagist.org/packages/bandwidth/sdk)                        | Bandwidth's PHP SDK includes WebRTC    |
  | [Java](https://mvnrepository.com/artifact/com.bandwidth.sdk/bandwidth-sdk) | Bandwidth's Java SDK includes WebRTC   |

## APIs

The Bandwidth WebRTC API is documented in the API Reference section of these API Documents

## Sample Applications

We have created an extensive suite of sample applications. Feel free to copy them, modify them, extend them, or just learn from them. They represent a variety of simple solutions in a variety of languages that you can use to get up to speed.

The sample applications are maintained in the [Bandwidth Samples](https://github.com/search?q=topic%3Awebrtc+org%3ABandwidth-Samples) organization on GitHub.

To make things easier to find, those same Bandwidth Sample Applications are listed and described below:

| Name                                                                                                                | Environment             | Demonstrated Functionality                                                                                                                     |
| ------------------------------------------------------------------------------------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| [webrtc-video-meeting-python](https://github.com/Bandwidth-Samples/webrtc-video-meeting-python)                     | Python                  | A WebRTC video meeting app written in python that supports many meeting features including dial-out                                            |
| [webrtc-hello-world-ts](https://github.com/Bandwidth-Samples/webrtc-hello-world-ts)                                 | TypeScript              | This sample app shows the simplest way to get a phone to talk to a browser through Bandwidth's WebRTC and Voice APIs                           |
| [webrtc-audio-call-swift](https://github.com/Bandwidth-Samples/webrtc-audio-call-swift)                             | Swift                   | This sample allows for an iOS device to call a phone number using WebRTC audio.                                                                |
| [webrtc-hello-world-js](https://github.com/Bandwidth-Samples/webrtc-hello-world-js)                                 | JavaScript              | This sample app shows the simplest way to get a phone to talk to a browser through Bandwidth's WebRTC and Voice APIs.                          |
| [webrtc-transfer-nodejs](https://github.com/Bandwidth-Samples/webrtc-transfer-nodejs)                               | nodejs/JavaScript       | An example of how to transfer a phone participant between two WebRTC agent sessions                                                            |
| [webrtc-video-swift](https://github.com/Bandwidth-Samples/webrtc-video-swift)                                       | Swift                   | This sample allows for two iOS devices to communicate audio and video over WebRTC                                                              |
| [webrtc-hello-world-java](https://github.com/Bandwidth-Samples/webrtc-hello-world-java)                             | Java                    | This sample app shows the simplest way to get a phone to talk to a browser through Bandwidth's WebRTC and Voice APIs                           |
| [webrtc-audio-conference-swift](https://github.com/Bandwidth-Samples/webrtc-audio-conference-swift)                 | Swift                   | This sample allows for iOS devices to create a conference call using WebRTC audio                                                              |
| [webrtc-hello-world-video-js](https://github.com/Bandwidth-Samples/webrtc-hello-world-video-js)                     | nodejs/JavaScript       | a simple 1:1 WebRTC video application                                                                                                          |
| [webrtc-hello-world-video-pstn-call-js](https://github.com/Bandwidth-Samples/webrtc-hello-world-video-pstn-call-js) | JavaScript              | A simple 1:1 WebRTC video application with PSTN calling                                                                                        |
| [webrtc-voiceconf-ts](https://github.com/Bandwidth-Samples/webrtc-voiceconf-ts)                                     | JavaScript/ Node/ React | This sample uses the Magic of Bandwidth V2 voice to add a broad suite of capabilities to webRTC by anchoring the call on a V2 voice conference |
| [webrtc-voicebridge-ts](https://github.com/Bandwidth-Samples/webrtc-voicebridge-ts)                                 | JavaScript/ Node/ React | This sample app demonstrates the use of the Programmable Voice Bridge verb to efficiently join webrtc and voice endpoints                      |

## Other Required Resources

Some things you just gotta have - this is that list.

### Your Bandwidth account

⚠️ Your account must be activated to use WebRTC. Please contact [sales support](https://www.bandwidth.com/talk-to-an-expert/) to learn how to get access!

Our Video API and WebRTC Calling API are both powered by Bandwidth's WebRTC Platform.

### Base API URL

The Base URL for placing API calls to the WebRTC capabilities contains your account ID, and is authenticated using the credentials created for API access.

`https://api.webrtc.bandwidth.com/v1/accounts/{accountId}`

If you examine the readme file for any of the sample applications above you will find the instructions on the use of your account and base URL
