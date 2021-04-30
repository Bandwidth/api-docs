# Bandwidth XML (BXML)

Bandwidth XML allows you to create a voice application as easily as you create a Web application. Using Bandwidth XML (or BXML) your application handles incoming call events using standard action verbs that are described in XML.

Before we begin creating a new BXML application you’ll need two things initially setup:

1. A phone number that is allocated to your Bandwidth Application Platform account and is configured to an application. 

2. A public Web site that you can create content on and will handle the requests for BXML. Note that the endpoint for this site should be used to create the application in you setup above.

The maximum size of a BXML document is 64 KB.

![BXML Image](static/images/bxml-overview.png)

## BXML Components

| Component | Description |
|--|--|
| [Verbs](./bxmlVerbs/BxmlVerbsOverview.md) | BXML verbs tells Bandwidth what to do with the phone call |
| [BXML Callbacks](./bxmlCallbacks/BxmlCallbacksOverview.md) | BXML callbacks are sent to your server on completion of a BXML verb in order to receive the next BXML verb |
| [BXML Asynchronous Callbacks](./bxmlAsyncCallbacks/BxmlAsyncCallbacksOverview.md) | BXML asynchronous callbacks are sent to your server on completion of a background process triggered by a BXML verb. These callbacks are not directly linked to a callflow, and therefore do not expect BXML |
