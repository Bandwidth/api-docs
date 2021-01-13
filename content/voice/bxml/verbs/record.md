{% method %}
## XML: `<Record>`
The Record verb allows a segment of audio to be recorded during a call. At the end of the recording, a [Record Complete](../callbacks/recordComplete.md) event is generated.

Bandwidth will keep recordings for up to 30 days. After 30 days the recordings will be deleted from Bandwidth's servers.

##### Links
* This verb should probably be used if you are building a voice mail system or conference member introduction.
For different use cases, you might want to take a look at [StartRecording](../verbs/startRecording.md). 
* For a more detailed view of Recording, check the [Recording Guide](../../guides/bxmlRecording.md).

### Attributes
| Attribute                    | Description |
|:-----------------------------|:------------|
| recordCompleteUrl            | (optional) URL to send the [Record Complete](../callbacks/recordComplete.md) event to once the recording has ended. Accepts BXML, and may be a relative URL. This callback will not be sent if the recording ended due to the call hanging up. |
| recordCompleteMethod         | (optional) The HTTP method to use for the request to `recordCompleteUrl`. GET or POST. Default value is POST. |
| recordCompleteFallbackUrl    | (optional) A fallback url which, if provided, will be used to retry the [Record Complete](../callbacks/recordComplete.md) callback delivery in case `recordCompleteUrl` fails to respond. |
| recordCompleteFallbackMethod | (optional) The HTTP method to use to deliver the [Record Complete](../callbacks/recordComplete.md) callback to `recordCompleteFallbackUrl`. GET or POST. Default value is POST. |
| recordingAvailableUrl        | (optional) URL to send the [Recording Available](../callbacks/recordingAvailable.md) event to once it has been processed. Does not accept BXML. May be a relative URL. |
| recordingAvailableMethod     | (optional) The HTTP method to use for the request to `recordingAvailableUrl`. GET or POST. Default value is POST. |
| transcribe                   | (optional) A boolean value to indicate that recording should be transcribed. Transcription can succeed only for recordings of length greater than 500 milliseconds and less than 4 hours. Default is `false`. |
| transcriptionAvailableUrl    | (optional) URL to send the [Transcription Available](../callbacks/transcriptionAvailable.md) event to once it has been processed. Does not accept BXML. May be a relative URL. |
| transcriptionAvailableMethod | (optional) The HTTP method to use for the request to `transcriptionAvailableUrl`. GET or POST. Default value is POST. |
| username                     | (optional) The username to send in the HTTP request to `recordCompleteUrl`, `recordingAvailableUrl` or `transcriptionAvailableUrl`. If specified, the URLs must be TLS-encrypted (i.e., `https`). |
| password                     | (optional) The password to send in the HTTP request to `recordCompleteUrl`, `recordingAvailableUrl` or `transcriptionAvailableUrl`. If specified, the URLs must be TLS-encrypted (i.e., `https`). |
| fallbackUsername             | (optional) The username to send in the HTTP request to `recordCompleteFallbackUrl`. If specified, the URLs must be TLS-encrypted (i.e., `https`). |
| fallbackPassword             | (optional) The password to send in the HTTP request to `recordCompleteFallbackUrl`. If specified, the URLs must be TLS-encrypted (i.e., `https`). |
| tag                          | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or [`<Tag>`](tag.md) verb, or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| terminatingDigits            | (optional) When pressed, this digit will terminate the recording. Default value is `“#”`. This feature can be disabed with `""`. |
| maxDuration                  | (optional) Maximum length of recording (in seconds). Max 10800 (3 hours). Default value is 60. |
| silenceTimeout               | (optional) Length of silence after which to end the recording (in seconds). Max is equivalent to the maximum `maxDuration` value. Default value is 0, which means no timeout. |
| fileFormat                   | (optional) The audio format that the recording will be saved as: `mp3` or `wav`.  Default value is `wav`. |

To stop the recording, the user can press one of the `terminatingDigits` or stop talking for `silenceTimeout` seconds.

A `maxDuration` can be specified to stop recording after a specified period of time.

If the `recordCompleteUrl` attribute is specified, then the [Recording Complete](../callbacks/recordComplete.md) event is sent to the `recordCompleteUrl` and the BXML returned by that callback is executed next and all verbs following the `<Record>` tag will be ignored. If no `recordCompleteUrl` is specified, execution of verbs following the `<Record>` tag continues. The recording will still be available on the server.

If the `recordingAvailableUrl` attribute is specified, then the [Recording Available](../callbacks/recordingAvailable.md) event is sent to the URL once the recording is available for download. BXML returned in response to this callback will be ignored.

If the `transcriptionAvailableUrl` attribute is specified, then the [Transcription Available](../callbacks/transcriptionAvailable.md) event is sent to the URL once the transcription is available for download. BXML returned in response to this callback will be ignored.

### Callbacks Received

| Callbacks                                                         | Can reply with more BXML |
|:------------------------------------------------------------------|:-------------------------|
| [Record Complete](../callbacks/recordComplete.md)                 | Yes                      |
| [Recording Available](../callbacks/recordingAvailable.md)         | No                       |
| [Transcription Available](../callbacks/transcriptionAvailable.md) | No                       |

