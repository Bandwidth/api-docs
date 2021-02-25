
## XML: `<StopRecording>`
The StopRecording verb is used to stop a recording that was previously started by a [`<StartRecording>`](startRecording.md) verb.

If there is not an ongoing recording at the time of this verb's execution, it has no effect.
If a previous recording was paused,  will end it.

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received

| Callbacks                                                         | Can reply with more BXML |
|:------------------------------------------------------------------|:-------------------------|
| [Conference Recording Available](../bxmlCallbacks/recordingAvailable.md) | No                    |
| [Recording Available](../bxmlCallbacks/recordingAvailable.md)         | No                       |


#### Example 1 of 2: StopRecording verb




```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StopRecording/>
</Response>
```



#### Java

```java
import com.bandwidth.voice.bxml.verbs.Response;
import com.bandwidth.voice.bxml.verbs.StopRecording;

StopRecording stopRecording = StopRecording.builder().build();

Response response = Response.builder().build()
        .add(stopRecording);

System.out.println(response.toBXML());
```



#### C-Sharp

```csharp
using Bandwidth.Standard.Voice.Bxml;

StopRecording stopRecording = new StopRecording();

Response response = new Response();
response.Add(stopRecording);

Console.WriteLine(response.ToBXML());
```



#### Ruby

```ruby
require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

stop_recording = Bandwidth::Voice::StopRecording.new()

response = Bandwidth::Voice::Response.new()
response.push(stop_recording)

puts response.to_bxml()
```



#### Python

```python
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import StopRecording

stop_recording = StopRecording()

response = Response()
response.add_verb(stop_recording)

print(response.to_bxml())
```



#### Node.js

```js
import { StopRecording, Response } from '@bandwidth/voice';

const stopRecording = new StopRecording();

const response = new Response(stopRecording);

console.log(response.toBxml());
```



#### PHP

```php
<?php

require "vendor/autoload.php";

$stopRecording = new BandwidthLib\Voice\Bxml\StopRecording();

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($stopRecording);

echo $response->toBxml();
```



#### Example 2 of 2: Recording of a call
This shows how to use Bandwidth XML to record a phone call.




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



#### Java

```java
import com.bandwidth.voice.bxml.verbs.Response;
import com.bandwidth.voice.bxml.verbs.SpeakSentence;
import com.bandwidth.voice.bxml.verbs.StartRecording;
import com.bandwidth.voice.bxml.verbs.StopRecording;
import com.bandwidth.voice.bxml.verbs.Transfer;

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



#### C-Sharp

```csharp
using Bandwidth.Standard.Voice.Bxml;

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



#### Ruby

```ruby
require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

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



#### Python

```python
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import SpeakSentence, StartRecording, PhoneNumber, Transfer, StopRecording

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



#### Node.js

```js
import { SpeakSentence, StartRecording, PhoneNumber, Transfer, StopRecording, Response } from '@bandwidth/voice';

const speakSentenceStart = new SpeakSentence({
    sentence: 'This call is being recorded. Please wait while we transfer you.',
    voice: 'bridget'
});

const startRecording = new StartRecording({
    recordingAvailableUrl: 'https://myapp.com/noBXML'
});

const phoneNumber = new PhoneNumber({
    number: '+15554567892'
});

const transfer = new Transfer({
    phoneNumbers: [phoneNumber]
});

const stopRecording = new StopRecording();

const speakSentenceEnd = new SpeakSentence({
    sentence: 'Thanks for your call. Have a nice day!',
    voice: 'bridget'
});

const response = new Response(speakSentenceStart, startRecording, transfer, stopRecording, speakSentenceEnd);

console.log(response.toBxml());
```



#### PHP

```php
<?php

require "vendor/autoload.php";

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


