{% method %}
## XML: `<StopGather>`
The StopGather verb is used to stop the DTMF detection that was previously started by a [`<StartGather>`](startGather.md) verb.

### Attributes
| Attribute | Description |
|:----------|:------------|
| None      | None        |

### Callbacks Received
None

{% common %}

#### Example 1 of 1: Stop gathering digits after a Transfer
This example shows how to use the StartGather verb to listen for digits pressed during a Transfer and stop after the Transfer ends.

{% sample lang="http" %}

```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StartGather dtmfUrl="https://startgather.url/callback" />
    <Transfer>
        <PhoneNumber>+15552221234</PhoneNumber>
    </Transfer>
    <StopGather/>
    <SpeakSentence>
        Digits are no longer being gathered
    </SpeakSentence>
    <Pause duration="10"/>
</Response>
```

{% sample lang="java" %}

```java
// TODO
```

{% sample lang="csharp" %}

```csharp
// TODO
```

{% sample lang="ruby" %}

```ruby
# TODO
```

{% sample lang="python" %}

```python
# TODO
```

{% sample lang="js" %}

```js
// TODO
```

{% sample lang="php" %}

```php
// TODO
```

{% endmethod %}
