This page contains a list of all error codes and properties of the error

## Bandwidth Detected Client Errors

A 4xx code indicates that Bandwidth or the downstream carrier has identified some element of the message request unacceptable.  Repeating the request will produce the same result.

| Code | Description | Friendly Description | Explanation Of Error | Billable |
|:--|:--|:--|:--|:--|
| 4001 | service-not-allowed | Message was rejected for reasons other than those covered by other 4xxx codes | This is a general error that the service you are attempting to use is not allowed; you may have inaccurate permissions, formating or may not be enable to use that service. | NO |
| 4301 | malformed-invalid-encoding | Malformed message encoding | The message contains invalid characters that are not supported. Bandwidth cannot re-encode message for destination.  | NO |
| 4302 | malformed-invalid-from-number | Malformed From number | The From number associated with the message is a number not routable to a carrier or valid in the industry (Ex: a 9 digit number).  | NO |
| 4303 | malformed-invalid-to-number | Malformed To Number | The To number associated with the message is a number not routable to a carrier or valid in the industry (Ex: a 9 digit number).  | NO |
| 4350 | malformed-for-destination | Malformed message encoding | Message passed validation on receive stage, but failed on send. This is likely because the destination number (To) is an invalid number. | NO |
| 4360 | message-not-sent-expiration-date-passed | Message expired | Message was not sent because the specified expiration date passed before the message was able to send | NO |
| 4401 | rejected-routing-error | BW is unable to route the message | Message is unable to be routed within Bandwidth particularly when the source and destination are the same number. The destination or To number is mis-provisioned or there is a configuration with the message that is causing a situation where a message is being sent repeatedly between the same numbers. | NO | 
| 4403 | rejected-forbidden-from-number | Messaging forbidden on From number | Messaging on this From number is forbidden most commonly because the number does not belong to BW or the account. Other reasons include it is not enabled in the Bandwidth Dashboard, the TN is aging, or it is an invalid number (i.e. 11111111111) | NO |
| 4405 | rejected-unallocated-from-number | Unallocated from number | The From telephone number is considered unallocated when the number does not exist in our database as an active number. This number is either not enabled for messaging at the industry level, or the number is not yet released in the industry | NO |
| 4406 | rejected-unallocated-to-number | Unallocated to number | The To number associated with this message, while a valid North American number, is not yet assigned to a carrier and the message cannot be sent downstream. | NO |
| 4431 | rejected-forbidden-shortcode | Messaging on shortcode forbidden | The message cannot be sent as the account associated with the message is not provisioned for Short code messaging | NO |
| 4432 | rejected-forbidden-country | Messaging to country forbidden | Bandwidth system indicates the account associated with the message is not enabled for messaging this zone, this country or this country is outside of messaging reach (specifically for MMS). | NO |
| 4433 | rejected-forbidden-tollfree | Messaging on Toll Free Number Forbidden | The account associated with this message is not enabled for toll free messaging | NO |
| 4434 | rejected-forbidden-tollfree-for-recipient | Messaging to Toll Free Number Forbidden | Messaging to this toll free number is not allowed. Number is likely not enabled for messaging or not active.  | NO |
| 4451 | rejected-wrong-user-id | Invalid User Id | The user id is not a valid id. Verify the user ID and retry the message | NO |
| 4452 | rejected-wrong-application-id | Invalid Application ID | The Application ID specified is not a valid Application Id, or the Application ID is not associated with the account | NO |
| 4470 | rejected-spam-detected | Rejected as SPAM (future) | This message has been filtered and blocked by a downstream carrier for spam. Messages can be blocked for a variety of reason, including but not limited to  volumetric filtering, content blocking, SHAFT violation, A2P | YES |
| 4481 | rejected-from-number-in-blacklist | From Number in black list | The From number has been flagged by Bandwidth as prohibited from sending messages. This is typically because Bandwidth or a downstream carriers has several violations; reports of spam, P2P violations, associated with this number. | NO |
| 4482 | rejected-to-number-in-blacklist | To Number in black list | The number you are attempting to send to is blocked from receiving messages.  | YES |
| 4492 | reject-emergency | Message to emergency number forbidden | Messaging to an emergency number is forbidden | NO |
| 4493 | rejected-unauthorized | Unauthorized | Bandwidth service indicates the sender is not authorized to send messages from the account. | NO |
| 4404 | rejected-forbidden-to-number | Messaging forbidden on To number | Messaging on this To number is forbidden. This could be the number is not active, not enable for messaging or is an invalid number (i.e. 11111111111) | NO |
| 4407 | rejected-account-not-defined-from-number | From Number is associated with account | Undefined source account id. The From number associated with this message is not associated with this account, is an invalid number or not configured appropriately to send messages. | NO |
| 4408 | rejected-account-not-defined-to-number | To Number not associated with account | Undefined destination account id. The To (destination) number is not associated with an account, is an invalid number or not configured correctly to receive messages. | NO |
| 4409 | rejected-invalid-from-profile | Invalid destination profile | Bandwidth failed to create destination. The destination profile is considered invalid, most often this is because the destination number does not support MMS. | NO |
| 4410 | media-unavailable | Could not download media | There was an error retrieving the media from the media web server.  Check the media URL and try to access directly to see if the media can be fetched successfully. | NO |
| 4411 | rejected-message-size-limit-exceeded | Combined size of media too large | The total size of MMS message media/attachments exceeded the max file size supported | NO |
| 4412 | media-content-invalid | Failed to parse Content-Type for media | The media content type in not a supported media content type. | NO |
| 4420 | rejected-carrier-does-not-exist | No Route to Destination Carrier | The upstream carrier associated with the message does not exist in Bandwidth configuration | NO |
| 4421 | rejected-forbidden-no-destination | No Route to Destination Carrier | The message cannot be sent downstream as the account associated with the message does not have permission to send to this destination.  You may not be provisioned to send to this destination.  | NO |
| 4435 | forbidden-too-many-recipients | Too Many Recipients | The group message has too many recipients. When sending Group Messages, there's a maximum of 10 participants in a Group. | NO |

