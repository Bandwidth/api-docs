
## XML: `<StartGather>`
The StartGather verb is used to get asynchronous notifications of DTMF digits collected in the call while other verbs are executed.

It can, for instance, listen for DTMF digits while a call is in a [`<Conference>`](conference.md),
in a [`<Transfer>`](transfer.md), in a [`<Bridge>`](bridge.md), or while executing other verbs.

It cannot be used with the [`<Forward>`](forward.md) verb.

It is paused during the execution of a [`<Gather>`](gather.md) verb; digits pressed during a [`<Gather>`](gather.md) will not be duplicated as DTMF events.

The StartGather verb can be cancelled by the [`<StopGather>`](stopGather.md) verb.

### Attributes
| Attribute           | Description |
|:--------------------|:------------|
| dtmfUrl             | URL to send the [DTMF](../bxmlAsyncCallbacks/dtmf.md) event to. May be a relative URL. |
| dtmfMethod          | (optional) The HTTP method to use for the request to `dtmfUrl`. GET or POST. Default value is POST. |
| username            | (optional) The username to send in the HTTP request to `dtmfUrl`. |
| password            | (optional) The password to send in the HTTP request to `dtmfUrl`. |
| tag                 | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or [`<Tag>`](tag.md) verb, or cleared. May be cleared by setting `tag=""`Max length 256 characters. |

### Callbacks Received
| Callback                      | Can reply with more BXML |
|:------------------------------|:-------------------------|
| [dtmf](../bxmlAsyncCallbacks/dtmf.md)  | No                       |



#### Example 1 of 1: Gather digits during a Conference
This example shows how to use the StartGather verb to listen for digits pressed while the call is in a Conference.
Whenever a digit is entered, a [dtmf](../bxmlAsyncCallbacks/dtmf.md) event is sent with the detected digit.



```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
    <StartGather dtmfUrl="https://startgather.url/callback" />
    <Conference>my-conference</Conference>
</Response>
```



#### Java

```java
// TODO
```




#### C-Sharp

```csharp
// TODO
```



#### Ruby

```ruby
# TODO
```



#### Python

```python
# TODO
```



#### Node.js

```js
// TODO
```



#### PHP

```php
// TODO
```

