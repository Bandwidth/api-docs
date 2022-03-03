<?php
  
require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");
$BW_VOICE_APPLICATION_ID = getenv("BW_VOICE_APPLICATION_ID");
$BW_NUMBER = getenv("BW_NUMBER");
$USER_NUMBER = getenv("USER_NUMBER");
$VOICE_CALLBACK_URL = getenv("VOICE_CALLBACK_URL");

$config = new BandwidthLib\Configuration(
    array(
        'voiceBasicAuthUserName' => $BW_USERNAME,
        'voiceBasicAuthPassword' => $BW_PASSWORD,
    )
);
$client = new BandwidthLib\BandwidthClient($config);

$voiceClient = $client->getVoice()->getClient();

$body = new BandwidthLib\Voice\Models\CreateCallRequest();
$body->from = $BW_NUMBER;
$body->to = $USER_NUMBER;
$body->answerUrl = $VOICE_CALLBACK_URL;
$body->applicationId = $BW_VOICE_APPLICATION_ID;

try {
    $response = $voiceClient->createCall($BW_ACCOUNT_ID, $body);
    print_r($response->getResult()->callId);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
} 
