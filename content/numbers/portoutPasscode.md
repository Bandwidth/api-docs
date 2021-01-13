{% multimethod %}
{% endmultimethod %}

# Bandwidth Portout Passcode Protection {#top}

This walks through how to programmatically add a "Passcode" to protect phone numbers from unauthorized port outs.  When a phone number with a Passcode protection receives a port out request, the winning carrier (or customer) must provide a Passcode along with the port request. Bandwidth will then verify the Passcode provided by the winning carrier to the Passcode set on the phone number before allowing the port. Mis-matches will automatically fail to port and alert the winning carrier that the Passcode was incorrect and to please try again with an updated Passcode.

## Assumptions

* Familiarity with [Account API Credentials](../../guides/accountCredentials.md)
* Created an [API Credential Pair within the UI](https://support.bandwidth.com/hc/en-us/articles/360039065753-Classic-How-to-Create-New-Users-in-the-Bandwidth-Dashboard)
* Account enabled for portout pin protection for your Phone Number.

## API Authentication

The Numbers API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Setting Portout Passcode on Numbers

Portout PINs are set via the `tnoptions` API

| Endpoint     | Description                                                         |
|:-------------|:--------------------------------------------------------------------|
| `/tnoptions` | Set the Passcode code for an individual (or group) of phone Numbers |

## Create tnoptions order {#create-tnoption}

The `/tnoptions` endpoint is an interface for adding/removing "options/features" from specific (or groups) of phone numbers

{% extendmethod %}

#### TnOption Parameters for Portout Passcode protections

#### Request URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/tnoptions`

#### Request Authentication

The tnoptions resource is authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds)

There are more options unrelated to Portout Passcodes that are detailed in the [API Reference](../apiReference.md)

| Parameters           | Mandatory | Description                                                                 |
|:---------------------|:----------|:----------------------------------------------------------------------------|
| `<TnOptionGroups>`   | Yes       | list of `<TnOptionGroup>`s                                                  |
| `<TnOptionGroup>`    | Yes       | Container for the option order details                                      |
| `<CustomerOrderId>`  | Yes       | Customer identifier specified in the request, can be used for later lookups |
| `<PortOutPasscode>`  | Yes       | The actual passcode to set for the phone numbers in `<TelephoneNumbers>`    |
| `<TelephoneNumbers>` | Yes       | list of `<TelephoneNumber>`s                                                |
| `<TelephoneNumber>`  | Yes       | The individual number to apply the Passcode                                 |


{% common %}

### Example 1 of 2: Set PortOutPasscode on a single Telephone Number

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/tnoptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<TnOptionOrder>
    <CustomerOrderId>TnOptionOrder1</CustomerOrderId>
    <TnOptionGroups>
        <TnOptionGroup>
            <PortOutPasscode>a1b2c3</PortOutPasscode>
            <TelephoneNumbers>
                <TelephoneNumber>2018551020</TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
    </TnOptionGroups>
</TnOptionOrder>
```

> Responds

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com:443/v1.0/accounts/{{accountId}}/tnoptions/{{order-id}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TnOptionOrderResponse>
    <TnOptionOrder>
        <CustomerOrderId>TnOptionOrder1</CustomerOrderId>
        <OrderCreateDate>2020-05-22T18:22:34.391Z</OrderCreateDate>
        <AccountId>{{accountId}}</AccountId>
        <CreatedByUser>{{your-user}}</CreatedByUser>
        <OrderId>68498567-9ef8-4b43-a9a1-f8a507c059fe</OrderId>
        <LastModifiedDate>2020-05-22T18:22:34.391Z</LastModifiedDate>
        <ProcessingStatus>RECEIVED</ProcessingStatus>
        <TnOptionGroups>
            <TnOptionGroup>
                <PortOutPasscode>a1b2c3</PortOutPasscode>
                <TelephoneNumbers>
                    <TelephoneNumber>2018551020</TelephoneNumber>
                </TelephoneNumbers>
            </TnOptionGroup>
        </TnOptionGroups>
        <ErrorList/>
    </TnOptionOrder>
</TnOptionOrderResponse>
```

