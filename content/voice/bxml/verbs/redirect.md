
## XML: `<Redirect>`
The Redirect verb is used to redirect the current XML execution to another URL.

### Attributes

| Attribute              | Description |
|:-----------------------|:------------|
| redirectUrl            | (required) URL to request new BXML from. A [Redirect](../callbacks/redirect.md) event will be sent to this endpoint. May be a relative URL. |
| redirectMethod         | (optional) The HTTP method to use for the request to `redirectUrl`. GET or POST. Default Value is POST. |
| redirectFallbackUrl    | (optional) A fallback url which, if provided, will be used to retry the [Redirect](../callbacks/redirect.md) callback delivery in case `redirectUrl` fails to respond. |
| redirectFallbackMethod | (optional) The HTTP method to use to deliver the [Redirect](../callbacks/redirect.md) callback to `redirectFallbackUrl`. GET or POST. Default value is POST. |
| username               | (optional) The username to send in the HTTP request to `redirectUrl`. |
| password               | (optional) The password to send in the HTTP request to `redirectUrl`. |
| fallbackUsername       | (optional) The username to send in the HTTP request to `redirectFallbackUrl`. |
| fallbackPassword       | (optional) The password to send in the HTTP request to `redirectFallbackUrl`. |
| tag                    | (optional) A custom string that will be sent with this and all future callbacks unless overwritten by a future `tag` attribute or [`<Tag>`](tag.md) verb, or cleared.May be cleared by setting `tag=""`Max length 256 characters. |



&lt;Redirect&gt should be the last verb in the BXML, as any verbs after &lt;Redirect&gt; will not be executed.



### Callbacks Received

| Callbacks                            | Can reply with more BXML |
|:-------------------------------------|:-------------------------|
| [Redirect](../callbacks/redirect.md) | Yes                      |



#### Example 1 of 1: Redirect Verb
This shows how to use Bandwidth XML to redirect the response to a new url.




```XML
<?xml version="1.0" encoding="UTF-8"?>
<Response>
   <Redirect redirectUrl="http://flow.url/newFlow" username='username' password='password'/>
   <!--Username and Password are not required, but are included to demonstrate adding multiple attributes to the redirect tag-->
</Response>
```



#### Java

```java
Redirect redirect = Redirect.builder()
        .redirectUrl("https://flow.url/newFlow")
        .build();

Response response = Response.builder().build()
        .add(redirect);

System.out.println(response.toBXML());
```



#### C-Sharp

```csharp
using Bandwidth.Standard.Voice.Bxml;

Response response = new Response();

Redirect redirect = new Redirect();
redirect.RedirectUrl = "http://flow.url/newFlow";

response.Add(redirect);

Console.WriteLine(response.ToBXML());
```




#### Ruby

```ruby
require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

response = Bandwidth::Voice::Response.new()
redirect = Bandwidth::Voice::Redirect.new({
    :redirect_url => "http://flow.url/newFlow"
})

response.push(redirect)
puts response.to_bxml()
```



#### Python

```python
from bandwidth.voice.bxml.response import Response
from bandwidth.voice.bxml.verbs import Redirect

response = Response()
redirect = Redirect(
    redirect_url="http://flow.url/newFlow"
)

response.add_verb(redirect)
print(response.to_bxml())
```



#### NodeJS

```js
var redirect = new BandwidthBxml.Verbs.Redirect();
redirect.setRedirectUrl("https://flow.url/nextFlow");

var response = new BandwidthBxml.Response();
response.addVerb(redirect);

console.log(response.toBxml());
```



#### PHP

```php
$redirect = new BandwidthLib\Voice\Bxml\Redirect();
$redirect->redirectUrl("https://flow.url/newFlow");

$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($redirect);

echo $response->toBxml();
echo "\n";
```


