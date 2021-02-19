{% raw %}
<section class="accountManagementGuides">
{% endraw %}

# Bandwidth Account Structure {#top}

This guide serves to explain the hierarchical structure of your Bandwidth Dashboard Account. It covers Sub-accounts (Sites), Locations (Sip-Peers), and Applications, how they are used, and some cases for creating one or multiples of each.

Bandwidth recommends that all new users complete their account set-up using the Bandwidth Dashboard User Interface in order to best get acquainted with your account structure.

## Components
1. [Account](#account)
1. [Sub-account (Site)](#Sub-account-site)
1. [Location (Sip-Peer)](#Location-sip-peer)
1. [Application](#application)

## Account

Your account is the top-level entity in which you will perform all functions within the Bandwidth Dashboard. Your account has a name and a unique ID number, which can be conveniently found in the URL when logged in to the [Dashboard](https://www.dashboard.bandwidth.com), as well as in the top right-hand corner of the landing page.

AccountId Location in Dashboard URL:
`https://dashboard.bandwidth.com/portal/r/a/{accountId}`

The `accountId` value will be used in API calls across Bandwidth, so we recommend storing it as an environment variable in your production and development environments.

## Sub-account (Site)

Each Account is required to have at least one default Sub-account, also known as a Site. Sub-account and Site are used interchangeably throughout Bandwidth, with `SITE` being the more prevalent term in the API documentation and request/response bodies.

Metaphorically speaking, if you were to look at the Account as a filing cabinet - the Sub-accounts could be best visualized as the drawers. You aren't required to have more than one, but we recommend creating at least a production and development Sub-account to safely test updates and improvements to your own application.

Some use cases may call for you to create individual Sub-accounts for each of your users. It is important to note that there is a maximum of 50 Sub-accounts allowed per Account.

## Location (Sippeer)

Each Sub-account is required to have at least one default Location, also known as a Sippeer. As with Sub-accounts, these terms are interchangeable, and the API mainly refers to Locations as a `SIPPEER`. A Location can best be thought of as a logical grouping of phone numbers, or a folder in the drawer of the Account filing cabinet, with the individual files being telephone numbers.

When a telephone number is added to a Location, it will inherit the settings and properties of that Location. When you order or port new phone numbers to your Bandwidth Account, you are required to specify a Sub-account and Sippeer for those numbers to live in. A use case for having more than one Location in a Sub-account would be for easy configuration of messaging settings.

Bandwidth recommends the use of a production and development Location for each Sub-account to ensure the ability to safely test modifications to your code base before deploying to your production environment.

Another use case for having more than one Location in a Sub-account would be easy configuration of messaging settings. For example, you have a group of users that can utilize messaging on the numbers you provision and a group of users that cannot. With multiple Locations, you could set the phone number to live in the messaging or non-messaging enabled Location at time of provisioning. If, at a later date, you need to toggle the messaging settings for one or more numbers at a time, a MoveTns order would allow you to switch the number’s Location and it will dynamically adapt to the new Location’s settings. Bandwidth does not recommend exceeding 250 locations, as it may begin to affect system responsiveness.

## Application

The application is where you set your callback URL(s) and associate one or more Locations. Depending on the services you are subscribed to, you have the option to create singular Messaging and Voice Applications within the Bandwidth Dashboard.

Applications fall under the Account itself and do not live under a single Sub-account or Location. However, to use an application, it is required that you associate at least one Location. Once this association is created, whenever a messaging or voice event happens on one of your telephone numbers, Bandwidth checks to see which application that Location is associated with to determine the correct callback URL for the messaging or voice event callback to be sent.

Applications may have multiple Locations associated with them, but it is important to note that a Location can only be associated with one voice application and one messaging application at a time.
