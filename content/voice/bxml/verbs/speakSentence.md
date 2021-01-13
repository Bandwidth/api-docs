{% method %}
## XML: `<SpeakSentence>`
The SpeakSentence verb translates text to speech and plays the resulting audio on the call


### Attributes

Attributes of the speaker may be changed using these values. The default speaker is a `female` speaker with locale
`en_US`.

To change the gender or locale of the speaker, change the appropriate attributes and a new
voice will be selected that matches the new `gender` and `locale`.

To choose a specific voice by name, use the `voice` attribute.

| Attribute | Description                                                                                                                                                                      |
|:----------|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| voice     | Selects the voice of the speaker. Consult the `voice` column in the below table for valid values.<br><br>If the `voice` attribute is present, `gender` and `locale` are ignored. |
| gender    | Selects the gender of the speaker. Valid values are `"male"` or `"female"`.<br><br>Default `"female"`                                                                            |
| locale    | Selects the locale of the speaker. Consult `locale` column in the below table for valid values.<br><br>Default `"en_US"`                                                         |


### Text Content
| Name     | Description                                                                                                                                  |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| text | The text to speak. Cannot be blank. Can be a mixture of plain text and SSML tags (see below for list of supported tags). |

### Supported Voices
The table below shows a mapping of our supported voices.  It also maps our voice names to our current TTS provider (Amazon Polly).  Please note: in order to provide our customers the best experience possible we reserve the right to change TTS providers in the future.

| **voice** | **locale** | **gender** | **Provider Name (AWS Polly)** |
|:----------|:-----------|:-----------|:-----------|
| julie     | en_US      | female     | Joanna     |
| kate      | en_US      | female     | Kendra     |
| susan     | en_US      | female     | Kimberly   |
| dave      | en_US      | male       | Matthew    |
| paul      | en_US      | male       | Matthew    |
| bridget   | en_UK      | female     | Amy        |
| simon     | en_UK      | male       | Brian      |
| katrin    | de         | female     | Marlene    |
| stefan    | de         | male       | Hans       |
| esperanza | es         | female     | Conchita   |
| violeta   | es         | female     | Lucia      |
| jorge     | es         | male       | Enrique    |
| rosa      | es_MX      | female     | Mia        |
| jolie     | fr         | female     | Celine     |
| bernard   | fr         | male       | Mathieu    |
| paola     | it         | female     | Carla      |
| luca      | it         | male       | Giorgio    |

### SSML Tags Supported:

List of supported SSML tags.

Full details about SSML tags can be found at:
https://www.w3.org/TR/2010/REC-speech-synthesis11-20100907/

#### `<break>`
Adds a pause to the speech. You can specify the duration of the pause by using either the `strength` or the `time` attributes.

Attributes:
 * `strength`: (optional) accepted values are: `none`, `x-weak`, `weak`, `medium` (default), `strong` or `x-strong`
 * `time`: (optional) the duration of the pause in seconds or milliseconds (e.g. `1s` or `1000ms`) with a maximum value of 10 seconds

#### `<emphasis>`
The contained text is spoken with emphasis.

Attributes:
 * `level`: (optional) defines the strength of emphasis to be applied, accepted values are: `strong`, `moderate` or `reduced`

#### `<lang>`
Specifies the natural language of the content. If you use a voice with an `en_US` locale and an `es-MX` lang, it will sound like an English-speaking American attempting to speak Spanish.

Attributes:
 * `xml:lang`: specifies the language, accepted values are:
   * `da-DK`: Danish
   * `nl-NL`: Dutch
   * `en-AU`: English, Australian
   * `en-GB`: English, British
   * `en-IN`: English, Indian
   * `en-US`: English, US
   * `fr-FR`: French
   * `fr-CA`: French, Canadian
   * `hi-IN`: Hindi
   * `de-DE`: German
   * `is-IS`: Icelandic
   * `it-IT`: Italian
   * `ja-JP`: Japanese
   * `ko-KR`: Korean
   * `nb-NO`: Norwegian
   * `pl-PL`: Polish
   * `pt-BR`: Portuguese, Brazilian
   * `pt-PT`: Portuguese, European
   * `ro-RO`: Romanian
   * `ru-RU`: Russian
   * `es-ES`: Spanish, European
   * `es-MX`: Spanish, Mexican
   * `es-US`: Spanish, US
   * `sv-SE`: Swedish
   * `tr-TR`: Turkish
   * `cy-GB`: Welsh

