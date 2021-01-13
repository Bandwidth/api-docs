{% method %}

## XML: `<Ring>`
The Ring verb is used to play ringing audio on a call.

### Attributes

| ATTRIBUTE | Description                                                                                            |
|:----------|:-------------------------------------------------------------------------------------------------------|
| duration  | (optional) How many seconds to play ringing on the call. Default value is 5. Range: decimal values between 0.1 - 86400.

### Callbacks Received

None

{% common %}
#### Example 1 of 1:  Ring Verb
This example shows how to use the Ring verb to play ringing audio on a call for 10 seconds.

{% sample lang="http" %}


```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Ring duration="10" />
</Response>
```

{% sample lang="java" %}

```java
// Coming soon
```

{% sample lang="csharp" %}

```csharp
// Coming soon
```


{% sample lang="ruby" %}

```ruby
response = Bandwidth::Voice::Response.new()
ring = Bandwidth::Voice::Ring.new({
    :duration => 10
})

response.push(ring)
puts response.to_bxml()
```

{% sample lang="python" %}

```python
ring = Ring(
    duration=10
)

response = Response()
response.add_verb(ring)

print(response.to_bxml())
```

{% sample lang="js" %}

```js
// Coming soon
```

{% sample lang="php" %}

```php
$ring = new BandwidthLib\Voice\Bxml\Ring();
$ring->duration(10);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($ring);

echo $response->toBxml();
```

{% endmethod %}
