# Applications

Bandwidth uses HTTP Callbacks (also known as [webhooks](../webhooks.md)) to send [message events](../../messaging/callbacks/messageEvents.md) & [voice events](../../voice/bxml/callbacks/about.md) to any publicly addressable url.

In order to successfully use the Voice & Messaging APIs, you need to configure an `Application` for **both** the [Voice API](../../voice/about.md) & the [Messaging API](../../messaging/about.md).

Applications contain the `InboundCallbackUrl` and `OutboundCallbackUrl` for messaging applications or the `CallInitiatedCallbackUrl` & `CallStatusCallbackUrl` for voice applications.  These URLs are used to send either [message events](../../messaging/callbacks/messageEvents.md) or [voice events](../../voice/bxml/callbacks/about.md) to your service.
The application object also contains the `CallbackCreds` to authenticate requests to your server.

Each application can be assigned to as many `Locations` as needed.  However, each `Location` can only have a single `Application` per service type.

![Applications](static/images/applications.png)

### Base Url

`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`


### Capabilities

| Verb   | Path                                                                                                        | Description                                                         |
|:-------|:------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------|
| GET    | [`/api/accounts/{accountId}/applications`](getApplications.md)                                              | List all Applications                                               |
| POST   | [`/api/accounts/{accountId}/applications`](postApplications.md)                                             | Create an application                                               |
| GET    | [`/api/accounts/{accountId}/applications/{applicationId}`](getApplicationsId.md)                            | Get information about a specific application                        |
| PATCH  | [`/api/accounts/{accountId}/applications/{applicationId}`](patchApplicationsId.md)                          | Patch changes to an application                                     |
| PUT    | [`/api/accounts/{accountId}/applications/{applicationId}`](putApplicationsId.md)                            | Make changes to an application                                      |
| DELETE | [`/api/accounts/{accountId}/applications/{applicationId}`](deleteApplicationsId.md)                         | Delete an application                                               |
| GET    | [`/api/accounts/{accountId}/applications/{applicationId}/associatedsippeers`](getApplicationsIdSippeers.md) | Retrieve a list of sippeers (location), associated with application |
