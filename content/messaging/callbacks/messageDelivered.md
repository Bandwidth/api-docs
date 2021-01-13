{% method %}
# Message Delivered Event
In order to receive message events, you need to ensure you have set up your application to send callbacks to your server's URL.

{% raw %}

<aside class="alert general">
<p><b>
IMPORTANT NOTE ABOUT MMS AND GROUP MESSAGES!
</p></b>
MMS and Group messages do currently support delivery receipts. However, you will need to have this enabled. Without the delivery receipts enabled, you will still receive a message delivered event when the message is sent. The message delivered event will not represent true delivery for only MMS and Group Messages. This will mean your message has been handed off to the Bandwidth's MMSC network, but has not been confirmed at the downstream carrier.
</aside>

{% endraw %}

### Parameters
| Parameter             | Type     | Description                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string` | The Event type                                                                                                                                                                                                                                                                                                                                                      |
| time                  | `array`  | The time of the event described in the receipt                                                                                                                                                                                                                                                                                                                      |
| description           | `string` | A detailed description of the event described by the receipt                                                                                                                                                                                                                                                                                                        |
| to                    | `string` | The destination number for an outbound message receipt                                                                                                                                                                                                                                                                                                              |
| message               | `Object` | An object of message information                                                                                                                                                                                                                                                                                                                                    |
| message.id            | `string` | The unique ID of this message                                                                                                                                                                                                                                                                                                                                       |
| message.owner         | `string` | The phone number this particular message is associated with.<br> For an outbound message, this is always the `from` number.<br> For an inbound message, this will be (one of) the `to` number(s).<br>For instance, if this is an inbound group message, the `owner` field will be set to the `to` number that this particular copy of the group message belongs to. |
| message.time          | `string` | The time stamp of when message was created                                                                                                                                                                                                                                                                                                                          |
| message.direction     | `string` | Whether the message was sent from Bandwidth, or received by a Bandwidth number                                                                                                                                                                                                                                                                                      |
| message.to            | `array`  | The phone number (or numbers) the message the message was sent to. This will always be formatted as an array in the callback.<br><br>Note: On a POST request to create a message, this can be a String comprising a single number, or an array of one or more numbers. Bandwidth will always return the message.to value as an array in callbacks.                                                                                                                                                                         |
| message.from          | `string` | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                          |
| message.text          | `string` | Empty text/string. Message text content will not be sent in callback.                                                                                                                                                                                                                                                                                               |
| message.applicationId | `string` | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                            |
| message.media         | `array`  | A list of URLs to include as media attachments as part of the message                                                                                                                                                                                                                                                                                               |
| message.tag           | `string` | An custom String that you can use to track this particular message                                                                                                                                                                                                                                                                                                  |
| message.segmentCount  | `int`    | This indicates the number of segments the original message from the user is broken into before sending over to career networks                                                                                                                                                                                                                                      |

{% common %}

### Example 1 of 4: SMS Message delivered

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-delivered",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "ok",
    "to"            : "+12345678902",
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : ["+12345678902"],
      "from"          : "+12345678901",
      "text"          : "",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "owner"         : "+12345678902",
      "direction"     : "out",
      "segmentCount"  : 1
    }
  }
]
```

{% common %}

### Example 2 of 4: Toll-free Message delivered to handset

* Toll free phone numbers support "device-level" delivery receipts which indicate that the end-users **device** has received the message.
* A [timeout response with error-code](messageFailed.md) : **9902 - Timed out waiting for delivery receipt. The reason a delivery receipt was not received is not known.** does **not** indicate that the message was not received. Only that the end-users' device did not communicate back to the network indicating the message was received during the DLR timeout window.
* A DLR when the **from** number is **toll-free** and the **status** is **ok** indicates that the message was indeed delivered to the end users' device.

{% sample lang='http' %}


```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "time": "2020-03-27T15:01:22.646Z",
    "type": "message-delivered",
    "to": "+12345678902",
    "description": "ok",
    "message": {
      "id": "1585321273456iprz22vjeo4tvooc",
      "owner": "+18447242263",
      "applicationId": "82e028a4-a852-4c65-98fc-80d18216e527",
      "time": "2020-03-27T15:01:13.456Z",
      "segmentCount": 1,
      "direction": "out",
      "to": [
          "+12345678902"
      ],
      "from": "+18447242263",
      "text": "",
      "tag": ""
    }
  }
]
```

### Example 3 of 4: MMS Message delivered to carrier

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-delivered",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "Message delivered to carrier",
    "to"            : "+12345678902",
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : ["+12345678902"],
      "from"          : "+12345678901",
      "text"          : "",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "owner"        : "+12345678902",
      "direction"    : "out",
      "segmentCount" : 1,
      "media"        : [""https://s3.amazonaws.com/bw-v2-api/demo.jpg""]
    }
  }
]
```

{% common %}

### Example 4 of 4: Group MMS Message delivered to carrier

You will receive a unique callback per phonenumber sent in the group message. The example below shows **1 of the 2** callbacks that would be sent from Bandwidth.

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-delivered",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "Message delivered to carrier",
    "to"            : "+12345678902",
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : [
          "+12345678902",
          "+12345678903"
        ],
      "from"          : "+12345678901",
      "text"          : "",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "owner"         : "+12345678902",
      "direction"     : "out",
      "segmentCount"  : 1
    }
  }
]
```

{% endmethod %}
