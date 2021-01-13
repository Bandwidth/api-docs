{% method %}
## XML: `<Hangup>`
The Hangup verb is used to hang up the current call.

The Hangup verb is also used to reject incoming, unanswered calls. An empty `<Response/>` is equivalent to a `<Response>` containing a `<Hangup/>`.

You will not be charged for rejected calls.


### Attributes

| ATTRIBUTE | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received

| Callback                         | Can reply with more BXML |
|:---------------------------------|:-------------------------|
| [CallComplete](../callbacks/disconnect.md) | No                      |

{% common %}


#### Example 1 of 1: Hangup Verb
This shows how to use Bandwidth XML to hang up an existing call.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Hangup/>
</Response>
```

{% sample lang="java" %}

```java
Hangup hangup = Hangup.builder().build();

Response response = Response.builder().build()
        .add(hangup);

System.out.println(response.toBXML());
```

{% sample lang="csharp" %}

```csharp
Response response = new Response();

Hangup hangup = new Hangup();

response.Add(hangup);

Console.WriteLine(response.ToBXML());
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
hangup = Bandwidth::Voice::Hangup.new()

response.push(hangup)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
response = Response()
hangup = Hangup()

response.add_verb(hangup)
print(response.to_bxml())
```

{% sample lang="js" %}

```js
var hangup = new BandwidthBxml.Verbs.Hangup();

var response = new BandwidthBxml.Response();
response.addVerb(hangup);

console.log(response.toBxml());
```

{% sample lang="php" %}

```php
$hangup = new BandwidthLib\Voice\Bxml\Hangup();
$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($hangup);

echo $response->toBxml();
echo "\n";
```

{% endmethod %}
