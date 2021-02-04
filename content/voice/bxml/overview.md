# Bandwidth XML (BXML)

Bandwidth XML allows you to create a voice application as easily as you create a Web application. Using Bandwidth XML (or BXML) your application handles incoming call events using standard action verbs that are described in XML.

Before we begin creating a new BXML application you’ll need two things initially setup:

1. A phone number that is allocated to your Bandwidth Application Platform account and is configured to an application. For instructions on setting up your application, read the [applications](../../account/applications/about.md) page

2. A public Web site that you can create content on and will handle the requests for BXML. Note that the endpoint for this site should be used to create the application in you setup above.

The maximum size of a BXML document is 64 KB.

###  Understanding BXML Callback Events
BXML callbacks are HTTP requests made by the Bandwidth platform to endpoints specified by you in your HTTP requests and BXML. Their purpose
is to 1) inform you of events that have happened in the call flow and 2) receive instructions from your
application on what to do next.

BXML callbacks are HTTP POST requests by default.  The request will have a JSON body that describes the event.  It
expects an XML response consisting of BXML verbs.

The first BXML callback is made when the call is created with [POST /calls](../methods/calls/postCalls.md) as
the `answerUrl` field.  Subsequent callbacks are made by specifying event-specific `*Url` attributes on the appropriate verbs.  If a
relative URL is provided in BXML, it is resolved relative to the request that retrieved that BXML.

If BXML execution ends without performing a callback, there is an implicit `<Hangup>` at the end of the document.
