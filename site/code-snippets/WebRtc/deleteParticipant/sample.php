<?php

require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");

$config = new BandwidthLib\Configuration(
    array(
        'webRtcBasicAuthUserName' => $BW_USERNAME,
        'webRtcBasicAuthPassword' => $BW_PASSWORD,
    )
);
$client = new BandwidthLib\BandwidthClient($config);

$webRtcClient = $client->getWebRtc()->getClient();

$body = new BandwidthLib\WebRtc\Models\Participant();
$body->publishPermissions = array("AUDIO", "VIDEO");
$body->deviceApiVersion = "V3";

try {
    $webRtcClient->deleteParticipant($BW_ACCOUNT_ID, $body);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
