{% multimethod %}
{% endmultimethod %}

# Searching for Phone Numbers {#top}

Searching for phone numbers can be performed through our Dashboard API. There are many ways to search for phone numbers and this guide covers the various methods and how you perform them.

Specific API information can be found on our [Dashboard API docs](https://dev.bandwidth.com/numbers/apiReference.html)

## Local Calling Area (LCA)

Bandwidth's available number searches with local calling enabled by default. The LCA flag searches nearby Ratecenters for phone numbers that are considered "local" to the parameters passed.

In certain cases where the **exact digits** are important (such as localVantiy, endsIn, npaNxxx) LCA should be disabled to filter out non-pattern matched phone numbers.

## Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/accounts/{{accountId}}/availableNumbers`

## API Authentication

The Numbers API resources are authenticated with your [API Credentials for "Number & Account Management"](../../guides/accountCredentials.md#number-account-creds).

## Query Parameters

| Parameter               | Description                                                                                                                                                                                                  | Example           |
|:------------------------|:-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:------------------|
| areaCode                | The 3 digit area code to search for                                                                                                                                                                          | 919               |
| npaNxx                  | The 6 digits following an area code                                                                                                                                                                          | 123321            |
| npaNxxx                 | The 7 digits following an area code                                                                                                                                                                          | 1234321           |
| rateCenter              | The rate center to search for                                                                                                                                                                                | Cary              |
| state                   | The 2 letter state code to search for                                                                                                                                                                        | NC                |
| city                    | The city to search for                                                                                                                                                                                       | Raleigh           |
| zip                     | The 5 or 9 digit zip code to search for                                                                                                                                                                      | 27606, 27606-0007 |
| lata                    | Local access and transport area. An up to 5 digit number that represents the geographic area in which numbers are routed                                                                                     | 244               |
| localVanity             | A 3 to 7 alphanumeric character long string for pattern matching of phone numbers. May also include `*` (to match all) and `_` (to match one)                                                                | `81_`, `8*`       |
| tollFreeVanity          | A 4 to 7 alphanumeric character long string for pattern matching of toll free numbers                                                                                                                        | `NEWCARS`         |
| tollFreeWildCardPattern | A 3 alphanumeric character long string representing a wild card pattern for toll free numbers                                                                                                                | `8**`             |
| quantity                | Number of phone numbers to return. Can be 1 to 5000. Defaults to 5000                                                                                                                                        | 5000              |
| enableTNDetail          | Boolean value to include TN details. Defaults to false                                                                                                                                                       | `true`            |
| LCA                     | Boolean value to include TNs in the local calling area.<br>⚠️Defaults to `true`                                                                                                                              | `true`            |
| endsIn                  | Boolean value to include only numbers which end in the `localVanity`. Defaults to false                                                                                                                      | `true`            |
| orderBy                 | The field to order the results by. Can be one of `fullNumber`, `npaNxx`, `npaNxxx`, or `areaCode`                                                                                                            | `areaCode`        |
| protected               | Determines if the search should return only protected numbers (`ONLY`), only not protected numbers (`NONE`), or both protected and not protected numbers (`MIXED`). Can be one of `NONE`, `ONLY`, or `MIXED` | `NONE`            |

## Search Types

| Search Type                        | Required Parameters     | Combinational Parameters                                                                          | Optional Parameters                          |
|:-----------------------------------|:------------------------|:--------------------------------------------------------------------------------------------------|:---------------------------------------------|
| Area Code                          | areaCode                | rateCenter (state required), city (state required), state, lata, zip                              | quantity, enableTNDetail, protected          |
| NPA-NXX                            | npaNxx                  | rateCenter (state required), city (state required), state, lata, zip, orderBy                     | quantity, enableTNDetail, protected          |
| NPA-NXX with Local Calling Area    | npaNxx                  |                                                                                                   | quantity, LCA, enableTNDetail, protected     |
| NPA-NXX-X                          | npaNxxx                 | rateCenter (state required), city (state required), state, lata, zip, orderBy                     | quantity, enableTNDetail, protected          |
| NPA-NXX-X with Local Calling Area  | npaNxxx                 | rateCenter (state required), city (state required), state, lata, zip                              | quantity, LCA, enableTNDetail, protected     |
| RateCenter                         | rateCenter, state       | city, areaCode/npaNxx/npaNxxx, lata, zip, orderBy                                                 | quantity, enableTNDetail, protected          |
| RateCenter with Local Calling Area | rateCenter, state       |                                                                                                   | quantity, LCA, enableTNDetail, protected     |
| State                              | state                   | rateCenter, city, areaCode/npaNxx/npaNxxx, lata, zip                                              | quantity, enableTNDetail, protected          |
| City                               | state, city             | rateCenter, state, areaCode/npaNxx/npaNxxx, lata, zip, orderBy                                    | quantity, enableTNDetail, protected          |
| Zip Code                           | zip                     | rateCenter (state required), city (state required), state, areaCode/npaNxx/npaNxxx, lata, orderBy | quantity, enableTNDetail, protected          |
| LATA                               | lata                    | rateCenter (state required), city (state required), state, areaCode/npaNxx/npaNxxx, zip           | quantity, enableTNDetail, protected          |
| Local Vanity                       | localVanity             | state, areaCode                                                                                   | endsIn, quantity, protected, enableTNdetails |
| TollFree Vanity                    | tollFreeVanity          | orderBy                                                                                           | quantity                                     |
| TollFree WildCard                  | tollFreeWildCardPattern | orderBy                                                                                           | quantity                                     |

### Example 1 of 5: Search for 2 phone numbers by Area Code {#areacode}

#### Parameters:

* areaCode : 919
* quantity : 2

```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/availableNumbers?areaCode=919&quantity=2
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

> Responds

```http
HTTP/1.1 200
Content-type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>2</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>9192760028</TelephoneNumber>
        <TelephoneNumber>9194954957</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

### Example 2 of 5: Search for 2 toll-free numbers {#tollfree}

#### Parameters:

* tollFreeWildCardPattern : 8**
* quantity                : 2

```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/availableNumbers?tollFreeWildCardPattern=8**&quantity=2
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

> Responds

```http
HTTP/1.1 200
Content-type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>2</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>8336572433</TelephoneNumber>
        <TelephoneNumber>8336580609</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

### Example 3 of 5: Search for 2 phone numbers by localVanity {#localvanity}

#### Parameters:

* localVanity : 867_0*
* lca         : false
* quantity    : 2


```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/availableNumbers?localVanity=867_0*&quantity=2&lca=false
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

> Responds

```http
HTTP/1.1 200
Content-type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>2</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>6672286710</TelephoneNumber>
        <TelephoneNumber>5756186700</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

### Example 4 of 5: Search for 2 phone numbers by NPANxxx with LCA False {#npanxxx}

#### Parameters:

* NPANxxx   : 9192760
* lca       : false
* quantity  : 2


```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/availableNumbers?npaNxxx=9192760&quantity=2&lca=false
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

> Responds

```http
HTTP/1.1 200
Content-type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>1</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>9192760028</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

### Example 5 of 5: Search for 5 phone numbers by NPANxxx with LCA true {#npanxxxlca}

Note the difference between example 4 of 5 with the resulting numbers not exactly matching the pattern sent

#### Parameters:

* NPANxxx   : 9192760
* lca       : **true** by default
* quantity  : 5


```http
GET https://dashboard.bandwidth.com/api/accounts/{accountId}/availableNumbers?npaNxxx=9192760&quantity=5
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

> Responds

```http
HTTP/1.1 200
Content-type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<SearchResult>
    <ResultCount>5</ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>9102424029</TelephoneNumber>
        <TelephoneNumber>9102424379</TelephoneNumber>
        <TelephoneNumber>9105142211</TelephoneNumber>
        <TelephoneNumber>9108081128</TelephoneNumber>
        <TelephoneNumber>9108081915</TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

### NodeJS Example {#node}

```js
const numbers = require("@bandwidth/numbers");
const client = new numbers.Client("accountId", "userName", "password");
const query = {
  "areaCode" : "919",
  "quantity" : "2"
}
const availableNumbers = await numbers.AvailableNumbers.listAsync(client, query)
console.log(JSON.stringify(availableNumbers, null, 2));
```

> Output

```json
{
  "resultCount": 2,
  "telephoneNumberList": {
    "telephoneNumber": [
      "9192760028",
      "9194954957"
    ]
  }
}
```

### C# Example {#csharp}

```csharp
using Bandwidth.Iris;
using Bandwidth.Iris.Model;

Client client = Client.GetInstance("accountId", "userName", "password", "https://dashboard.bandwidth.com");
var query = new Dictionary<string, object>();
query.Add("areaCode", "919");
query.Add("quantity", 2);
AvailableNumbersResult numbers = await AvailableNumbers.List(client, query);
foreach (string number in numbers.TelephoneNumberList)
{
  Console.WriteLine(string.Format("Number: {0}", number));
}
```

> Output

```
Number: 9192760028
Number: 9194954957
```

### Ruby Example {#ruby}

```ruby
require 'ruby-bandwidth-iris'
client = BandwidthIris::Client.new("accountId", "userName", "password")
query = {
  :areaCode => "919",
  :quantity => "2"
}
numbers = BandwidthIris::AvailableNumber.list(client, query)
puts(numbers)
```

> Output

```
9192760028
9194954957
```

### PHP Example {#php}

```php
$client = new \Iris\Client("userName", "password", ['url' => 'https://dashboard.bandwidth.com/api/']);
$account = new \Iris\Account("accountId", $client);

$numbers = $account->availableNumbers([ "areaCode" => "919", "quantity" => 2 ]);
print_r(json_encode($numbers));
```

> Output

```json
[{"TelephoneNumber":["9192760028","9194954957"]}]
```

### Java Example {#java}

```java
import com.bandwidth.iris.sdk.IrisClient;
import com.bandwidth.iris.sdk.model.AvailableNumbers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

IrisClient client = new IrisClient("accountId", "userName", "password");
Map<String, Object> query = new HashMap<String, Object>();
query.put("areaCode", "919");
query.put("quantity", 2);
List<String> numbers = (List<String>) AvailableNumbers.search(client, query);
for (String number : numbers)
{
    System.out.println(number);
}

```

> Output

```
9192760028
9194954957
```

---
