<?php
  
require "vendor/autoload.php";

$BW_USERNAME = getenv("BW_USERNAME");
$BW_PASSWORD = getenv("BW_PASSWORD");
$BW_ACCOUNT_ID = getenv("BW_ACCOUNT_ID");
$BW_MFA_MESSAGING_APPLICATION_ID = getenv("BW_MFA_MESSAGING_APPLICATION_ID");
//$BW_MFA_MESSAGING_APPLICATION_ID = getenv("BW_MFA_MESSAGING_APPLICATION_ID");
//Both voice and messaging application IDs can be used. The verify request
//must have the same ID as the code request.
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

$body = new BandwidthLib\TwoFactorAuth\Models\TwoFactorVerifyRequestSchema();
$body->from = $BW_MFA_NUMBER;
$body->to = $USER_NUMBER;
$body->applicationId = $BW_MFA_MESSAGING_APPLICATION_ID;
//$body->applicationId = $BW_MFA_VOICE_APPLICATION_ID;
$body->scope = "scope";
$body->code = "123456"; //This is the user's input to validate
$body->digits = 6;
$body->expirationTimeInMinutes = 3;

try {
    $response = $mfaClient->createVerifyTwoFactor($BW_ACCOUNT_ID, $body);
    print_r($response->getResult()->valid);
} catch (BandwidthLib\APIException $e) {
    print_r($e->getResponseCode());
}
