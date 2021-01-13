{% method %}
# Message Failed Event
In order to receive message events, you need to ensure you have set up your application to send callbacks to your server's URL.

For MMS and Group Messages, you will only receive this callback if you have enabled delivery receipts on MMS.

### Parameters
| Parameter             | Type      | Description                                                                                                                                                                                                                                                                                                                                                         |
|:----------------------|:----------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string`  | The Event type                                                                                                                                                                                                                                                                                                                                                      |
| time                  | `array`   | The time of the event described in the receipt                                                                                                                                                                                                                                                                                                                      |
| errorCode             | `integer` | The error code (if any). See the [error docs](../errors/codes.md) for a detailed list                                                                                                                                                                                                                                                                               |
| description           | `string`  | A detailed description of the event described by the receipt                                                                                                                                                                                                                                                                                                        |
| to                    | `string`  | The destination number for an outbound message receipt                                                                                                                                                                                                                                                                                                              |
| message               | `Object`  | An object of message information                                                                                                                                                                                                                                                                                                                                    |
| message.id            | `string`  | The unique ID of this message                                                                                                                                                                                                                                                                                                                                       |
| message.owner         | `string`  | The phone number this particular message is associated with.<br> For an outbound message, this is always the `from` number.<br> For an inbound message, this will be (one of) the `to` number(s).<br>For instance, if this is an inbound group message, the `owner` field will be set to the `to` number that this particular copy of the group message belongs to. |
| message.time          | `string`  | The time stamp of when message was created                                                                                                                                                                                                                                                                                                                          |
| message.direction     | `string`  | Whether the message was sent from Bandwidth, or received by a Bandwidth number                                                                                                                                                                                                                                                                                      |
| message.to            | `array`   | The phone number (or numbers) the message the message is sent to. On a POST, this can be a String, or an array of one or more numbers. In all other places, this will be an array.                                                                                                                                                                                  |
| message.from          | `string`  | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                          |
| message.text          | `string`  | Empty text/string. Message text content will not be sent in callback.                                                                                                                                                                                                                                                                                               |
| message.applicationId | `string`  | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                            |
| message.media         | `array`   | A list of URLs to include as media attachments as part of the message                                                                                                                                                                                                                                                                                               |
| message.tag           | `string`  | An custom String that you can use to track this particular message                                                                                                                                                                                                                                                                                                  |
| message.segmentCount  | `int`     | This indicates the number of segments the original message from the user is broken into before sending over to career networks                                                                                                                                                                                                                                      |

{% common %}
### Example Error 1 of 2 (4432 - forbidden to country)

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-failed",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "forbidden to country",
    "to"            : "+52345678903",
    "errorCode"     : 4432,
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : [
          "+12345678902",
          "+52345678903"
        ],
      "from"          : "+12345678901",
      "text"          : "",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "media"         : [
          "https://s3.amazonaws.com/bw-v2-api/demo.jpg"
        ],
      "owner"         : "+12345678901",
      "direction"     : "out",
      "segmentCount"  : 1
    }
  }
]
```

### Example Error 2 of 2 (9902 - DLR Timeout)

* Timed out waiting for delivery receipt. The reason a delivery receipt was not received is not known.
* A timeout response with error-code : **9902 - Timed out waiting for delivery receipt. The reason a delivery receipt was not received is not known.** does **not** indicate that the message was not received. Only that the end-users' device did not communicate back to the network or the carrier did not provide us with a delivery confirmation

{% sample lang='http' %}

```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-failed",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "delivery-receipt-expired",
    "to"            : "+12345678902",
    "errorCode"     : 9902,
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : [
          "+12345678902",
        ],
      "from"          : "+18008675309",
      "text"          : "",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "owner"         : "+18008675309",
      "direction"     : "out",
      "segmentCount"  : 1
    }
  }
]
```

{% endmethod %}
