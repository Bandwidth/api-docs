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

$body = new BandwidthLib\WebRtc\Models\Subscriptions();
$body->sessionId = "1234-abcd";

$sessionId = "1234-abcd";
$participantId = "4321-dcba";

try {
    //$webRtcClient->updateParticipantSubscriptions($BW_ACCOUNT_ID, $sessionId, $participantId);
    $webRtcClient->updateParticipantSubscriptions($BW_ACCOUNT_ID, $participantId, $sessionId);
    //NOTE: This is currently improperly defined
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
