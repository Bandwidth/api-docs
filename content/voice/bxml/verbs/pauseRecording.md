{% method %}
## XML: `<PauseRecording>`
The PauseRecording verb is used to pause a recording that was previously started by a [`<StartRecording>`](startRecording.md) verb.

Audio that occurs between a `<PauseRecording>` verb and a [`<ResumeRecording>`](resumeRecording.md) verb will not be present in the recording.

The paused period will not be included in the duration of the recording and therefore will not contribute to the recording portion of the bill.

If there is not an ongoing recording at the time of this verb's execution, it has no effect.

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received
None

{% common %}
#### Example 1 of 2: PauseRecording verb

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <PauseRecording/>
</Response>
```

{% sample lang="java" %}

```java
PauseRecording pauseRecording = PauseRecording.builder().build();

Response response = Response.builder().build()
        .add(pauseRecording);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
PauseRecording pauseRecording = new PauseRecording();

Response response = new Response();
response.Add(pauseRecording);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
pause_recording = Bandwidth::Voice::PauseRecording.new()

response = Bandwidth::Voice::Response.new()
response.push(pause_recording)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
pause_recording = PauseRecording()

response = Response()
response.add_verb(pause_recording)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var pauseRecording = new BandwidthBxml.Verbs.PauseRecording();

var response = new BandwidthBxml.Response();
response.addVerb(pauseRecording);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$pauseRecording = new BandwidthLib\Voice\Bxml\PauseRecording();

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($pauseRecording);

echo $response->toBxml();
```

{% common %}

#### Example 2 of 2: Pausing a recording


This shows how to use Bandwidth XML to pause a recording in a phone call.
In this example, only the transfers themselves will be recorded, and the text-to-speech instructing the user will not be present in the recording.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">This call is being recorded. Please wait while we transfer you.</SpeakSentence>
    <StartRecording recordingAvailableUrl="https://myapp.com/noBXML"/>
    <Transfer>
        <PhoneNumber>+15554567892</PhoneNumber>
    </Transfer>
    <PauseRecording/>
    <Gather gatherUrl="https://myapp.com/gatherCallbackBxml" maxDigits="1" firstDigitTimeout="10">
        <SpeakSentence voice="kate">Press one if you want to be transferred to another number.</SpeakSentence>
    </Gather>
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

PauseRecording pauseRecording = PauseRecording.builder().build();

Gather gather = Gather.builder()
        .gatherUrl("https://myapp.com/gatherCallbackBxml")
        .maxDigits(1)
        .firstDigitTimeout(30.0)
        .audioProducer(
                SpeakSentence.builder()
                        .voice("kate")
                        .text("Press one if you want to be transferred to another number.")
                        .build()
        )
        .build();

Response response = Response.builder().build()
        .add(speakSentence)
        .add(startRecording)
        .add(transfer)
        .add(pauseRecording)
        .add(gather);

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

PauseRecording pauseRecording = new PauseRecording();

Gather gather = new Gather
{
    GatherUrl = "https://myapp.com/gatherCallbackBxml",
    MaxDigits = 1,
    SpeakSentence = new SpeakSentence
    {
        Voice = "kate",
        Sentence = "Press one if you want to be transferred to another number."
    }
};

Response response = new Response();
response.Add(speakSentence);
response.Add(startRecording);
response.Add(transfer);
response.Add(pauseRecording);
response.Add(gather);

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

pause_recording = Bandwidth::Voice::PauseRecording.new()

speak_sentence_gather = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Press one if you want to be transferred to another number.",
    :voice => "kate"
})
gather = Bandwidth::Voice::Gather.new({
    :max_digits => 1,
    :first_digit_timeout => 10,
    :gather_url => "https://myapp.com/gatherCallbackBxml",
    :speak_sentence => speak_sentence_gather
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence_start)
response.push(start_recording)
response.push(transfer)
response.push(pause_recording)
response.push(gather)

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

pause_recording = PauseRecording()

speak_sentence_gather = SpeakSentence(
    sentence="Press one if you want to be transferred to another number.",
    voice = "kate"
)
gather = Gather(
    max_digits=1,
    first_digit_timeout=10,
    gather_url="https://myapp.com/gatherCallbackBxml",
    speak_sentence=speak_sentence_gather
)

response = Response()
response.add_verb(speak_sentence_start)
response.add_verb(start_recording)
response.add_verb(transfer)
response.add_verb(pause_recording)
response.add_verb(gather)

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

var pauseRecording = new BandwidthBxml.Verbs.PauseRecording();

var speakSentenceGather = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceGather.setSentence("Press one if you want to be transferred to another number.");
speakSentenceGather.setVoice("kate");
var gather = new BandwidthBxml.Verbs.Gather();
gather.setSpeakSentence(speakSentenceGather);
gather.setMaxDigits(1);
gather.setFirstDigitTimeout(10);
gather.setGatherUrl("https://myapp.com/gatherCallbackBxml");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentenceStart);
response.addVerb(startRecording);
response.addVerb(transfer);
response.addVerb(pauseRecording);
response.addVerb(gather);

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

$pauseRecording = new BandwidthLib\Voice\Bxml\PauseRecording();

$speakSentenceGather = new BandwidthLib\Voice\Bxml\SpeakSentence("Press one if you want to be transferred to another number.");
$speakSentenceGather->voice("kate");
$gather = new BandwidthLib\Voice\Bxml\Gather();
$gather->gatherUrl("https://myapp.com/gatherCallbackBxml");
$gather->maxDigits(1);
$gather->firstDigitTimeout(10);
$gather->speakSentence($speakSentenceGather);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentenceStart);
$response->addVerb($startRecording);
$response->addVerb($transfer);
$response->addVerb($pauseRecording);
$response->addVerb($gather);

echo $response->toBxml();
```