## Carrier Reported Client Errors

| Code | Description | Friendly Description | Explanation Of Error | Billable |
|:--|:--|:--|:--|:--|
| 4700 | invalid-service-type | Carrier Rejected as Invalid Service Type | Carrier rejected message for invalid service type. This usually means messaging (SMS or MMS) is not supported by the carrier or handset.  | YES |
| 4701 | destination-service-unavailable | Destination is not reachable and SMS service is not available. | Carrier service is reporting the destination is not reachable or the SMS service is not available.  | YES |
| 4702 | destination-subscriber-unavailable | Destination subscriber is unavailable. | This error indicates the subscriber is unavailable. There are several reasons for this; the subscriber has turned off handset, the destination is unreachable or barred, the GSM subscriber is busy for outbound SMS, SIM card is full, voicemail is full, or cannot reach the destination handset and has stored the message for retry in its « Store & Forward » function. | YES |
| 4720 | invalid-destination-address | Carrier Rejected as Invalid Destination Address | Carrier Rejected as Invalid Destination Address. This could mean the number is not in the numbering plan (area code does not exist or the number is just invalid) or the number is not enabled for messaging (like a landline). Additionally, for toll free messages to TMobile, this could also mean the user has opted to block all toll free and short code traffic | YES |
| 4721 | destination-tn-deactivated | TN on deactivation list | The phone number you are attempting to send to is on the deactivation list. It is not associated with a carrier to be able to receive messages or is inactive. | YES |
| 4730 | no-route-to-destination-carrier | No route to destination carrier or no roaming route exists. | Carrier is reporting there is no route available for message. This could be because no routing exists to destination, no roaming route is available, the destination handset is roaming on a network that cannot be reached, no SS7 route, or routing was denied | YES |
| 4740 | invalid-source-address-address | Carrier Rejected as Invalid Source Address | Carrier is rejecting the message due to invalid source address - the number does not exist in the numbering plan. Other reasons for this error code is the source carrier is invalid or disabled or source not authorized or the number type is not supported.  | YES |
| 4750 | destination-rejected-message | Carrier Rejected Message | The destination carrier has rejected the message but provided no specific reason.  For AT&T traffic, this could be a prepaid user whose account is out of money, a subscriber that is provisioned to not receive this type of SMS or it was indentified as Spam | YES |
| 4751 | destination-rejected-message-size-invalid | Message is too long or message length is invalid for the carrier. | Carrier has rejected for message length is invalid or too long.  | YES |
| 4752 | destination-rejected-malformed | Message is malformed for the carrier. | Carrier is rejecting the message malformed; this could be because of a blank message, unacceptable data value, the receiving SMSC or SME does not accept messages with more than 160 characters, syntax error, content is invalid, message ID is invalid, invalid parameter length, expected TLV missing, invalid TLV value, invalid data coding scheme, invalid number of destinations, error in the optional part of the PDU body, TLV not allowed, or XML validation error. | YES |
| 4770 | destination-spam-detected | Carrier Rejected as SPAM | The Carrier is reporting this message as blocked for SPAM. Spam blocks could be a result of content, SHAFT violations (including specific keywords), originating address has been flagged for repeated spam content | YES |
| 4775 | destination-rejected-due-to-user-opt-out | Carrier Rejected due to user opt out | User has opted out of receiving messages from a particular sender. Remove the destination TN from subscriber list and cease communication with the destination. | YES |
| 4780 | p2p-volume-violation | Carrier rejected due to P2P volumetric violation | Carrier rejected due to P2P volumetric violation. You are sending at a higher rate (mps) than is allowed for P2P traffic. Please contact BW support to review your account settings and ensure you are utilizing the appropriate A2P channels for high volume traffic | YES |
| 4790 | destination-rejected-sc-not-allowed | Carrier Rejected Due to Short Code Restriction | Carrier Rejected Due to Short Code Restriction. Destination address blocked by mobile operator, destination cannot receive short code messages, or the mobile operator blocked the destination from receiving messages from this short code for some other reason. | YES |
| 4791 | destination-rejected-campaign-not-allowed | Carrier Rejected Short Code Campaign Not Allowed | Carrier Rejected SC Campaign Not Allowed or blocked by the mobile operator | YES |
| 4792 | destination-rejected-sc-not-provisioned | Carrier Rejected Short Code Not Provisioned | Short Code not provisioned on mobile operator's network. | YES |
| 4793 | destination-rejected-sc-expired | Carrier Rejected Short Code Expired | Short Code expired with the mobile operator | YES |