{% common %}

#### Example 1 of 2: Record Verb

This shows how to use Bandwidth XML to record a phone call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence voice="bridget">Please leave your message after the beep</SpeakSentence>
    <PlayAudio>http://audio.url/beep.wav</PlayAudio>
    <Record recordCompleteUrl="https://myapp.com/nextBXML" maxDuration="10"/>
    <!-- Any verbs after this point would be replaced by those returned by the recordCompleteUrl -->
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .voice("bridget")
        .text("Please leave your message after the beep")
        .build();

PlayAudio playAudio = PlayAudio.builder()
        .audioUri("http://audio.url/beep.wav")
        .build();

Record record = Record.builder()
        .recordCompleteUrl("https://myapp.com/nextBXML")
        .maxDuration(10)
        .build();

Response response = Response.builder().build()
        .add(speakSentence)
        .add(playAudio)
        .add(record);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
SpeakSentence speakSentence = new SpeakSentence
{
    Voice = "bridget",
    Sentence = "Please leave your message after the beep."
};

PlayAudio playAudio = new PlayAudio
{
    Url = "http://audio.url/beep.wav"
};

Record record = new Record
{
    RecordCompleteUrl = "https://myapp.com/nextBXML",
    MaxDuration = 10
};

Response response = new Response();
response.Add(speakSentence);
response.Add(playAudio);
response.Add(record);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Please leave your message after the beep",
    :voice => "bridget"
})
play_audio = Bandwidth::Voice::PlayAudio.new({
    :url => "https://audio.url/beep.wav"
})
record = Bandwidth::Voice::Record.new({
    :record_complete_url => "https://myapp.com/nextBXML",
    :max_duration => "10"
})

response.push(speak_sentence)
response.push(play_audio)
response.push(record)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="Please leave your message after the beep",
    voice="bridget"
)
play_audio = PlayAudio(
    url="https://audio.url/beep.wav"
)
record = Record(
    record_complete_url="https://myapp.com/nextBXML",
    max_duration=10
)

response.add_verb(speak_sentence)
response.add_verb(play_audio)
response.add_verb(record)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("Please leave your message after the beep");
speakSentence.setVoice("bridget");

var playAudio = new BandwidthBxml.Verbs.PlayAudio();
playAudio.setUrl("https://audio.url/beep.wav");

var record = new BandwidthBxml.Verbs.Record();
record.setRecordCompleteUrl("https://myapp.com/nextBXML");
record.setMaxDuration(10);

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);
response.addVerb(playAudio);
response.addVerb(record);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Please leave your message after the beep");
$speakSentence->voice("bridget");

$playAudio = new BandwidthLib\Voice\Bxml\PlayAudio("https://audio.url/beep.wav");

$record = new BandwidthLib\Voice\Bxml\Record();
$record->recordCompleteUrl("https://url.com");
$record->maxDuration(10);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
$response->addVerb($playAudio);
$response->addVerb($record);

echo $response->toBxml();
```

{% common %}

#### Example 2 of 2: Record Verb with transcriptions

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SpeakSentence>Please say your name</SpeakSentence>
   <Record recordCompleteUrl="https://record.url.server/record" transcribe="true" transcriptionAvailableUrl="https://transcription.url.server/transcribe/"/>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .text("Please say your name")
        .build();

Record record = Record.builder()
        .recordCompleteUrl("https://record.url.server/record")
        .transcribe(true)
        .transcriptionAvailableUrl("https://transcription.url.server/transcribe/")
        .build();

Response response = Response.builder().build()
        .add(speakSentence)
        .add(record);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
SpeakSentence speakSentence = new SpeakSentence
{
    Sentence = "Please say your name"
};

Record record = new Record
{
    RecordCompleteUrl = "https://record.url.server/record",
    Transcribe = true,
    TranscriptionAvailableUrl = "https://transcription.url.server/transcribe/"

};

Response response = new Response();
response.Add(speakSentence);
response.Add(record);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Please say your name"
})
record = Bandwidth::Voice::Record.new({
    :record_complete_url => "https://record.url.server/record",
    :transcribe => true,
    :transcription_available_url => "https://transcription.url.server/transcribe/",
})

response.push(speak_sentence)
response.push(record)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="Please say your name"
)
record = Record(
    record_complete_url="https://record.url.server/record",
    transcribe=True,
    transcription_available_url="https://transcription.url.server/transcribe/",
)

response.add_verb(speak_sentence)
response.add_verb(record)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("Please say your name")

var record = new BandwidthBxml.Verbs.Record();
record.setTranscribe(true);
record.setTranscriptionAvailableUrl("https://transcription.url.server/transcribe/");
record.setRecordCompleteUrl("https://record.url.server/record");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);
response.addVerb(record);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Please say your name");

$record = new BandwidthLib\Voice\Bxml\Record();
$record->transcribe(true);
$record->transcriptionAvailableUrl("https://transcription.url.server/transcribe/");
$record->recordCompleteUrl("https://record.url.server/record");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
$response->addVerb($record);

echo $response->toBxml();
```

{% endmethod %}
