{% method %}
## XML: `<StopRecording>`
The StopRecording verb is used to stop a recording that was previously started by a [`<StartRecording>`](startRecording.md) verb.

If there is not an ongoing recording at the time of this verb's execution, it has no effect.
If a previous recording was paused, <StopRecording> will end it.

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received

| Callbacks                                                         | Can reply with more BXML |
|:------------------------------------------------------------------|:-------------------------|
| [Conference Recording Available](../callbacks/recordingAvailable.md) | No                    |
| [Recording Available](../callbacks/recordingAvailable.md)         | No                       |

{% common %}
#### Example 1 of 2: StopRecording verb

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StopRecording/>
</Response>
```

{% sample lang="java" %}

```java
StopRecording stopRecording = StopRecording.builder().build();

Response response = Response.builder().build()
        .add(stopRecording);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
StopRecording stopRecording = new StopRecording();

Response response = new Response();
response.Add(stopRecording);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
stop_recording = Bandwidth::Voice::StopRecording.new()

response = Bandwidth::Voice::Response.new()
response.push(stop_recording)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
stop_recording = StopRecording()

response = Response()
response.add_verb(stop_recording)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var stopRecording = new BandwidthBxml.Verbs.StopRecording();

var response = new BandwidthBxml.Response();
response.addVerb(stopRecording);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$stopRecording = new BandwidthLib\Voice\Bxml\StopRecording();

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($stopRecording);

echo $response->toBxml();
```


{% common %}
#### Example 2 of 2: Recording of a call
This shows how to use Bandwidth XML to record a phone call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">This call is being recorded. Please wait while we transfer you.</SpeakSentence>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <Transfer>
        <PhoneNumber>+15554567892</PhoneNumber>
    </Transfer>
    <StopRecording/>
    <SpeakSentence voice="bridget">Thanks for your call. Have a nice day!</SpeakSentence>
</Response>
```

{% sample lang="java" %}

```java
StartRecording startRecording = StartRecording.builder()
        .recordingAvailableUrl("https://myapp.com/noBXML")
        .build();

SpeakSentence speakSentence = SpeakSentence.builder()
        .voice("bridget")
        .text("This call is being recorded.  Please wait while we transfer you.")
        .build();

Transfer transfer = Transfer.builder()
        .phoneNumbers(
                PhoneNumber.builder().phoneNumber("+15554567892").build()
        )
        .build();

StopRecording stopRecording = StopRecording.builder().build();

Response response = Response.builder().build()
        .add(speakSentence)
        .add(startRecording)
        .add(transfer)
        .add(stopRecording);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
SpeakSentence speakSentence = new SpeakSentence
{
    Voice = "bridget",
    Sentence = "This call is being recorded. Please wait while we transfer you."
};

StartRecording startRecording = new StartRecording
{
    RecordingAvailableUrl = "https://myapp.com/noBXML"
};

Transfer transfer = new Transfer
{
    PhoneNumbers = new PhoneNumber[] {new PhoneNumber
    {
        Number = "+15554567892"
    } }
};

StopRecording stopRecording = new StopRecording();

SpeakSentence speakSentence1 = new SpeakSentence
{
    Voice = "bridget",
    Sentence = "Thanks for your call. Have a nice day!"
};

Response response = new Response();
response.Add(speakSentence);
response.Add(startRecording);
response.Add(transfer);
response.Add(stopRecording);
response.Add(speakSentence1);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
speak_sentence_start = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "This call is being recorded. Please wait while we transfer you.",
    :voice => "bridget"
})

start_recording = Bandwidth::Voice::StartRecording.new({
    :recording_available_url => "https://myapp.com/noBXML"
})

phone_number = Bandwidth::Voice::PhoneNumber.new({
    :number => "+15554567892"
})
transfer = Bandwidth::Voice::Transfer.new({
    :phone_numbers => [phone_number]
})

stop_recording = Bandwidth::Voice::StopRecording.new()

speak_sentence_end = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Thanks for your call. Have a nice day!",
    :voice => "bridget"
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence_start)
response.push(start_recording)
response.push(transfer)
response.push(stop_recording)
response.push(speak_sentence_end)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
speak_sentence_start = SpeakSentence(
    sentence="This call is being recorded. Please wait while we transfer you.",
    voice="bridget"
)

start_recording = StartRecording(
    recording_available_url="https://myapp.com/noBXML"
)

phone_number = PhoneNumber(
    number="+15554567892"
)
transfer = Transfer(
    phone_numbers=[phone_number]
)

stop_recording = StopRecording()

speak_sentence_end = SpeakSentence(
    sentence="Thanks for your call. Have a nice day!",
    voice="bridget"
)

response = Response()
response.add_verb(speak_sentence_start)
response.add_verb(start_recording)
response.add_verb(transfer)
response.add_verb(stop_recording)
response.add_verb(speak_sentence_end)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentenceStart = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceStart.setSentence("This call is being recorded. Please wait while we transfer you.");
speakSentenceStart.setVoice("bridget");

var startRecording = new BandwidthBxml.Verbs.StartRecording();
startRecording.setRecordingAvailableUrl("https://myapp.com/noBXML");

var phoneNumber = new BandwidthBxml.Verbs.PhoneNumber();
phoneNumber.setNumber("+15554567892");
var transfer = new BandwidthBxml.Verbs.Transfer();
transfer.addPhoneNumber(phoneNumber);

var stopRecording = new BandwidthBxml.Verbs.StopRecording();

var speakSentenceEnd = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceEnd.setSentence("Thanks for your call. Have a nice day!");
speakSentenceEnd.setVoice("bridget");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentenceStart);
response.addVerb(startRecording);
response.addVerb(transfer);
response.addVerb(stopRecording);
response.addVerb(speakSentenceEnd);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentenceStart = new BandwidthLib\Voice\Bxml\SpeakSentence("This call is being recorded. Please wait while we transfer you.");
$speakSentenceStart->voice("bridget");

$startRecording = new BandwidthLib\Voice\Bxml\StartRecording();
$startRecording->recordingAvailableUrl("https://myapp.com/noBXML");

$phoneNumber = new BandwidthLib\Voice\Bxml\PhoneNumber("+15554567892");
$transfer = new BandwidthLib\Voice\Bxml\Transfer();
$transfer->phoneNumbers(array($phoneNumber));

$stopRecording = new BandwidthLib\Voice\Bxml\StopRecording();

$speakSentenceEnd = new BandwidthLib\Voice\Bxml\SpeakSentence("Thanks for your call. Have a nice day!");
$speakSentenceEnd->voice("bridget");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentenceStart);
$response->addVerb($startRecording);
$response->addVerb($transfer);
$response->addVerb($stopRecording);
$response->addVerb($speakSentenceEnd);

echo $response->toBxml();
```

{% endmethod %}
