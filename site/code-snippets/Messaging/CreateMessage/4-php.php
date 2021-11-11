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

$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->from = $BW_NUMBER;
$body->to = array($USER_NUMBER);
$body->applicationId = $BW_MESSAGING_APPLICATION_ID;
$body->text = "Hello world";

try {
    $response = $messagingClient->createMessage($BW_ACCOUNT_ID, $body);
    print_r($response->getResult()->id);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
