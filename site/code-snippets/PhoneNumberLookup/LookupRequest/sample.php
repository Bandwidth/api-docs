<?php

require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");

$config = new BandwidthLib\Configuration(
    array(
        'messagingBasicAuthUserName' => $BW_USERNAME,
        'messagingBasicAuthPassword' => $BW_PASSWORD,
    )
);
$client = new BandwidthLib\BandwidthClient($config);

$phoneNumberLookupClient = $client->getPhoneNumberLookup()->getClient();

$body = new BandwidthLib\PhoneNumberLookup\Models\OrderRequest();
$body->tns = array("+15554443333");

try {
    $response = $phoneNumberLookupClient->createLookupRequest($BW_ACCOUNT_ID, $body);
    print_r($response->getResult()->requestId);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
