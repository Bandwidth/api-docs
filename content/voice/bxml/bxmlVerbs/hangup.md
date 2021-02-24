
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
| [CallComplete](../bxmlCallbacks/disconnect.md) | No                      |




#### Example 1 of 1: Hangup Verb
This shows how to use Bandwidth XML to hang up an existing call.




```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Hangup/>
</Response>
```



#### Java

```java
import com.bandwidth.voice.bxml.verbs.Hangup;
import com.bandwidth.voice.bxml.verbs.Response;

Hangup hangup = Hangup.builder().build();

Response response = Response.builder().build()
        .add(hangup);

System.out.println(response.toBXML());
```



#### C-Sharp

```csharp
using Bandwidth.Standard.Voice.Bxml;

Response response = new Response();

Hangup hangup = new Hangup();

response.Add(hangup);

Console.WriteLine(response.ToBXML());
```




#### Ruby

```ruby
require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

response = Bandwidth::Voice::Response.new()
hangup = Bandwidth::Voice::Hangup.new()

response.push(hangup)
puts response.to_bxml()
```



#### Python

```python
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import Hangup

response = Response()
hangup = Hangup()

response.add_verb(hangup)
print(response.to_bxml())
```



#### Node.js

```js
import { Hangup, Response } from '@bandwidth/voice';

var hangup = new Hangup();

var response = new Response(hangup);

console.log(response.toBxml());
```



#### PHP

```php
<?php

require "vendor/autoload.php";

$hangup = new BandwidthLib\Voice\Bxml\Hangup();
$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($hangup);

echo $response->toBxml();
echo "\n";
```


