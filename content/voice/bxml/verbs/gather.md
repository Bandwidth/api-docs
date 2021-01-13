{% method %}
## XML: `<Gather>`
The Gather verb is used to collect digits for some period of time.

### Attributes

| Attribute            | Description |
|:---------------------|:------------|
| gatherUrl            | (optional) URL to send [Gather event](../callbacks/gather.md) to and request new BXML. May be a relative URL. |
| gatherMethod         | (optional) The HTTP method to use for the request to `gatherUrl`. GET or POST. Default value is POST. |
| gatherFallbackUrl    | (optional) A fallback url which, if provided, will be used to retry the [Gather event](../callbacks/gather.md) callback delivery in case `gatherUrl` fails to respond. |
| gatherFallbackMethod | (optional) The HTTP method to use to deliver the [Gather event](../callbacks/gather.md) callback to `gatherFallbackUrl`. GET or POST. Default value is POST. |
| username             | (optional) The username to send in the HTTP request to `gatherUrl`. |
| password             | (optional) The password to send in the HTTP request to `gatherUrl`. |
| fallbackUsername     | (optional) The username to send in the HTTP request to `gatherFallbackUrl`. |
| fallbackPassword     | (optional) The password to send in the HTTP request to `gatherFallbackUrl`. |
| tag                  | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or [`<Tag>`](tag.md) verb, or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters. |
| terminatingDigits    | (optional) When any of these digits are pressed, it will terminate the Gather. Default value is `""`, which disables this feature. |
| maxDigits            | (optional) Max number of digits to collect. Default value is 50. Range: decimal values between 1 - 50. |
| interDigitTimeout    | (optional) Time (in seconds) allowed between digit presses before automatically terminating the Gather. Default value is 5. Range: decimal values between 1 - 60. |
| firstDigitTimeout    | (optional) Time (in seconds) to pause after any audio from nested `<SpeakSentence>` or `<PlayAudio>` verb is played (in seconds) before terminating the Gather. Default value is 5. Range: decimal values between 0 - 60. |
| repeatCount          | (optional) The number of times the audio prompt should be played if no digits are pressed. For example, if this value is `3`, the nested audio clip will be played a maximum of three times. The delay between repetitions will be equal to `firstDigitTimeout`. Default value is 1. `repeatCount` * number of verbs must not be greater than 20. |

The gather is terminated when one of these conditions is met:
 * The user presses a terminating digit (if specified)
 * The user has pressed at least one key and more than `interDigitTimeout` seconds have elapsed
 * Any nested audio has ended and `firstDigitTimeout` seconds have elapsed without the user pressing any digits
 * The user presses `maxDigits` digits

If the `gatherUrl` attribute is specified, the [Gather event](../callbacks/gather.md) is sent to the `gatherUrl` upon
completion of the gather. BXML returned by that callback are then executed. If `gatherUrl` is specified, verbs following the `<Gather>` will be ignored.

If no `gatherUrl` attribute is specified, the gathered digits are discarded and execution of verbs following the `<Gather>` continues.

### Nestable Verbs
The following verbs may be nested inside of a `<Gather>` tag.  If using a repeat count of one, up to 20 verbs can be nested. Refer to `repeatCount` attribute if using a value greater than 1.

| Verb                              | Description                                                                                              |
|:----------------------------------|:---------------------------------------------------------------------------------------------------------|
| [SpeakSentence](speakSentence.md) | (optional) Using the SpeakSentence inside the Gather verb will speak the text until a digit is received. |
| [PlayAudio](playAudio.md)         | (optional) Using the PlayAudio inside the Gather verb will play the media until a digit is received.     |

### Callbacks Received

| Callback                         | Can reply with more BXML |
|:---------------------------------|:-------------------------|
| [Gather](../callbacks/gather.md) | Yes                      |

{% common %}

#### Example 1 of 3: Gather Verb
This example shows how to use the Gather verb to speak a sentence, collect digits input from the phone, and send the
results to https://gather.url/nextBXML

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Gather gatherUrl="https://gather.url/nextBXML" firstDigitTimeout="10" terminatingDigits="#">
      <SpeakSentence voice="kate">Please press a digit.</SpeakSentence>
   </Gather>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .text("Please press a digit.")
        .voice("kate")
        .build();