## Bandwidth Service Failures

A 5xx code indicates that either Bandwidth or the downstream carrier has reported a service failure.   For Bandwidth failures, the customer can retry the request and expect a different result.   For carrier errors a retry may also yield a different result however the customer should limit to a single retry attempt as the error encoding schema and strategy varies greatly by carrier and while Bandwidth endeavors to normalize carrier codes into predictable values there can be exceptions.

| Code | Description | Friendly Description | Explanation Of Error | Billable |
|:--|:--|:--|:--|:--|
| 5100 | temporary-app-error | Application Error | An application within the Bandwidth service is experiencing a temporary error that is preventing the message from being processed. | NO |
| 5101 | temporary-app-shutdown | Application Error | App going down. Message not received. Sender should send this messages later or to other host. | NO |
| 5106 | impossible-to-route | Impossible to route / Attempt to deliver through retries has failed. | Impossible to route / Attempt to deliver through retries has failed. | NO |
| 5111 | temporary-app-connection-closed | Application Error | Received messaged for connection which is already removed. | NO |
| 5201 | temporary-rout-error-retries-exceeded | Application Error | Bandwidth service expired the message after attempts to deliver through retries failed. | NO |
| 5211 | temporary-app-error-app-busy | Application Error | Bandwidth service application is temporarily busy so it cannot receive messages at this time | NO |
| 5220 | temporary-store-error | Application Error | Message not received. Cannot save message to store. | NO |
| 5231 | discarded-concatenation-timeout | Application Error | Bandwidth did not receive all parts of message. Message can not be sent. | NO |
| 5500 | message-send-failed | General Message Send Failure | The destination carrier has reported a general service failure with sending the message.  | NO |
| 5501 | message-send-failed | General Message Send Failure | The message is unable to send as no destination is available.  | NO |
| 5999 | unknown-error | Unknown error from Bandwidth | Unknown error generated by Bandwidth when Bandwidth core reports an unknown error | NO |

## Carrier Reported Service Failures

| Code | Description | Friendly Description | Explanation Of Error | Billable |
|:--|:--|:--|:--|:--|
| 5600 | destination-carrier-queue-full | Carrier Service Unavailable | Carrier Service Unavailable. This could result from network congestion, messaging queue full on the vendor side, throttling error on the vendor side. | YES |
| 5610 | submit_ sm-or-submit_ multi-failed | Carrier Service Failure | The downstream carrier application is experiencing an error. submitting the message has failed or cancelling message has failed | YES |
| 5611 | temporary-route-error-retries-exceeded | Carrier Service Failure | The downstream carrier is reporting the message expired in their system when attempts to retry sending failed. | YES |
| 5620 | destination-app-error | Carrier Application Error | The carrier is reporting a general error associated with their application processing the message. | YES |
| 5630 | message-not-acknowle | Carrier Application Error | NACK - no response or acknowledgement received from the carrier | YES |
| 5650 | destination-failed | Carrier Service Failure | Carrier Service is reporting a failure to send to destination (mobile operator or handset). | YES |

## Carrier Errors with Ambiguous Cause

| Code | Description | Friendly Description | Explanation Of Error | Billable |
|:--|:--|:--|:--|:--|
| 9902 | delivery-receipt-expired | Timed out waiting for delivery receipt. The reason a delivery receipt was not received is not known. | Bandwidth timed out waiting for the delivery receipt, this could be because the downstream provider did not send the requested delivery receipt or they sent after the system timed out at two hours. | YES |
| 9999 | unknown-error | Unknown error from downstream. Carrier reported a failure code that is unknown to Bandwidth. | Bandwidth does not recognize the vendor's error response or does not have the vendor code mapped internally | YES |
