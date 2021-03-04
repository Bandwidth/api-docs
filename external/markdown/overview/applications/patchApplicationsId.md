## Partial Update Application

PATCH will only update the specified field(s)

### Request URL
PATCH `https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}}`

### Supported Parameters
| Parameters                            | Service   | Mandatory                  | Description |
|:--------------------------------------|:----------|:---------------------------|:------------|
| `AppName`                             | Both      | Yes                        | Plain text name of the application |
| `InboundCallbackUrl`                  | Messaging | Yes, for `Messaging-V2`    | Url to receive [message events](../../../messaging/callbacks/messageEvents.md) |
| `OutboundCallbackUrl`                 | Messaging | Yes, if utilizing status callbacks | Url to receive [message events](../../../messaging/callbacks/messageEvents.md) |
| `InboundCallbackCreds`                | Messaging | No, but highly recommended | Basic auth credentials to apply to your inbound message events |
| `InboundCallbackCreds.UserId`         | Messaging | No, but highly recommended | Basic auth `UserId` |
| `InboundCallbackCreds.Password`       | Messaging | No, but highly recommended | Basic auth `Password`|
| `OutboundCallbackCreds`               | Messaging | No, but highly recommended | Basic auth credentials to apply to your outbound message events |
| `OutboundCallbackCreds.UserId`        | Messaging | No, but highly recommended | Basic auth `UserId` |
| `OutboundCallbackCreds.Password`      | Messaging | No, but highly recommended | Basic auth `Password`|
| `RequestedCallbackTypes`              | Messaging | No                         | List containing the `CallbackTypes` you wish to receive at the `OutboundCallbackUrl`. |
| `RequestedCallbackTypes.CallbackType` | Messaging | No                         | `message-delivered`, `message-sending`, `message-failed` |
| `CallInitiatedCallbackUrl`            | Voice     | Yes, for `Voice-V2`        | Url to receive [voice events](../../../voice/bxml/callbacks/about.md) |
| `CallInitiatedMethod`                 | Voice     | No                         | HTTP method for events sent to the `CallInitiatedCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code> |
| `CallStatusCallbackUrl`               | Voice     | No                         | Url to receive [voice events](../../../voice/bxml/callbacks/about.md) **NOT** related to Initiated. Such as: rejected or hung up. |
| `CallStatusMethod`                    | Voice     | No                         | HTTP method for events sent to the `CallStatusCallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code> |
| `CallbackCreds`                       | Voice     | No, but highly recommended | Basic auth credentials to apply to your message & voice events |
| `CallbackCreds.UserId`                | Voice     | No, but highly recommended | Basic auth `UserId` |
| `CallbackCreds.Password`              | Voice     | No, but highly recommended | Basic auth `Password` |
| `CallInitiatedFallbackUrl`            | Voice     | No                         | Url to receive [voice events](../../../voice/bxml/callbacks/about.md) URL is used when voice events fail to process at `CallInitiatedCallbackUrl` |
| `CallInitiatedFallbackMethod`         | Voice     | No                         | HTTP method for events sent to the `CallInitiatedFallbackUrl`.<br> <code class="post">POST</code> or <code class="get">GET</code><br>Default is <code class="post">POST</code> |
| `CallInitiatedFallbackCreds`          | Voice     | No                         | Basic auth credentials to apply to voice events sent to the `CallInitiatedFallbackUrl`. |
| `CallInitiatedFallbackCreds.UserId`   | Voice     | No                         | Basic auth `UserId`  |
| `CallInitiatedFallbackCreds.Password` | Voice     | No                         | Basic auth `Password`|


### HTTP Example: Update _only_ the UserId field

#### Request
```http
PATCH https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
    <CallbackCreds>
        <UserId>Your-NEW-User-id</UserId>
    </CallbackCreds>
</Application>
```

#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>d775585a-ed5b-4a49-8b96-f68c0a993ebe</ApplicationId>
        <ServiceType>Messaging-V2</ServiceType>
        <AppName>Production Server</AppName>
        <InboundCallbackUrl>https://example.com</InboundCallbackUrl>
        <CallbackCreds>
            <UserId>Your-NEW-User-id</UserId>
            <Password>Your-Password</Password>
        </CallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```
