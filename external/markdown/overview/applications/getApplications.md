## List Applications

List all applications on your account

### Request URL

`GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../overview/account/bandwidthAccountCredentials.md) document.


### HTTP Example: List all applications

#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
    <ApplicationList>
        <Application>
            <ApplicationId>2cfcb382-161c-46d4-8c67-87ca09a72c85</ApplicationId>
            <ServiceType>Messaging-V2</ServiceType>
            <AppName>app1</AppName>
            <InboundCallbackUrl>http://example.com/messaging/inbound</InboundCallbackUrl>
        </Application>
        <Application>
            <ApplicationId>0cb0112b-5998-4c81-999a-0d3fb5e3f8e2</ApplicationId>
            <ServiceType>Voice-V2</ServiceType>
            <AppName>app2</AppName>
            <CallInitiatedCallbackUrl>http://example.com/voice/inbound</CallInitiatedCallbackUrl>
            <CallbackCreds>
                <UserId>15jPWZmXdm</UserId>
            </CallbackCreds>
            <CallInitiatedFallbackUrl>https://fallback.com</CallInitiatedFallbackUrl>
            <CallInitiatedFallbackMethod>POST</CallInitiatedFallbackMethod>
            <CallInitiatedFallbackCreds>
                <UserId>login2</UserId>
            </CallInitiatedFallbackCreds>
            <CallbackTimeout>20</CallbackTimeout>
        </Application>
    </ApplicationList>
</ApplicationProvisioningResponse>
```
