{% method %}
## XML: `<SendDtmf>`
The SendDtmf verb is used to play DTMF digits in the call.
* The `,` and lowercase `w` characters introduce a half-second pause into the DTMF sequence.
* An uppercase `W` character introduces a one-second pause into the DTMF sequence.
* `*`, `#`, `a-d`, and `A-D` are also supported in addition to the numeric characters `0-9`.

### Attributes
| ATTRIBUTE | Description |
|:----------|:------------|
| toneDuration | (optional) The length (in milliseconds) of each DTMF tone. Default value is 200. Range: decimal values between 50 - 5000. |
| toneInterval | (optional) The duration of silence (in milliseconds) following each DTMF tone. Default value is 400. Range: decimal values between 50 - 5000. |

All `w`, `,` and `W` chars replace `toneInterval`, so if a

`<SendDtmf toneInterval="300">1w2</SendDtmf>` is used, `2` will be played 500ms after `1` because of `w`

### Text Content
| Name        | Description |
|:------------|:------------|
| digits        |  String containing the DTMF characters to be sent in a call. Allows a maximum of 50 characters. The digits will be sent one-by-one with a marginal delay.

### Callbacks Received

None

{% common %}
#### Example 1 of 1:  SendDtmf Verb

This shows how to use Bandwidth XML to Send Dtmf during a call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SendDtmf>12w34</SendDtmf>
</Response>
```

{% sample lang="java" %}

```java
SendDtmf sendDtmf = SendDtmf.builder()
        .digits("12w34")
        .build();

Response response = Response.builder().build()
        .add(sendDtmf);
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

SendDtmf sendDtmf = new SendDtmf();
sendDtmf.Digits = "12w34";

response.Add(sendDtmf);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
send_dtmf = Bandwidth::Voice::SendDtmf.new({
    :dtmf => "12w34"
})

response.push(send_dtmf)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
send_dtmf = SendDtmf("12w34")

response.add_verb(send_dtmf)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var sendDtmf = new BandwidthBxml.Verbs.SendDtmf();
sendDtmf.setDtmf("12w34");

var response = new BandwidthBxml.Response();
response.addVerb(sendDtmf);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$sendDtmf = new BandwidthLib\Voice\Bxml\SendDtmf("12w34");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($sendDtmf);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
