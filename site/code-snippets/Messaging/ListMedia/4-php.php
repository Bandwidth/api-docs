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

$messagingClient = $client->getMessaging()->getClient();

try {
    $response = $messagingClient->listMedia($BW_ACCOUNT_ID);
    if (count($response->getResult()) > 0) {
        print_r($response->getResult()[0]->mediaName);
    }
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