#### `<p>`
Adds a pause between paragraphs.

#### `<phoneme>`
Use phonetic pronunciation for specific text.

Attributes:
 * `ph`: International Phonetic Alphabet (IPA) symbols, for more information see: http://www.internationalphoneticalphabet.org

#### `<prosody>`
Controls the volume, rate and pitch of the speech.

Attributes:
 * `pitch`: (optional) changes the pitch, accepted values: `x-low`, `low`, `medium`, `high`, `x-high`, `default` or a relative change in `%` (e.g. `-15%` or `20%`)
 * `rate`: (optional) changes the speaking rate, accepted values: `x-slow`, `slow`, `medium`, `fast`, `x-fast` or any positive percentage (e.g. `50%` for a speaking rate of half the default rate or `200%` for a speaking rate twice the default rate)
 * `volume`: (optional) changes the volume, accepted values: `silent`, `x-soft`, `soft`, `medium`, `loud`, `x-loud`, `default` or the volume in dB (e.g. `+1dB` or `-6dB`)

#### `<s>`
Adds a pause between lines or sentences.

#### `<say-as>`
Indicates how to interpret the text.<br>
More information at: https://www.w3.org/TR/2005/NOTE-ssml-sayas-20050526/

Attributes:
 * `interpret-as`: accepted values:
   * `date`: the contained text is a Gregorian calendar date, must specify the `format` attribute, see below
   * `time`: the contained text is a time in minutes and seconds (e.g. `1'20"`)
   * `telephone`: the contained text is a 7-digit or 10-digit telephone number (e.g. `2025551212`)
   * `characters`: enclosed text should be spoken as a series of alpha-numeric characters
   * `cardinal`: the enclosed text is an integral or decimal number and should be spoken as a cardinal number
   * `ordinal`: the enclosed text is an integral number and should be spoken as an ordinal number
 * `format`: (optional) used with `interpret-as="date"` to specify the date format, accepted values:
   * `mdy`: Month-day-year
   * `dmy`: Day-month-year
   * `ymd`: Year-month-day
   * `md`: Month-day
   * `dm`: Day-month
   * `ym`: Year-month
   * `my`: Month-year
   * `d`: Day
   * `m`: Month
   * `y`: Year

#### `<sub>`
The text in the `alias` attribute replaces the contained text for pronunciation.

Attributes:
 * `alias` : string to be spoken

### Callbacks Received
None

{% common %}

### Example 1 of 2:  SpeakSentence Verb
This shows how to use Bandwidth XML to use text to speech to speak a sentence into a phone call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <SpeakSentence voice="julie">
      This is a test
   </SpeakSentence>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .text("This is a test")
        .voice("julie")
        .build();

Response response = Response.builder().build()
        .add(speakSentence);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "This is a test";
speakSentence.Voice = "julie";

response.Add(speakSentence);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "This is a test",
    :voice => "julie"
})

response.push(speak_sentence)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence="This is a test",
    voice="julie"
)

response.add_verb(speak_sentence)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("This is a test");
speakSentence.setVoice("julie");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("This is a test");
$speakSentence->voice("julie");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);

echo $response->toBxml();
echo "\n";
```

{% common %}

### Example 2 of 2: SpeakeSentence and SSML

This shows how to use Bandwidth XML with SSML tags to modify the way the text sounds.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence locale="en_US">
        Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.
        Please leave a message.
    </SpeakSentence>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
        .text("Hello, you have reached the home of <lang xml:lang=\"es - MX\">Antonio Mendoza</lang>.  Please leave a message.")
        .voice("jorge")
        .build();

Response response = Response.builder().build()
        .add(speakSentence);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

SpeakSentence speakSentence = new SpeakSentence();
speakSentence.Sentence = "Hello, you have reached the home of <lang xml:lang=\"es - MX\">Antonio Mendoza</lang>.  Please leave a message.";
speakSentence.Voice = "jorge";

response.Add(speakSentence);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => 'Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.Please leave a message.',
    :voice => "julie"
})

response.push(speak_sentence)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
speak_sentence = SpeakSentence(
    sentence='Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.Please leave a message.',
    voice="julie"
)

response.add_verb(speak_sentence)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence('Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.Please leave a message');
speakSentence.setVoice("julie");

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence('Hello, you have reached the home of <lang xml:lang="es-MX">Antonio Mendoza</lang>.Please leave a message.');
$speakSentence->locale("en_US");
$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
echo $response->toBxml();
```

{% endmethod %}
