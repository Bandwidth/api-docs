# QuickStart CLI

A quick way to set up your account and start using our APIs

## Bandwidth CLI Release Notes

| Version | Notes |
|:--------|:-----|
| 0.0.3 | Initial public release |

## Introduction

This CLI allows you to order phone numbers and create the necessary [Bandwidth applications](../account/applications/about.md) to quickly setup your development environment and callback
settings with Bandwidth. In addition, this quick-setup automates the necessary steps required to order
your first number with Bandwidth.

## Getting Started With Bandwidth Via The CLI

First time users should use the `bandwidth quickstart` command to get started. You can use `quickstart` to order a number without prior
setup, or simply setup your account (and order numbers later). `quickstart` can be used as many times as needed, and will automatically set up a new site, sippeer, and application without interacting with or influencing existing account settings.

*Note: quickstart may fail if the CLI settings are reset, as no duplicate names are allowed for applications. To specify an application name, use `bandwidth quickstart --custom`

```
>bandwidth quickstart
? Please enter a message callbackUrl. Information about sent messages will be sent here. Visit https://dev.bandwidth.com/guides/callbacks/callbacks.html for information on Bandwidth callbacks. (example: http://example.com)
>http://example.com

Messaging application created with id b01b1a3d-230a-467a-b143-3974fccc1ad0
Site created with id 37390
Sip Peer created with id 624642

? order a phone number?
>Yes
? Found 10 numbers. Choose which to order.
 (*) 9195007741
 (*) 9195181224
>(*) 9195182893
 ( ) 9195182967
 ( ) 9195784173
 ( ) 9196703710
 ( ) 9197060281
(Move up and down to reveal more choices)
? order 3 phone numbers? Yes
Your order was placed. Awaiting order completion...

orderDate: 2020-07-10T22:03:45.475Z
note: Created a new number order for 3 numbers from RALEIGH, NC
status: COMPLETE
telephoneNumbers:
  - "9195007741"
  - "9195181224"
  - "9195182893"

setup successful. To order more numbers using this setup, use "bandwidth order category <quantity>" or "bandwidth order search <quantity>"
```

At this point, you can now use the number for [messages](../messaging/methods/messages/createMessage.md) or [SDKs](../sdks/about.md). Should you need more (or different) numbers than the 10 that were offered, you can order more numbers using `bandwidth order`.

## Bandwidth CLI Links

The full CLI reference can be found at [the Bandwidth CLI Github page](https://github.com/Bandwidth/bandwidth-cli).

Alternatively, you can reference the CLI at [the Bandwidth CLI NPM page](https://www.npmjs.com/package/@bandwidth/cli).

## Callbacks

Bandwidth requires callback URLs in order to utilize the full extent of our voice and messaging services. Callback URLs are necessary to receive information such as delivery receipts, inbound messages, and phone call operations. More information can be found on our [callbacks page](../guides/callbacks/callbacks.md) 

