{% multimethod %}
{% endmultimethod %}

# Bandwidth Hosted Messaging API Setup {#top}

This walks through how to programmatically import Phone Numbers to your account for use with [Bandwidth's Messaging Products](../../messaging/about.md).

### Important note about imported Phone Numbers and Line Features.

Line Options feature management is **NOT** available for Phone numbers that have been imported for use with Hosted Messaging.

## Assumptions

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for importing Phone Numbers for use with Hosted Messaging (please contact support@bandwidth.com)

## API Authentication

The Numbers API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Table of Contents

* [Create Subscription for `importtnorders`](#create-subscription)
* [Check the Phone Number for "importability"](#check-for-importability)
* [Create importTNOrder](#create-importTN-order)
* [Receive callback for the importTnOrders](#receive-callback)
* [Fetch Order Status](#fetch-order-status)
* [Upload Letter of Authorization (loa)](#upload-loa)
* [Check in service numbers to ensure number imported](#check-inservice-numbers)

## Next Steps

Once the phone numbers have been successfully imported into Bandwidth, see the guides for:

* [HTTP Messaging](../../messaging/about.md)

## Importing Phone Numbers Overview

![import_remove_tns](../../images/import_tn_flow.png)

There are 3 different APIs that you will use to manage phone numbers for hosted messaging:

| Endpoint                  | Description                                                                                                                                                                         |
|:--------------------------|:------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `/importTnOrders`         | Initiates the process of importing a new number to your account.                                                                                                                    |
| `/removeImportedTnOrders` | Initiates the process of removing the numbers that were imported into your account for hosted messaging.  Removing an imported TN will restore it to it’s prior pre-imported state. |
| `/importTnChecker`        | Preliminary check to make sure that a TN is “importable” by checking against our internal databases.                                                                                |

## Create Subscription for `importtnorders` {#create-subscription}

The [Subscription](../../account/subscriptions/methods/postSubscriptions.md) contains the HTTP URL to receive HTTP Callbacks/webhooks anytime there is an update to the `importTnOrder` status.

Learn more about [subscriptions in the documentation](../../account/subscriptions/about.md).

{% extendmethod %}

#### Subscription Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions`

#### Request Authentication

The [Subscriptions](../../account/subscriptions/about.md) resource is authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds)

| Parameters               | Mandatory                    | Description                                                                                                                                                                                                                                                                                                                                                                                                     |
|:-------------------------|:-----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `<OrderType>`            | Yes, set to `importtnorders` | The type of Order of the subscription, set to `importTnOrders` for this guide.                                                                                                                                                                                                                                                                                                                                  |
| `<CallbackSubscription>` | Yes                          | Container for the callback details                                                                                                                                                                                                                                                                                                                                                                              |
| `<Expiry>`               | Yes                          | The time **in seconds** to persist the subscription. Bandwidth recommends setting the `<Expiry>` value to a very large integer to prevent the subscription from expiring in the next decade or so.  <br> Example Times <ul> <li>99 years = `3122064000` seconds</li><li>2 weeks = `1209600` seconds</li><li>1 week = `604800` seconds</li><li>1 day = `86400` seconds</li><li>1 hour = `3600` seconds</li></ul> |
| `<URL>`                  | Yes                          | Url to receive callbacks for the specified `orderId` or `orderType`                                                                                                                                                                                                                                                                                                                                             |
| `<CallbackCredentials>`  | No, but highly recommended   | Container for the Auth                                                                                                                                                                                                                                                                                                                                                                                          |
| `<BasicAuthentication>`  | -                            | Basic auth credentials to apply to your message & voice events                                                                                                                                                                                                                                                                                                                                                  |
| `Username`               | No, but highly recommended   | Basic auth `Username`                                                                                                                                                                                                                                                                                                                                                                                           |
| `Password`               | No, but highly recommended   | Basic auth `Password`                                                                                                                                                                                                                                                                                                                                                                                           |
| `<PublicKey>`            | No                           | BASE64 encoded public key matching the notification receiving server                                                                                                                                                                                                                                                                                                                                            |

{% common %}

### Create Subscription

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<Subscription>
  <OrderType>importtnorders</OrderType>
  <CallbackSubscription>
    <URL>{your-callback-url}</URL>
    <Expiry>3153600000</Expiry>
    <CallbackCredentials>
      <BasicAuthentication>
          <Username>User15</Username>
          <Password>Hunter15</Password>
      </BasicAuthentication>
      <PublicKey>LStLQ0K</PublicKey>
    </CallbackCredentials>
  </CallbackSubscription>
</Subscription>
```

> Responds

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/subscriptions/{{applicationID}}
```

{% sample lang="php" %}

```php
$subscription = $account->subscriptions()->create([
    "OrderType" => "importtnorders",
    "CallbackSubscription" => [
        "URL" => "{your-callback-url}"
    ]
]);
print_r($subscription->SubscriptionId);
```

> Output

```
390-f-42-89-40
```

{% sample lang="ruby" %}

```ruby
subscription = {
  :order_type => "importtnorders",
  :callback_subscription => {
    :URL => "https://test4.com"
  }
}
response = BandwidthIris::Subscription.create(subscription)
puts response.to_data()[:subscription_id]
```

> Output

```
390-f-42-89-40
```

{% sample lang="java" %}

```java
CallbackSubscription callbackSubscription = new callbackSubscription();
callbackSubscription.setURL("https://test4.com");


Subscription subscription = new Subscription();
subscription.setOrderType("importnorders");
subscription.setCallbackSubscription(callbackSubscription);

Subscription subscriptionCreated = Subscription.create(client, subscription);

System.out.println(subscriptionCreated.getOrderId());
```

> Output

```
390-f-42-89-40
```

{% sample lang="csharp" %}

```csharp
var subscription = new Subscription {
    CallbackSubscription = new CallbackSubscription{
        Url = "https://test4.com"
    },
    OrderType = "importnorders"
};

var createdSubscription = Subscription.Create(client, subscription);

Console.WriteLine(createdSubscription.Id);
```

> Output

```
390-f-42-89-40
```

{% sample lang="js" %}

```js
var subscription = {
  orderType:"importtnorders",
  callbackSubscription: {
    URL:"http://mycallbackurl.com"
  }
};
numbers.Subscription.create(subscription, function(err, response) {
    console.log(response.id);
});
```

> Output

```
390-f-42-89-40
```

{% endextendmethod %}

---

## Check the Phone Number for "importability" {#check-for-importability}

Before creating the order, to reduce failed or error statuses, create a <code class="post">POST</code> request to the `/importTnChecker` endpoint to check if the number can be brought in to your Bandwidth account. A non-errored response from the importTnChecker doesn't necessarily mean that the order will succeed, but is a good indicator of success.

{% extendmethod %}

#### importTnChecker Parameters

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnChecker`


| Parameters           | Mandatory | Description                                                         |
|:---------------------|:----------|:--------------------------------------------------------------------|
| `<TelephoneNumbers>` | Yes       | Top level element containing a list of `<TelephoneNumber>` elements |
| `<TelephoneNumber>`  | Yes       | Phone Number to check "importability"                               |

{% common %}

### Check Importability

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnChecker HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<ImportTnCheckerPayload>
  <TelephoneNumbers>
    <TelephoneNumber>3032281000</TelephoneNumber>
    <TelephoneNumber>4109235436</TelephoneNumber>
    <TelephoneNumber>4104685864</TelephoneNumber>
    <TelephoneNumber>3032280004</TelephoneNumber>
  </TelephoneNumbers>
</ImportTnCheckerPayload>

```

> Responds

```http
HTTP/1.1 200 OK
Content-Type: application/xml
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{voice-applicationId}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ImportTnCheckerResponse>
  <ImportTnCheckerPayload>
    <TelephoneNumbers>
      <TelephoneNumber>3032281000</TelephoneNumber>
      <TelephoneNumber>3032280004</TelephoneNumber>
    </TelephoneNumbers>
    <ImportTnErrors>
      <ImportTnError>
        <Code>19006</Code>
        <Description>Bandwidth numbers cannot be imported by this account at this time.</Description>
        <TelephoneNumbers>
          <TelephoneNumber>4109235436</TelephoneNumber>
          <TelephoneNumber>4104685864</TelephoneNumber>
        </TelephoneNumbers>
      </ImportTnError>
    </ImportTnErrors>
  </ImportTnCheckerPayload>
</ImportTnCheckerResponse>
```

{% sample lang="php" %}

```php
$response = $account->checkTnsPortability(array("5554443333", "5553334444"));
print_r($response->ImportTnCheckerPayload->ImportTnErrors->ImportTnError->Code);
echo "\n";
print_r($response->ImportTnCheckerPayload->ImportTnErrors->ImportTnError->Description);
echo "\n";
print_r($response->ImportTnCheckerPayload->ImportTnErrors->ImportTnError->TelephoneNumbers->TelephoneNumber);
```

> Output

```
19005
Messaging route of External Third Party TNs is not configured.
Array
(
    [0] => 5554443333
    [1] => 5553334444
)
```

{% sample lang="ruby" %}

```ruby
response = BandwidthIris::ImportTnChecker.check_tns_portability({
    :telephone_numbers => {
        :telephone_number => ["5554443333", "5553334444"]
    }
})
puts response[0][:import_tn_checker_payload][:import_tn_errors][:import_tn_error][:code]
puts response[0][:import_tn_checker_payload][:import_tn_errors][:import_tn_error][:description]
puts response[0][:import_tn_checker_payload][:import_tn_errors][:import_tn_error][:telephone_numbers][:telephone_number]
```

> Output

```
19005
Messaging route of External Third Party TNs is not configured.
5554443333
5553334444
```

{% sample lang="java" %}

```java
TelephoneNumber number = new TelephoneNumber();
number.setFullNumber("5554443333");

ImportTnCheckerPayload payload = new ImportTnCheckerPayload();
payload.setTelephoneNumberList( Arrays.asList( new TelephoneNumber[] {number} ) );


ImportTnCheckerResponse response = ImportTnChecker.Check(client, payload);

System.out.println(response.getImportTnCheckerPayload().getImportTnErrorList().get(0).getCode());
System.out.println(response.getImportTnCheckerPayload().getImportTnErrorList().get(0).getDescription());
System.out.println(response.getImportTnCheckerPayload().getImportTnErrorList().get(0).getCode().getTelephoneNumberList().get(0));
```

> Output

```
19005
Messaging route of External Third Party TNs is not configured.
5554443333
```

{% sample lang="csharp" %}

```csharp
var payload = new ImportTnCheckerPayload{
    TelephoneNumbers = new TelephoneNumber[] {new TelephoneNumber{
            FullNumber = "5554443333"
        }
    }
};

var response = await ImportTnChecker.Create(client, payload);

Console.WriteLine(response.ImportTnCheckerPayload.ImportTnErrors[0].Code);
Console.WriteLine(response.ImportTnCheckerPayload.ImportTnErrors[0].Description);
Console.WriteLine(response.ImportTnCheckerPayload.ImportTnErrors[0].TelephoneNumbers[0]);
```

> Output

```
19005
Messaging route of External Third Party TNs is not configured.
5554443333
```

{% sample lang="js" %}

```js
const numbersToCheck = ["5554443333"];

try {
  const importResults = await numbers.ImportTnChecker.checkAsync(numbersToCheck);
  console.log(importResults.importTnCheckerPayload.importTnErrors.importTnError.code);
  console.log(importResults.importTnCheckerPayload.importTnErrors.importTnError.description);
  console.log(importResults.importTnCheckerPayload.importTnErrors.importTnError.telephoneNumbers.telephoneNumber);
}
catch (e) {
  console.log(e)
}
```

> Output

```
19005
Messaging route of External Third Party TNs is not configured.
5554443333
```

{% endextendmethod %}

---

## Create importTNOrder {#create-importTN-order}

After validating the numbers are able to be imported, create a POST request to create the order to import the phone numbers in to your Bandwidth account.

{% extendmethod %}

#### importTNOrder Parameters

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnOrders`

| Parameter                | Required | Description                                                                                                                               |
|:-------------------------|:---------|:------------------------------------------------------------------------------------------------------------------------------------------|
| `<CustomerOrderId>`      | No       | Internal customer order id for tracking the order.  Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters. |
| `<Name>`                 | Yes      | Subscriber business / customer name.                                                                                                      |
| `<HouseNumber>`          | Yes      | Street address number.                                                                                                                    |
| `<StreetName>`           | Yes      | Street name.                                                                                                                              |
| `<City>`                 | Yes      | City.                                                                                                                                     |
| `<StateCode>`            | Yes      | Two letter state code.                                                                                                                    |
| `<Zip>`                  | Yes      | Zip code.                                                                                                                                 |
| `<LoaAuthorizingPerson>` | Yes      | First and last name of person who authorized LOA.                                                                                         |
| `<TelephoneNumber>`      | Yes      | Ten digit phone number with no dots or dashes. One or more is required. Use a PhoneNumber tag for each phone number in the list.          |
| `<SiteId>`               | Yes      | See section on Sites                                                                                                                      |
| `<SipPeerId>`            | No       | See section on SIP Peers                                                                                                                  |

{% common %}

### Create importTNOrder

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnOrders HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<ImportTnOrder>
  <CustomerOrderId>marktestorders</CustomerOrderId>
  <SiteId>14413</SiteId>
  <SipPeerId>521952</SipPeerId>
  <Subscriber>
      <Name>ABC Inc.</Name>
    <ServiceAddress>
      <HouseNumber>11235</HouseNumber>
      <StreetName>Back</StreetName>
      <City>Denver</City>
      <StateCode>CO</StateCode>
      <Zip>27541</Zip>
      <County>Canyon</County>
    </ServiceAddress>
  </Subscriber>
  <LoaAuthorizingPerson>markmacc</LoaAuthorizingPerson>
  <TelephoneNumbers>
    <TelephoneNumber>3032281000</TelephoneNumber>
    <TelephoneNumber>3032280004</TelephoneNumber>
  </TelephoneNumbers>
</ImportTnOrder>
```

> Responds

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
Location: https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnOrders/{{orderId}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<ImportTnOrderResponse>
  <ImportTnOrder>
    <CustomerOrderId>marktestorders</CustomerOrderId>
    <OrderCreateDate>2018-01-20T02:59:54.000Z</OrderCreateDate>
    <AccountId>9900012</AccountId>
    <CreatedByUser>{username}</CreatedByUser>
    <OrderId>b05de7e6-0cab-4c83-81bb-9379cba8efd0</OrderId>
    <LastModifiedDate>2018-01-20T02:59:54.000Z</LastModifiedDate>
    <SiteId>202</SiteId>
    <SipPeerId>520565</SipPeerId>
    <Subscriber>
      <Name>ABC Inc.</Name>
      <ServiceAddress>
        <HouseNumber>11235</HouseNumber>
        <StreetName>Back</StreetName>
        <City>Denver</City>
        <StateCode>CO</StateCode>
        <Zip>27541</Zip>
        <County>Canyon</County>
      </ServiceAddress>
    </Subscriber>
    <LoaAuthorizingPerson>markmacc</LoaAuthorizingPerson>
    <TelephoneNumbers>
      <TelephoneNumber>3032281000</TelephoneNumber>
      <TelephoneNumber>3032280004</TelephoneNumber>
    </TelephoneNumbers>
    <ProcessingStatus>PROCESSING</ProcessingStatus>
    <Errors/>
  </ImportTnOrder>
</ImportTnOrderResponse>
```

{% sample lang="php" %}

```php
$importTnOrder = new \Iris\ImportTnOrder(array(
    "CustomerOrderId" => "id",
    "TelephoneNumbers" => array(
        "TelephoneNumber" => array("5554443333")
    ),
    "SiteId" => "12345",
    "Subscriber" => array(
        "Name" => "Company INC",
        "ServiceAddress" => array(
            "HouseNumber" => "1",
            "StreetName" => "Street",
            "City" => "City",
            "StateCode" => "XY",
            "Zip" => "54345",
            "County" => "County"
        )
    ),
    "LoaAuthorizingPerson" => "Test Person"
));

$response = $account->createImportTnOrder($importTnOrder);
print_r($response->ImportTnOrder->OrderId);
echo "\n";
print_r($response->ImportTnOrder->ProcessingStatus);
```

> Output

```
8-3-4-9-a
RECEIVED
```

{% sample lang="ruby" %}

```ruby
import_tn_order = {
    :customer_order_id => "id",
    :site_id => "12345",
    :subscriber => {
        :service_address => {
            :city => "city",
            :house_number => "1",
            :street_name => "Street",
            :state_code => "XY",
            :zip => "54345",
            :county => "County"
        },
        :name => "Company INC"
    },
    :loa_authorizing_person => "Test Person",
    :telephone_numbers => {
        :telephone_number => ["5554443333"]
    }
}
response = BandwidthIris::ImportTnOrders.create_import_tn_order(import_tn_order)
puts response[0][:import_tn_order][:order_id]
puts response[0][:import_tn_order][:processing_status]
```

> Output

```
8-3-4-9-a
RECEIVED
```

{% sample lang="java" %}

```java
ImportTnOrder importTnOrder = new ImportTnOrder();
importTnOrder.setCustomerOrderId("id");
importTnOrder.setSiteId(123456);
importTnOrder.setSubscriber(subscriber);
importTnOrder.setLoaAuthorizingPerson("Test Person");
importTnOrder.setTelephoneNumberList(telephoneNumberList);

ImportTnOrderResponse response = ImportTnOrder.Create(client, importTnOrder);

System.out.println(response.getImportTnOrder().getOrderId());
System.out.println(response.getImportTnOrder()..getProcessingStatus());
```

> Output

```
8-3-4-9-a
RECEIVED
```

{% sample lang="csharp" %}

```csharp
var importTnOrder = new ImportTnOrder{
    CustomerOrderId = "id",
    SiteId = 12345,
    Subscriber = {
        ServiceAddress = new Address{
            City = "city",
            HouseNumber = "1",
            StreetName = "Street",
            StateCode = "XY",
            Zip = "54345",
            County = "County"
        },
        BusinessName = "Company INC"
    },
    LoaAuthorizingPerson = "Test Person",
    TelephoneNumbers = new TelephoneNumber[]{
        new TelephoneNumber{
            FullNumber = "5554443333"
        }
    }
};

var response = await ImportTnOrder.Create(client, importTnOrder);

Console.WriteLine(response.ImportTnOrder.OrderId);
Console.WriteLine(response.ImportTnOrder.ProcessingStatus);

```

> Output

```
8-3-4-9-a
RECEIVED
```

{% sample lang="js" %}

```js
const numbersToCheck = ["5554443333", "5554442222"];

const data = {
  customerOrderId: "1111",
  siteId: "30511",
  loaAuthorizingPerson: "LoaAuthorizingPerson",
  subscriber: {
    name: "ABC Inc.",
    serviceAddress: {
      houseNumber: "900",
      streetName: "Main Campus Drive",
      stateCode: "NC",
      city: "Raleigh",
      county: "Wake",
      zip: "27606"
    }
  }
};

try {
  const response = await numbers.ImportTnOrder.createAsync(data, numbersToCheck);
  console.log(response.orderId);
  console.log(response.processingStatus);
}
catch (e) {
  console.log(e)
}
```

> Output

```
8-3-4-9-a
RECEIVED
```


{% endextendmethod %}

---

## Receive callback for the importTnOrders {#receive-callback}

Anytime the status of the order is updated (complete, error, etc...) Bandwidth will send an HTTP callback/webhook to the URL specified in the subscription.

**Bandwidth expects an HTTP-2xx response to any callbacks.**

{% extendmethod %}

### Callback Parameters

#### Request URL

<code class="post">POST</code>`{{your-callback-url_as-defined-in-the-subscription}}`

| Parameter           | Description                                                        |
|:--------------------|:-------------------------------------------------------------------|
| `<SubscriptionId>`  | Subscription ID that the notification is in response to.           |
| `<OrderType>`       | Will be `importtnorders`                                           |
| `<OrderId>`         | ID of the importTNOrder                                            |
| `<CustomerOrderId>` | Custom Order Id defined when creating the importTnOrder            |
| `<Status>`          | The newly updated status reflecting the state of the importTnOrder |
| `<Message>`         | Description about the status                                       |
| `<Note>`            | Custom note added when updating or creating the importTnOrder      |


{% common %}

### Receive Callback to your server

```http
POST https://your-callback-url_as-defined-in-the-subscription HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: {subscription_user:subscription_password}

<?xml version="1.0"?>
<Notification>
    <SubscriptionId>...</SubscriptionId>
    <OrderType>importtnorders</OrderType>
    <OrderId>...</OrderId>
    <CustomerOrderId>...</CustomerOrderId>
    <Status>COMPLETE | FAILED | PARTIAL | EXCEPTION ... </Status>
    <Message>Import TN order processing has started.</Message>
    <Note>...</Note>
</Notification>
```

{% common %}

### Response as generated by **your** server

```http
HTTP/1.1 200 OK
```

{% endextendmethod %}

---

## Fetch Order Status {#fetch-order-status}

**Optional** At anytime, you're able to get the order status by creating a GET request to the order-id returned when creating the importTnOrder.

{% extendmethod %}

#### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnOrders/{{orderId}}`

#### Response Parameters

| Parameters               | Description                                                                                             |
|:-------------------------|:--------------------------------------------------------------------------------------------------------|
| `<CustomerOrderId>`      | Custom OrderId provided when creating the order                                                         |
| `<OrderCreateDate>`      | Date order was created                                                                                  |
| `<AccountId>`            | AccountId for the import TN order                                                                       |
| `<CreatedByUser>`        | User that created the import TN Order                                                                   |
| `<OrderId>`              | Id of import TN order                                                                                   |
| `<LastModifiedDate>`     | The last time the import TN order was updated                                                           |
| `<SiteId>`               | The site (subaccount) the imported TN(s) will be assigned                                               |
| `<SipPeerId>`            | The sippeer (location) the imported TN(s) will be assigned                                              |
| `<Subscriber>`           | Subscriber information                                                                                  |
| `<LoaAuthorizingPerson>` | First and last name of person who authorized LOA.                                                       |
| `<TelephoneNumbers>`     | List of `TelephoneNumber` to import                                                                     |
| `<ProcessingStatus>`     | The current status of the import TN order. The `LastModifiedDate` indicates when the status was updated |
| `<Errors>`               | Any errors that occured during the request                                                              |

{% common %}

### Fetch importTnOrder Status

{% sample lang="http" %}

```http
GET https://dashboard.../{{accountId}}/importTnOrders/{{orderId}} HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

> Responds

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0"?>
<ImportTnOrder>
   <OrderCreateDate>2019-08-28T13:09:11.192Z</OrderCreateDate>
   <AccountId>9900674</AccountId>
   <CreatedByUser>mmacchioni</CreatedByUser>
   <OrderId>fc84600b-6029-49b4-a09d-a813abb5f135</OrderId>
   <LastModifiedDate>2019-08-28T13:09:26.295Z</LastModifiedDate>
   <SiteId>14419</SiteId>
   <Subscriber>
      <Name>BANDWDITH</Name>
      <ServiceAddress>
         <HouseNumber>900</HouseNumber>
         <StreetName>Main Campus Dr.</StreetName>
         <City>Raleigh</City>
         <StateCode>NC</StateCode>
         <Zip>27606</Zip>
         <County>Wake</County>
         <Country>United States</Country>
         <AddressType>Service</AddressType>
      </ServiceAddress>
   </Subscriber>
   <LoaAuthorizingPerson>Mark Macchioni</LoaAuthorizingPerson>
   <TelephoneNumbers>
      <TelephoneNumber>9195041533</TelephoneNumber>
   </TelephoneNumbers>
   <ProcessingStatus>COMPLETE</ProcessingStatus>
   <Errors />
   <SipPeerId>521967</SipPeerId>
</ImportTnOrder>
```

{% sample lang="php" %}

```php
$response = $account->getImportTnOrder("order_id");
print_r($response->ProcessingStatus);
```

> Output

```
COMPLETE
```

{% sample lang="ruby" %}

```ruby
response = BandwidthIris::ImportTnOrders.get_import_tn_order("id")
puts response[:processing_status]
```

> Output

```
COMPLETE
```

{% sample lang="java" %}

```java
ImportTnOrder importTnOrder = ImportTnOrder.Get(client, "id");

System.out.println(importTnOrder.getProcessingStatus());
```

> Output

```
COMPLETE
```

{% sample lang="csharp" %}

```csharp
var response = await ImportTnOrder.Get(client, "id");

Console.WriteLine(response.ProcessingStatus);
```

> Output

```
COMPLETE
```

{% sample lang="js" %}

```js
numbers.ImportTnOrder.get("id", function(err, response) {
    console.log(response.processingStatus);
});
```

> Output

```
COMPLETE
```

{% endextendmethod %}

---

## Upload Letter of Authorization (LOA) {#upload-loa}

For **completed** orders, Bandwidth requires a completed Subscriber "Letter of Authorization" (LOA) from the phone number user.  The LOA file is used in the case there is a dispute to ensure the phone number had permission to be enabled for hosted messaging for Bandwidth.

You are able to keep the LOA file within your own system, or upload the file to Bandwidth as part of the `importTnOrder` path.

{% extendmethod %}

#### Request URL

<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/importTnOrders/{{orderId}}/loas`

#### Request Parameters

A POST request to the /loas resource will upload the file. The key attribute to a successful upload is to ensure that the headers are set correctly to support the _type_ of the file upload.

{% common %}

### Upload PDF for an importTnOrder

{% sample lang="http" %}

```http
POST https://dashboard.../{{accountId}}/importTnOrders/{{orderId}}/loas HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
Accept: /
Accept-Encoding: gzip, deflate
Content-Type: application/pdf
```

```
[file-content-as-body]
```

> Responds

```http
HTTP/1.1 201 Created
Content-Type: application/xml; charset=utf-8
```

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<fileUploadResponse>
    <filename>63097af1-37ae-432f-8a0d-9b0e6517a35b-1429550165581.pdf</filename>
    <resultCode>0</resultCode>
    <resultMessage>LOA file uploaded successfully for order 63097af1-37ae-432f-8a0d-9b0e6517a35b</resultMessage>
</fileUploadResponse>
```

{% sample lang="php" %}

```php
//coming soon
```

> Output

```
//coming soon
```

{% sample lang="ruby" %}

```ruby
#coming soon
```

> Output

```
//coming soon
```

{% sample lang="java" %}

```java
//TODO
```

> Output

```
//coming soon
```

{% sample lang="csharp" %}

```csharp
//TODO
;
```

> Output

```
//coming soon
```

{% sample lang="js" %}

```js
//TODO
```

> Output

```
//coming soon
```

{% endextendmethod %}

---

## Check in service numbers to ensure number imported {#check-inservice-numbers}

Optional, but recommended. To finally confirm that the phone number was successfully imported into your Bandwidth account, create a <code class="get">GET</code>  request to the inserviceNumbers to list the numbers in your account.

If everything was imported correctly, the recently imported number will appear in the returned payload.

{% extendmethod %}

### Inservice Numbers Parameters

#### Request URL

<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/inserviceNumbers`

#### Response Parameters

| Parameters           | Description                                                    |
|:---------------------|:---------------------------------------------------------------|
| `<TotalCount>`       | Total number of inserviceNumbers on the account                |
| `<Links>`            | Pagination parameters                                          |
| `<TelephoneNumbers>` | List of In-service Numbers represented by `<TelephoneNumber>`s |

{% common %}

### Fetch inServiceNumbers

{% sample lang="http" %}

```http
GET https://dashboard.../{{accountId}}/inserviceNumbers HTTP/1.1
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

> Responds

```http
HTTP/1.1 200 OK
Content-Type: application/xml; charset=utf-8

<?xml version="1.0"?>
<TNs>
    <TotalCount>59</TotalCount>
    <Links>
        <first> ( a link goes here ) </first>
    </Links>
    <TelephoneNumbers>
        <Count>59</Count>
        <TelephoneNumber>3032281000</TelephoneNumber>
        <TelephoneNumber>3032280004</TelephoneNumber>
        <!-- SNIP -->
        <TelephoneNumber>8043814900</TelephoneNumber>
        <TelephoneNumber>8047672642</TelephoneNumber>
        <TelephoneNumber>8043024368</TelephoneNumber>
        <TelephoneNumber>8042147950</TelephoneNumber>
        <TelephoneNumber>8043169931</TelephoneNumber>
        <TelephoneNumber>8043325302</TelephoneNumber>
    </TelephoneNumbers>
</TNs>
```

{% sample lang="php" %}

```php
$response = $account->getInserviceNumbers();
print_r($response->TelephoneNumbers->TelephoneNumber);
```

> Output

```
Array
(
    [0] => 5554443333
)
```

{% sample lang="ruby" %}

```ruby
response = BandwidthIris::InServiceNumber.list()
puts response[0][:telephone_numbers][:telephone_number]
```

> Output

```
5554443333
```

{% sample lang="java" %}

```java
TNss tns = InserviceNumber.list(client, new HashMap<>());

System.out.println(tns.getTelephoneNumbers().get(0))
```

> Output

```
5554443333
```

{% sample lang="csharp" %}

```csharp
var tns = await InServiceNumber.List(client);

Cosnole.WriteLine(tns[0]);
```

> Output

```
5554443333
```

{% sample lang="js" %}

```js
numbers.InServiceNumber.list({"page": 1, "size":5}, function(err, response) {
    console.log(response.telephoneNumbers.telephoneNumber[0]);
});
```

> Output

```
5554443333
```


{% endextendmethod %}

---
