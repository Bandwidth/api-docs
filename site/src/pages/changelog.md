---
id: changelog
slug: /changelog
---

# Changelog

| Date | Notes |
|--|--|
| September 15th, 2021 | Add parameters of messageDirection, carrierName and messageType to GetMessages |
| September 8th, 2021 | Added `MachineDetection` object to the Voice OpenAPI spec and bumped to version 3.2.0 | 
| August 27th, 2021 | Reverted Phone Number Lookup spec to 1.0.5 |
| August 25th, 2021 | Provide corrections to Sip Registrar guide |
| August 24th, 2021 | Added Sip Registrar guide and updated Network Bridge guide |
| August 2nd, 2021 | Added callback objects to the voice OpenAPI spec |
| July 30th, 2021 | Updated `media` description for `createMessages` to include Content-Disposition header information |
| July 15th, 2021 | Updated Python code snippets for voice, messaging, and MFA to reflect the breaking changes in the v10.0.0 SDK |
| July 7nd, 2021 | Updated Phone Number Lookup spec to reflect that all property names in the result section are now camelcase.|
| July 2nd, 2021 | Updated WebRTC's parameter order definition. `sessionId` should always be passed in before `participantId` when both are present |
| May 20, 2021  | Updated Phone Number Lookup spec to remove X-accountId and replace with path parameter |
| May 5th, 2021 | Update WebRTC's `callbackUrl` parameter in Participant to be nullable. |
| May 3rd, 2021 | Major overhaul to voice API spec. There are no changes to the API itself, just changes to the API spec. The API spec now uses the OpenAPI 3.0 format. Many endpoints have been renamed. Many object schemas have been renamed. Many endpoints that had missing response codes have had their missing information added. Many parameters that are optional have been marked as such. Several incorrect content-type headers have been corrected. Many strings that used to be documented as enums have been updated to be represented as strings. |
| April 30th, 2021 | Update WebRTC's `deviceApiVersion` enum values to uppercase. |
| April 6th, 2021 | Update messaging's `createMessage` and `uploadMedia` successful response status code. |
| March 25th, 2021 | Updated portal config to use a local js script. |
| March 17th, 2021 | Added `campaignClass` to the message search API response. |
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
