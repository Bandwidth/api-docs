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

$mediaFileName = "sample_file_name";
$mediaFile = "12345"; //Any binary string will work for the upload. This includes file contents

try {
    $messagingClient->uploadMedia($BW_ACCOUNT_ID, $mediaFileName, strlen($mediaFile), $mediaFile);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
