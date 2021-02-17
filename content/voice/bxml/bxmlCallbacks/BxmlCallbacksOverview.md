## BXML Callbacks Overview

BXML callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests, BXML and in your Voice application. Their purpose is to:
1. inform you of events that have happened in the call flow
2. receive instructions from your application on what to do next.

BXML callbacks are HTTP POST requests by default.  The request will have a JSON body that describes the event. It expects an XML response consisting of [BXML verbs](../../about.md).

HTTP GET requests may be used for callbacks by setting the appropriate `*Method` attribute when specifying each callback's URL. If the GET method is used, the properties are passed as query parameters. This can cause very long URLs, so POST is the preferred method.

We use a 15s request timeout by default when trying to deliver all callbacks. However, you can customize that value [when creating an outbound call](../../methods/calls/postCalls.md) by setting a `callbackTimeout` on the request; or with application settings for inbound calls.

Relative URLs are allowed in BXML verb attributes and they will be resolved against the URL of the server that provided the BXML containing the relative URL. For example, if we send an [answer event](./answer.md) to `https://example.com/answer` and the BXML sent back to us contains a [Gather](../verbs/gather.md) with a `gatherUrl=/onGatherComplete`, the [gather event](./gather.md) will be sent to `https://example.com/onGatherComplete`.
