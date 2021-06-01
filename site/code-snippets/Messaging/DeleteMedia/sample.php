<?php
  
require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");
$BW_MESSAGING_APPLICATION_ID = getenv("BW_MESSAGING_APPLICATION_ID");
$BW_NUMBER = getenv("BW_NUMBER");
$USER_NUMBER = getenv("USER_NUMBER");

$config = new BandwidthLib\Configuration(
    array(
        'messagingBasicAuthUserName' => $BW_USERNAME,
        'messagingBasicAuthPassword' => $BW_PASSWORD,
    )
);
$client = new BandwidthLib\BandwidthClient($config);

$messagingClient = $client->getMessaging()->getClient();

$mediaId = "m-1234";

try {
    $messagingClient->deleteMedia($BW_ACCOUNT_ID, $mediaId);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
