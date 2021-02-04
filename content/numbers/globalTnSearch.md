{% multimethod %}
{% endmultimethod %}

# Searching Tns - All Accounts {#top}

## Overview

* [About](#about)
* [Searching For TNs](#searching-for-tns)
* [Searching For Specific TNs](#searching-for-specific-tns)
* [Retrieving TN Information](#retrieving-tn-information)
* [Retrieving TN Details](#retrieving-tn-details)
* [Retrieving TN Sites](#retrieving-tn-sites)
* [Retrieving TN SipPeers](#retrieving-tn-sippeers)
* [Retrieving TN Rate Center](#retrieving-tn-ratecenter)
* [Retrieving TN Lca](#retrieving-tn-lca)
* [Retrieving TN Lata](#retrieving-tn-lata)
* [Retrieving TN Reservation](#retrieving-tn-reservation)
* [Retrieving TN Available Nn Routes](#retrieving-tn-availableNnRoutes)

## About {#about}

The Bandwidth Telephone Numbers API allows you to search for telephone numbers across all of your accounts that your user credentials have access to.  You can then view detailed information about the telephone numbers on any of your accounts.

### Note
> When querying for a phone number that is NOT in your account you will receive an error `Telephone Numbers cannot be found on accounts`.  Within an `<ErrorList>` XML list.

### Base URL
`https://dashboard.bandwidth.com/api/tns`

{% extendmethod %}
## Searching For TNs {#searching-for-tns}

Retrieve information about one or more Telephone Numbers (TNs), where the TNs are chosen based on the search parameters provided in the API Call.  The results will be restricted to the account(s) that the requesting user has access to.

### URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns`

### Query Parameters

| Parameter     | Required | Description                                                                                                                                                                                                                                                   |
|:--------------|:---------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `page`        | Yes      | An ID of the first element in a page. This value will indicate the first value, not the count, of the initial entry in the page being requested. Note in the example that the page is the TN that begins the page. The initial page is tagged with the ID '1' |
| `size`        | Yes      | The number of items to include in a page                                                                                                                                                                                                                      |
| `accountId`   | No       | The internal account id assigned to the customer that "owns" the TN                                                                                                                                                                                           |
| `city`        | No       | The geographic city most likely to serve the Telephone Number. City and other geographic data is determined statistically, and is not as reliable as Rate Center information for pinpointing the service location of a TN                                     |
| `fullNumber`  | No       | A 10 Digit TN                                                                                                                                                                                                                                                 |
| `host`        | No       | An IP address or subnet (CIDR format) associated with the TN. Filter for subnet applies by exact match.                                                                                                                                                       |
| `lata`        | No       | The LATA (Local Access Transport Area) that the TN is served from, typically 3 digits (5 in FLA)                                                                                                                                                              |
| `npa`         | No       | Container for Basic Authentication credentials.                                                                                                                                                                                                               |
| `npaNxx `     | No       | The first 6 digits of a 10 Digit NA Telephone Number.                                                                                                                                                                                                         |
| `npaNxxX `    | No       | The first 7 digits of a 10 Digit NA Telephone Number.                                                                                                                                                                                                         |
| `rateCenter ` | No       | The Rate Center designation that the number is served from. If not combined with a State search the results will span states.                                                                                                                                 |
| `state `      | No       | A 2 character State or Province designation - TX for Texas for example                                                                                                                                                                                        |
| `tier `       | No       | A service tier indicating the the vendor class that the TN is associated with. Tier indicates whether the TN is on-net, domestic offnet, Canadian, etc.                                                                                                       |

{% common %}
### Example XML to Create Subscription

```http
GET https://dashboard.bandwidth.com/api/tns HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<TelephoneNumbersResponse>
    <TelephoneNumberCount>5</TelephoneNumberCount>
    <Links>
        <first><!-- Snip --></first>
        <next><!-- Snip --></next>
    </Links>
    <TelephoneNumbers>
        <TelephoneNumber>
            <City>CARY</City>
            <Lata>426</Lata>
            <State>NC</State>
            <FullNumber>9192381138</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>CARY</RateCenter>
            <Status>Inservice</Status>
            <AccountId>9900008</AccountId>
            <LastModified>2013-12-05T05:58:27.000Z</LastModified>
            <InServiceDate>2013-12-05T05:58:27.000Z</InServiceDate>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>CARY</City>
            <Lata>426</Lata>
            <State>NC</State>
            <FullNumber>9192381139</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>CARY</RateCenter>
            <Status>Inservice</Status>
            <AccountId>9900000</AccountId>
            <LastModified>2013-12-05T05:58:27.000Z</LastModified>
            <InServiceDate>2013-12-05T05:58:27.000Z</InServiceDate>
        </TelephoneNumber>
    </TelephoneNumbers>
</TelephoneNumbersResponse>
```
{% endextendmethod %}

{% extendmethod %}
## Searching For Specific TNs {#searching-for-specific-tns}
Retrieve information about one or more Telephone Numbers (TNs), where the TNs are specified in POST body.

### URL
<code class="post">POST</code>`https://dashboard.bandwidth.com/api/tns`

{% common %}
### Example

```http
POST https://dashboard.bandwidth.com/api/tns HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
```xml
<TnList>
    <Tn>3172000285</Tn>
    <Tn>3172000207</Tn>
</TnList>
```
### Response
```xml
<TelephoneNumbersResponse>
    <TelephoneNumberCount>4</TelephoneNumberCount>
    <Links>
        <first><!-- Snip --></first>
    </Links>
    <TelephoneNumbers>
        <TelephoneNumber>
            <City>INDIANAPOLIS</City>
            <Lata>336</Lata>
            <State>IN</State>
            <FullNumber>3172000000</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>INDIANAPLS</RateCenter>
            <Status>Available</Status>
            <AccountId>753</AccountId>
            <LastModified>2016-11-16T19:34:22.000Z</LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>INDIANAPOLIS</City>
            <Lata>336</Lata>
            <State>IN</State>
            <FullNumber>3172000500</FullNumber>
            <Tier>0</Tier>
            <VendorId>49</VendorId>
            <VendorName>Bandwidth CLEC</VendorName>
            <RateCenter>INDIANAPLS</RateCenter>
            <Status>Aging</Status>
            <AccountId>14</AccountId>
            <LastModified>2016-11-16T19:34:22.000Z</LastModified>
        </TelephoneNumber>
    </TelephoneNumbers>
</TelephoneNumbersResponse>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Information {#retrieving-tn-information}
Retrieves information about the specified telephone number. The information returned provides status and historic information about the Telephone Number, including the status, the order id and date associated with the last modification, and the account and site information associated with the TN. The request for more information can be made by requesting a number of specific derived sub-resources.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}`

{% common %}
### Example
```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}} HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<TelephoneNumberResponse>
    <TelephoneNumber>2012035013</TelephoneNumber>
    <Status>Inservice</Status>
    <LastModifiedDate>2014-03-25 12:55:11.0</LastModifiedDate>
    <OrderCreateDate>2014-03-25T12:55:11.810Z</OrderCreateDate>
    <OrderId>cf79d3c3-21b7-4db7-9867-273a1867f934</OrderId>
    <OrderType>NEW_NUMBER_ORDER</OrderType>
    <InServiceDate>2014-03-25T12:55:11.810Z</InServiceDate>
    <SiteId>2409</SiteId>
    <AccountId>8000273</AccountId>
</TelephoneNumberResponse>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Details {#retrieving-tn-details}

Retrieves detailed information about the phone number. TnAttributes - Even if this telephone number is protected or not.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/tndetails`

{% common %}
### Example

```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/tndetails HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumberResponse>
    <TelephoneNumberDetails>
        <City>CARY</City>
        <Lata>426</Lata>
        <State>AL</State>
        <FullNumber>9996667777</FullNumber>
        <Tier>0</Tier>
        <VendorId>49</VendorId>
        <VendorName>Bandwidth CLEC</VendorName>
        <OnNetVendor>true</OnNetVendor>
        <RateCenter>CARY</RateCenter>
        <Status>Inservice</Status>
        <AccountId>9488776</AccountId>
        <Site>
            <Id>30611</Id>
            <Name>Account-Name</Name>
        </Site>
        <SipPeer>
            <PeerId>617819</PeerId>
            <PeerName>peer-name</PeerName>
            <IsDefaultPeer>true</IsDefaultPeer>
        </SipPeer>
        <ServiceTypes>
            <ServiceType>Messaging</ServiceType>
            <ServiceType>Voice</ServiceType>
        </ServiceTypes>
        <LastModified>2020-09-04T20:14:57.000Z</LastModified>
        <MessagingSettings>
            <SmsEnabled>true</SmsEnabled>
            <A2pState>system_default</A2pState>
            <AssignedNnRoute>
                <Nnid>103885</Nnid>
                <Name>unofficial - Bandwidth E830 equivalent - Verizon A2P tag(103885)</Name>
            </AssignedNnRoute>
        </MessagingSettings>
    </TelephoneNumberDetails>
</TelephoneNumberResponse>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Sites {#retrieving-tn-sites}

Retrieves the sites associated with that telephone number.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/sites`

{% common %}
### Example

```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/sites HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Site>
    <Id>2409</Id>
    <Name>siteName</Name>
</Site>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN SipPeers {#retrieving-tn-sippeers}

Retrieves the sippeers associated with that telephone number.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/sippeers`

{% common %}
### Example
```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/sippeers HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<SipPeer>
    <Id>305643</Id>
    <Name>PeerOneSiteThree</Name>
</SipPeer>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Rate Center {#retrieving-tn-ratecenter}

Retrieves the rate centers associated with that telephone number.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/ratecenter`

{% common %}
### Example
```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/ratecenter HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<TelephoneNumberResponse>
    <TelephoneNumberDetails>
        <State>NJ</State>
        <RateCenter>HACKENSACK</RateCenter>
    </TelephoneNumberDetails>
</TelephoneNumberResponse>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Lca {#retrieving-tn-lca}

Retrieves the LCA information associated with that telephone number.
This call will return the NPA-NXX pairs and the Rate Centers that are in the Local Calling Area of the Telephone Number in the API call.
Due to the fact that not all LCA relationships are symmetrical, the telephone number may not be part of the LCAs centered on the provided NPA-NXX or Rate Center values

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/lca`

{% common %}
### Example
```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/lca HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<SearchResult>
    <ListofNPANXX>
        <NPANXX>201202</NPANXX>
        <NPANXX>201203</NPANXX>
        <NPANXX>201206</NPANXX>
        <!-- SNIP -->
        <NPANXX>973930</NPANXX>
        <NPANXX>973931</NPANXX>
        <NPANXX>973955</NPANXX>
    </ListofNPANXX>
    <Location>
        <RateCenters>
            <State>NJ</State>
            <RCs>
                <RC>CLIFFSIDE</RC>
                <RC>DUMONT</RC>
                <!-- SNIP -->
                <RC>UNION CITY</RC>
                <RC>WESTWOOD</RC>
            </RCs>
        </RateCenters>
    </Location>
</SearchResult>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Lata {#retrieving-tn-lata}

Retrieves the lata that contains the telephone number.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/lata`

{% common %}
### Example
```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/lata HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<TelephoneNumberResponse>
    <TelephoneNumberDetails>
        <Lata>224</Lata>
    </TelephoneNumberDetails>
</TelephoneNumberResponse>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Reservation {#retrieving-tn-reservation}

This API call retrieves any current reservation information associated with the Telephone Number, if a reservation is currently active on the indicated Telephone Number. The query is restricted to calls that do not exceed the account privileges of the calling user.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/tnreservation`

{% common %}
### Example
```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/tnreservation HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<TNReservation>
    <ReservationID>d28529e6-23dc-408e-b7ad-f2015a6975d5</ReservationID>
    <Account>12346099</Account>
    <ReservationExpires>14346</ReservationExpires>
    <ReservedTN>6136211234</ReservedTN>
</TNReservation>
```
{% endextendmethod %}

{% extendmethod %}
## Retrieving TN Available Nn Routes {#retrieving-tn-availableNnRoutes}

The get method retrieves information about available NnRoutes for the phone number.

### Base URL
<code class="get">GET</code>`https://dashboard.bandwidth.com/api/tns/{{tn}}/availableNnRoutes`

{% common %}
### Example

```http
GET https://dashboard.bandwidth.com/api/tns/{{tn}}/availableNnRoutes HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```
### Response
```xml
<AvailableNNRoutes>
    <NNRoute>
        <Nnid>101601</Nnid>>
        <Name>USA Mobility</Name>
    </NNRoute>
    <NNRoute>
        <Nnid>102787</Nnid>
        <Name>Globe Wireless - Bandwidth.com - SVR</Name>
    </NNRoute>
</AvailableNNRoutes>
```
{% endextendmethod %}
