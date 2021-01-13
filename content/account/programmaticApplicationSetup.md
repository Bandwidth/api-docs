{% multimethod %}
{% endmultimethod %}

# Bandwidth Account API Setup {#top}

This walks through how to programmatically setup and configure your Bandwidth account _via APIs_ for use with [HTTP Voice](../../voice/about.md) and [HTTP Messaging](../../messaging/about.md)

The full API reference for these endpoints can be found at [our Numbers API reference](../../numbers/apiReference.md)

## Assumptions

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for HTTP Voice & HTTP Messaging (please contact support@bandwidth.com)

## API Authentication

The Account Management API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Getting Started

* [Create **messaging** application](#create-messaging-application)
* [Create **voice** application](#create-voice-application)
* [Create subaccount (_site_)](#create-subaccount-site)
* [Create location (_sippeer_)](#create-location)
* [Enable **SMS** on Location (_sippeer_)](#enable-sms-on-location)
* [Enable **MMS** on Location (_sippeer_)](#enable-mms-on-location)
* [Assign Application to Location (_sippeer_)](#assign-messaging-application-to-location)
* [Enable HTTP Voice **and** assign Application on Location (_sippeer_)](#assign-application-enable-voice-on-location)

## Next Steps

Once the account has been configured correctly for HTTP Services. See the guides for:

* [Ordering Phone Numbers with a Callback](../../numbers/guides/onDemandNumberSearchAndOrder.md)
* [Ordering Phone Numbers and polling order status](../../numbers/guides/numberOrderingSummary.md)
* [HTTP Messaging](../../messaging/about.md)
* [HTTP Voice](../../voice/about.md)

## Create **Messaging** Application {#create-messaging-application}

<aside class="alert general small">
<p>
Save the <code>Application Id</code> after creating the application.
</p>
</aside>

The [Application](../applications/about.md) contains the HTTP URL you want to use for both inbound and outbound messages.

Learn more about [applications in the documentation](../applications/about.md).

{% extendmethod %}

#### Application Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`

#### Request Authentication

The [Applications](../applications/about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds)

| Parameters               | Mandatory | Description                                                                                          |
|:-------------------------|:----------|:-----------------------------------------------------------------------------------------------------|
| `ServiceType`            | Yes       | Set to `Messaging-V2`                                                                                |
| `AppName`                | Yes       | Plain text name of the application                                                                   |
| `MsgCallbackUrl`         | Yes       | Url to receive _all_ [message events](../../messaging/callbacks/messageEvents.md)                    |
| `CallbackCreds`          | No        | Basic auth credentials to apply to your [message events](../../messaging/callbacks/messageEvents.md) |
| `CallbackCreds.UserId`   | No        | Basic auth `UserId`                                                                                  |
| `CallbackCreds.Password` | No        | Basic auth `Password`                                                                                |

{% common %}

### Create Application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
  <ServiceType>Messaging-V2</ServiceType>
  <AppName>Production Server</AppName>
  <MsgCallbackUrl>https://yourSecureSite.com/callbacks</MsgCallbackUrl>
  <CallbackCreds>
    <UserId>Your-User-id</UserId>
    <Password>Your-Password</Password>
  </CallbackCreds>
</Application>
```

{% sample lang="csharp" %}

```csharp
var messageApplication = await Application.Create(client, new Application
{
    AppName = "BandwidthMsgApplication",
    ServiceType = "Messaging-V2",
    MsgCallbackUrl = "https://yourcallback.com"
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :app_name => "BandwidthMsgApplication",
  :service_type => "Messaging-V2",
  :msg_callback_url => "https://yourcallback.com"
}
application = BandwidthIris::Applications.create_application(data)
puts application
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://{baseurl}/accounts/{{accountId}}/applications/{{applicationID}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationProvisioningResponse>
  <Application>
    <ApplicationId>{{messaging-applicationId}}</ApplicationId>
    <ServiceType>Messaging-V2</ServiceType>
    <AppName>Production Server</AppName>
    <CallbackUrl>https://yourSecureSite.com/callbacks</CallbackUrl>
    <MsgCallbackUrl>https://yourSecureSite.com/callbacks</MsgCallbackUrl>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
    </CallbackCreds>
  </Application>
</ApplicationProvisioningResponse>
```

{% endextendmethod %}

---

## Create **Voice** Application {#create-voice-application}

<aside class="alert general small">
<p>
Save the <code>Application Id</code> after creating the application.
</p>
</aside>

The [Application](../applications/about.md) contains the HTTP URL you want to use for inbound calls.

Learn more about [applications in the documentation](../applications/about.md).

{% extendmethod %}

#### Application Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications`


| Parameters                 | Mandatory | Description                                                                                                                |
|:---------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------|
| `ServiceType`              | Yes       | Set to `Voice-V2`                                                                                                          |
| `AppName`                  | Yes       | Plain text name of the application                                                                                         |
| `CallInitiatedCallbackUrl` | Yes       | Url to receive **actionable** [voice events](../../voice/bxml/callbacks/about.md)                                          |
| `CallStatusCallbackUrl`    | No        | Url to receive [voice events](../../voice/bxml/callbacks/about.md) NOT related to Initiated. Such as: rejected or hung up. |
| `CallbackCreds`            | No        | Basic auth credentials to apply to your [voice events](../../voice/bxml/callbacks/about.md)                                |
| `CallbackCreds.UserId`     | No        | Basic auth `UserId`                                                                                                        |
| `CallbackCreds.Password`   | No        | Basic auth `Password`                                                                                                      |

{% common %}

### Create Application

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Application>
  <ServiceType>Voice-V2</ServiceType>
  <AppName>Production Server2</AppName>
  <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/init</CallInitiatedCallbackUrl>
  <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/status</CallStatusCallbackUrl>
  <CallbackCreds>
    <UserId>Your-User-id</UserId>
    <Password>Your-Password</Password>
  </CallbackCreds>
</Application>
```

{% sample lang="csharp" %}

```csharp
var voiceApplication = await Application.Create(client, new Application
{
    AppName = "BandwidthVoiceApplication",
    ServiceType = "Voice-V2",
    CallInitiatedCallbackUrl = "https://yourcallback.com"
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :app_name => "BandwidthVoiceApplication",
  :service_type => "Voice-V2",
  :call_initiated_callback_url => "https://yourcallback.com"
}
application = BandwidthIris::Applications.create_application(data)
puts application
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://{baseurl}/accounts/{{accountId}}/applications/{{voice-applicationId}}

<ApplicationProvisioningResponse>
  <Application>
    <ApplicationId>{{voice-applicationId}}</ApplicationId>
    <ServiceType>Voice-V2</ServiceType>
    <AppName>Production Server2</AppName>
    <CallInitiatedCallbackUrl>https://yourSecureSite.com/callbacks/init</CallInitiatedCallbackUrl>
    <CallInitiatedMethod>POST</CallInitiatedMethod>
    <CallStatusCallbackUrl>https://yourSecureSite.com/callbacks/status</CallStatusCallbackUrl>
    <CallStatusMethod>POST</CallStatusMethod>
    <CallbackCreds>
      <UserId>Your-User-id</UserId>
    </CallbackCreds>
  </Application>
</ApplicationProvisioningResponse>
```

{% endextendmethod %}

---

## Create Sub-Account (_site_) {#create-subaccount-site}

This endpoint can be used to create a subaccount (AKA site) on your account

{% extendmethod %}

#### Subaccount Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites`

| Parameters                | Mandatory | Description                                                                                                                                                                                                                              |
|:--------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Name`                    | Yes       | The name of the site. Max length of 10 characters                                                                                                                                                                                        |
| `Description`             | No        | The description of the site                                                                                                                                                                                                              |
| `Address`                 | Yes       | The address of the site                                                                                                                                                                                                                  |
| `CustomerProvidedID`      | No        | Optional custom ID to assign to your application. Max length of 10 characters                                                                                                                                                            |
| `CustomerName`            | No        | Optional custom name to assign to your application. Max length of 50 characters                                                                                                                                                          |

#### Address Object Values

| Name | Type | Description |
|:--|:--|:--|
| HouseNumber | String | The number of the house |
| HousePrefix | String | The prefix of the house |
| HouseSuffix | String | The suffix of the house |
| StreetName | String | The name of the street |
| StreetSuffix | String | The suffix of the street |
| AddressLine2 | String | The optional second line of the address (apartment, extension, etc) |
| City | String | The city of the address |
| StateCode | String | The 2 character state code |
| Zip | String | The 6 digit zip code |
| PlusFour | String | The 4 digit zip code extension |
| County | String | The county of the address |
| Country | String | The country of the address |
| AddressType | String | The type of the address. Must be `Billing` or `Service` |

{% common %}

### Create Sub-Account (site)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Site>
  <Name>BandwidthHQ</Name>
  <Description>Test Gateway</Description>
  <CustomerName>BW</CustomerName>
  <Address>
    <HouseNumber>900</HouseNumber>
    <StreetName>Main Campus Dr</StreetName>
    <City>RALEIGH</City>
    <StateCode>NC</StateCode>
    <Zip>27606</Zip>
    <AddressType>Billing</AddressType>
  </Address>
</Site>
```

{% sample lang="csharp" %}

```csharp
Site site = await Site.Create(client, new Site
{
    Name = "BandwidthApplicationSubAccount",
    Address = new Address
    {
        City = "RALEIGH",
        HouseNumber = "900",
        StateCode = "NC",
        StreetName = "Main Campus Dr",
        StreetSuffix = "DR",
        Zip = "27606",
        AddressType = "Billing"
    }
});
```

{% sample lang="ruby" %}

```ruby
site = {
  :name =>"BandwidthApplicationSubAccount",
  :address => {
    :city => "Raleigh",
    :house_number => "900",
    :state_code =>"NC",
    :street_name => "Main Campus Dr",
    :street_suffix => "DR",
    :zip => "27606",
    :address_type => "Billing"
  }
};
site = BandwidthIris::Site.create(site)
```

{% common %}

### Response
```http
HTTP/1.1 201 Created
Location: https://{baseurl}/accounts/{{accountId}}/sites/{{siteID}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SiteResponse>
  <Site>
    <Id>29488</Id>
    <Name>BandwidthHQ</Name>
    <Description>Test Gateway</Description>
    <CustomerName>BW</CustomerName>
    <Address>
      <HouseNumber>900</HouseNumber>
      <StreetName>Main Campus Dr</StreetName>
      <City>RALEIGH</City>
      <StateCode>NC</StateCode>
      <Zip>27606</Zip>
      <Country>United States</Country>
      <AddressType>Billing</AddressType>
    </Address>
  </Site>
</SiteResponse>
```

{% endextendmethod %}

## Create location (_sippeer_) {#create-location}

<aside class="alert general small">
<p>
Save the <code>Location (sippeer) Id</code> After creating the application.
</p>
</aside>

The location (_sippeer_) is a logical grouping of numbers.

* You'll need a location (_sippeer_) in order to group phone numbers.

{% extendmethod %}

### Location Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers`

| Parameters      | Mandatory | Description                                                                                                                                                                                                                                                                                     |
|:----------------|:----------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `PeerName`      | Yes       | Plain text name of the Location (_sippeer_)                                                                                                                                                                                                                                                     |
| `IsDefaultPeer` | No        | Boolean: <br> * `true` <br> * `false` <br> The Default SIP Peer is the default "destination" for any Telephone Numbers that are ordered for the Site in which the SIP Peer resides.  Each sub-account (_site_) can have only 1 default SIP Peer. You can configure multiple SIP Peers on a Site |

{% common %}

### Create Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<SipPeer>
  <PeerName>Bandwidth 2020-01-06</PeerName>
  <IsDefaultPeer>true</IsDefaultPeer>
</SipPeer>
```

{% sample lang="csharp" %}

```csharp
SipPeer sipPeer = await SipPeer.Create(client, new SipPeer
{
    SiteId = site.Id,
    Name = "BandwidthApplicationLocation",
    IsDefaultPeer = true
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :site_id => "site_id",
  :peer_name => "BandwidthApplicationLocation",
  :is_default_peer => true
}

BandwidthIris::SipPeer.create(data)
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Location: https://{baseurl}/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}
```

> Save the `{sippeerId}` from the `location` header!


{% endextendmethod %}

---

## Enable SMS on Location (_sippeer_) {#enable-sms-on-location}

In order to use HTTP messaging in your account, you need to enable SMS and MMS on each location after creating.

{% extendmethod %}

### Enable SMS Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/sms`

| Parameters  | Mandatory | Description                                                                                           |
|:------------|:----------|:------------------------------------------------------------------------------------------------------|
| `TollFree`  | Yes       | Will enable texting to and from _toll-free phone numbers_. <br> Boolean: <br> * `true` <br> * `false` |
| `ShortCode` | Yes       | Will enable texting to and from _short codes_. <br> Boolean: <br> * `true` <br> * `false`             |
| `Protocol`  | Yes       | **MUST BE SET TO** `HTTP`                                                                             |
| `Zone1`     | Yes       | **MUST BE SET TO**: `true`                                                                            |
| `Zone2`     | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone3`     | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone4`     | Yes       | **MUST BE SET TO**: `false`                                                                           |
| `Zone5`     | Yes       | **MUST BE SET TO**: `false`                                                                           |

{% common %}

### Enable SMS on Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/sms HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<SipPeerSmsFeature>
  <SipPeerSmsFeatureSettings>
    <TollFree>true</TollFree>
    <ShortCode>true</ShortCode>
    <Protocol>HTTP</Protocol>
    <Zone1>true</Zone1>
    <Zone2>false</Zone2>
    <Zone3>false</Zone3>
    <Zone4>false</Zone4>
    <Zone5>false</Zone5>
  </SipPeerSmsFeatureSettings>
  <HttpSettings />
</SipPeerSmsFeature>
```

{% sample lang="csharp" %}

```csharp
var smsMessageFeature = await SipPeer.CreateSMSSettings(client, site.Id, sipPeer.Id, new SipPeerSmsFeature
{
    SipPeerSmsFeatureSettings = new SipPeerSmsFeatureSettings
    {
        TollFree = false,
        ShortCode = false,
        Protocol = "HTTP",
        Zone1 = true,
        Zone2 = false,
        Zone3 = false,
        Zone4 = false,
        Zone5 = false,
    },
    HttpSettings = new HttpSettings
    {
    }
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :sip_peer_sms_feature_settings => {
    :toll_free => false,
    :short_code => false,
    :protocol => "HTTP",
    :zone_1 => true,
    :zone_2 => false,
    :zone_3 => false,
    :zone_4 => false,
    :zone_5 => false
  },
  :http_settings => {}
}

puts BandwidthIris::SipPeerProducts.create_sms_feature_settings("site_id", "sippeer_id", data)
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerSmsFeatureResponse>
  <SipPeerSmsFeature>
    <SipPeerSmsFeatureSettings>
      <TollFree>true</TollFree>
      <ShortCode>true</ShortCode>
      <Protocol>HTTP</Protocol>
      <Zone1>true</Zone1>
      <Zone2>false</Zone2>
      <Zone3>false</Zone3>
      <Zone4>false</Zone4>
      <Zone5>false</Zone5>
    </SipPeerSmsFeatureSettings>
    <HttpSettings>
      <ProxyPeerId>539692</ProxyPeerId>
    </HttpSettings>
  </SipPeerSmsFeature>
</SipPeerSmsFeatureResponse>
```


{% endextendmethod %}

---

## Enable MMS on Location (_sippeer_) {#enable-mms-on-location}

In addition to enabling SMS, you must also enable MMS to receive picture messages and other multi-media messages.

{% extendmethod %}

### Enable MMS Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/mms`

| Parameters | Mandatory | Description               |
|:-----------|:----------|:--------------------------|
| `Protocol` | Yes       | **MUST BE SET TO** `HTTP` |

{% common %}

### Enable MMS on Location (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/features/mms HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<MmsFeature>
  <MmsSettings>
    <Protocol>HTTP</Protocol>
  </MmsSettings>
  <Protocols>
    <HTTP>
      <HttpSettings />
    </HTTP>
  </Protocols>
</MmsFeature>
```

{% sample lang="csharp" %}

```csharp
var mmsMessageFeature = await SipPeer.CreateMMSSettings(client, site.Id, sipPeer.Id, new MmsFeature
{
    MmsSettings = new MmsSettings
    {
        Protocol = "HTTP"
    },
    Protocols = new Protocols
    {
        HTTP = new HTTP {
            HttpSettings = new HttpSettings
            {
            }
        }
    }
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :mms_settings => {
    :protocol => "HTTP"
  },
  :protocols => {
    :HTTP => {
      :http_settings => {}
    }
  }
}

puts BandwidthIris::SipPeerProducts.create_mms_feature_settings("site_id", "sippeer_id", data)
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<MmsFeatureResponse>
  <MmsFeature>
    <MmsSettings>
      <protocol>HTTP</protocol>
    </MmsSettings>
    <Protocols>
      <HTTP>
        <HttpSettings>
          <proxyPeerId>539692</proxyPeerId>
        </HttpSettings>
      </HTTP>
    </Protocols>
  </MmsFeature>
</MmsFeatureResponse>
```


{% endextendmethod %}

---

## Assign Messaging Application to Location (_sippeer_) {#assign-messaging-application-to-location}

In order to use the messaging API, you need to assign the `application` created above to the location (_sippeer_)

{% extendmethod %}

### Assign Application Parameters

#### Request URL

<code class="put">PUT</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/applicationSettings`

| Parameters             | Mandatory | Description                                             |
|:-----------------------|:----------|:--------------------------------------------------------|
| `HttpMessagingV2AppId` | Yes       | The application ID from the `application` created above |


{% common %}

### Assign Application to Location (_sippeer_)

{% sample lang="http" %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/messaging/applicationSettings HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<ApplicationsSettings>
  <HttpMessagingV2AppId>{{messaging-applicationId}}</HttpMessagingV2AppId>
</ApplicationsSettings>
```

{% sample lang="csharp" %}

```csharp
await SipPeer.UpdateApplicationSettings(client, site.Id, sipPeer.Id, new ApplicationsSettings
{
    HttpMessagingV2AppId = messageApplication.Application.ApplicationId
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :http_messaging_v2_app_id => "id_value"
}

puts BandwidthIris::SipPeerProducts.update_messaging_application_settings("site_id", "sippeer_id", data)
```

{% common %}

### Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ApplicationsSettingsResponse>
  <ApplicationsSettings>
    <HttpMessagingV2AppId>{{messaging-applicationId}}</HttpMessagingV2AppId>
  </ApplicationsSettings>
</ApplicationsSettingsResponse>
```

{% endextendmethod %}

---

## Assign Voice Application **AND** Enable HTTP Voice on Location (_sippeer_) {#assign-application-enable-voice-on-location}

In addition to enabling SMS & MMS, you must also enable HTTP Voice services on the location to send and receive phone calls.  This is done with a single API call to the voice settings endpoint of the location (sippeer).

Bandwidth's voice services and split into two different names:

* Origination = "inbound calls"
* Termination = "outbound calls"

Bandwidth requires that **both** origination (inbound calls) and termination (outbound calls) be set to the same protocol.  As such, updating either the "origination" or "termination" settings to `HTTP` will set the others' setting to the same application.

It is only required to set **either** `termination/settings` or `origination/settings` for configuring HTTP Voice (SIP customers may have different settings). Setting one or the other, will copy the settings to the other settings profile. This example adds and configures the `origination/settings`, however sending the same request body to the `termination/settings` will result in the same configuration.

{% extendmethod %}

### Enable HTTP Voice Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/origination/settings`

| Parameters | Mandatory | Description               |
|:-----------|:----------|:--------------------------|
| `VoiceProtocol` | Yes       | **MUST BE SET TO** `HTTP` |
| `HttpSettings` | Yes | Parent element for HTTP settings |
| `HttpVoiceV2AppId` | Yes | The applicationId of the **Voice** application created above |

{% common %}

### Enable HTTP Voice on Location (via Origination Settings) (_sippeer_)

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/origination/settings HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<SipPeerOriginationSettings>
  <VoiceProtocol>HTTP</VoiceProtocol>
  <HttpSettings>
    <HttpVoiceV2AppId>{{voice-applicationId}}</HttpVoiceV2AppId>
  </HttpSettings>
</SipPeerOriginationSettings>
```

{% sample lang="csharp" %}

```csharp
var voiceFeature = await SipPeer.SetOriginationSettings(client, site.Id, sipPeer.Id, new SipPeerOriginationSettings
{
    VoiceProtocol = "HTTP",
    HttpSettings = new HttpSettings
    {
        HttpVoiceV2AppId = voiceApplication.Application.ApplicationId
    }
});
```

{% sample lang="ruby" %}

```ruby
data = {
  :voice_protocol => "HTTP",
  :http_settings => {
    :http_voice_v2_app_id => "id_value"
  }
}
puts BandwidthIris::SipPeerProducts.create_origination_settings("site_id", "sippeer_id", data)
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>{{voice-applicationId}}</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>
```

### Ensure HTTP Voice settings on Location (_sippeer_)


{% sample lang="http" %}

```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/sites/{{siteId}}/sippeers/{{sippeerId}}/products/termination/settings HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

{% sample lang="csharp" %}

```csharp
var terminationSettings = await SipPeer.GetTerminationSetting(client, site.Id, sipPeer.Id);
```

{% sample lang="ruby" %}

```ruby
puts BandwidthIris::SipPeerProducts.get_termination_settings("site_id", "sippeer_id")
```

{% common %}

### Response

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SipPeerOriginationSettingsResponse>
  <SipPeerOriginationSettings>
    <VoiceProtocol>HTTP</VoiceProtocol>
    <HttpSettings>
      <HttpVoiceV2AppId>{{Voice-Application-Id}}</HttpVoiceV2AppId>
    </HttpSettings>
  </SipPeerOriginationSettings>
</SipPeerOriginationSettingsResponse>
```

{% endextendmethod %}

---
