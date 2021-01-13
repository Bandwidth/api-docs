# Managing Line Options and Features {#top}

## Overview

* [About](#about)
* [Single TN Option Assignment](#single-tn)
* [Calling Name Display](#calling-name-display)
  * [Calling Name Display Update (LIDB)](#libd)
* [Directory Listing and Directory Assistance (DLDA)](#dlda)
  * [DLDA Fields](#dlda-fields)
* [Creating and Managing a DLDA Order](#create-dlda)
* [Retrieving the history of a DLDA order](#get-dlda)
* [Checking DLDA information associated with a TN](#check-dlda)
* [Setting a Failover URI](#set-failover)


## About {#about}
The Bandwidth Phone Number Phone Number API allows the association of a number of “Option” or “Feature” characteristics with a Telephone Number.

Initially this capability is restricted to the management of Calling Name Display and Call Forwarding for the TN, but will be expanded to additional “Line Features” with subsequent releases.

In addition to the configuration of Calling Name information, other per-TN capabilities already supported by the API will be addressed in this new document section.

### Note about imported Phone Numbers for Hosted Messaging

Line Options feature management is **NOT** available for Phone numbers that have been [imported for use with Hosted Messaging](hostedMessaging.md).

## Single TN Option Assignment {#single-tn}

There are a number of TN capabilities that can be easily assigned directly to the Telephone Number(TN) on a per-TN basis.   This set of Per-TN Options includes:

* Call Forwarding
* Rewrite User
* Inbound Calls Number Format
* Remote Party ID Format

The path for managing these options is: `/accounts/{accountId>/sites/{siteId}/sippeers/{sippeerId}/tns/{tn#}`

## Calling Name Display {#calling-name-display}

In addition to setting Calling Name Display information on a per-TN basis as described above, the Bandwidth Phone Number Phone Number API allows the establishment of Calling Name Display settings for a collection of TNs at a time.  Bandwidth provides this API as a convenience to enable provisioning collections of TNs.  It can support the configuration of up to 1000 TNs in a single call.

The Calling Line Display is associated with TNs using a <code class="post">POST</code> to the `tnOptions` resource with a payload that describes the option and its disposition.

The key elements of the XML payload are:

* `TelephoneNumber`: The TN that Calling Name Display will be activated on
* `CallingNameDisplay`: [`on` | `off` | `systemdefault` ] where `systemdefault` will result in causing the TN to display the network default behavior.

The Bandwidth Phone Number API allows the updating of CNAM Display (LIDB) information in the network for Bandwidth TNs managed within the customer’s account.  This capability works within the same asynchronous work-order mechanism as is used for managing other delay-prone system interactions, where a “work-order” is created by the initial API call, and used as a reference for tracking and confirming the subsequent states, and the ultimate success and failure of the result.

### Calling Name Display Update (LIDB) {#libd}

The Request to add LIDB information to the TNs in an account is made by a <code class="post">POST</code> request to the `/lidbs` resource associated with an account.  This request contains a set of requests, each one specific to an individual TN on the account.

## Directory Listing and Directory Assistance (DLDA) {#dlda}

The DLDA service allows the association of a name and address listing with a Telephone Number or Telephone Numbers in the Bandwidth Phone Number Phone Number system.  The DLDA API follows the asynchronous order processing request model described elsewhere in this document, where a request is submitted, an order ID is returned as an ID of that request or order, and then the request is fulfilled in the background.  The status of the request is reflected in the status of the order, and can be queried at any time.

### DLDA Fields {#dlda-fields}

There are a number of fields involved in submitting a DLDA order, summarized in the table below:

| Field Name                               | Field Meaning and Values                                                                                                                                                                                                                                                                                                                                                                                        | API Element              | required |
|:-----------------------------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:-------------------------|:---------|
| Listed Telephone Number                  | 10 Digit US Number                                                                                                                                                                                                                                                                                                                                                                                              | `<TelephoneNumber>`      | y        |
| Listing Type                             | Listed (in DA & Dir)NonListed (in DA Only),NonPublished (No DA & No Dir)                                                                                                                                                                                                                                                                                                                                        | `<ListingType>`          | y        |
| Type of Account                          | Residential orBusiness                                                                                                                                                                                                                                                                                                                                                                                          | `<SubscriberType>`       | y        |
| Listed Name Last                         | Last Name or First Name of Business                                                                                                                                                                                                                                                                                                                                                                             | `<LastName>`             | y        |
| Listed Name First                        | First Name or Remaining Name of Business                                                                                                                                                                                                                                                                                                                                                                        | `<FirstName>`            |          |
| Listed Name First 2                      | First name of Second Party.  It will be appended to the First Name with an "&"                                                                                                                                                                                                                                                                                                                                  | `<FirstName2>`           |          |
| Designation                              | Atty, Plmbr, etc…                                                                                                                                                                                                                                                                                                                                                                                               | `<Designation>`          |          |
| Title of Lineage                         | Jr, Sr, III, IV, etc…                                                                                                                                                                                                                                                                                                                                                                                           | `<TitleOfLineage>`       |          |
| Title of Address                         | Rev, Sgt, etc…                                                                                                                                                                                                                                                                                                                                                                                                  | `<TitleOfAddress>`       |          |
| Title of Address2                        | Dr, etc..                                                                                                                                                                                                                                                                                                                                                                                                       | `<TitleOfAddress2>`      |          |
| Title of Lineage for Dual Name           | Jr, Sr, III, IV, etc…                                                                                                                                                                                                                                                                                                                                                                                           | `<TitleOfLineageName2>`  |          |
| Title of Address 1 for Dual Name         | Rev, Sgt, etc…                                                                                                                                                                                                                                                                                                                                                                                                  | `<TitleOfAddressName2>`  |          |
| Title of Address 2 for Dual Name         | Dr, etc..                                                                                                                                                                                                                                                                                                                                                                                                       | `<TitleOfAddress2Name2>` |          |
| Place Listing As                         | Business Name Sorting String.  This will be used as a string to control the sorting of the Listing if the Business Name above would not yield the correct results. For example, if 1040 Tax was the listed name; the PLA would be populated as either One Zero Forty Tax, Ten Forty Tax, or One Zero Four Zero Tax. The words within the PLA field will tell the publishers how to alphabetize the listed name. | `<PlaceListingAs>`       |          |
| Address Indicator                        | Used to control whether the address is listed or not.                                                                                                                                                                                                                                                                                                                                                           | `<ListAddress>`          | y        |
| Listed Address House Number Prefix       | Valid USPS Prefix                                                                                                                                                                                                                                                                                                                                                                                               | `<HousePrefix>`          |          |
| Listed Address House Number              | Valid USPS House Number                                                                                                                                                                                                                                                                                                                                                                                         | `<HouseNumber>`          |          |
| Listed Address Street No Suffix          | Valid USPS Street Number Suffix                                                                                                                                                                                                                                                                                                                                                                                 | `<HouseSuffix>`          |          |
| Listed Address Street Directional        | N = North, S = South, E = East, W = West, NE = Northeast,NW = Northwest, SE = Southeast, SW = Southwest                                                                                                                                                                                                                                                                                                         | `<PreDirectional>`       |          |
| Listed Address Street Name               | Valid USPS Street Name                                                                                                                                                                                                                                                                                                                                                                                          | `<StreetName>`           |          |
| Listed Address Street Thoroughfare       | St, Rd, Ct, Dr, etc…                                                                                                                                                                                                                                                                                                                                                                                            | `<StreetSuffix>`         |          |
| Listed Address Street Directional Suffix | N = North, S = South, E = East, W = West, NE = Northeast,NW = Northwest, SE = Southeast, SW = Southwest                                                                                                                                                                                                                                                                                                         | `<PostDirectional>`      |          |
| Listed Address Location                  | Suite 320, Apartment 104A, 2nd Floor, 3rd Level, etc.                                                                                                                                                                                                                                                                                                                                                           | `<AddressLine2>`         |          |
| Listed Address City                      | Valid USPS Community                                                                                                                                                                                                                                                                                                                                                                                            | `<City>`                 | y        |
| Listed Address State                     | Valid USPS State                                                                                                                                                                                                                                                                                                                                                                                                | `<StateCode>`            | y        |
| Listed Address Zip Code                  | Valid USPS Zip Code, zip plus code or international zip code                                                                                                                                                                                                                                                                                                                                                    | `<Zip>`                  | y        |


## Creating and Managing a DLDA Order {#create-dlda}

A DLDA order is created with a <code class="post">POST</code> to the `/dldas` resource of the account. The dldas resource represents the requests made to the Bandwidth Phone Number API to add or otherwise manage a request to associate a name and street address with the telephone number. This API allows the creation and observation of a DLDA work order that causes the update of name and address information in a network Database.

## Retrieving the history of a DLDA order {#get-dlda}

The history of a DLDA order can be retrieved with a <code class="get">GET</code> on the `/history` resource, using the API signature: `/accounts/{accountId}/dldas/{orderid}/history`

## Checking DLDA information associated with a TN {#check-dlda}

The <code class="get">GET</code> method retrieves detailed information about the phone number.

<code class="get">GET</code> `/tns/{tn}/tndetails`  retrieves detailed information about the phone number.

In addition to the name and address information inherent in a DLDA update, the DLDA information associated with the TN includes a <Status> value that indicates whether the DLDA information has been successfully registered with the Listing provider, or is in some other state.  Valid values for the `<Status>` element are:

| Status             | Description                                                                                                                                                                                                                                                                                               |
|:-------------------|:----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `Success`          | The information reported in the payload is the information that has been successfully registered with the Listing Provider.  If a subsequent attempt has been made and failed, the original successful status and information will be retained.  The failure can be interpreted based on the order state. |
| `Failed`           | The only attempt to update DLDA information for this TN has failed, and there is no DLDA information associated with the TN with the Listing Provider.                                                                                                                                                    |
| `Pending-Editable` | An attempt to update DLDA information with the Listing Provider is in progress, but can be altered.                                                                                                                                                                                                       |
| `Pending-Locked`   | An attempt to update DLDA information with the Listing Provider is in progress, but cannot be changed at this time.  A new order will be required once the current attempt succeeds or fails.                                                                                                             |

If the `<Status>` of the DLDA order impacting the TN is transient, indicating that there is an order in process and the outcome is inconclusive, the DLDA information will be replaced with a link to the order currently processing a DLDA change for that TN.  This will be the case if the status is `Pending-Editable` or `Pending-Locked`.

## Set a Failover URI {#set-failover}
**Please Note that the Failover URI functionality is only available for SIP Voice users at this time.**

Setting a failover URI (Final Destination URI) allows Bandwidth to forward voice traffic to an alternate number in the event of a delivery failure to your original call route.

To set the Final Destination URI to a SIP address, use the format sip:{address}@{host}

To set the Final Destination URI to a PSTN address, use the format +13332221111@PSTN

More detailed informaion on setting a Final Destination URI can be found [here](https://www.bandwidth.com/blog/establishing-automatic-failover-for-routing-calls-in-case-of-failure-final-destination-uri/).

### How to Establish Automatic Failover for a Location (Sip Peer)
To enable a Final Destination URI on a location, you can make a `PUT` request to `accounts/{accountId}/sites/{siteId}/sippeers/{sippeerId}`.

```http
PUT https://dashboard.bandwidth.com/api/account/{accountId}/sites/{siteId}/sippeers/{sippeerId} HTTP/1.1

Authorization: Basic {base64_encoded_credentials)
Content-Type: application/xml

<SipPeer>
 <PeerName>{location_name}</PeerName>
 <FinalDestinationUri>{final_destination}</FinalDestinationUri>
 <IsDefaultPeer>true</IsDefaultPeer>
</SipPeer>

```

### How to Establish Automatic Failover for a Phone Number
To enable a Final Destination URI on an individual number, you can create a `TnOptions` order to update the line features. Other `TnOptionGroup` features can be included when adding a Final Destination URI. You may update up to 5,000 numbers at a time.

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/tnoptions HTTP/1.1

Authorization: Basic {base64_encoded_credentials}
Content-Type: application/xml

<TnOptionOrder>
    <TnOptionGroups>
        <TnOptionGroup>
            <FinalDestinationURI>{final_destination}</FinalDestinationURI>
            <TelephoneNumbers>
                <TelephoneNumber>{TN_1}</TelephoneNumber>
                <TelephoneNumber>{TN_N}</TelephoneNumber>
                <TelephoneNumber>{TN_last}</TelephoneNumber>
            </TelephoneNumbers>
        </TnOptionGroup>
    </TnOptionGroups>
</TnOptionOrder>
```
<br>
<br>
