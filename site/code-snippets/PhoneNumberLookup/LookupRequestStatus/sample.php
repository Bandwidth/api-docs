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

$requestId = "1234-abcd";

try {
    $response = $phoneNumberLookupClient->getLookupRequestStatus($BW_ACCOUNT_ID, $requestId);
    print_r($response->getResult()->status);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
