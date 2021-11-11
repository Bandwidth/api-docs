<?php

require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");

$config = new BandwidthLib\Configuration(
    array(
        'voiceBasicAuthUserName' => $BW_USERNAME,
        'voiceBasicAuthPassword' => $BW_PASSWORD,
    )
);
$client = new BandwidthLib\BandwidthClient($config);

$voiceClient = $client->getVoice()->getClient();

$callId = "c-1234";

$body = new BandwidthLib\Voice\Models\ModifyCallRequest();
$body->redirectUrl = "http://www.myapp.com/new";
$body->state = "active";

try {
    $voiceClient->modifyCall($BW_ACCOUNT_ID, $callId, $body);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
