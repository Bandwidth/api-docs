{% method %}
## XML: `<Forward>`
Forwards an unanswered incoming call to another number.  Unlike `<Transfer>`, once your call is forwarded, your application will not have any control over either leg of the call.  When either leg hangs up, a [Disconnect event](../callbacks/disconnect.md) will be sent to your Call status callback URL.  

### Attributes

| ATTRIBUTE          | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| to                 | Number to forward the call to. Must be in E.164 format (e.g. +15555555555)                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| from               | (optional) Number to use for caller ID on the outgoing leg. Must be in E.164 format (e.g. +15555555555). If omitted, assumes the "to" number of the original leg.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| callTimeout        | (optional) Number of seconds to wait for an answer before abandoning the call. Range: decimal values between 1 - 300. Default: 30                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| diversionTreatment | (optional) Can be any of the following: <br> `none`: No diversion headers are sent on the outbound leg of the transferred call. <br>`propagate`: Copy the Diversion header from the inbound leg to the outbound leg. Ignored if there is no Diversion header present on the inbound leg. <br>`stack`: After propagating any Diversion header from the inbound leg to the outbound leg, stack on top another Diversion header based on the Request-URI of the inbound call. <br><br>Defaults to `none`.  If diversionTreatment is not specified, no diversion header will be included for the transfer even if one came with the inbound call. |
| diversionReason    | (optional) Can be any of the following values: <br>`unknown`<br>`user-busy`<br>`no-answer`<br>`unavailable`<br>`unconditional`<br>`time-of-day`<br>`do-not-disturb`<br>`deflection`<br>`follow-me`<br>`out-of-service`<br>`away` <br><br>This parameter is considered only when `diversionTreatment` is set to `stack`.  Defaults to `unknown`.                                                                                                                                                                                                                                                                                               |

### Callbacks Received

None

{% common %}
### Example 1 of 1: Simple Forward

This shows how to use Bandwidth XML to forward a call from +11234567890 to +10987654321.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Forward from="+15554567890" to="+15557654321"/>
</Response>
```

{% sample lang="java" %}

```java
Forward forward = Forward.builder()
        .to("+10987654321")
        .from("+11234567890")
        .build();
Response response = Response.builder().build()
        .add(forward);
System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

Forward forward = new Forward();
forward.To = "+10987654321";
forward.From = "+11234567890";

response.Add(forward);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
forward = Bandwidth::Voice::Forward.new({
    :to => "+10987654321",
    :from => "+11234567890"
})

response.push(forward)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
forward = Forward(
    to="+10987654321",
    from_="+11234567890" #Note the underscore since from is a keyword in python
)

response.add_verb(forward)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var forward = new BandwidthBxml.Verbs.Forward();
forward.setTo("+18888888888");
forward.setFrom("+19999999999");

var response = new BandwidthBxml.Response();
response.addVerb(forward);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$forward = new BandwidthLib\Voice\Bxml\Forward();
$forward->to("+18888888888");
$forward->from("+18889999999");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($forward);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