{% sample lang="php" %}

```php
$tnoptions = $account->tnoptions();
$data = array(
    "TnOptionGroups" => array(
        "TnOptionGroup" => array(
            "PortOutPasscode" => "a1b2c3",
            "TelephoneNumbers" => array(
                "TelephoneNumber" => "2018551020"
            )
        ),
    )
);
$response = $tnoptions->create($data);
print_r($response->OrderCreateDate);
```

> Output

```
2020-05-22T18:22:34.391Z
```

{% sample lang="ruby" %}

```ruby
data = {
  :customer_order_id => "custom order",
  :tn_option_groups => {
    :tn_option_group => [
      {
        :port_out_passcode => "a1b2c3",
        :telephone_numbers => {
          :telephone_number => ["2018551020"]
        }
      }
    ]
  }
}

order = BandwidthIris::TnOptions.create_tn_option_order(data)
puts order[:order_create_date]
```

> Output

```
2020-05-22T18:22:34.391Z
```

{% sample lang="java" %}

```java
TnOptionOrder order = new TnOptionOrder();
order.setTnOptionGroups(new ArrayList<>());
order.setCustomerOrderId("TnOptionOrder1");

TnOptionGroup optionGroup = new TnOptionGroup();
optionGroup.setPortOutPasscode("a1b2c3");// PortOutPasscode set here
optionGroup.setTelephoneNumbers(new ArrayList<>());
optionGroup.getTelephoneNumbers().add("2018551020");

order.getTnOptionGroups().add(optionGroup);

TnOptionOrderResponse response = TnOptions.create(client, order);
```

> Output

```
hello world
```

{% sample lang="js" %}
```js
const order = {
  customerOrderId: 'TnOptionOrder1',
  tnOptionGroups: [
    {
      portOutPasscode: 'a1b2c3',
      telephoneNumbers: ['2018551020']
    }
  ]
}
numbers.TnOption.create(order, (err, res) => {
  if (err) {
    return console.log(err)
  }
  console.log(res.orderId)
  return console.log(res.processingStatus)
});
```

> Output

```
ddbdc72e-dc27-490c-904e-d0c11291b095
RECEIVED
```


{% sample lang="csharp" %}

```csharp
var order = new TnOptionOrder
{
    CustomerOrderId = "TnOptionOrder1",
    TnOptionGroups = new List<TnOptionGroup>
    {
        new TnOptionGroup {
            PortOutPasscode = "a1b2c3",
            TelephoneNumbers = new List<string>
            {
                "2018551020"
            }
        }
    }
};

var response = await TnOptions.Create(client, order);

Console.WriteLine(response.TnOptionOrder.OrderCreateDate);//"2016-01-15T12:01:14.324Z"
```

> Output

```
hello world
```

{% common %}

### Example 2 of 2: Set same PortOutPasscode on a group of Telephone Numbers

{% sample lang="http" %}

```http
POST https://dashboard.bandwidth.com/api/accounts/{{accountId}}/tnoptions HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<TnOptionOrder>
    <CustomerOrderId>TnOptionOrder1</CustomerOrderId>
    <TnOptionGroups>
        <TnOptionGroup>
            <PortOutPasscode>a1b2c3</PortOutPasscode>
            <TelephoneNumbers>
                <TelephoneNumber>2018551020</TelephoneNumber>
                <TelephoneNumber>2018551022</TelephoneNumber>
                <TelephoneNumber>2018551023</TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
    </TnOptionGroups>
</TnOptionOrder>
```

> Responds

