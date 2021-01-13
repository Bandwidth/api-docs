# Setup Your Dashboard Account For Network Bridge {#top}
This guide walks through the initial setup for Bandwidth's Network Bridge with Twilio. The network bridge allows you to use Bandwidth to create phone calls using our network from another authorized API provider.

You must contact [Bandwidth Customer Support](http://support.bandwidth.com/) to get your SIP domain and port number.

## Pre-Reqs {#pre-requs}
* [Twilio Account](http://twilio.com/)
* [Bandwidth Dashboard Account](http://bandwidth.com/)
* Network Bridge activated: [_contact sales_](https://www.bandwidth.com/)
* Your customer number IE: `cust11` [_contact support_](http://support.bandwidth.com/)
  * This will be used as part of the `Realm` combined with `auth.bandwidth.com`
* Your default port ex: `5006` [_contact support_](http://support.bandwidth.com/)

## Steps {#steps}
1. [Create New SIP Credentials](#create-new-sip-credentials)
1. [Create call via Twilio with new SIP Creds](#create-call)


## Create New Sip Credentials {#create-new-sip-credentials}
In order to route the outbound calls through Bandwidth, you'll need to create a new set of SIP credentials. To generate your own hash values, you can follow the instructions below, but if you would like Bandwidth to generate those hash values for you, you can skip ahead to the [Using the UI](#using-the-ui) section of this guide.

| Value      | Required | Description |
|------------|----------|-------------|
| `Username` | required | String identifying the user. |
| `Domain`   | optional | String refining the identity of the user. The Domain will be joined to the UserName with an @ to create a composite username. For example, the UserName bob could be combined with the domain somewhere.com to create a composite username bob@somewhere.com |
| `Hash1`    | required | String representing a potential Hash values used to authenticate the client. The value should be computed from an MD5 Hash of: {composite-username}:{Realm}:{Password}. |
| `Hash2`   | required | String representing a potential Hash value used to authenticate the client. The value should be computed from an MD5 Hash of {composite-username}:{Realm}:{Realm}:{Password}. |

The Twilio platform requires a `SIPAuthUsername` and a `SIPAuthPassword`. These examples assume that your `username=sipauthtest` and `password=password`.

### Generate MD5 Hash {#generate-md5-hash}
Either using the command line or an [online tool](http://www.miraclesalad.com/webtools/md5.php) generate the md5 hash from the username and desired password.

Most *nix (mac, linux) come with MD5 hash built in. Check that MD5 is installed by opening up the terminal and typing:
Check that MD5 is installed

```bash
$ which md5
/sbin/md5
```

Once MD5 is installed, run the command: `md5 -s {composite-username}:{Realm}:{Password}` where `{Password}` is the desired password

#### Default Setup (_No Domain Specified as Part of the User's ID_)
##### Generate MD5 `Hash1` _without_ Domain
| composite-username | : | realm                       | : | password   |
|--------------------|---|-----------------------------|---|------------|
| `sipauthtest`      | : | `custxx.auth.bandwidth.com` | : | `password` |
```
md5 -s sipauthtest:custxx.auth.bandwidth.com:password
MD5 ("sipauthtest:custxx.auth.bandwidth.com:password") = fe438bddfc087dda89d29e637f5684ab
```

##### Generate MD5 `Hash2` _without_ Domain
| composite-username | : | realm                       | realm                       | : | password   |
|--------------------|---|-----------------------------|-----------------------------|---|------------|
| `sipauthtest`      | : | `custxx.auth.bandwidth.com` | `custxx.auth.bandwidth.com` | : | `password` |
```bash
md5 -s sipauthtest:custxx.auth.bandwidth.com:custxx.auth.bandwidth.com:password
MD5 ("sipauthtest:custxx.auth.bandwidth.com:custxx.auth.bandwidth.com:password") = 79bb0e55551e14a2f329a282c7cf145
```

#### Non-Default Setup (_Domain Specified_)
##### Generate md5 Hash1 _with_ domain `somewhere.com`
| composite-username  | : | realm                       | : | password   |
|---------------------|---|-----------------------------|---|------------|
| `bob@somewhere.com` | : | `custxx.auth.bandwidth.com` | : | `password` |
```bash
md5 -s bob@somewhere.com:custxx.auth.bandwidth.com:password
MD5 ("bob@somewhere.com:custxx.auth.bandwidth.com:password") = 817d76e91aad032a8c272229f468bfb2
```

#####  Generate md5 Hash2 _with_ domain `somewhere.com`
| composite-username  | : | realm                       | realm                       | : | password   |
|---------------------|---|-----------------------------|-----------------------------|---|------------|
| `bob@somewhere.com` | : | `custxx.auth.bandwidth.com` | `custxx.auth.bandwidth.com` | : | `password` |
```bash
md5 -s bob@somewhere.com:custxx.auth.bandwidth.com:custxx.auth.bandwidth.com:password
MD5 ("bob@somewhere.com:custxx.auth.bandwidth.com:custxx.auth.bandwidth.com:password") = 39679d2a73c2e1ea719621bc0d8fdac8
```

### Add the Newly Created Hash to Sip Credentials {#add-new-credentials}
After generating the hash value, fill in the Hash1 and Hash2 values to create the SIP credentials.

#### Using the UI  {#using-the-ui}
Select `Sip Credentials` from the account overview page on the [Bandwidth Dashboard](dashboard.bandwidth.com)

<img src="../../images/sip_credentials.png" style="max-width:95%">

<img src="../../images/create_sip_credentials.png" style="max-width:95%">

#### Using the API
You can also use the API to create SIP credentials after generating the MD5 hash value. When using the API, Bandwidth will not generate the hashes for you - you must supply your own hash values. You can create multiple SIP credentials within one API call.

```http
POST https://dashboard.bandwidth.com/api/accounts/{accountId}/sipCredentials
HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=

<SipCredentials>
    <SipCredential>
        <UserName>sipauthtest</UserName>
        <Hash1>fe438bddfc087dda89d29e637f5684ab</Hash1>
        <Hash1b>79bb0e55551e14a2f329a282c7cf145</Hash1b>
    </SipCredential>
    <SipCredential>
        <UserName>bob</UserName>
        <Domain>somewhere.com</Domain>
        <Hash1>817d76e91aad032a8c272229f468bfb2</Hash1>
        <Hash1b>39679d2a73c2e1ea719621bc0d8fdac8</Hash1b>
    </SipCredential>
</SipCredentials>
```

## Create Call Using the Network Bridge {#create-call}
To create a call using the network bridge format:

* `TO` field like `sip:{Desired_to_number}@custxx.auth.bandwidth.com:{Port}`
* `SipAuthUsername` as the username created above like `sipauthtest`
* `SipAuthPassword` as the password used to create the MD5 hash like `password`

##### Format the `TO` Field to use the Network Bridge
`sip:+17778889999@custxx.auth.bandwidth.com:5006`

##### Curl Request to Create the Call
```bash
curl 'https://api.twilio.com/2010-04-01/Accounts/{AccountId}/Calls.json' -X POST \
--data-urlencode 'To=sip:+17778889999@custxx.auth.bandwidth.com:5006' \
--data-urlencode 'From=+15553334444' \
--data-urlencode 'Url=http://requestb.in/zolm8azo' \
--data-urlencode 'SipAuthUsername=sipauthtest' \
--data-urlencode 'SipAuthPassword=password' \
-u {AccountId}:{AuthToken}
```
