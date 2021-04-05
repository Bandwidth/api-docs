# Changelog

| Date | Notes |
|--|--|
| March 25th, 2021| Updated portal config to use a local js script. |
| March 17th, 2021 | Added `campaignClass` to the message search API response.
| March 16th, 2021 | Added 4 fields `messageSize`, `messageLength`, `attachmentCount`, and `recipientCount` to the message search API response. |
| March 10th, 2021 | Added `participants` and `sessions` to the WebRtc spec. |
| March 10th, 2021 | Added `Continuation-Token` as a possible response header for `listMedia`. |
| March 10th, 2021 | Added `calls`, `recordings`, and `conferences` tags to the Voice spec. |
| March 9th, 2021 | Added `media` and `messages` tags to the Messaging OpenAPI spec. |
| March 8th, 2021 | Add optional `deviceApiVersion` parameter to WebRTC `Participant` schema in preparation for the upcoming "Unified Plan" conversion. |
| March 5th, 2021 | Remove messaging's explicit declaration of `Content-Length` in `uploadMedia`. |
| March 4th, 2021 | Update messaging's `Media` object's `contentLength` type from `string` to `integer`. |
| March 3rd, 2021 | Removed extraneous properties from messaging's `Media` object. |
| February 26th, 2021 | Added the "pai" and "identity" fields to Voice API callbacks that contain Stir/Shaken data  |
| February 25th, 2021 | Renamed `userId` to `accountId` in messaging spec. |
| February 23rd, 2021 | Renamed `TwoFactorAuth` to `MultiFactorAuth`. This is a major change and current SDK users will need to use the new name when upgrading the package. |
| February 10th, 2021 | Added release notes |
