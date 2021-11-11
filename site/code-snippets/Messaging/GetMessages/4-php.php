<?php

require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");
$BW_NUMBER = getenv("BW_NUMBER");

$config = new BandwidthLib\Configuration(
    array(
        'messagingBasicAuthUserName' => $BW_USERNAME,
        'messagingBasicAuthPassword' => $BW_PASSWORD,
    )
);
$client = new BandwidthLib\BandwidthClient($config);

$messagingClient = $client->getMessaging()->getClient();

try {
    $response = $messagingClient->getMessages($BW_ACCOUNT_ID, $sourceTn = $BW_NUMBER);
    print_r($response->getResult()->totalCount);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
