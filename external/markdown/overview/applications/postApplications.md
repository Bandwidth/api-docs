## Create Application

Create a new [application](about.md)

### Request URL
POST `https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../account/bandwidthAccountCredentials.md) document.

### Supported Parameters

| Parameters                            | Service   | Mandatory                  | Description |
|:--------------------------------------|:----------|:---------------------------|:------------|
| `ServiceType`                         | Both      | Yes                        | The type of service the application will be used for. <br><br>- `Messaging-V2` for [message events](../../../messaging/callbacks/messageEvents.md) <br><br>- `Voice-V2` for [voice events](../../../voice/bxml/callbacks/about.md) |
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


{% common %}

### HTTP example 1: Create a new messaging application

#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>EBVICs</AppName>
    <InboundCallbackUrl>https://example.com</InboundCallbackUrl>
    <OutboundCallbackUrl>https://example2.com</OutboundCallbackUrl>
    <InboundCallbackCreds>
        <UserId>15jPWZmXdm</UserId>
        <Password>xxv3jPsPR2</Password>
    </InboundCallbackCreds>
    <OutboundCallbackCreds>
        <UserId>15jPWZmXdm</UserId>
        <Password>xxv3jPsPR2</Password>
    </OutboundCallbackCreds>
    <RequestedCallbackTypes>
        <CallbackType>message-delivered</CallbackType>
        <CallbackType>message-failed</CallbackType>
        <CallbackType>message-sending</CallbackType>
    </RequestedCallbackTypes>
</Application>
```

#### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>d4d1b41d-4c05-47d0-838a-34e4f14e4e3e</ApplicationId>
        <ServiceType>Messaging-V2</ServiceType>
        <AppName>EBVICs</AppName>
        <!--DEPRECATED-->
        <MsgCallbackUrl>https://example.com</MsgCallbackUrl>
        <InboundCallbackUrl>https://example.com</InboundCallbackUrl>
        <OutboundCallbackUrl>https://example2.com</OutboundCallbackUrl>
        <!--DEPRECATED-->
        <MsgCallbackCreds>
            <!--DEPRECATED-->
            <UserId>15jPWZmXdm</UserId>
            <!--DEPRECATED-->
        </MsgCallbackCreds>
        <InboundCallbackCreds>
            <UserId>15jPWZmXdm</UserId>
        </InboundCallbackCreds>
        <OutboundCallbackCreds>
            <UserId>15jPWZmXdm</UserId>
        </OutboundCallbackCreds>
        <RequestedCallbackTypes>
            <CallbackType>message-delivered</CallbackType>
            <CallbackType>message-failed</CallbackType>
            <CallbackType>message-sending</CallbackType>
        </RequestedCallbackTypes>
    </Application>
</ApplicationProvisioningResponse>
```

### HTTP Example 2: Create a new voice application

#### Request
```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
    <ServiceType>Voice-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/voice</CallInitiatedCallbackUrl>
    <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/voice/status</CallStatusCallbackUrl>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
      <Password>Your-Password</Password>
  </CallbackCreds>
  <CallInitiatedFallbackUrl>https://yourSecureSecondarySite.com/callbacks/voice</CallInitiatedCallbackUrl>
  <CallInitiatedFallbackCreds>
      <UserId>Your-Fallback-User-id</UserId>
      <Password>Your-Fallback-Password</Password>
  </CallInitiatedFallbackCreds>
</Application>
```

#### Response
```http
HTTP/1.1 201 Created
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <Application>
        <ApplicationId>d775585a-ed5b-4a49-8b96-f68c0a993ebe</ApplicationId>
        <ServiceType>Voice-V2</ServiceType>
        <AppName>Production Server</AppName>
        <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/voice</CallInitiatedCallbackUrl>
        <CallInitiatedMethod>POST</CallInitiatedMethod>
        <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/voice/status</CallStatusCallbackUrl>
        <CallStatusMethod>POST</CallStatusMethod>
        <CallbackCreds>
            <UserId>Your-User-id</UserId>
        </CallbackCreds>
        <CallInitiatedFallbackUrl>https://yourSecureSecondarySite.com/callbacks/voice</CallInitiatedCallbackUrl>
        <CallInitiatedFallbackMethod>POST</CallInitiatedFallbackMethod>
        <CallInitiatedFallbackCreds>
            <UserId>Your-Fallback-User-id</UserId>
        </CallInitiatedFallbackCreds>
    </Application>
</ApplicationProvisioningResponse>
```
