{% raw %}
<section class="accountManagementGuides">
{% endraw %}

# Bandwidth Account Setup Guide {#top}

This walks through how to setup and configure your Bandwidth account through the [Bandwidth Dashboard](dashboard.bandwidth.com) for use with our [Number Management](../../numbers/about.md), [HTTP Voice](../../voice/about.md), and [HTTP Messaging](../../messaging/about.md) API's.

Now that we’ve covered the [hierarchical structure](./bandwidthAccountStructure.md) of your Bandwidth Dashboard account, let’s talk about how to complete your set-up.

Bandwidth recommends that all new users complete their account set-up using the Bandwidth Dashboard user interface to best get acquainted with our unique account structure.

After you’ve familiarized yourself with these concepts, you may want to [automate your set-up](./programaticApplicationSetup.md) and programmatically configure your Sub-Accounts, Locations & Applications.

## Assumptions
* You have been contracted and given access to your Bandwidth Dashboard Account
* Your account is enabled for HTTP Voice and/or Messaging
* You have administrator access on the account to create users and change roles

## Steps
1. [Create a Sub-Account](#create-a-sub-account)
1. [Create an Application](#creating-applications)
    * [Create a Voice Application](#create-a-voice-application)
    * [Create a Messaging Application](#create-a-messaging-application)
1. [Create a Location](#create-a-location)
1. [Order a Phone Number](#order-a-phone-number)
1. [Next steps](#next-steps)
    * [Create an API-only user](#create-an-api-only-user)
    * [Start Developing to Our Voice and Messaging APIs](#start-developing-to-our-voice-and-messaging-apis)

## Create a Sub-Account (Site)
<img src="../../images/account-setup-1.png" style="max-width:95%">

Once you log into the Bandwidth Dashboard, the first thing you need to do is set up your initial Sub-account. Metaphorically speaking, if you were to look at the Account as a filing cabinet - the Sub-accounts can be best visualized as the drawers.

_Note: Many users choose to just keep a single Sub-Account. Whereas others create two to represent Development & Production environments._

  1. In the top navigation bar, click **Account**, select **Sub-accounts**, and then click **Add Sub-account**.
  1. Enter the required information and click **Create Sub-account**.

_Note: Your Sub-account contains a unique Site ID, you will need to reference this for our Number Management API requests._

##### Sub-Account Fields
<img src="../../images/account-setup-subaccount-fields.png" style="max-width:95%">

| Field Name      | Mandatory | Description                                                                |
|:----------------|:---------:|:---------------------------------------------------------------------------|
| Name            | Yes       | Sub-Account Name                                                           |
| Address Type    | Yes       | `Billing` or `Service`. For record purposes only, does not affect billing. |
| Street Number   | Yes       | Street number of address                                                   |
| Street Name     | Yes       | Street name of address                                                     |
| Address Line 2  | No        | Optional second address line (ex `Unit 123`)                               |
| City            | Yes       | City                                                                       |
| State           | Yes       | State                                                                      |
| Zip/Postal Code | Yes       | Postal Code                                                                |
| ZIP Plus 4      | No        | Optional +4 Postal Code                                                    |
| Customer ID     | No        | Optional ID for your reference                                             |
| Customer Name   | No        | Optional Name for your reference                                           |
| Description     | No        | Optional Description fro your reference                                    |

_Note: For a self-guided training tutorial, click on **Learning Lab & Support** in the Bandwidth Dashboard and take a look at the **Onboarding Guides**!_

## Creating Applications
<img src="../../images/account-setup-2.png" style="max-width:95%">
### Create a Voice Application
To begin using your Bandwidth Dashboard phone numbers for Voice APIs, create a Voice application and then associate it with your phone number’s Location:

  1. In the top navigation bar, click **Applications**, and then click **Add Application**.
  1. Provide an **Application name** (we recommend you use something that identifies what the application will do).
  1. Under **Application type**, select **Voice**.
  _Note: Once your application is created, you won’t be able to change the application type._
  1. Enter your Callback URL(s)
  1. Click **Create Application**

##### Voice Application Fields
<img src="../../images/account-setup-voice-application-fields.png" style="max-width:95%">

| Field Name                     | Mandatory | Description                                                                                                                        |
|:-------------------------------|:---------:|:-----------------------------------------------------------------------------------------------------------------------------------|
| Application Name               | Yes       | Custom application name                                                                                                            |
| Application ID                 | Yes       | Unique application id needed for API calls - Bandwidth creates this for you                                                        |
| Application Type               | Yes       | VOICE or MESSAGING                                                                                                                 |
| Call Initiated Callback Method | Yes       | REST method for callbacks. POST gives a JSON object in the request body (recommended). GET passes the callback in query parameters |
| Call Initiated Callback URL    | Yes       | URL to send call initiated (inbound calls) events to                                                                               |
| Call Status Callback Method    | No        | REST method for callbacks. POST gives a JSON object in the request body (recommended). GET passes the callback in query parameters |
| Call Status Callback URL       | No        | URL to send call status events to                                                                                                  |
| Callback User ID               | No        | Optional user id bandwidth sends in the Authorization header of the callback                                                       |
| Callback Password              | No        | Optional password bandwidth sends in the Authorization header of the callback                                                      |
| Call Initiated Fallback Method | No        | REST method for callbacks. POST gives a JSON object in the request body (recommended). GET passes the callback in query parameters |
| Call Initiated Fallback URL    | No        | Fallback URL to send call initiated (inbound calls) events to                                                                      |
| Call Status Fallback Method    | No        | REST method for callbacks. POST gives a JSON object in the request body (recommended). GET passes the callback in query parameters |
| Call Status Fallback URL       | No        | Fallback URL to send call status events to                                                                                         |
| Fallback User ID               | No        | Optional user id bandwidth sends in the Authorization header of the callback                                                       |
| Fallback Password              | No        | Optional password bandwidth sends in the Authorization header of the callback                                                      |

### Create a Messaging Application
To begin using your Bandwidth Dashboard numbers for Messaging APIs, create a Messaging Application and then associate it with your phone number’s Location:

  1. In the top navigation bar, click **Applications**, and then click **Add Application**.
  1. Provide the Application name (we recommend you use something that identifies what the application will do).
  1. Under **Application type**, select **Messaging**.
  _Note: Once your application is created, you won’t be able to change the application type._
  1. Enter your callback URL(s)
  1. Select the types of callbacks you want to receive
  1. Click **Create Application**


##### Messaging Application Fields
<img src="../../images/account-setup-messaging-application-fields.png" style="max-width:95%">

| Field Name                         | Mandatory | Description                                                                                                      |
|:-----------------------------------|:---------:|:-----------------------------------------------------------------------------------------------------------------|
| Application Name                   | Yes       | Custom application name                                                                                          |
| Application ID                     | Yes       | Unique application id needed for API calls - Bandwidth creates this for you                                      |
| Application Type                   | Yes       | VOICE or MESSAGING                                                                                               |
| Use Multiple Callback URLs         | No        | Optional toggle to allow you to split callbacks to different URLs for inbound and outbound messages              |
| (Inbound) Callback URL             | Yes       | URL to send inbound (or all) message callbacks to                                                                |
| Inbound Callback User ID           | No        | Optional user id bandwidth sends in the Authorization header of the callback                                     |
| Inbound Callback Password          | No        | Optional password bandwidth sends in the Authorization header of the callback                                    |
| Status Callback URL                | No        | URL to send status (outbound) message callbacks to                                                               |
| Status Callback User ID            | No        | Optional user id bandwidth sends in the Authorization header of the callback                                     |
| Status Callback Password           | No        | Optional password bandwidth sends in the Authorization header of the callback                                    |
| Send `message-delivered` Callbacks | No        | Optional toggle to turn on/off [`message-delivered`](../../messaging/callbacks/msgDelivered.md) callbacks events |
| Send `message-failed` Callbacks    | No        | Optional toggle to turn on/off [`message-failed`](../../messaging/callbacks/messageFailed.md) callbacks events   |
| Send `message-sending` Callbacks   | No        | Optional toggle to turn on/off [`message-sending`](../../messaging/callbacks/messageSending.md) callbacks events |

## Create a Location (Sip-Peer)
<img src="../../images/account-setup-3.png" style="max-width:95%">

A Location is where you’ll link your Application and provision other routing settings. When a telephone number is added to a Location, it will inherit the settings and properties of that Location.

Link your Application with a Location:

  1. After you’ve created your Application, navigate to the **Associated Locations** section of the newly created application
  1. Click **Create a Location**.
  1. On the **Locations Settings** page, select a **Sub-Account**.
  1. Type in a **Location Name** and optional description. You’ll order and port phone numbers to a Location. Give it a name that’s easily identifiable.
  1. If there is no default location linked to your chosen sub-account already, enable `Default Location`
  1. Select **Voice Protocol** (HTTP or SIP, if applicable).
      * Note: You need to set voice protocol as `HTTP` to link it to a voice application
  1. Click **SMS Enabled** (if applicable)
      1. Enable **Toll Free** or **Short Code** SMS (if applicable)
      1. Select zones for international messaging (if applicable)
      1. Ensure **SMS protocol** is `HTTP`
      1. Ensure `V2 Messaging` is toggled __ON__
      1. Associate the proper Messaging Application

##### Location Fields
<img src="../../images/account-setup-location-fields.png" style="max-width:95%">

| Field Name                | Mandatory            | Description                                                                                                      |
|:--------------------------|:--------------------:|:-----------------------------------------------------------------------------------------------------------------|
| Sub-Account               | Yes                  | The parent sub account of the new location |
| Location Name             | Yes                  | Custom location name |
| Description               | No                   | Optional location description |
| Default Location          | No                   | Sub-accounts require one default location. This must be toggled `on` if it is the first/only location created under a sub-account |
| Voice Protocol            | Yes                  | SIP or HTTP - determines what protocol is used for calls to/from the telephone numbers in the location |
| Associated Voice Location | Yes (if HTTP voice)  | If using HTTP voice, the application you wish to associate. When calls are made to the numbers on this location, Bandwidth sends a webhook to the callback URL of the associated application |
| SMS Enabled               | No                   | Toggle to enable/disable messaging capabilities for all telephone numbers in the location |
| Toll Free SMS             | No                   | Toggle to enable/disable messaging capabilities for toll-free numbers in the location |
| Short Code SMS            | No                   | Toggle to enable/disable messaging capabilities for short codes in the location |
| Geographic Reach          | Yes (if SMS enabled) | Toggle capabilities to certian geographical areas. Check our [Messaging Reach Matrix](https://support.bandwidth.com/hc/en-us/articles/360003705673) to see which zones coorespond to different countries |
| SMS Protocol              | Yes (if SMS enabled) | SMPP or HTTP - determines what protocol is used for messages to/from the telephone numbers in the location |
| V2 Messaging              | Yes (if HTTP SMS)    | Required if using the current V2 messaging API |
| Applications (Messaging)  | Yes (if HTTP SMS)    | If using HTTP messaging, the application you wish to associate. When messages are sent to/from the numbers on this location, Bandwidth sends a webhook to the callback URL(s) of the associated application |
| MMS Enabled               | No                   | Toggle on/off MMS capabilities for all telephone numbers in the location |
| MMS Protocol              | Yes (if MMS enabled) | SMPP or HTTP - determines what protocol is used for messages to/from the telephone numbers in the location |


## Order a Phone Number
<img src="../../images/account-setup-4.png" style="max-width:95%">

Now that your account is set up - you are ready to order a phone number and begin communicating with Bandwidth!

For a guide on ordering phone numbers in the Bandwidth Dashboard, [click here](https://support.bandwidth.com/hc/en-us/articles/360011094753-How-do-I-search-and-order-phone-numbers-), for a guide on ordering phone numbers via the Bandwidth Dashboard API, [click here](../../numbers/guides/onDemandNumberSearchAndOrder.md#top)!

## Next steps
### Create an API-only User
Create an [API-only user](../../guides/accountCredentials.md) to validate your API calls. Unlike user accounts that can access the Bandwidth Dashboard User Interface, users restricted to API only access will not require periodic password resets.

### Start Developing to Our Voice and Messaging APIs
After you've completed your account set-up tasks, explore our inventory and order a phone number to your account. Once you have a phone number, you are ready to [send your first text message](../../messaging/methods/messages/createMessage.md) or [create your first phone call](../../voice/methods/calls/postCalls.md). For help, check out our [SDK’s and Postman Collection](../../sdks/about.md).
