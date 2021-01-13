{% method %}

## XML: `<Conference>`
Used to join the current call into a conference.

Conference names are created and specified by your application. Conferences are implicitly created
the first time your application uses a conference name, and they are implicitly deleted when the
last member leaves the conference. We will create a unique ID for the conference, so your conference
names can be whatever you want. If the conference ends and then you later use the same conference
name, a new unique ID will be created.

To programmatically end a conference and immediately remove all members, use the
[update conference](../../methods/conferences/postConferencesConferenceId.md) endpoint. If a
conference is ended this way, removed members will continue executing their current BXML document,
starting with the verb right after the `<Conference>`, if any.

To programmatically remove a call from a conference while leaving other conference members in the
conference, use the [update call](../../methods/calls/postCallsCallId.md) endpoint.

A maximum of 20 calls may be in a particular conference.

A conference may last for at most 24 hours.

BXML returned by callbacks will be queued and executed in the conference in the order they are received, never overlapping. If an error happens when executing a verb, it will continue to the next verb normally.

Only the following verbs are valid for conferences:
* [`PlayAudio`](playAudio.md)
* [`SpeakSentence`](speakSentence.md)
* [`StartRecording`](startRecording.md)
* [`StopRecording`](stopRecording.md)
* [`PauseRecording`](pauseRecording.md)
* [`ResumeRecording`](resumeRecording.md)

BXML containing unsupported verbs will be rejected completely.

### Text Content
| Name        | Description |
|:------------|:------------|
| name        | The name of the conference with alphanumeric characters and the symbols `-`, `_`, and `.` with maximum length of 100 characters. |

#### Conference attributes
| Attribute                     | Description |
|:------------------------------|:------------|
| mute                          | (optional) A boolean value to indicate whether the member should be on mute in the conference. When muted, a member can hear others speak, but others cannot hear them speak. Defaults to false. |
| hold                          | (optional) A boolean value to indicate whether the member should be on hold in the conference. When on hold, a member cannot hear others, and they cannot be heard. Defaults to false. |
| callIdsToCoach                | (optional) A comma-separated list of call ids to coach. When a call joins a conference with this attribute set, it will coach the listed calls. Those calls will be able to hear and be heard by the coach, but other calls in the conference will not hear the coach.<br><br>Calls may be added to the conference in any order - if the matching calls are not already in the conference, then once the matching calls are added, the coach will be able to hear and speak to the matching calls. Note that this will not add the matching calls to the conference; each call must individually execute a `<Conference>` verb to join.<br><br>The coach can leave and rejoin the conference, but the conference may only have one coach at a time. |
| conferenceEventUrl            | (optional) URL to send Conference events to. The URL, method, username, and password are set by the BXML document that creates the conference, and all events related to that conference will be delivered to that same endpoint. If more calls join afterwards and also have this property (or any other callback related properties like `username` and `password`), they will be ignored and the original callback information will be used. This URL may be a relative endpoint. |
| conferenceEventMethod         | (optional) The HTTP method to use for the request to `conferenceEventUrl`. GET or POST. Default value is POST. |
| conferenceEventFallbackUrl    | (optional) A fallback url which, if provided, will be used to retry the conference callback deliveries in case `conferenceEventUrl` fails to respond. |
| conferenceEventFallbackMethod | (optional) The HTTP method to use to deliver the conference callbacks to `conferenceEventFallbackUrl`. GET or POST. Default value is POST. |
| username                      | (optional) The username to send in the HTTP request to `conferenceEventUrl`. |
| password                      | (optional) The password to send in the HTTP request to `conferenceEventUrl`. |
| fallbackUsername              | (optional) The username to send in the HTTP request to `conferenceEventFallbackUrl`. |
| fallbackPassword              | (optional) The password to send in the HTTP request to `conferenceEventFallbackUrl`. |
| tag                           | (optional) A custom string that will be sent with these and all future callbacks unless overwritten by a future `tag` attribute or [`<Tag>`](tag.md) verb, or cleared.<br><br>May be cleared by setting `tag=""`<br><br>Max length 256 characters.<br><br>The tag that is set for the call that creates the conference is the tag that will be sent with all callbacks related to the conference. For example, if the call that creates the conference has a tag set, and another call with a different tag joins the same conference, the first call's tag will be sent with both `conferenceMemberJoin` events. |
| callbackTimeout               | (optional) This is the timeout (in seconds) to use when delivering callbacks for the conference. If not set, it will inherit the callback timeout from the call that creates the conference. Can be any numeric value (including decimals) between 1 and 25. |