Gather gather = Gather.builder()
        .gatherUrl("https://gather.url/nextBxml")
        .terminatingDigits("#")
        .firstDigitTimeout(10.0)
        .audioProducer(speakSentence)
        .build();

Response response = Response.builder().build()
        .add(gather);

System.out.println(response.toBXML());
```


{% sample lang="csharp" %}

```csharp
Response response = new Response();

SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "Please press a digit.";
speakSentence.Voice = "kate";

Gather gather = new Gather();
gather.GatherUrl = "https://gather.url/nextBXML";
gather.TerminatingDigits = "#";
gather.FirstDigitTimeout = 10;
gather.SpeakSentence = speakSentence;

response.Add(gather);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Please press a digit.",
    :voice => "kate"
})
gather = Bandwidth::Voice::Gather.new({
    :gather_url => "https://gather.url/nextBXML",
    :terminating_digits => "#",
    :first_digit_timeout => "10",
    :speak_sentence => speak_sentence
})

response.push(gather)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="Please press a digit.",
    voice="kate"
)
gather = Gather(
    gather_url="https://gather.url/nextBXML",
    terminating_digits="#",
    first_digit_timeout=10,
    speak_sentence=speak_sentence
)
response.add_verb(gather)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("Please press a digit.");
speakSentence.setVoice("kate");

var gather = new BandwidthBxml.Verbs.Gather();
gather.setGatherUrl("https://gather.url/nextBXML");
gather.setTerminatingDigits("#");
gather.setFirstDigitTimeout(10);
gather.setSpeakSentence(speakSentence);

var response = new BandwidthBxml.Response();
response.addVerb(gather);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Please press a digit.");
$speakSentence->voice("kate");

$gather = new BandwidthLib\Voice\Bxml\Gather();
$gather->gatherUrl("https://gather.url/nextBXML");
$gather->terminatingDigits("#");
$gather->firstDigitTimeout(10);
$gather->speakSentence($speakSentence);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($gather);

echo $response->toBxml();
echo "\n";
```

{% common %}

#### Example 2 of 3: Gather With Repeated Audio Prompt
This example shows the Gather verb being used to repeatedly prompt the user to press a digit. If the
user presses nothing, the prompt will play five times. If the user presses a digit at any point, the
Gather will end and send the result to the **gatherUrl**

{% sample lang="http" %}


```XML
<Response>
   <Gather gatherUrl="https://gather.url/nextBXML" repeatCount="5" maxDigits="1">
      <SpeakSentence>I am going to keep asking you to press a digit</SpeakSentence>
   </Gather>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .text("I am going to keep asking you to press a digit.")
        .build();

Gather gather = Gather.builder()
        .gatherUrl("https://gather.url/nextBxml")
        .repeatCount(5)
        .maxDigits(1)
        .audioProducer(speakSentence)
        .build();

Response response = Response.builder().build()
        .add(gather);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}


```csharp
Response response = new Response();

SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "I am going to keep asking you to press a digit";

Gather gather = new Gather();
gather.GatherUrl = "https://gather.url/nextBXML";
gather.RepeatCount = 5;
gather.MaxDigits = 1;
gather.SpeakSentence = speakSentence;

response.Add(gather);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "I am going to keep asking you to press a digit"
})
gather = Bandwidth::Voice::Gather.new({
    :gather_url => "https://gather.url/nextBXML",
    :max_digits => "1",
    :repeat_count => "5",
    :speak_sentence => speak_sentence
})

response.push(gather)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="I am going to keep asking you to press a digit"
)
gather = Gather(
    gather_url="https://gather.url/nextBXML",
    max_digits=1,
    repeat_count=5
    speak_sentence=speak_sentence
)
response.add_verb(gather)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("I am going to keep asking you to press a digit");

var gather = new BandwidthBxml.Verbs.Gather();
gather.setGatherUrl("https://gather.url/nextBXML");
gather.setMaxDigits(1);
gather.setRepeatCount(5);
gather.setSpeakSentence(speakSentence);

var response = new BandwidthBxml.Response();
response.addVerb(gather);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("I am going to keep asking you to press a digit");

$gather = new BandwidthLib\Voice\Bxml\Gather();
$gather->gatherUrl("https://gather.url/nextBXML");
$gather->maxDigits(1);
$gather->repeatCount(5);
$gather->speakSentence($speakSentence);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($gather);

echo $response->toBxml();
echo "\n";
```