```http
HTTP/1.1 201 Created
Content-Type: application/xml
Location: https://dashboard.bandwidth.com:443/v1.0/accounts/{{accountId}}/tnoptions/{{order-id}}

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TnOptionOrderResponse>
    <TnOptionOrder>
        <CustomerOrderId>TnOptionOrder1</CustomerOrderId>
        <OrderCreateDate>2020-05-22T18:22:34.391Z</OrderCreateDate>
        <AccountId>{{accountId}}</AccountId>
        <CreatedByUser>{{your-user}}</CreatedByUser>
        <OrderId>553b1243-8ab2-412e-a4eb-eedd76b6a183</OrderId>
        <LastModifiedDate>2020-05-22T18:22:34.391Z</LastModifiedDate>
        <ProcessingStatus>RECEIVED</ProcessingStatus>
        <TnOptionGroups>
            <TnOptionGroup>
                <PortOutPasscode>a1b2c3</PortOutPasscode>
                <TelephoneNumbers>
                  <TelephoneNumber>2018551020</TelephoneNumber>
                  <TelephoneNumber>2018551022</TelephoneNumber>
                  <TelephoneNumber>2018551023</TelephoneNumber>
                </TelephoneNumbers>
            </TnOptionGroup>
        </TnOptionGroups>
        <ErrorList/>
    </TnOptionOrder>
</TnOptionOrderResponse>
```

{% sample lang="php" %}

```php
$tnoptions = $account->tnoptions();
$data = array(
    "TnOptionGroups" => array(
        "TnOptionGroup" => array(
            "PortOutPasscode" => "a1b2c3",
            "TelephoneNumbers" => array(
                "TelephoneNumber" => array(
                    "2018551020",
                    "2018551022",
                    "2018551023"
                )
            )
        ),
    )
);
$response = $tnoptions->create($data);
print_r($response->OrderCreateDate);
```

> Output

```
2020-05-22T18:22:34.391Z
```

{% sample lang="ruby" %}

```ruby
data = {
  :customer_order_id => "custom order",
  :tn_option_groups => {
    :tn_option_group => [
      {
        :port_out_passcode => "a1b2c3",
        :telephone_numbers => {
          :telephone_number => ["2018551020", "2018551022", "2018551023"]
        }
      }
    ]
  }
}

order = BandwidthIris::TnOptions.create_tn_option_order(data)
puts order[:order_create_date]
```

> Output

```
2020-05-22T18:22:34.391Z
```

{% sample lang="java" %}

```java
TnOptionOrder order = new TnOptionOrder();
order.setTnOptionGroups(new ArrayList<>());
order.setCustomerOrderId("TnOptionOrder1");

TnOptionGroup optionGroup = new TnOptionGroup();
optionGroup.setPortOutPasscode("a1b2c3");// PortOutPasscode set here
optionGroup.setTelephoneNumbers(new ArrayList<>());
optionGroup.getTelephoneNumbers().add("2018551020");
optionGroup.getTelephoneNumbers().add("2018551022");
optionGroup.getTelephoneNumbers().add("2018551023");

order.getTnOptionGroups().add(optionGroup);

TnOptionOrderResponse response = TnOptions.create(client, order);
```

> Output

```
hello world
```

{% sample lang="js" %}
```js
const order = {
  customerOrderId: 'TnOptionOrder1',
  tnOptionGroups: [
    {
      portOutPasscode: 'a1b2c3',
      telephoneNumbers: ['2018551020', '2018551022', '2018551023']
    }
  ]
}
numbers.TnOption.create(order, (err, res) => {
  if (err) {
    return console.log(err)
  }
  console.log(tnOptionGroups[0].telephoneNumbers[1])
  return console.log(res.processingStatus)
});
```

> Output

```
2018551022
RECEIVED
```


{% sample lang="csharp" %}

```csharp
var order = new TnOptionOrder
{
    CustomerOrderId = "TnOptionOrder1",
    TnOptionGroups = new List<TnOptionGroup>
    {
        new TnOptionGroup {
            PortOutPasscode = "a1b2c3",
            TelephoneNumbers = new List<string>
            {
                "2018551020",
                "2018551022",
                "2018551023"
            }
        }
    }
};

var response = await TnOptions.Create(client, order);

Console.WriteLine(response.TnOptionOrder.OrderCreateDate);//"2016-01-15T12:01:14.324Z"
```

> Output

```
hello world
```

{% endextendmethod %}