{% common %}

> Gather callback bxml:

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <ResumeRecording/>
    <Transfer>
        <PhoneNumber>+15554567893</PhoneNumber>
    </Transfer>
    <StopRecording/>
    <SpeakSentence voice="bridget">Thanks for your call. Have a nice day!</SpeakSentence>
</Response>
```

{% sample lang="java" %}

```java
ResumeRecording resumeRecording = ResumeRecording.builder().build();

Transfer transfer = Transfer.builder()
        .phoneNumbers(
                PhoneNumber.builder().phoneNumber("+15554567893").build()
        )
        .build();

SpeakSentence speakSentence = SpeakSentence.builder()
        .voice("bridget")
        .text("Thanks for your call. Have a nice day!")
        .build();

Response response = Response.builder().build()
        .add(resumeRecording)
        .add(transfer)
        .add(speakSentence);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
ResumeRecording resumeRecording = new ResumeRecording();

Transfer transfer = new Transfer
{
    PhoneNumbers = new PhoneNumber[] {new PhoneNumber
    {
        Number = "+15554567893"
    } }
};

SpeakSentence speakSentence = new SpeakSentence
{
    Voice = "bridget",
    Sentence = "Thanks for your call. Have a nice day!"
};

Response response = new Response();
response.Add(resumeRecording);
response.Add(transfer);
response.Add(speakSentence);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
resume_recording = Bandwidth::Voice::ResumeRecording.new()

phone_number = Bandwidth::Voice::PhoneNumber.new({
    :number => "+15554567893"
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
response.push(resume_recording)
response.push(transfer)
response.push(stop_recording)
response.push(speak_sentence_end)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
resume_recording = ResumeRecording()

phone_number = PhoneNumber(
    number="+15554567893"
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
response.add_verb(resume_recording)
response.add_verb(transfer)
response.add_verb(stop_recording)
response.add_verb(speak_sentence_end)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var resumeRecording = new BandwidthBxml.Verbs.ResumeRecording();

var phoneNumber = new BandwidthBxml.Verbs.PhoneNumber();
phoneNumber.setNumber("+15554567893");
var transfer = new BandwidthBxml.Verbs.Transfer();
transfer.addPhoneNumber(phoneNumber);

var stopRecording = new BandwidthBxml.Verbs.StopRecording();

var speakSentenceEnd = new BandwidthBxml.Verbs.SpeakSentence();
speakSentenceEnd.setSentence("Thanks for your call. Have a nice day!");
speakSentenceEnd.setVoice("bridget");

var response = new BandwidthBxml.Response();
response.addVerb(resumeRecording);
response.addVerb(transfer);
response.addVerb(stopRecording);
response.addVerb(speakSentenceEnd);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$resumeRecording = new BandwidthLib\Voice\Bxml\ResumeRecording();

$phoneNumber = new BandwidthLib\Voice\Bxml\PhoneNumber("+15554567893");
$transfer = new BandwidthLib\Voice\Bxml\Transfer();
$transfer->phoneNumbers(array($phoneNumber));

$stopRecording = new BandwidthLib\Voice\Bxml\StopRecording();

$speakSentenceEnd = new BandwidthLib\Voice\Bxml\SpeakSentence("Thanks for your call. Have a nice day!");
$speakSentenceEnd->voice("bridget");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($resumeRecording);
$response->addVerb($transfer);
$response->addVerb($stopRecording);
$response->addVerb($speakSentenceEnd);

echo $response->toBxml();
```


{% endmethod %}
