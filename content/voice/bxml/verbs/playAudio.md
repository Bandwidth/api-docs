{% method %}
## XML: `<PlayAudio>`
The PlayAudio verb is used to play an audio file in the call. The URL of an audio file should be
included in the body of the `<PlayAudio>` tag. If a relative URL is given, it is resolved relative to the endpoint that returned the BXML. To ensure playback quality Bandwidth recommends limiting audio files to less than 1 hour in length or 200 MB in size.

Audio is cached according to [RFC 7234](https://tools.ietf.org/html/rfc7234). Our system may cache
your media up to the value of the response's `Cache-Control` header's `max-age` directive, or,
if none is present, until the time given in an `Expires` header. In either case, our system may
always cache for a shorter amount of time or not cache at all. If no `Cache-Control` or `Expires`
header is set on the response, media will not be cached.

The audio format is determined by the HTTP `Content-Type` header in the response. Our system supports:
- `audio/wav` and `audio/x-wav` for `.wav` files
  - Both `G711 μ-law` and `G711 A-law` are supported within the `pcm_s16le` container (signed, 16-bit, little-endian, PCM-encoded `.wav` file)
- `audio/mpeg`, `audio/mpeg3`, and `audio/mp3` for `.mp3` files
  - The following standards (and corresponding sample rates) are supported:
    - `MPEG-1 layer 3` (`48`, `44.1`, and `32` kHz)
    - `MPEG-2 layer 3` (`24`, `22.05`, and `16` kHz)
    - `MPEG-2.5 layer 3` (`12`, `11.025`, and `8` kHz)

Both `.wav` and `.mp3` can be in either mono or stereo format, but they will be mixed down to mono before being played.
Using higher-bitrate audio files won't meaningfully improve audio quality and will instead waste bandwidth, so using low bitrate formats such as PCMU (`G711 μ-law`) is preferred.


If the `Content-Type` is something other than the ones above or no `Content-Type` is found, we still try to determine the format by looking at the file extension. If the file extension is missing or it is something other than `.mp3` or `.wav`, we assume the media is `.wav` and it will be tried as such.

### Attributes
| ATTRIBUTE | Description                                                        |
|:----------|:-------------------------------------------------------------------|
| username  | (optional) The username to send in the HTTP request to `audioUri`. |
| password  | (optional) The password to send in the HTTP request to `audioUri`. |


### Text Content
| Name     | Description                                                                                                                                  |
|:---------|:---------------------------------------------------------------------------------------------------------------------------------------------|
| audioUri | The URL of the audio file to play. May be a relative URL. <br> ⚠️ **ONLY** `.wav` and `.mp3` files as described above are supported. |


### Callbacks Received

None

{% common %}

#### Example 1 of 1:  PlayAudio Verb

This shows how to use Bandwidth XML to play two audio clips into a phone call.

⚠️ **ONLY** .wav and .mp3 files as described above are supported.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <PlayAudio>https://audio.url/audio1.wav</PlayAudio>
   <PlayAudio>https://audio.url/audio2.mp3</PlayAudio>
</Response>
```

{% sample lang="java" %}

```java
PlayAudio playAudio1 = PlayAudio.builder()
        .audioUri("https;//audio.url/audio1.wav")
        .build();

PlayAudio playAudio2 = PlayAudio.builder()
        .audioUri("https://audio.url/audio2.mp3")
        .build();

Response response = Response.builder().build()
        .add(playAudio1)
        .add(playAudio2);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

PlayAudio playAudio1 = new PlayAudio();
playAudio1.Url = "https://audio.url/audio1.wav";

PlayAudio playAudio2 = new PlayAudio();
playAudio2.Url = "https://audio.url/audio2.mp3";

response.Add(playAudio1);
response.Add(playAudio2);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
play_audio_1 = Bandwidth::Voice::PlayAudio.new({
    :url => "https://audio.url/audio1.wav"
})
play_audio_2 = Bandwidth::Voice::PlayAudio.new({
    :url => "https://audio.url/audio2.mp3"
})

response.push(play_audio_1)
response.push(play_audio_2)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
play_audio_1 = PlayAudio(
    url="https://audio.url/audio1.wav"
)
play_audio_2 = PlayAudio(
    url="https://audio.url/audio2.mp3"
)

response.add_verb(play_audio_1)
response.add_verb(play_audio_2)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var playAudio1 = new BandwidthBxml.Verbs.PlayAudio();
playAudio1.setUrl("https://audio.url/audio1.wav");
var playAudio2 = new BandwidthBxml.Verbs.PlayAudio();
playAudio2.setUrl("https://audio.url/audio2.mp3");

var response = new BandwidthBxml.Response();
response.addVerb(playAudio1);
response.addVerb(playAudio2);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$playAudio1 = new BandwidthLib\Voice\Bxml\PlayAudio("https://audio.url/audio1.wav");
$playAudio2 = new BandwidthLib\Voice\Bxml\PlayAudio("https://audio.url/audio2.mp3");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($playAudio1);
$response->addVerb($playAudio2);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
