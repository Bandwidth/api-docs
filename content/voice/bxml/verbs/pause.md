

## XML: `<Pause>`
The Pause verb is used to delay verb execution for a period of time, during which the call will be silent.

### Attributes

| ATTRIBUTE | Description                                                                                            |
|:----------|:-------------------------------------------------------------------------------------------------------|
| duration  | (optional) The 'duration' attribute specifies how many seconds Bandwidth will wait silently before continuing on. Default value is 1. Range: decimal values between 0.1 - 86400. |


### Callbacks Received

None


#### Example 1 of 1:  Pause Verb
This shows how to use Bandwidth XML to pause for 2 seconds.




```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Pause duration="2" />
</Response>
```



#### Java

```java
Pause pause = Pause.builder()
        .duration(2.0)
        .build();

Response response = Response.builder().build()
        .add(pause);

System.out.println(response.toBXML());
```



#### C-Sharp

```csharp
using Bandwidth.Standard.Voice.Bxml;

Response response = new Response();

Pause pause = new Pause();
pause.Duration = 10;

response.Add(pause);

Console.WriteLine(response.ToBXML());
```




#### Ruby

```ruby
require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

response = Bandwidth::Voice::Response.new()
pause = Bandwidth::Voice::Pause.new({
    :duration => 2
})

response.push(pause)
puts response.to_bxml()
```



#### Python

```python
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import Pause

response = Response()
pause = Pause(duration=2)

response.add_verb(pause)
print(response.to_bxml())
```



#### NodeJS

```js
var pause = new BandwidthBxml.Verbs.Pause();
pause.setDuration(2);

var response = new BandwidthBxml.Response();
response.addVerb(pause);

console.log(response.toBxml());
```



#### PHP

```php
<?php

require "vendor/autoload.php";

$pause = new BandwidthLib\Voice\Bxml\Pause();
$pause->duration(2);

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($pause);

echo $response->toBxml();
echo "\n";
```


