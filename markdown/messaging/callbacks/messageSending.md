{% method %}
# Message Sending Event (MMS only)
In order to receive message events, you need to ensure you have set up your application to send callbacks to your server's URL.

You will receive this callback between when the message is received by Bandwidth and the terminal events (message delivered, message failed) for MMS only if you have the `Feature_MMS_DLR` feature flag enabled.

## Parameters

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
| message.direction     | `string` | The direction of the message relative to Bandwidth. Will only be `out` for this event |
| message.to            | `array`  | The phone number (or numbers) the message the message is sent to. On a POST, this can be a String, or an array of one or more numbers. In all other places, this will be an array.                                                                                                                                                                                  |
| message.from          | `string` | The phone number the message was sent from                                                                                                                                                                                                                                                                                                                          |
| message.text          | `string` | Empty text/string. Message text content will not be sent in callback.                                                                                                                                                                                                                                                                                               |
| message.applicationId | `string` | The ID of the Application your `from` number is associated with in the Bandwidth Phone Number Dashboard.                                                                                                                                                                                                                                                            |
| message.media         | `array`  | A list of URLs to include as media attachments as part of the message                                                                                                                                                                                                                                                                                               |
| message.tag           | `string` | An custom String that you can use to track this particular message                                                                                                                                                                                                                                                                                                  |
| message.segmentCount  | `int`    | This indicates the number of segments the original message from the user is broken into before sending over to career networks                                                                                                                                                                                                                                      |

{% common %}

## Example: MMS Sending

{% sample lang='http' %}

```http
[
    {
        "time": "2020-06-25T18:42:36.979Z",
        "type": "message-sending",
        "to": "+19842397270",
        "description": "Message is sending to carrier",
        "message": {
            "id": "1593110555875xo7watq5px6rbe5d",
            "owner": "+19196494865",
            "applicationId": "cfd4fb83-7531-4acc-b471-42d0bb76a65c",
            "time": "2020-06-25T18:42:35.876Z",
            "segmentCount": 1,
            "direction": "out",
            "to": ["+19842397270"],
            "from": "+19196494865",
            "text": "",
            "media": ["https://s3.amazonaws.com/tpensyl/catapult.jpg"],
            "tag": "v2 lab"
        }
    }
]
```


{% endmethod %}
