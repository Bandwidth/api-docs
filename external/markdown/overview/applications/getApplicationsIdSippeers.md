## List Associated Sippeers

List all associated Sippeers (_locations_) for an Application

### Request URL

GET `https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}}/associatedsippeers`

#### Basic Authentication

Bandwidth's Account API leverages Basic Authentication with your Dashboard API Credentials. Read more about how Bandwidth secures endpoints in the [Security & Credentials](../../../guides/accountCredentials.md) document.

### HTTP Example: List associated SIPPEERS

#### Request
```http
GET https://dashboard.bandwidth.com/api/accounts/{{accountId}}/applications/{{applicationId}}/associatedsippeers HTTP/1.1
Content-Type: application/xml; charset=utf-8
Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=
```

#### Response
```http
HTTP/1.1 200 OK
Content-Type: application/xml

<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AssociatedSipPeersResponse>
    <AssociatedSipPeers>
        <AssociatedSipPeer>
            <SiteId>13651</SiteId>
            <SiteName>Prod Sub-account</SiteName>
            <PeerId>540341</PeerId>
            <PeerName>Prod</PeerName>
        </AssociatedSipPeer>
        <AssociatedSipPeer>
            <SiteId>13622</SiteId>
            <SiteName>Dev Sub-zccount</SiteName>
            <PeerId>540349</PeerId>
            <PeerName>Dev</PeerName>
        </AssociatedSipPeer>
    </AssociatedSipPeers>
</AssociatedSipPeersResponse>
```