### Callbacks Received
| Callbacks                                                      | Can reply with BXML |
|:---------------------------------------------------------------|:--------------------|
| [Conference Created](../callbacks/conferenceCreated.md)        | Yes                 |
| [Conference Member Join](../callbacks/conferenceMemberJoin.md) | Yes                 |
| [Conference Member Exit](../callbacks/conferenceMemberExit.md) | Yes                 |
| [Conference Completed](../callbacks/conferenceCompleted.md)    | No                  |

{% common %}

### Example 1 of 2: Join Conference
This shows how to use Bandwidth XML to add a call in a conference.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">You will be added to your conference now.</SpeakSentence>
    <Conference>my-conference</Conference>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
    .gender("male")
    .text("You will be added to your conference now.")
    .build();

Conference conference = Conference.builder()
    .name("my-conference")
    .build();

Response response = Response.builder().build()
    .add(speakSentence)
    .add(conference);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
SpeakSentence speakSentence = new SpeakSentence
{
    Gender = "male",
    Sentence = "You will be added to your conference now."
};

Conference conference = new Conference {
    Name = "my-conference"
};

Response response = new Response();
response.Add(speakSentence);
response.Add(conference);

Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "You will be added to your conference now.",
    :gender => "male"
})
conference = Bandwidth::Voice::Conference.new({
    :conference_name => 'my-conference'
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence)
response.push(conference)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
speak_sentence = SpeakSentence("You will be added to your conference now.", gender="male")
conference = Conference("my-conference")

response = Response()
response.add_verb(speak_sentence)
response.add_verb(conference)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("You will be added to your conference now.");
speakSentence.setGender("male");

var conference = new BandwidthBxml.Verbs.Conference();
conference.setName('my-conference');

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);
response.addVerb(conference);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("You will be added to your conference now.");
$speakSentence->gender("male");

$conference = new BandwidthLib\Voice\Bxml\Conference("my-conference");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
$response->addVerb($conference);

echo $response->toBxml();
echo "\n";
```

{% common %}

### Example 2 of 2: Join Conference as Coach
This shows how to add a coach in a conference.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <SpeakSentence gender="male">Welcome. You are going to coach 2 calls, please wait.</SpeakSentence>
    <Conference callIdsToCoach="c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f">my-conference</Conference>
</Response>
```

{% sample lang="java" %}

```java
SpeakSentence speakSentence = SpeakSentence.builder()
    .gender("male")
    .text("Welcome. You are going to coach 2 calls, please wait.")
    .build();

List<String> ids = new ArrayList<>();
ids.add("c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d");
ids.add(("c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f"));

Conference conference = Conference.builder()
    .name("my-conference")
    .callIdsToCoach(ids)
    .build();

Response response = Response.builder().build()
    .add(speakSentence)
    .add(conference);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
SpeakSentence speakSentence = new SpeakSentence
{
    Gender = "male",
    Sentence = "Welcome. You are going to coach 2 calls, please wait."
};

Conference conference = new Conference {
    CallIdsToCoach = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
    Name = "my-conference"
};

Response response = new Response();
response.Add(speakSentence);
response.Add(conference);

 Console.WriteLine(response.ToBXML());
```

{% sample lang="ruby" %}

```ruby
speak_sentence = Bandwidth::Voice::SpeakSentence.new({
    :sentence => "Welcome. You are going to coach 2 calls, please wait.",
    :gender => "male"
})
conference = Bandwidth::Voice::Conference.new({
    :conference_name => 'my-conference',
    :call_ids_to_coach => "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f",
    #or
    :call_ids_to_coach => ["c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d", "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f"]
})

response = Bandwidth::Voice::Response.new()
response.push(speak_sentence)
response.push(conference)

puts response.to_bxml()
```

{% sample lang="python" %}

```python
speak_sentence = SpeakSentence("Welcome. You are going to coach 2 calls, please wait.", gender="male")
conference = Conference("my-conference", call_ids_to_coach = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f")
#or
conference = Conference("my-conference", call_ids_to_coach = ["c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d","c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f"])

response = Response()
response.add_verb(speak_sentence)
response.add_verb(conference)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
var speakSentence = new BandwidthBxml.Verbs.SpeakSentence();
speakSentence.setSentence("You will be added to your conference now.");
speakSentence.setGender("male");

var conference = new BandwidthBxml.Verbs.Conference();
conference.setCallIdsToCoach('c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f');
conference.setName('my-conference');

var response = new BandwidthBxml.Response();
response.addVerb(speakSentence);
response.addVerb(conference);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Welcome. You are going to coach 2 calls, please wait.");
$speakSentence->gender("male");

$conference = new BandwidthLib\Voice\Bxml\Conference("my-conference");
$conference->callIdsToCoach("c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d,c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f");
//or
$conference->callIdsToCoachArray(["c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d", "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f"]);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
$response->addVerb($conference);

echo $response->toBxml();
echo "\n";
```

{% common %}

{% endmethod %}
