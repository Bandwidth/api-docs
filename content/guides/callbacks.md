{% raw %}
<section class="callbacksOverview">
{% endraw %}

# Bandwidth Callbacks

## Bandwidth Callbacks Overview

Bandwidth's APIs operate on a system of callbacks. Most API requests send callbacks, and notices of incoming events (phone call, text message) are sent via callbacks as well.

<img src="../../images/bandwidth_callbacks.png" style="max-width:95%">

## How To Utilize Callbacks

In order to utilize callbacks, you must run a server with a URL that is expecting to receive callbacks from Bandwidth. This URL must be provided to Bandwidth through your Bandwidth application settings, or as part of your API request. For voice callbacks, this endpoint must return valid BXML for Bandwidth to use. More information on Bandwidth applications can be found on our [applications page](../../account/applications/about.md).

Callback URLs can (and ideally should) be password protected. To allow Bandwidth to access these URLs, applications in the Bandwidth Dashboard can be configured with a username and password used to authenticate on your callback URL.

Ports 80, 443, and all ports >= 1024 are supported for callbacks.

If you need static IPs for your callbacks, feel free to open up a ticket on our [support site](https://support.bandwidth.com/hc/en-us/requests/new).

## Specific Callback Information For Bandwidth's APIs

### Voice Callbacks

Specifics for voice callbacks can be found on our [voice callbacks page](../../voice/bxml/callbacks/about.md).

Bandwidth expects to receive valid [BXML](../../voice/bxml/about.md) as a response for BXML callbacks.

### Messaging Callbacks

Specifics for messaging callbacks can be found on our [messaging callbacks page](../../messaging/callbacks/messageEvents.md).

### Subscription Callbacks

Specifics for subscription callbacks for order notifications can be found on our [subscriptions page](../../account/subscriptions/about,md).

<br>

## Authenticated Callbacks {#authenticatedCallbacks}

Bandwidth allows you to enable basic authentication on the webhooks received from the different services. For messaging and voice, credentials would be set on the messaging or voice application created in the Bandwidth Dashboard. In a subscription, the basic authentication credentials would be set in the <code class="post">POST</code> request to create each specific subscription type. To authenticate, Bandwidth follows the basic HTTP authentication framework outlined in [RFC 7235](https://tools.ietf.org/html/rfc7235).

Essentially, if you have basic authentication enabled for a webhook, Bandwidth will send a request with no authorization header attached and expect a 401 response that includes a `WWW-AUTHENTICATE` header containing a challenge. An example of that header could look like `WWW-AUTHENTICATE: Basic realm=""`.

Once the proper 401 HTTP response is received, Bandwidth will send a second request that includes an authorization header and webhook body. The authorization header will include the credentials given in either the application settings or subscription creation, encoded in base64. 

It is important to note that if the `WWW-AUTHENTICATE` header is not received alongside the 401 response, Bandwidth will not try a second request and your the callback will not be received by your server. More information about this pracice can be found [here](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication).
