
# Incoming Group Message Event

In order to receive message events, you need to ensure you have set up your application to send callbacks to your server's URL.

When sending to Group Messages, there is a maximum of 10 participants in a Group.

**For inbound messages**, we do not limit the amount of recipients. We will pass along any messages we receive, **even if there are more than 10 recipients**.
If you wanted to reply to all `9+{n}` recipients using V2 APIs, Bandwidth will reply with a [400 error (as you are limited to 10 recipients when sending outbound)](../errors/httpErrors.md#http-400)
You will need to break up the responses into separate messages to respond to more than `9+{n}` participants

### Parameters

| Parameter             | Type     | Description                                                                                                                                                                                                                                                                                                                                                                                             |
|:----------------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| type                  | `string` | The Event type                                                                                                                                                                                                                                                                                                                                                                                          |
| time                  | `array`  | The time of the event described in the receipt                                                                                                                                                                                                                                                                                                                                                          |
| description           | `string` | A detailed description of the event described by the receipt                                                                                                                                                                                                                                                                                                                                            |
| to                    | `string` | The destination number for an outbound group message receipt                                                                                                                                                                                                                                                                                                                                            |
| message               | `Object` | An object of message information                                                                                                                                                                                                                                                                                                                                                                        |
| message.id            | `string` | The unique ID of this message                                                                                                                                                                                                                                                                                                                                                                           |
| message.owner         | `string` | The phone number this particular message is associated with.<br> For an outbound message, this is always the `from` number.<br> For an inbound message, this will be (one of) the `to` number(s).<br>For instance, if this is an inbound group message, the `owner` field will be set to the `to` number that this particular copy of the group message belongs to.                                     |
| message.time          | `string` | The time stamp of when message was created                                                                                                                                                                                                                                                                                                                                                              |
| message.direction     | `string` | Whether the message was sent from Bandwidth, or received by a Bandwidth number                                                                                                                                                                                                                                                                                                                          |
| message.to            | `array`  | The phone number (or numbers) the message the message is sent to. On a POST, this can be a String, or an array of one or more numbers. In all other places, this will be an array.                                                                                                                                                                                                                      |
| message.from          | `string` | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                                                              |
| message.text          | `string` | The text content of the message                                                                                                                                                                                                                                                                                                                                                                         |
| message.applicationId | `string` | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                                                                |
| message.media         | `array`  | A list of URLs to include as media attachments as part of the message. <br> Using the [v2 media api](../methods/media/about.md) You can download the media **WITHIN 2 DAYS** <br><br> The URL will look something like: <br> `https://messaging.bandwidth.com/api/v2/users/{accountId}/media/{uploaded-file-name}` <br><br> Where `uploaded-file-name` is the original filename of your uploaded media. |
| message.segmentCount  | `int`    | This indicates the number of segments the original message from the user is broken into before sending over to carrier networks. Segmentation of messages depends on the size and encoding. Bandwidth will segment the message if the character count is over the below limits: <br><br> - 160 for GSM-7 <br> - 70 for UCS-2 <br> <br> For MMS messages the segment count will always be set to 1       |


### Example 1 of 2: Incoming group message with single media



```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-received",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "Incoming message received",
    "to"            : "+12345678902",
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : [
          "+12345678902",
          "+12345678903"
        ],
      "from"          : "+12345678901",
      "text"          : "Hey, check this out!",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "media"         : [
        "https://messaging.bandwidth.com/api/v2/users/{accountId}/media/14762070468292kw2fuqty55yp2b2/0/bw.png"
        ],
      "owner"         : "+12345678902",
      "direction"     : "in",
      "segmentCount"  : 1
    }
  }
]
```



### Example 2 of 2: Incoming group message with multiple media



```http
POST /your_url HTTP/1.1
Content-Type: application/json; charset=utf-8
User-Agent: BandwidthAPI/v2

[
  {
    "type"          : "message-received",
    "time"          : "2016-09-14T18:20:16Z",
    "description"   : "Incoming message received",
    "to"            : "+12345678902",
    "message"       : {
      "id"            : "14762070468292kw2fuqty55yp2b2",
      "time"          : "2016-09-14T18:20:16Z",
      "to"            : [
          "+12345678902",
          "+12345678903"
        ],
      "from"          : "+12345678901",
      "text"          : "Hey, check this out!",
      "applicationId" : "93de2206-9669-4e07-948d-329f4b722ee2",
      "media"         : [
        "https://messaging.bandwidth.com/api/v2/users/{accountId}/media/14762070468292kw2fuqty55yp2b2/0/bw.png",
        "https://messaging.bandwidth.com/api/v2/users/{accountId}/media/14762070468292kw2fuqty55yp2b2/1/bandwidth_logo.png",
        "https://messaging.bandwidth.com/api/v2/users/{accountId}/media/14762070468292kw2fuqty55yp2b2/2/Bandwidth_Contact.png"
        ],
      "owner"         : "+12345678902",
      "direction"     : "in",
      "segmentCount"  : 1
    }
  }
]
```


