
## XML: `<Tag>`
The Tag verb is used to set a new tag value without executing a callback. This new tag will be sent with
all future callbacks unless overwritten by a future `tag` attribute or `<Tag>` verb, or cleared.

### Text Content
| Name | Description |
|:-----|:------------|
| tag  | The new tag value. Leading and trailing whitespace is trimmed. Leave blank to clear the tag. |

### Callbacks Received

None



#### Example 1 of 1: Tag Verb
This shows how to use the  verb and its effects on callback events. In this example, we only
affect the [disconnect event](../bxmlCallbacks/disconnect.md), but if there were other callbacks, they
would also be affected.




```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Tag>audio playing</Tag>
   <!-- If the call is hung up during the audio clip, the tag value reported in the disconnect event will be "audio playing" -->
   <PlayAudio>/myMediaFile.mp3</PlayAudio>
   <Tag>audio ended</Tag>
   <!-- If the call is hung up after the audio clip, the tag value reported in the disconnect event will be "audio ended" -->
</Response>
```



#### Java

```java
// Coming soon
```



#### C-Sharp

```csharp
// Coming soon
```




#### Ruby

```ruby
// Coming soon
```



#### Python

```python
# Coming soon
```



#### NodeJS

```js
// Coming soon
```



#### PHP

```php
// Coming soon
```


