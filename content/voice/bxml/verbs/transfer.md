{% method %}

## XML: `<Transfer>`
The Transfer verb is used to bridge another party onto the current call.

### Attributes
| Attribute | Description |
|:----------|:------------|
| transferCallerId | (optional) The caller ID to use when the call is transferred, if different. Must be in E.164 format (e.g. +15555555555).<br><br> Note: Leave blank to pass along the number of the remote party. |
| callTimeout | (optional) This is the timeout (in seconds) for the callee to answer the call. Range: decimal values between 1 - 300.  Default value is 30 seconds. |
| transferCompleteUrl | (optional) URL to send the [Transfer Complete](../callbacks/transferComplete.md) event to and request new BXML. Optional but recommended. [See below](#transferCompleteUrl) for further details. May be a relative URL. |
| transferCompleteMethod | (optional) The HTTP method to use for the request to `transferCompleteUrl`. GET or POST. Default value is POST. |
| transferCompleteFallbackUrl | (optional) A fallback url which, if provided, will be used to retry the [Transfer Complete](../callbacks/transferComplete.md) callback delivery in case `transferCompleteUrl` fails to respond. |
| transferCompleteFallbackMethod | (optional) The HTTP method to use to deliver the [Transfer Complete](../callbacks/transferComplete.md) callback to `transferCompleteFallbackUrl`. GET or POST. Default value is POST. |
| username | (optional) The username to send in the HTTP request to `transferCompleteUrl`. |
| password | (optional) The password to send in the HTTP request to `transferCompleteUrl`. |
| fallbackUsername | (optional) The username to send in the HTTP request to `transferCompleteFallbackUrl`. |
| fallbackPassword | (optional) The password to send in the HTTP request to `transferCompleteFallbackUrl`. |
| tag | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| diversionTreatment | (optional) Can be any of the following: <br> `none`: No diversion headers are sent on the outbound leg of the transferred call. <br>`propagate`: Copy the Diversion header from the inbound leg to the outbound leg. Ignored if there is no Diversion header present on the inbound leg. <br>`stack`: After propagating any Diversion header from the inbound leg to the outbound leg, stack on top another Diversion header based on the Request-URI of the inbound call. <br><br>Defaults to `none`.  If diversionTreatment is not specified, no diversion header will be included for the transfer even if one came with the inbound call. |
| diversionReason | (optional) Can be any of the following values: <br>`unknown`<br>`user-busy`<br>`no-answer`<br>`unavailable`<br>`unconditional`<br>`time-of-day`<br>`do-not-disturb`<br>`deflection`<br>`follow-me`<br>`out-of-service`<br>`away` <br><br>This parameter is considered only when `diversionTreatment` is set to `stack`.  Defaults to `unknown`. |

### {#transferCompleteUrl}
When the called party hangs up, if the `transferCompleteUrl` attribute is specified, the [TransferComplete](../callbacks/transferComplete.md) callback is sent to the `transferCompleteUrl`,
this callback is also sent if any problem occurs with the transfer, such as the callee is busy, doesn't answer, or the call gets [rate limited](../../rateLimits.md).
The BXML returned by that callback is executed on the original call. Verbs following the `<Transfer>` will be ignored when the `transferCompleteUrl` attribute is specified.

If no `transferCompleteUrl` is specified, no event will be sent, and execution of verbs following the `<Transfer>` tag continues when the called party hangs up.

Note that the [TransferComplete](../callbacks/transferComplete.md) callback is only sent if the call is still active after the `<Transfer>` completes. If you need an event delivered for every `<Transfer>` regardless of how it ends, see the [Transfer Disconnect](../callbacks/transferDisconnect.md) event below. 

### Nested Tags
Between 1 and 8 `<PhoneNumber>` or `<SipUri>` tags must be nested within the `<Transfer>` tag to define the called parties. If more than
one destination is specified, called parties will ring simultaneously and the first to answer will be bridged to the original call.

| Tag | Description |
|:----|:------------|
| PhoneNumber | A phone number to transfer the call to. Value must be in E.164 format (e.g. `+15555555555`). |
| SipUri | A SIP URI to transfer the call to (e.g. `sip:user@server.com`). |

#### PhoneNumber attributes
| Attribute | Description |
|:----------|:------------|
| transferAnswerUrl | (optional) URL, if any, to send the [Transfer Answer](../callbacks/transferAnswer.md) event to and request BXML to be executed for the called party before the call is bridged. May be a relative URL. |
| transferAnswerMethod | (optional) The HTTP method to use for the request to `transferAnswerUrl`. GET or POST. Default value is POST. |
| transferAnswerFallbackUrl | (optional) A fallback url which, if provided, will be used to retry the [Transfer Answer](../callbacks/transferAnswer.md) callback delivery in case `transferAnswerUrl` fails to respond. |
| transferAnswerFallbackMethod | (optional) The HTTP method to use to deliver the [Transfer Answer](../callbacks/transferAnswer.md) callback to `transferAnswerFallbackUrl`. GET or POST. Default value is POST. |
| transferDisconnectUrl | (optional) URL, if any, to send the [Transfer Disconnect](../callbacks/transferDisconnect.md) event to. This event will be sent regardless of how the transfer ends and may not be responded to with BXML. May be a relative URL.|
| transferDisconnectMethod | (optional) The HTTP method to use for the request to `transferDisconnectUrl`. GET or POST. Default value is POST. |
| username | (optional) The username to send in the HTTP request to `transferAnswerUrl` and `transferDisconnectUrl`. |
| password | (optional) The password to send in the HTTP request to `transferAnswerUrl` and `transferDisconnectUrl`. |
| fallbackUsername | (optional) The username to send in the HTTP request to `transferAnswerFallbackUrl`. |
| fallbackPassword | (optional) The password to send in the HTTP request to `transferAnswerFallbackUrl`. |
| tag | (optional) A custom string that will be sent with these and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

#### SipUri attributes
| Attribute | Description |
|:----------|:------------|
| uui | (optional) The value of the `User-To-User` header to send within the initial `INVITE`. Must include the `encoding` parameter as specified in [`RFC 7433`](https://tools.ietf.org/html/rfc7433). Only `base64` and `jwt` encoding are currently allowed. This value, including the encoding specifier, may not exceed 256 characters. |
| transferAnswerUrl | (optional) URL, if any, to send the [Transfer Answer](../callbacks/transferAnswer.md) event to and request BXML to be executed for the called party before the call is bridged. May be a relative URL. |
| transferAnswerMethod | (optional) The HTTP method to use for the request to `transferAnswerUrl`. GET or POST. Default value is POST. |
| transferAnswerFallbackUrl | (optional) A fallback url which, if provided, will be used to retry the [Transfer Answer](../callbacks/transferAnswer.md) callback delivery in case `transferAnswerUrl` fails to respond. |
| transferAnswerFallbackMethod | (optional) The HTTP method to use to deliver the [Transfer Answer](../callbacks/transferAnswer.md) callback to `transferAnswerFallbackUrl`. GET or POST. Default value is POST. |
| transferDisconnectUrl | (optional) URL, if any, to send the [Transfer Disconnect](../callbacks/transferDisconnect.md) event to. This event will be sent regardless of how the transfer ends and may not be responded to with BXML. May be a relative URL.|
| transferDisconnectMethod | (optional) The HTTP method to use for the request to `transferDisconnectUrl`. GET or POST. Default value is POST. |
| username | (optional) The username to send in the HTTP request to `transferAnswerUrl` and `transferDisconnectUrl`. |
| password | (optional) The password to send in the HTTP request to `transferAnswerUrl` and `transferDisconnectUrl`. |
| fallbackUsername | (optional) The username to send in the HTTP request to `transferAnswerFallbackUrl`. |
| fallbackPassword | (optional) The password to send in the HTTP request to `transferAnswerFallbackUrl`. |
| tag | (optional) A custom string that will be sent with these and all future callbacks unless overwritten by a future `tag` attribute or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |

When the called party answers, if the `transferAnswerUrl` is specified, the [Transfer Answer](../callbacks/transferAnswer.md) callback is sent to the `transferAnswerUrl` and
the BXML returned by that callback is executed. That BXML is executed only for the called party.  At the conclusion
of that BXML, the calls are bridged.

When each leg of the transfer ends for any reason, if `transferDisconnectUrl` was set for that phone number, the
[Transfer Disconnect](../callbacks/transferDisconnect.md) event will be sent to that URL. This event may not be responded to with BXML.

<aside class="alert general small"><p>There can be a maximum of 8 phone numbers to transfer to. </p></aside>

### Callbacks Received

| Callbacks | Can reply with more BXML |
|:----------|:-------------------------|
| [Transfer Answer](../callbacks/transferAnswer.md) | Yes |
| [Transfer Complete](../callbacks/transferComplete.md) | Yes |
| [Transfer Disconnect](../callbacks/transferDisconnect.md) | No |

{% common %}

### Example 1 of 3: Simple Transfer
This shows how to use Bandwidth XML to transfer a phone call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">Transferring your call, please wait.</SpeakSentence>
    <Transfer transferCallerId="+15554567891">
        <PhoneNumber>+15554567892</PhoneNumber>
    </Transfer>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .text("Transferring your call, please wait.")
        .gender("male")
        .build();

PhoneNumber phoneNumber = PhoneNumber.builder()
        .phoneNumber("+11234567892")
        .build();

Transfer transfer = Transfer.builder()
        .transferCallerId("+11234567891")
        .phoneNumbers(phoneNumber)
        .build();

Response response = Response.builder().build()
        .add(speakSentence)
        .add(transfer);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

PhoneNumber phoneNumber1 = new PhoneNumber();
phoneNumber1.Number = "+11234567892";

Transfer transfer = new Transfer();
transfer.PhoneNumbers = new PhoneNumber[] { phoneNumber1 };
transfer.TransferCallerId = "+11234567891";

response.Add(transfer);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
phone_number = Bandwidth::Voice::PhoneNumber.new({
    :number => "+11234567892"
})
transfer = Bandwidth::Voice::Transfer.new({
    :transfer_caller_id => "+11234567891",
    :phone_numbers => [phone_number]
})

response.push(transfer)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
phone_number = PhoneNumber(
    number="+11234567892"
)
transfer = Transfer(
    transfer_caller_id="+11234567891",
    phone_numbers=[phone_number]
)

response.add_verb(transfer)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var phone_number = new BandwidthBxml.Verbs.PhoneNumber();
phone_number.setNumber("+17777777777");

var transfer = new BandwidthBxml.Verbs.Transfer();
transfer.setTransferCallerId("+18888888888");
transfer.addPhoneNumber(phone_number);

var response = new BandwidthBxml.Response();
response.addVerb(transfer);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$number = new BandwidthLib\Voice\Bxml\PhoneNumber("+17777777777");

$transfer = new BandwidthLib\Voice\Bxml\Transfer();
$transfer->transferCallerId("+18888888888");
$transfer->phoneNumbers(array($number));

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($transfer);

echo $response->toBxml();
echo "\n";
```

{% common %}


### Example 2 of 3: Single Transfer with Announcement
This shows how to use Bandwidth XML to transfer a phone call with a pre-bridge announcement.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="paul">Transferring your call, please wait.</SpeakSentence>
    <Transfer transferCallerId="+15554567891">
        <PhoneNumber transferAnswerUrl="http://myapp.com/announcement">+15554567892</PhoneNumber>
    </Transfer>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .text("Transferring your call, please wait.")
        .voice("paul")
        .build();

PhoneNumber phoneNumber = PhoneNumber.builder()
        .phoneNumber("+11234567892")
        .transferAnswerUrl("http://myapp.com/announcement")
        .build();

Transfer transfer = Transfer.builder()
        .transferCallerId("+11234567891")
        .phoneNumbers(phoneNumber)
        .build();

Response response = Response.builder().build()
        .add(speakSentence)
        .add(transfer);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "Transferring your call, please wait.";

PhoneNumber phoneNumber1 = new PhoneNumber();
phoneNumber1.Number = "+11234567892";
phoneNumber1.TransferAnswerUrl = "http://myapp.com/announcement";

Transfer transfer = new Transfer();
transfer.PhoneNumbers = new PhoneNumber[] { phoneNumber1 };
transfer.TransferCallerId = "+11234567891";

response.Add(speakSentence);
response.Add(transfer);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Transferring your call, please wait.",
    :voice => "paul"
})
phone_number = Bandwidth::Voice::PhoneNumber.new({
    :number => "+11234567892",
    :transfer_answer_url => "http://myapp.com/announcement"
})
transfer = Bandwidth::Voice::Transfer.new({
    :transfer_caller_id => "+11234567891",
    :phone_numbers => [phone_number]
})

response.push(speak_sentence)
response.push(transfer)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="Transferring your call, please wait.",
    voice="paul"
)
phone_number = PhoneNumber(
    number="+11234567892",
    transfer_answer_url="http://myapp.com/announcement"
)
transfer = Transfer(
    transfer_caller_id="+11234567891",
    phone_numbers=[phone_number]
)

response.add_verb(speak_sentence)
response.add_verb(transfer)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("Transferring your call, please wait.");
speakSentence.setVoice("paul");

var phone_number = new BandwidthBxml.Verbs.PhoneNumber();
phone_number.setNumber("+17777777777");

var transfer = new BandwidthBxml.Verbs.Transfer();
transfer.setTransferCallerId("+18888888888");
transfer.addPhoneNumber(phone_number);

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);
response.addVerb(transfer);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Transferring your call, please wait.");
$speakSentence->voice("paul");

$number = new BandwidthLib\Voice\Bxml\PhoneNumber("+17777777777");

$transfer = new BandwidthLib\Voice\Bxml\Transfer();
$transfer->transferCallerId("+18888888888");
$transfer->phoneNumbers(array($number));

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
$response->addVerb($transfer);

echo $response->toBxml();
echo "\n";
```

{% common %}

> The announcement BXML at http://myapp.com/announcement is:

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="paul">A customer would like to speak to you.</SpeakSentence>
</Response>
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "A customer would like to speak to you.";

response.Add(speakSentence);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Transferring your call, please wait.",
    :voice => "paul"
})
```

{% sample lang="python" %}

```python
speak_sentence = SpeakSentence(
    sentence="Transferring your call, please wait.",
    voice="paul"
)
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("Transferring your call, please wait.");
speakSentence.setVoice("paul");
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Transferring your call, please wait.");
$speakSentence->voice("paul");
```

{% common %}


### Example 3 of 3: Multi transfer

This example shows how to use Bandwidth XML in a multi transfer scenario.  All numbers ring simultaneously and the first
to answer is bridged to the original call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Transfer transferCallerId="+15552221235">
        <PhoneNumber>+15552221234</PhoneNumber>
        <PhoneNumber>+15552221233</PhoneNumber>
    </Transfer>
</Response>

```

