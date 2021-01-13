{% multimethod %}
{% endmultimethod %}

# Portout Validation Event {#top}

The port out validation API is used for portout management purposes and gives the losing side customer the possibility to validate the portout process. Please contact [support](https://support.bandwidth.com) to enable Portout Validation.

### Table of Contents

* [Configuration](#configuration)
* [Responsibilities](#responsibilities)
* [Summary](#summary)
* [Callback Request](#callback-request)
* [Allow Portout](#allow-portout)
* [Deny Portout](#deny-portout)

## Configuration {#configuration}

The configuration of the call-back API used for port-out validation is done by [Bandwidth development staff](https://support.bandwidth.com).  Configuration of this service is performed on the submission of a Ticket, and on completion of the required contract extensions.

* The configured URL provided by the customer that will be invoked by Bandwidth in order to validate a port-out request.
* The security of the exchange can be protected within an https exchange, and can be authenticated with userid / password credentials, or with certificates. The setup of the callback will be covered in the ticketing process.

## Responsibilities {#responsibilities}

Accounts using the Port-out verification API will likely be required to extend the contractual relationship with Bandwidth to ensure clarity around the responsibilities of our customers in the use of the API, and the rights of Bandwidth to withhold this capability if we believe that the capability is being used in contravention of FCC best practices, guidelines and recommendations. Please review these requirements with your Bandwidth representative.

## Summary {#summary}

Validation of a Port-out request will begin with a submission from Bandwidth to our customer including information used to validate the correctness of the port-out request. The included information may include:

* A list of telephone numbers to be ported out
* A subscriber name for information purposes
* A zip code associated with the subscriber, presumably relating to a billing or service address
* An account code, presumably related to an account used to reflect  the commercial or billing relationship with the subscriber
* A PIN established by the end user that helps to identify that end user / subscriber
* Failure to return a valid response will be considered an **approval of the port-out request**.
* Failure to return any response will be considered an **approval of the port-out request.**

## Responding to Portout Event {#callback-request}

{% extendmethod %}

### Callback Request Parameters

| Parameter          | Type                        | Description                                                                                          |
|:-------------------|:----------------------------|:-----------------------------------------------------------------------------------------------------|
| `PON`              | `string`                    | PON for information and correlation purposes. (optional)( 25 characters )                            |
| `Pin`              | `int`                       | PIN (optional) ( 10 digits )                                                                         |
| `AccountNumber`    | `string`                    | Account Number (optional) ( 25 digits )                                                              |
| `ZipCode`          | `string`                    | Zipcode (optional) ( 15 characters )                                                                 |
| `SubscriberName`   | `string`                    | Subscriber name for information purposes. (optional)( 93 characters )                                |
| `TelephoneNumbers` | List of `<TelephoneNumber>` | list of one or more telephone numbers (at least one telephone number will be provided) ( 10 digits ) |

{% common %}

### Example 1 of 1: Incoming Portout Validation Request

```http
POST /your_url HTTP/1.1
Content-Type: application/xml; charset=utf-8

<?xml version="1.0"?>
<PortOutValidationRequest>
    <PON>some_pon</PON>
    <Pin>1111</Pin>
    <AccountNumber>777</AccountNumber>
    <ZipCode>62025</ZipCode>
    <SubscriberName>Subscriber Name</SubscriberName>
    <TelephoneNumbers>
        <TelephoneNumber>2223331000</TelephoneNumber>
        <TelephoneNumber>2223331001</TelephoneNumber>
    </TelephoneNumbers>
</PortOutValidationRequest>

```

{% endextendmethod %}

## Allow Portout Response Parameters {#allow-portout}

To validate the portout (IE positive validation of the port-out request), there is no additional information required. Reply with the `<Portable>true</Portable>` to approve the portout.

* Failure to return a valid response will be considered an **approval of the port-out request**.
* Failure to return any response will be considered an **approval of the port-out request.**

{% extendmethod %}

| Parameter  | Type      | Description                                                               |
|:-----------|:----------|:--------------------------------------------------------------------------|
| `Portable` | `boolean` | Must be `true`                                                            |
| `PON`      | `string`  | PON for information and correlation purposes. (optional)( 25 characters ) |

{% common %}

### Example 1 of 1: Allow Portout Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<PortOutValidationResponse>
    <Portable>true</Portable>
    <PON>some_pon</PON>
</PortOutValidationResponse>
```

{% endextendmethod %}

### Deny Portout Response {#deny-portout}

To deny the portout (IE a negative response indicating that the port-out request is considered to be invalid, based on the information received). The response **must** contain error response codes that will support updating of the request with valid data. **This information will be passed back to the requesting party to allow them to attempt to improve the request.**

The response should contain data that would have allowed to port-out to be considered valid:

* This data is intended for dispute resolution, and for review by Bandwidth to see if the port appears to be valid based on the available data.
* All fields are considered optional.
* Failure to return any data may  be considered to be equivalent to approving the port-out request.
* Subsequent submission of the data provided in the response should cause acceptance of the port-out request.
* This information will not be passed directly on to the requesting party

The above exchange of information is intended to support best faith resolution of port-requests within the constraints imposed by the FCC. The objective is consistent achievement of the middle ground between slamming and unjustified blocking of valid requests.  Information returned to Bandwidth is to aid in dispute resolution, and is considered to be covered by CPNI limitations and thereby not intended for distribution to any third parties. Note that failure of the winning carrier to match the values exchanged by the API may not prevent porting-out of the number. FCC guidelines must still be followed in dispute resolution.

This exchange of information is synchronous in nature, and will not permit extensive delays in response, and will not create a series of linked transactions for resolving a dispute, or in attempting the port-out with different information. Updated submissions will be treated as new requests. Responses to the API call are expected within 30 seconds.

The error codes and error explanation payloads below are the ones that we expect to see in response to the port-out validation callback. This uniform set of responses allows a consistent and clear dialog with the prospective winning carrier about the nature of the validation failure.

* If the returned field/fields was/were not provided in the original request then that indicates that the field was missing from the request and should be provided
* If the returned field/fields was/were different than provided then that indicates an error in the requesting information
* For the port-out to be considered valid all telephone numbers in the request should be returned - If one telephone number is invalid then the request fails.
* Failure to return a valid response will be considered an **approval of the port-out request**.
* Failure to return any response will be considered an **approval of the port-out request.**

| Code | Meaning                                                     | Disposition                 |
|:-----|:------------------------------------------------------------|:----------------------------|
| 7510 | Required Account Code missing                               | Request placed in Exception |
| 7511 | Invalid Account Code                                        | Request placed in Exception |
| 7512 | Required PIN missing                                        | Request placed in Exception |
| 7513 | PIN Invalid                                                 | Request placed in Exception |
| 7514 | Required ZIP Code missing                                   | Request placed in Exception |
| 7515 | Invalid ZIP Code                                            | Request placed in Exception |
| 7516 | Telephone Number not recognized or invalid for this account | Request Cancelled           |
| 7517 | Too many Telephone numbers in this request                  | Request Cancelled           |
| 7518 | Telephone Number Not Active                                 | Request Cancelled           |
| 7519 | Customer info does not match                                | Request placed in Exception |
| 7598 | Invalid Request -                                           | Request placed in Exception |
| 7599 | Fatal Error in Processing                                   | Request succeeds            |
| nnnn | Anything Else                                               | Request succeeds            |


{% extendmethod %}


| Parameter           | Type                        | Description                                                                                                                                                                       |
|:--------------------|:----------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Portable`          | `boolean`                   | Must be `false`                                                                                                                                                                   |
| `PON`               | `string`                    | PON for information and correlation purposes. (optional)( 25 characters )                                                                                                         |
| `Errors`            | List of `<Error>`           | A recognizable error code values must be returned, unrecognized error codes will be ignored and not treated as error codes. The list of acceptable error codes is provided above. |
| `Error.Code`        | `int`                       | Specific Error code as defined                                                                                                                                                    |
| `Error.Description` | `string`                    | Custom error description                                                                                                                                                          |
| `AcceptableValues`  | `Object`                    | Should contain at least one of the optional fields that could be used to validate the port-out request.                                                                           |
| `Pin`               | `int`                       | PIN (optional) ( 10 digits )                                                                                                                                                      |
| `AccountNumber`     | `string`                    | Account Number (optional) ( 25 digits )                                                                                                                                           |
| `ZipCode`           | `string`                    | Zipcode (optional) ( 15 characters )                                                                                                                                              |
| `SubscriberName`    | `string`                    | Subscriber name for information purposes. (optional)( 93 characters )                                                                                                             |
| `TelephoneNumbers`  | List of `<TelephoneNumber>` | Contains the telephone numbers considered valid                                                                                                                                   |

{% common %}

### Example 1 of 1: Deny Portout Response

```http
HTTP/1.1 200 OK
Content-Type: application/xml

<PortOutValidationResponse>
  <Portable>false</Portable>
  <PON>some_pon</PON>
  <Errors>
    <Error>
      <Code>75xx</Code>
      <Description>Customer api error description</Description>
    </Error>
    <Error>
      <Code>75xx</Code>
      <Description>Customer api error description</Description>
    </Error>
  </Errors>
  <AcceptableValues>
    <Pin>2222</Pin>
    <AccountNumber>555</AccountNumber>
    <ZipCode>02154</ZipCode>
    <TelephoneNumbers>
      <TelephoneNumber>2223331000</TelephoneNumber>
    </TelephoneNumbers>
  </AcceptableValues>
</PortOutValidationResponse>
```

{% endextendmethod %}