{% common %}

#### Example 3 of 3: Gather With Multiple Nested Verbs
This example shows how to nest multiple PlayAudio and SpeakSentence verbs

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <Gather gatherUrl="https://gather.url/nextBXML">
        <SpeakSentence>First Sentence</SpeakSentence>
        <PlayAudio>https://audio1.com</PlayAudio>
        <PlayAudio>https://audio2.com</PlayAudio>
        <SpeakSentence>Second Sentence</SpeakSentence>
    </Gather>
</Response>
```

{% sample lang="java" %}

```java
List<AudioProducer> list = new ArrayList<>();
list.add(SpeakSentence.builder()
        .text("First Sentence")
        .build());
list.add(PlayAudio.builder()
        .audioUri("https://audio1.com")
        .build());
list.add(PlayAudio.builder()
        .audioUri("https://audio2.com")
        .build());
list.add(SpeakSentence.builder()
        .text("Second Sentence")
        .build());

Gather gather = Gather.builder()
        .audioProducer(list)
        .build();

Response response = Response.builder().build()
        .add(gather);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Gather gather = new Gather
{
    audioProducer = new List<IAudioProducer>(){ 
        new SpeakSentence
        {
            Sentence = "First Sentence"
        },
        new PlayAudio
        {
            Url = "https://audio1.com"
        },
        new PlayAudio
        {
            Url = "https://audio2.com"
        },
        new SpeakSentence
        {
            Sentence = "Second Sentence"
        }
    }
};

Response response = new Response();
response.Add(gather);

var output = response.ToBXML();

Console.WriteLine(output);
```

{% sample lang="ruby" %}

```ruby
speak_sentence_1 = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "First Sentence"
})
play_audio_1 = Bandwidth::Voice::PlayAudio.new({
    :url => "https://audio1.com"
})
play_audio_2 = Bandwidth::Voice::PlayAudio.new({
    :url => "https://audio2.com"
})
speak_sentence_2 = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Second Sentence"
})

gather = Bandwidth::Voice::Gather.new({
    :gather_url => "https://gather.url/nextBXML",
    :nested_verbs => [speak_sentence_1, play_audio_1, play_audio_2, speak_sentence_2]
})

response = Bandwidth::Voice::Response.new()
response.push(gather)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
speak_sentence_1 = SpeakSentence(
    sentence="First Sentence"
)
play_audio_1 = PlayAudio(
    url="https://audio1.com"
)
play_audio_2 = PlayAudio(
    url="https://audio2.com"
)
speak_sentence_2 = SpeakSentence(
    sentence="Second Sentence"
)

gather = Gather(
    gather_url="https://gather.url/nextBXML",
    nested_verbs=[speak_sentence_1, play_audio_1, play_audio_2, speak_sentence_2]
)

response = Response()
response.add_verb(gather)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
//coming soon
```

{% sample lang="php" %}

```php
$speakSentence1 = new BandwidthLib\Voice\Bxml\SpeakSentence("First Sentence");
$playAudio1 = new BandwidthLib\Voice\Bxml\PlayAudio("https://audio1.com");
$playAudio2 = new BandwidthLib\Voice\Bxml\PlayAudio("https://audio2.com");
$speakSentence2 = new BandwidthLib\Voice\Bxml\SpeakSentence("Second Sentence");

$gather = new BandwidthLib\Voice\Bxml\Gather();
$gather->gatherUrl("https://gather.url/nextBXML");
$gather->speakSentence($speakSentence1);
$gather->playAudio($playAudio1);
$gather->playAudio($playAudio2);
$gather->speakSentence($speakSentence2);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($gather);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
