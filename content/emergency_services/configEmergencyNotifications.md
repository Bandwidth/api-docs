{% multimethod %}
{% endmultimethod %}

# Configuring Emergency Notifications {#top}

This guide will walk through creating and associating Emergency Recipients & Groups with HTTP & SDK Examples

## Assumptions

* Read through the [About Emergency Notifications](./emergencyNotifications.md) guide
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for Emergency Notifications (contact [support](https://support.bandwidth.com) for more information)

## API Authentication

The Emergency Notifications API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Table of Contents

In order to configure emergency notifications in the Bandwidth Dashboard, the following steps must be performed:

* [Create "emergency notification recipients"](#create-enr)
* [Create "emergency notification groups"](#create-eng)
* [Associate "emergency endpoints" with "emergency notification groups"](#associate-eng-enr)
* [Updating Configuration](#updating-eng)
* [Removing Configuration](#removing)

## Create "emergency notification recipients" {#create-enr}

This defines the details of a specific notification.

An emergency notification recipient has a:
* Description
* Type (EMAIL, SMS, TTS, or CALLBACK)
* Target data for delivery of the notification.

| Type       | Target                     |
|:-----------|:---------------------------|
| EMAIL      | email address              |
| SMS or TTS | telephone number           |
| CALLBACK   | HTTPS URL and credentials. |

{% extendmethod %}


### Request Information

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationRecipients`

#### Request Authentication

The emergency notification recipients resource is authenticated with your [API Credentials](../../guides/accountCredentials.md#number-account-creds)

##### Note

Oneof the following must be provided to match the `Type` as specified.
* `EmailAddress`
* `Sms TelephoneNumber`
* `Tts TelephoneNumber`
* `Callback Url`

#### Request Parameters

| Parameter           | Mandatory | Description                                                                                                                                                                                                                                                                                                                                                                                                        |
|:--------------------|:----------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Description         | Yes       | A mandatory 200 character description of the Emergency Notification Recipient. The contents of this field are freeform, but ideally should describe who is being notified and by what means. E.g. Voice notification to building 5 front desk.                                                                                                                                                                     |
| Type                | Yes       | A mandatory field indicating the means by which the emergency call notification will be made. The choices are":" EMAIL, SMS, TTS, and CALLBACK. EMAIL sends an email to the specified email address. SMS sends a text message to the specified telephone number. TTS sends a voice call with a text-to-speech announcement to the specified telephone number. CALLBACK causes invocation of a specified HTTPS URL. |
| EmailAddress        | No*       | An email address that must be specified when the Type is set to EMAIL. The value must be formatted like a valid email address. E.g. FredJones@gmail.com. An email address can be up to 254 characters long.                                                                                                                                                                                                        |
| Sms TelephoneNumber | No*       | A telephone number capable of receiving text messages that must be specified when Type is set to SMS. Format is 11 digits":" 1NPANXXXXXX.                                                                                                                                                                                                                                                                          |
| Tts TelephoneNumber | No*       | A telephone number capable of receiving voice calls that must be specified when Type is set to TTS. Format is 11 digits":" 1NPANXXXXXX.                                                                                                                                                                                                                                                                            |
| Callback Url        | No*       | An https URL that must be provided when Type is set to CALLBACK. The URL may optionally include one or mory query parameters. E.g. https://foo.com/bar?param=value. The URL may be up to 256 characters.                                                                                                                                                                                                           |
| Callback Username   | No*       | A username to be used in Basic Authentication of the callback that must be specified when Type is CALLBACK. The username may be up to 32 characters.                                                                                                                                                                                                                                                               |
| Callback Password   | No*       | A password to be used in Basic Authentication of the callback that must be specified when Type is CALLBACK. Passwords may be up to 256 characters. Passwords are not included in GET responses.                                                                                                                                                                                                                    |

## Response Parameters

| Parameter           | Description                                                                                                                                                                                                                                                                                                           |
|:--------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Identifier          | A system-assigned unique identifier for the Emergency Notification Recipient. This field is not present in the request, but mandatory in the success response. This identifier can be used as a key to fetch the emergency notification recipient instance later. This value will be used as the EVS Notification ID. |
| CreatedDate         | The date and time in UTC when the emergency notification recipient was created.                                                                                                                                                                                                                                       |
| LastModifiedDate    | The date and time in UTC when the emergency notification recipient was last modified. If this date and time is the same as the CreatedDate, the recipient has never been modified.                                                                                                                                    |
| ModifiedByUser      | the Bandwidth Dashboard username of the last person to create or modify this emergency notification recipient.                                                                                                                                                                                                        |
| Description         | Description as sent in the request                                                                                                                                                                                                                                                                                    |
| Type                | Type as sent in the request                                                                                                                                                                                                                                                                                           |
| EmailAddress        | Email as sent in the request                                                                                                                                                                                                                                                                                          |
| Sms TelephoneNumber | Telephone Number as sent in the request                                                                                                                                                                                                                                                                               |
| Tts TelephoneNumber | Telephone Number as sent in the request                                                                                                                                                                                                                                                                               |
| Callback Url        | Callback URL as sent in the request                                                                                                                                                                                                                                                                                   |
| Callback Username   | Callback Username as sent in the request. **Callback Password is ommitted for security**                                                                                                                                                                                                                              |

{% common %}

### Example 1 of 1: Create a Callback Notification

{% sample lang='http' %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationRecipients HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<EmergencyNotificationRecipient>
    <Description> Callback to property management system </Description>
    <Type>CALLBACK</Type>
    <Callback>
        <Url>https://foo.bar/baz</Url>
        <Credentials>
            <Username>jgilmore</Username>
            <Password>x23388%SLHss</Password>
        </Credentials>
    </Callback>
</EmergencyNotificationRecipient>
```

> Responds

```http
HTTP/1.1 201
Content-type: application/xml

<EmergencyNotificationRecipientsResponse>
    <EmergencyNotificationRecipient>
        <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier>
        <CreatedDate>2020-03-18T21:26:47.403Z</CreatedDate>
        <LastModifiedDate>2020-03-18T21:26:47.403Z</LastModifiedDate>
        <ModifiedByUser>jgilmore</ModifiedByUser>
        <Description> This is a description of the emergency notification recipient. </Description>
        <Type>CALLBACK</Type>
        <Callback>
            <Url>https://foo.bar/baz</Url>
            <Credentials>
                <Username>jgilmore</Username>
                <!-- CallbackPassword is omitted for security -->
            </Credentials>
        </Callback>
    </EmergencyNotificationRecipient>
</EmergencyNotificationRecipientsResponse>
```

{% sample lang="php" %}

```php
$data = array(
  "Description" => "Callback to property management system",
  "Type" => "CALLBACK",
  "Callback" => array(
    "Url" => "https://foo.bar/baz",
    "Credentials" => array(
      "Username" => "jgilmore",
      "Password" => "x23388%SLHss"
    )
  )
);

$response = $account->createEmergencyNotificationRecipient($data);
```

> Output

```

```

{% sample lang="ruby" %}

```ruby
data = {
  :description => "Callback to property management system",
  :type => "CALLBACK",
  :callback => {
    :url => "https://foo.bar/baz",
    :credentials => {
      :username => "jgilmore",
      :password => "x23388%SLHss"
    }
  }
}

enr = BandwidthIris::EmergencyNotificationRecipients.create_emergency_notification_recipient(data)
puts enr
```

> Output

```

```

{% sample lang="java" %}

```java
EmergencyNotificationRecipient enr = new EmergencyNotificationRecipient();
enr.setDescription(" Callback to property management system ");
enr.setType("CALLBACK");

EmergencyNotificationCallback callback = new EmergencyNotificationCallback();
Credentials credentials = new Credentials();
credentials.setPassword("x23388%SLHss");
credentials.setUsername("jgilmore");
callback.setUrl("https://foo.bar/baz");
callback.setCredentials(credentials);

enr.setCallback(callback);

EmergencyNotificationRecipientsResponse response;
try {
    response = EmergencyNotification.createRecipients(client, enr);
} catch(Exception ex){
    // Handle Exception
}
```

> Output

```

```

{% sample lang="csharp" %}

```csharp
try
{
    var response = EmergencyNotification.CreateRecipients(client, new EmergencyNotificationRecipient
    {
        Description = " Callback to property management system ",
        Type = "CALLBACK", 
        Callback = new Callback
        {
            Url = "https://foo.bar/baz",
            Credentials = new Credentials
            {
                Username = "jgilmore",
                Password = "x23388%SLHss"
            }
        }
    });
}
catch (Exception ex)
{
    // Handle Exception
}
```

> Output

```

```

{% sample lang="js" %}

```js
var emergencyNotificationRecipient = {
    description: "Callback to property management system",
    type: "CALLBACK",
    callback : {
        url: "https://foo.bar/baz",
        credentials: {
            username: "jgilmore",
            password: "x23388%SLHss"
        }
    }
};

var response = await EmergencyNotification.createRecipientAsync(helper.createClient(), emergencyNotificationRecipient);
```

> Output

```

```

{% sample lang="python" %}

```python
print("");
```

> Output

```

```

{% endextendmethod %}

## Create "emergency notification groups" order {#create-eng}

This allows you to create groups that should use the same set of emergency notification recipients.

For example, if you want to notify the front desk and the security gate for everyone in a building, you can create a group to represent everyone in the building, and associate the group with the two emergency notification recipients.

A group has a:
* Description
* one to three notification recipients.

{% extendmethod %}

### Request Information

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationGroupOrders`

#### Request Authentication

The emergency notification groups resource is authenticated with your [API Credentials](../../guides/accountCredentials.md#number-account-creds)

#### Request Parameters

| Parameter                                     | Mandatory | Description                                                                                                                                                                                                                                                                                                          |
|:----------------------------------------------|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CustomerOrderId                               | Yes       | An optional customer-defined order identifier that is stored with the Bandwidth order. This value is opaque to Bandwidth.                                                                                                                                                                                            |
| (emergency notification group) Identifier     | Yes       | A mandatory identifier of the Emergency Notification Group to be deleted or updated.                                                                                                                                                                                                                                 |
| AddedEmergencyNotificationGroup               | No*       | Indicates that the order is to add an emergency notification group.                                                                                                                                                                                                                                                  |
| DeletedEmergencyNotificationGroup             | No*       | Indicates that the order is to delete an emergency notification group.                                                                                                                                                                                                                                               |
| UpdatedEmergencyNotificationGroup             | No*       | Indicates that the order is to modify an emergency notification group.                                                                                                                                                                                                                                               |
| Description                                   | Yes       | A mandatory 200 character description of the Emergency Notification Group. The contents of this field are freeform, but ideally should describe the set of endpoints that are being grouped together for the purpose of having the same emergency notification recipients. E.g. Occupants of building 5 main campus. |
| AddedEmergencyNotificationRecipients          | No*       | Indicates that emergency notification recipients are being added to the emergency notification group.                                                                                                                                                                                                                |
| DeletedEmergencyNotificationRecipients        | No*       | Indicates that emergency notification recipients are being removed from the emergency notification group.                                                                                                                                                                                                            |
| EmergencyNotificationRecipients               | No*       | A list of one to three emergency notification recipients being associated with this emergency notification group.                                                                                                                                                                                                    |
| EmergencyNotificationRecipient                | No*       | One of up to three emergency notification recipients belonging to this emergency notification group.                                                                                                                                                                                                                 |
| (emergency notification recipient) Identifier | Yes       | The identifier that uniquely identifies an emergency notification recipient. This identifier was assigned when the emergency notification recipient was created. A given emergency notification recipient may be associated with only one emergency notification group.                                              |

## Response Parameters

| Parameter                                     | Description                                                                                                                                                                                                                                                                                                                                 |
|:----------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OrderId                                       | A system-assigned unique identifier assigned to this order. Use this order id to fetch the status of the order.                                                                                                                                                                                                                             |
| OrderCreatedDate                              | The UTC date and time at which this order was created..                                                                                                                                                                                                                                                                                     |
| CreatedBy                                     | The username of the user that created this order.                                                                                                                                                                                                                                                                                           |
| ProcessingStatus                              | The processing status of this order. Values may be: PROCESSING, COMPLETED, FAILED. PROCESSING means that the system is still processing the order. COMPLETED means that the order has been successfully completed. FAILED means that errors occurred while processing the order, and that the order did not make any changes to the system. |
| Identifier                                    | A system-assigned unique identifier for the Emergency Notification Group. This field is not present in the request, but mandatory in the success response. This identifier can be used as a key to fetch the emergency notification group instance later.                                                                                   |
| ErrorList                                     | A list, possibly empty, of errors affecting emergency notification group updates. The ErrorList will be empty for orders that are COMPLETED. It will be non-empty for orders that FAILED.                                                                                                                                                   |
| ErrorList Description                         | If an emergency notification group operation failed for some reason, this text describes the reason for the failure.                                                                                                                                                                                                                        |
| CustomerOrderId                               | The CustomerOrderId as specified in the Request.                                                                                                                                                                                                                                                                                            |
| (emergency notification group) Identifier     | The (emergency notification group) Identifier as specified in the Request.                                                                                                                                                                                                                                                                  |
| AddedEmergencyNotificationGroup               | The AddedEmergencyNotificationGroup as specified in the Request.                                                                                                                                                                                                                                                                            |
| DeletedEmergencyNotificationGroup             | The DeletedEmergencyNotificationGroup as specified in the Request.                                                                                                                                                                                                                                                                          |
| UpdatedEmergencyNotificationGroup             | The UpdatedEmergencyNotificationGroup as specified in the Request.                                                                                                                                                                                                                                                                          |
| Description                                   | The Description as specified in the Request.                                                                                                                                                                                                                                                                                                |
| AddedEmergencyNotificationRecipients          | The AddedEmergencyNotificationRecipients as specified in the Request.                                                                                                                                                                                                                                                                       |
| DeletedEmergencyNotificationRecipients        | The DeletedEmergencyNotificationRecipients as specified in the Request.                                                                                                                                                                                                                                                                     |
| EmergencyNotificationRecipients               | The EmergencyNotificationRecipients as specified in the Request.                                                                                                                                                                                                                                                                            |
| EmergencyNotificationRecipient                | The EmergencyNotificationRecipient as specified in the Request.                                                                                                                                                                                                                                                                             |
| (emergency notification recipient) Identifier | The (emergency notification recipient) Identifier as specified in the Request.                                                                                                                                                                                                                                                              |


{% common %}

### Example 1 of 1: Create a new Notification Group

{% sample lang='http' %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationGroupOrders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<EmergencyNotificationGroupOrder>
    <CustomerOrderId>UbOxhMnp</CustomerOrderId>
    <AddedEmergencyNotificationGroup>
        <Description>JgHzUzIchD</Description>
        <AddedEmergencyNotificationRecipients>
            <EmergencyNotificationRecipient>
                <Identifier>c7f74671edd8410d9a4c0f8e985e0a</Identifier>
            </EmergencyNotificationRecipient>
            <EmergencyNotificationRecipient>
                <Identifier>74ac30535b414d29bc36d50572f553</Identifier>
            </EmergencyNotificationRecipient>
            <EmergencyNotificationRecipient>
                <Identifier>b910df3245ce4192aee052f583259f</Identifier>
            </EmergencyNotificationRecipient>
        </AddedEmergencyNotificationRecipients>
    </AddedEmergencyNotificationGroup>
</EmergencyNotificationGroupOrder>
```

> Responds

```http
HTTP/1.1 201
Content-type: application/xml

<EmergencyNotificationGroupOrderResponse>
    <OrderId>900b3646-18df-4626-b237-3a8de648ebf6</OrderId>
    <OrderCreatedDate>2020-04-29T15:27:16.151</OrderCreatedDate>
    <CreatedBy>systemUser</CreatedBy>
    <ProcessingStatus>PROCESSING</ProcessingStatus>
    <CustomerOrderId>UbOxhMnp</CustomerOrderId>
    <AddedEmergencyNotificationGroup>
        <Identifier>52897b97-3592-43fe-aa3f-857cf96671ee</Identifier>
        <Description>JgHzUzIchD</Description>
        <AddedEmergencyNotificationRecipients>
            <EmergencyNotificationRecipient>
                <Identifier>c7f74671edd8410d9a4c0f8e985e0a</Identifier>
            </EmergencyNotificationRecipient>
            <EmergencyNotificationRecipient>
                <Identifier>74ac30535b414d29bc36d50572f553</Identifier>
            </EmergencyNotificationRecipient>
            <EmergencyNotificationRecipient>
                <Identifier>b910df3245ce4192aee052f583259f</Identifier>
            </EmergencyNotificationRecipient>
        </AddedEmergencyNotificationRecipients>
    </AddedEmergencyNotificationGroup>
</EmergencyNotificationGroupOrderResponse>
```

{% sample lang="php" %}

```php
$data = array(
  "CustomerOrderId" => "UbOxhMnp",
  "AddedEmergenyNotificationGroup" => array(
    "Description" => "JgHzUzIchD",
    "AddedEmergencyNotificationRecipients" => array(
      "EmergencyNotificationRecipient" => array(
        array(
          "Identifier" => "c7f74671edd8410d9a4c0f8e985e0a"
        ),
        array(
          "Identifier" => "74ac30535b414d29bc36d50572f553"
        ),
        array(
          "Identifier" => "b910df3245ce4192aee052f583259f"
        )
      )
    )
  )
);
$response = $account->createEmergencyNotificationGroupOrder($data);
```

> Output

```

```

{% sample lang="ruby" %}

```ruby
data = {
  :customer_order_id => "UbOxhMnp",
  :added_emergency_notification_group => {
    :description => "JgHzUzIchD",
    :added_emergency_notification_recipients => {
      :emergency_notification_recipient => [
        {
          :identifier => "c7f74671edd8410d9a4c0f8e985e0a"
        },
        {
          :identifier => "74ac30535b414d29bc36d50572f553"
        },
        {
          :identifier => "b910df3245ce4192aee052f583259f"
        }
      ]
    }
  }
}

order = BandwidthIris::EmergencyNotificationGroups.create_emergency_notification_group_order(data)
puts order
```

> Output

```

```

{% sample lang="java" %}

```java
EmergencyNotificationGroupOrder engo = new EmergencyNotificationGroupOrder();
engo.setCustomerOrderId("UBOxhMnp");

AddedEmergencyNotificationGroup addedENGs = new AddedEmergencyNotificationGroup();
addedENGs.setDescription("JgHzUzIchD");

EmergencyNotificationRecipient enr1 = new EmergencyNotificationRecipient();
enr1.setIdentifer("c7f74671edd8410d9a4c0f8e985e0a");
EmergencyNotificationRecipient enr2 = new EmergencyNotificationRecipient();
enr2.setIdentifer("74ac30535b414d29bc36d50572f553");
EmergencyNotificationRecipient enr3 = new EmergencyNotificationRecipient();
enr3.setIdentifer("b910df3245ce4192aee052f583259f");

addedENGs.setAddedEmergencyNotificationRecipients(Arrays.asList(enr1, enr2, enr3));

engo.setAddedEmergencyNotificationGroup(addedENGs);

EmergencyNotificationGroupOrderResponse response;
try {
    response = EmergencyNotification.createGroupOrders(client, engo);
} catch(Exception ex){
    // Handle Exception
}
```

> Output

```

```

{% sample lang="csharp" %}

```csharp
try
{
    var response = EmergencyNotification.CreateGroupOrders(client, new EmergencyNotificationGroupOrder
    {
        CustomerOrderId = "UbOxhMnp",
        AddedEmergencyNotificationGroup = new EmergencyNotificationGroup
        {
            Description = "JgHzUzIchD",
            AddedEmergencyNotificationRecipients = new EmergencyNotificationRecipient[]
            {
                new EmergencyNotificationRecipient
                {
                    Identifier = "c7f74671edd8410d9a4c0f8e985e0a"
                },
                new EmergencyNotificationRecipient
                {
                    Identifier = "74ac30535b414d29bc36d50572f553"
                },
                new EmergencyNotificationRecipient
                {
                    Identifier = "b910df3245ce4192aee052f583259f"
                }
            }
        }
    });
}
catch (Exception ex)
{
    // Handle Exception
}
```

> Output

```

```

{% sample lang="js" %}

```js
var emergencyNotificationGroupOrder = {
    customerOrderid: "UbOxhMnp",
    addedEmergencyNotificationGroup: {
        description: "JgHzUzIchD",
        addedEmergencyNotificationRecipients:[
            {
                emergencyNotificationRecipient :{
                    identifier: "c7f74671edd8410d9a4c0f8e985e0a"
                }
            },
            {
                emergencyNotificationRecipient :{
                    identifier: "74ac30535b414d29bc36d50572f553"
                }
            },
            {
                emergencyNotificationRecipient :{
                    identifier: "b910df3245ce4192aee052f583259f"
                }
            }
        ]
    }
};

var response = await EmergencyNotification.createGroupOrderAsync(client, emergencyNotificationGroupOrder);
```

> Output

```

```

{% sample lang="python" %}

```python
print("");
```

> Output

```

```

{% endextendmethod %}

## Associate "emergency endpoints" with "emergency notification groups". {#associate-eng-enr}

This step allows you to assign emergency endpoints (either telephone numbers or alternate end-user identifiers - AEUIs) to a group.

For example, if you want everyone in a given building to trigger the same set of notifications in the event that they place an emergency call, just add those callers to the group that has the desired notification recipients.

{% extendmethod %}

### Request Information

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationEndpointOrders`

#### Request Authentication

The emergencyNotificationEndpointOrders resource is authenticated with your [API Credentials](../../guides/accountCredentials.md#number-account-creds)

#### Request Parameters

| Parameter                             | Mandatory | Description                                                                                                                                                                                                                  |
|:--------------------------------------|:----------|:-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| CustomerOrderId                       | Yes       | An customer-defined order identifier that is stored with the Bandwidth order. This value is opaque to Bandwidth.                                                                                                             |
| EmergencyNotificationGroup Identifier | Yes       | The mandatory identifier that uniquely identifies the emergency notification group to which emergency endpoints are being associated. This value is assigned by the system when the emergency notification group is created. |
| AddedAssociations                     | No*       | Included when emergency endpoint to emergency notification group associations are to be created. Only AddedAssociations or Deleted Associations may be included in a given order.                                            |
| DeletedAssociations                   | No*       | Included when emergency endpoint to emergency notification group associations are to be removed. Only AddedAssociations or Deleted Associations may be included in a given order.                                            |
| EepToEngAssociations                  | Yes       | Mandatory container for the list of TNs and AEUI identifiers to be associated or dissociated with the emergency notification group.                                                                                          |
| EepTns                                | No*       | A container of emergency endpoints that are of type TN. This element may be omitted if none of the emergency endpoints to be associated or dissociated are telephone numbers.                                                |
| TelephoneNumber                       | No*       | A 10-digit telephone number representing an emergency endpoint in the ListOfEepTns. The list may consist of a single TN if desired.                                                                                          |
| EepAeuiIds                            | No*       | A container of emergency endpoints that are of type AEUI. This element may be omitted if none of the emergency endpoints to be associated or dissociated are Alternate End User Identities.                                  |
| Identifier                            | No*       | A unique identifier for the AEUI representing an emergency endpoint in the ListOfEepAeuiIds. The list may consist of a single AEUI ID if desired.                                                                            |


## Response Parameters

| Parameter                             | Description                                                                                                                                                                                                                                                                                                                                 |
|:--------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| OrderId                               | A system-assigned unique identifier assigned to this order. Use this order id to fetch the status of the order.                                                                                                                                                                                                                             |
| OrderCreatedDate                      | The UTC date and time at which this order was created..                                                                                                                                                                                                                                                                                     |
| CreatedBy                             | The username of the user that created this order.                                                                                                                                                                                                                                                                                           |
| ProcessingStatus                      | The processing status of this order. Values may be: PROCESSING, COMPLETED, FAILED. PROCESSING means that the system is still processing the order. COMPLETED means that the order has been successfully completed. FAILED means that errors occurred while processing the order, and that the order did not make any changes to the system. |
| Identifier                            | A system-assigned unique identifier for the Emergency Notification Group. This field is not present in the request, but mandatory in the success response. This identifier can be used as a key to fetch the emergency notification group instance later.                                                                                   |
| ErrorList                             | A list, possibly empty, of errors affecting emergency notification group updates. The ErrorList will be empty for orders that are COMPLETED. It will be non-empty for orders that FAILED.                                                                                                                                                   |
| ErrorList Description                 | If an emergency notification group operation failed for some reason, this text describes the reason for the failure.                                                                                                                                                                                                                        |
| CustomerOrderId                       | The CustomerOrderId, as specified in the request                                                                                                                                                                                                                                                                                            |
| EmergencyNotificationGroup Identifier | The EmergencyNotificationGroup Identifier, as specified in the request                                                                                                                                                                                                                                                                      |
| AddedAssociations                     | The AddedAssociations, as specified in the request                                                                                                                                                                                                                                                                                          |
| DeletedAssociations                   | The DeletedAssociations, as specified in the request                                                                                                                                                                                                                                                                                        |
| EepToEngAssociations                  | The EepToEngAssociations, as specified in the request                                                                                                                                                                                                                                                                                       |
| EepTns                                | The EepTns, as specified in the request                                                                                                                                                                                                                                                                                                     |
| TelephoneNumber                       | The TelephoneNumber, as specified in the request                                                                                                                                                                                                                                                                                            |
| EepAeuiIds                            | The EepAeuiIds, as specified in the request                                                                                                                                                                                                                                                                                                 |
| Identifier                            | The Identifier, as specified in the request                                                                                                                                                                                                                                                                                                 |


{% common %}

### Example 1 of 1: Create a new Association

{% sample lang='http' %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationEndpointOrders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<EmergencyNotificationEndpointOrder>
    <CustomerOrderId>ALG-31233884</CustomerOrderId>
    <EmergencyNotificationEndpointAssociations>
        <EmergencyNotificationGroup>
            <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier>
        </EmergencyNotificationGroup>
        <AddedAssociations>
            <EepToEngAssociations>
                <EepTns>
                    <TelephoneNumber>2248838829</TelephoneNumber>
                    <TelephoneNumber>4052397735</TelephoneNumber>
                </EepTns>
                <EepAeuiIds>
                    <Identifier>Fred992834</Identifier>
                    <Identifier>Bob00359</Identifier>
                </EepAeuiIds>
            </EepToEngAssociations>
        </AddedAssociations>
    </EmergencyNotificationEndpointAssociations
```

> Responds

```http
HTTP/1.1 201
Content-type: application/xml

<EmergencyNotificationEndpointOrderResponse>
    <EmergencyNotificationEndpointOrder>
        <OrderId>3e9a852e-2d1d-4e2d-84c3-87223a78cb70</OrderId>
        <OrderCreatedDate>2020-01-23T18:34:17.284Z</OrderCreatedDate>
        <CreatedBy>jgilmore</CreatedBy>
        <ProcessingStatus>COMPLETED</ProcessingStatus>
        <CustomerOrderId>ALG-31233884</CustomerOrderId>
        <EmergencyNotificationEndpointAssociations>
            <EmergencyNotificationGroup>
                <Identifier>3e9a852e-2d1d-4e2d-84c3-04595ba2eb93</Identifier>
            </EmergencyNotificationGroup>
            <!-- If the order created emergency endpoint to emergency notification group associations -->
            <AddedAssociations>
                <EepToEngAssociations>
                    <EepTns>
                        <TelephoneNumber>2248838829</TelephoneNumber>
                        <TelephoneNumber>4052397735</TelephoneNumber>
                    </EepTns>
                    <EepAeuiIds>
                        <Identifier>Fred992834</Identifier>
                        <Identifier>Bob00359</Identifier>
                    </EepAeuiIds>
                </EepToEngAssociations>
                <ErrorList />
            </AddedAssociations>
        </EmergencyNotificationEndpointAssociations>
    </EmergencyNotificationEndpointOrder>
```


{% sample lang="php" %}

```php
$data = array(
  "CustomerOrderId" => "ALG-31233884",
  "EmergencyNotificationEndpointAssociations" => array(
    "EmergenyNotificationGroup" => array(
      "Identifier" => "3e9a852e-2d1d-4e2d-84c3-04595ba2eb93",
    ),
    "AddedAssociations" => array(
      "EepToEngAssociations" => array(
        "EepTns" => array(
          "TelephoneNumber" => array(
            "2248838829",
            "4052397735"
          )
        )
      )
    )
  ) 
);
$response = $account->createEmergencyNotificationEndpointOrder($data);
```

> Output

```

```

{% sample lang="ruby" %}

```ruby
data = {
  :customer_order_id => "ALG-31233884",
  :emergency_notification_endpoint_associations => {
    :emergency_notification_group => {
      :identifier => "3e9a852e-2d1d-4e2d-84c3-04595ba2eb93"
    },
    :added_associations => {
      :eep_to_eng_associations => {
        :eep_tns => {
          :telephone_number => [
            "2248838829",
            "4052397735"
          ]
        }
      }
    }
  }
}

order = BandwidthIris::EmergencyNotificationEndpoints.create_emergency_notification_endpoint_order(data)
puts order
```

> Output

```

```

{% sample lang="java" %}

```java
EmergencyNotificationEndpointOrder eneo = new EmergencyNotificationEndpointOrder();
eneo.setCustomerOrderId("ALG-31233884");

EmergencyNotificationEndpointAssociation enea = new EmergencyNotificationEndpointAssociation();
enea.setEmergencyNotificationGroupId("3e9a852e-2d1d-4e2d-84c3-04595ba2eb93");

EepToEngAssociations ete1 = new EepToEngAssociations();
ete1.setEepTns(Arrays.asList("2248838829", "4052397735"));
ete1.setEepAeuiIds(Arrays.asList("Fred992834", "Bob00359"));

enea.setAddedEepToEngAssociations(Arrays.asList(ete1));

eneo.setEmergencyNotificationEndpointAssociations(enea);

EmergencyNotificationEndpointOrderResponse response;
try {
    response = EmergencyNotification.createEndpointOrder(client, eneo);
} catch(Exception ex){
    // Handle Exception
}
```

> Output

```

```

{% sample lang="csharp" %}

```csharp
try
{
    var response = EmergencyNotification.CreateEndpointOrders(client, new EmergencyNotificationEndpointOrder
    {
        CustomerOrderId = "ALG-31233884",
        EmergencyNotificationEndpointAssociations = new EmergencyNotificationEndpointAssociations
        {
            EmergencyNotificationGroup = new EmergencyNotificationGroup
            {
                Identifier = "3e9a852e-2d1d-4e2d-84c3-04595ba2eb93",
            },
            AddedEepToEngAssociations = new EepToEngAssociations[]
            {
                new EepToEngAssociations
                {
                    EepTns = new string[]{ "2248838829", "4052397735" },
                    EepAeuiIds = new string[]{ "Fred992834", "Bob00359" }
                }
            }
        }
    });
}
catch (Exception ex)
{
    // Handle Exception
}
```

> Output

```

```

{% sample lang="js" %}

```js
var emergencyNotificationEndpointOrder = {
    customerOrderId: "ALG-31233884",
    emergencyNotificationEndpointAssociations : {
        emergencyNotificationGroup:{
            identifier: "3e9a852e-2d1d-4e2d-84c3-04595ba2eb93"
        },
        addedAssociations: {
            eepToEngAssociations: {
                eepTns: [
                    {telephoneNumber: "2248838829"},
                    {telephoneNumber: "4052397735"}
                ],
                eepAeuiIds: [
                    {identifier: "Fred992834"},
                    {identifier: "Bob00359"}
                ]
            }
        }
    }
};

var response = await EmergencyNotification.createEndpointOrderAsync(client, emergencyNotificationEndpointOrder);
```

> Output

```

```

{% sample lang="python" %}

```python
print("");
```

> Output

```

```

{% endextendmethod %}

## Updating Configuration {#updating-eng}

* Emergency notification groups may be updated by adding or removing recipients, provided that the group always has from one to three recipients.
* Emergency notification recipients may be updated at any time.
* Emergency endpoints may be added to or removed from an emergency notification group at any time.

{% extendmethod %}

### Supported Parameters & Responses

* When updating Emergency notification groups, see the [Supported Parameters](#create-eng)
* When updating Emergency notification recipients, see the [Supported Parameters](#create-enr)

{% common %}

### Example 1 of 2: Updating an emergency notification group by adding emergency notification recipients

{% sample lang='http' %}


```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationGroupOrders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<EmergencyNotificationGroupOrder>
    <ModifiedEmergencyNotificationGroup>
        <Identifier>a6d00a2d-94ee-4ecb-9bd8-7c2dde258863</Identifier>
        <AddedEmergencyNotificationRecipients>
            <EmergencyNotificationRecipient>
                <Identifier>d81dcc9526d54cad9dbf076c4e6461</Identifier>
            </EmergencyNotificationRecipient>
        </AddedEmergencyNotificationRecipients>
    </ModifiedEmergencyNotificationGroup>
</EmergencyNotificationGroupOrder>
```

> Responds

```http
HTTP/1.1 201
Content-type: application/xml

<EmergencyNotificationGroupOrderResponse>
    <OrderId>31e4be80-e816-432e-a554-1219ed4fc5e9</OrderId>
    <OrderCreatedDate>2020-04-29T15:34:32.799</OrderCreatedDate>
    <CreatedBy>systemUser</CreatedBy>
    <ProcessingStatus>PROCESSING</ProcessingStatus>
    <ModifiedEmergencyNotificationGroup>
        <Identifier>5da0859b-2af8-42a3-85dd-dad4ba5f7503</Identifier>
        <Description>oXHGGVKwmd</Description>
        <AddedEmergencyNotificationRecipients>
            <EmergencyNotificationRecipient>
                <Identifier>f2eaa7be771241af9b031584875a60</Identifier>>
            </EmergencyNotificationRecipient>
        </AddedEmergencyNotificationRecipients>
    </ModifiedEmergencyNotificationGroup>
</EmergencyNotificationGroupOrderResponse>
```

{% sample lang="php" %}

```php
$data = array(
  "ModifiedEmergenyNotificationGroup" => array(
    "Identifier" => "a6d00a2d-94ee-4ecb-9bd8-7c2dde258863",
    "AddedEmergencyNotificationRecipients" => array(
      "EmergencyNotificationRecipient" => array(
        array(
          "Identifier" => "d81dcc9526d54cad9dbf076c4e6461"
        )
      )
    )
  )
);

$response = $account->createEmergencyNotificationGroupOrder($data);
```

> Output

```

```

{% sample lang="ruby" %}

```ruby
data = {
  :modified_emergency_notification_group => {
    :identifier => "a6d00a2d-94ee-4ecb-9bd8-7c2dde258863",
    :added_emergency_notification_recipients => {
      :emergency_notification_recipient => [
        {
          :identifier => "d81dcc9526d54cad9dbf076c4e6461"
        }
      ]
    }
  }
}

order = BandwidthIris::EmergencyNotificationGroups.create_emergency_notification_group_order(data)
puts order
```

> Output

```

```

{% sample lang="java" %}

```java
EmergencyNotificationGroupOrder engo = new EmergencyNotificationGroupOrder();

ModifiedEmergencyNotificationGroup modifiedEng = new ModifiedEmergencyNotificationGroup();
modifiedEng.setIdentifier("a6d00a2d-94ee-4ecb-9bd8-7c2dde258863");

EmergencyNotificationRecipient enr1 = new EmergencyNotificationRecipient();
enr1.setIdentifer("d81dcc9526d54cad9dbf076c4e6461");

modifiedEng.setAddedEmergencyNotificationRecipients(Arrays.asList(enr1));

engo.setModifiedEmergencyNotificationGroup(modifiedEng);

EmergencyNotificationGroupOrderResponse response;
try {
    response = EmergencyNotification.createGroupOrders(client, engo);
} catch(Exception ex){
    // Handle Exception
}
```

> Output

```

```

{% sample lang="csharp" %}

```csharp
try
{
    var response = EmergencyNotification.CreateGroupOrders(client, new EmergencyNotificationGroupOrder { 
        ModifiedEmergencyNotificationGroup = new EmergencyNotificationGroup
        {
            Identifier = "a6d00a2d-94ee-4ecb-9bd8-7c2dde258863",
            AddedEmergencyNotificationRecipients = new EmergencyNotificationRecipient[]
            {
                new EmergencyNotificationRecipient
                {
                    Identifier = "d81dcc9526d54cad9dbf076c4e6461"
                }
            }
        }
    });
}
catch (Exception ex)
{
    // Handle Exception
}
```

> Output

```

```

{% sample lang="js" %}

```js
var emergencyNotificationGroupOrder = {
    modifiedEmergencyNotificationGroup: {
        identifier: "a6d00a2d-94ee-4ecb-9bd8-7c2dde258863",
        addedEmergencyNotificationRecipients:[
            {
                emergencyNotificationRecipient :{
                    identifier: "d81dcc9526d54cad9dbf076c4e6461"
                }
            }
        ]
    }
};

var response = await EmergencyNotification.createGroupOrderAsync(client, emergencyNotificationGroupOrder);
```

> Output

```

```

{% sample lang="python" %}

```python
print("");
```

> Output

```

```

{% common %}

### Example 2 of 2: Updating an emergency recipient ID to use SMS

{% sample lang='http' %}

```http
PUT https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationRecipients/{{enrId}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<EmergencyNotificationRecipient>
    <Description> Text message to guard shack </Description>
    <Type>SMS</Type>
    <Sms>
        <TelephoneNumber>12015551212</TelephoneNumber>
    </Sms>
</EmergencyNotificationRecipient>
```

> Responds

```http
HTTP/1.1 201
Content-type: application/xml

<EmergencyNotificationRecipientsResponse>
    <EmergencyNotificationRecipient>
        <Identifier> 63865500-0904-46b1-9b4f-7bd237a26363 </Identifier>
        <CreatedDate>2020-03-18T21:26:47.403Z</CreatedDate>
        <LastModifiedDate>2020-04-01T18:32:22.316Z</LastModifiedDate>
        <ModifiedByUser>jgilmore</ModifiedByUser>
        <Description> Text message to guard shack </Description>
        <Type>SMS</Type>
        <Sms>
            <TelephoneNumber>12015551212</TelephoneNumber>
        </Sms>
    </EmergencyNotificationRecipient>
</EmergencyNotificationRecipientsResponse>
```

{% sample lang="php" %}

```php
$data = array(
  "Description" => "Text message to guard shack",
  "Type" => "SMS",
  "Sms" => array(
    "TelephoneNumber" => "12015551212"
  )
);
$response = $account->replaceEmergencyNotificationRecipient("id", $data);
```

> Output

```

```

{% sample lang="ruby" %}

```ruby
data = {
  :description => "Text message to guard shack",
  :type => "SMS",
  :sms => {
    :telephone_number => "12015551212"
  }
}

enr = BandwidthIris::EmergencyNotificationRecipients.replace_emergency_notification_recipient("id", data)
puts enr
```

> Output

```

```

{% sample lang="java" %}

```java
EmergencyNotificationRecipient enr = new EmergencyNotificationRecipient();
enr.setDescription(" Text message to guard shack ");
enr.setType("SMS");
enr.setSmsTelephoneNumbers(Arrays.asList("12015551212"));

EmergencyNotificationRecipientsResponse response;
try {
    response = EmergencyNotification.replaceRecipients(client, enr, "enrId");
} catch(Exception ex){
    // Handle Exception
}
```

> Output

```

```

{% sample lang="csharp" %}

```csharp
try
{
    var response = EmergencyNotification.UpdateRecipients(client, "enrId", new EmergencyNotificationRecipient { 
        Description = " Text message to guard shack ",
        Type = "SMS",
        Sms = new Sms
        {
            TelephoneNumber = "12015551212"
        }
    });
}
catch (Exception ex)
{
    // Handle Exception
}
```

> Output

```

```

{% sample lang="js" %}

```js
var emergencyNotificationRecipient = {
    description: "Text message to guard shack",
    type: "SMS",
    sms: {
        telephoneNumber: "12015551212"
    }
}

var emergencyNotification = new EmergencyNotification();
emergencyNotification.enrid = "enrId";

var response = await emergencyNotification.replaceRecipientAsync(client, emergencyNotificationRecipient);
```

> Output

```

```

{% sample lang="python" %}

```python
print("");
```

> Output

```

```


{% endextendmethod %}

## Removing Configuration {#removing}

Removal of configuration is essentially the reverse of the above:

* An emergency notification group cannot be removed if at least one emergency endpoint is still associated with that group.
* An emergency notification recipient cannot be removed if that recipient belongs to a group.

{% extendmethod %}

### Supported Parameters & Responses

* When updating Emergency notification groups, see the [Supported Parameters](#create-eng)
* When updating Emergency notification recipients, see the [Supported Parameters](#create-enr)

{% common %}

### Example 1 of 2: Delete an emergency notification recipient from a group

{% sample lang='http' %}


```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationGroupOrders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<EmergencyNotificationGroupOrder>
    <ModifiedEmergencyNotificationGroup>
        <Identifier>a97149dc-586c-419d-a054-6b3d352ea8af</Identifier>
        <DeletedEmergencyNotificationRecipients>
            <EmergencyNotificationRecipient>
                <Identifier>ebce6adfb6e94a8a80bc16841b4697</Identifier>
            </EmergencyNotificationRecipient>
        </DeletedEmergencyNotificationRecipients>
    </ModifiedEmergencyNotificationGroup>
</EmergencyNotificationGroupOrder>
```

> Responds

```http
HTTP/1.1 201
Content-type: application/xml

<EmergencyNotificationGroupOrderResponse>
    <OrderId>31e4be80-e816-432e-a554-1219ed4fc5e9</OrderId>
    <OrderCreatedDate>2020-04-29T15:34:32.799</OrderCreatedDate>
    <CreatedBy>systemUser</CreatedBy>
    <ProcessingStatus>PROCESSING</ProcessingStatus>
    <ModifiedEmergencyNotificationGroup>
        <Identifier>5da0859b-2af8-42a3-85dd-dad4ba5f7503</Identifier>
        <Description>oXHGGVKwmd</Description>
        <DeletedEmergencyNotificationRecipients>
            <EmergencyNotificationRecipient>
                <Identifier>f2eaa7be771241af9b031584875a60</Identifier>>
            </EmergencyNotificationRecipient>
        </DeletedEmergencyNotificationRecipients>
    </ModifiedEmergencyNotificationGroup>
</EmergencyNotificationGroupOrderResponse>
```

{% sample lang="php" %}

```php
$data = array(
  "ModifiedEmergenyNotificationGroup" => array(
    "Identifier" => "a97149dc-586c-419d-a054-6b3d352ea8af",
    "DeletedEmergencyNotificationRecipients" => array(
      "EmergencyNotificationRecipient" => array(
        array(
          "Identifier" => "ebce6adfb6e94a8a80bc16841b4697"
        )
      )
    )
  )
);

$response = $account->createEmergencyNotificationGroupOrder($data);
```

> Output

```

```

{% sample lang="ruby" %}

```ruby
data = {
  :modified_emergency_notification_group => {
    :identifier => "a97149dc-586c-419d-a054-6b3d352ea8af",
    :deleted_emergency_notification_recipients => {
      :emergency_notification_recipient => [
        {
          :identifier => "ebce6adfb6e94a8a80bc16841b4697"
        }
      ]
    }
  }
}

order = BandwidthIris::EmergencyNotificationGroups.create_emergency_notification_group_order(data)
puts order
```

> Output

```

```

{% sample lang="java" %}

```java
EmergencyNotificationGroupOrder engo = new EmergencyNotificationGroupOrder();

ModifiedEmergencyNotificationGroup deletedENG = new ModifiedEmergencyNotificationGroup();
deletedENG.setIdentifier("a6d00a2d-94ee-4ecb-9bd8-7c2dde258863");

EmergencyNotificationRecipient enr1 = new EmergencyNotificationRecipient();
enr1.setIdentifer("d81dcc9526d54cad9dbf076c4e6461");

deletedENG.setDeletedEmergencyNotificationRecipients(Arrays.asList(enr1));

engo.setModifiedEmergencyNotificationGroup(deletedENG);

EmergencyNotificationGroupOrderResponse response;
try {
    response = EmergencyNotification.createGroupOrders(client, engo);
} catch(Exception ex){
    // Hanlde Exception
}
```

> Output

```

```

{% sample lang="csharp" %}

```csharp
try
{
    var response = EmergencyNotification.CreateGroupOrders(client, new EmergencyNotificationGroupOrder
    {
        ModifiedEmergencyNotificationGroup = new EmergencyNotificationGroup
        {
            Identifier = "a97149dc-586c-419d-a054-6b3d352ea8af",
            DeletedEmergencyNotificationRecipients = new EmergencyNotificationRecipient[]
            {
                new EmergencyNotificationRecipient
                {
                    Identifier = "ebce6adfb6e94a8a80bc16841b4697"
                }
            }
        }
    });
}
catch (Exception ex)
{
    // Handle Exception
}
```

> Output

```

```

{% sample lang="js" %}

```js
var emergencyNotificationGroupOrder = {
    modifiedEmergencyNotificationGroup: {
        identifier: "a97149dc-586c-419d-a054-6b3d352ea8af",
        deletedEmergencyNotificationRecipients: {
            emergencyNotificationRecipients : [
                {
                    emergencyNotificationRecipient: {
                            identifier: "ebce6adfb6e94a8a80bc16841b4697"
                    }
                }
            ]
            }
        }
    }
};

var response = await EmergencyNotification.createGroupOrderAsync(client, emergencyNotificationGroupOrder);
```

> Output

```

```

{% sample lang="python" %}

```python
print("");
```

> Output

```

```

{% common %}

### Example 2 of 2: Delete an emergency notification recipient

{% sample lang='http' %}

```http
DELETE https://dashboard.bandwidth.com/api/accounts/{{accountId}}/emergencyNotificationRecipients/{{enrId}} HTTP/1.1
```

> Responds

```http
HTTP/1.1 200
```

{% sample lang="php" %}

```php
$account->deleteEmergencyNotificationRecipient("id");
```

> Output

```

```

{% sample lang="ruby" %}

```ruby
BandwidthIris::EmergencyNotificationRecipients.delete_emergency_notification_recipient("id")
```

> Output

```

```

{% sample lang="java" %}

```java
try {
    IrisResponse response = EmergencyNotification.deleteRecipients(client, "enrId");
} catch(Exception ex){
    // Handle Exception
}
```

> Output

```

```

{% sample lang="csharp" %}

```csharp
try
{
    var response = EmergencyNotification.DeleteRecipients(client, "enrId");
}
catch (Exception ex)
{
    // Handle Exception
}
```

> Output

```

```

{% sample lang="js" %}

```js
var emergencyNotification = new EmergencyNotification();
emergencyNotification.enrid = "enrId";

var response = await emergencyNotification.deleteRecipient(client);
```

> Output

```

```

{% sample lang="python" %}

```python
print("");
```

> Output

```

```

{% endextendmethod %}