{% sample lang="java" %}

```java
PhoneNumber phoneNumber1 = PhoneNumber.builder()
        .phoneNumber("+11234567892")
        .build();

PhoneNumber phoneNumber2 = PhoneNumber.builder()
        .phoneNumber("+11234567893")
        .build();

Transfer transfer = Transfer.builder()
        .transferCallerId("+11234567891")
        .phoneNumbers(phoneNumber1, phoneNumber2)
        .build();

Response response = Response.builder().build()
        .add(transfer);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();
           
PhoneNumber phoneNumber1 = new PhoneNumber();
phoneNumber1.Number = "+15552221234";

PhoneNumber phoneNumber2 = new PhoneNumber();
phoneNumber2.Number = "+15552221233";

Transfer transfer = new Transfer();
transfer.PhoneNumbers = new PhoneNumber[] { phoneNumber1, phoneNumber2 };
transfer.TransferCallerId = "+15552221235";

response.Add(transfer);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
phone_number_1 = Bandwidth::Voice::PhoneNumber.new({
    :number => "+15552221234"
})
phone_number_2 = Bandwidth::Voice::PhoneNumber.new({
    :number => "+15552221233"
})
transfer = Bandwidth::Voice::Transfer.new({
    :transfer_caller_id => "+15552221235",
    :phone_numbers => [phone_number_1, phone_number_2]
})

response.push(transfer)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
phone_number_1 = PhoneNumber(
    number="+15552221234"
)
phone_number_2 = PhoneNumber(
    number="+15552221233"
)
transfer = Transfer(
    transfer_caller_id="+15552221235",
    phone_numbers=[phone_number_1, phone_number_2]
)

response.add_verb(transfer)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var phone_number_1 = new BandwidthBxml.Verbs.PhoneNumber();
phone_number_1.setNumber("+17777777777");
var phone_number_2 = new BandwidthBxml.Verbs.PhoneNumber();
phone_number_2.setNumber("+18888888888");

var transfer = new BandwidthBxml.Verbs.Transfer();
transfer.setTransferCallerId("+19999999999");
transfer.addPhoneNumber(phone_number_1);
transfer.addPhoneNumber(phone_number_2);

var response = new BandwidthBxml.Response();
response.addVerb(transfer);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$number1 = new BandwidthLib\Voice\Bxml\PhoneNumber("+17777777777");
$number2 = new BandwidthLib\Voice\Bxml\PhoneNumber("+15555555555");

$transfer = new BandwidthLib\Voice\Bxml\Transfer();
$transfer->transferCallerId("+18888888888");
$transfer->phoneNumbers(array($number1, $number2));

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($transfer);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
