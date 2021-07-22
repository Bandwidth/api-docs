<?php

require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");
$BW_MFA_VOICE_APPLICATION_ID = getenv("BW_MFA_VOICE_APPLICATION_ID");
$BW_MFA_NUMBER = getenv("BW_MFA_NUMBER");
$USER_NUMBER = getenv("USER_NUMBER");

$config = new BandwidthLib\Configuration(
    array(
        'multiFactorAuthBasicAuthUserName' => $BW_USERNAME,
        'multiFactorAuthBasicAuthPassword' => $BW_PASSWORD,
    )
);
$client = new BandwidthLib\BandwidthClient($config);

$mfaClient = $client->getTwoFactorAuth()->getMFA();

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorCodeRequestSchema();
$body->from = $BW_MFA_NUMBER;
$body->to = $USER_NUMBER;
$body->applicationId = $BW_MFA_VOICE_APPLICATION_ID;
$body->scope = "scope";
$body->digits = 6;
$body->message = "Your temporary {NAME} {SCOPE} code is {CODE}";

try {
    $mfaClient->createVoiceTwoFactor($BW_ACCOUNT_ID, $body);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
