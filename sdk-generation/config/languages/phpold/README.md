# Bandwidth PHP SDK

Bandwidth's API docs can be found at https://dev.bandwidth.com

PHP specific docs can be found at https://dev.bandwidth.com/sdks/php.html

## Get Started

### Install

```
composer require bandwidth/sdk
```

### Initialize

```
require "vendor/autoload.php";

$config = new BandwidthLib\Configuration(
    array(
        'messagingBasicAuthUserName' => 'token',
        'messagingBasicAuthPassword' => 'secret',
        'voiceBasicAuthUserName' => 'username',
        'voiceBasicAuthPassword' => 'password',
    )
);
$client = new BandwidthLib\BandwidthClient($config);
```

### Create A Phone Call

```
$voiceClient = $client->getVoice()->getClient();

$body = new BandwidthLib\Voice\Models\ApiCreateCallRequest();
$body->from = "+15554443333";
$body->to = "+15554442222";
$body->answerUrl = "https://test.com";
$body->applicationId = "3-d-4-b-5";

try {
    $response = $voiceClient->createCall($voiceAccountId, $body);
    print_r($response);
} catch (Exception $e) {
    print_r($e);
}
```

### Send A Text Message

```
$messagingClient = $client->getMessaging()->getClient();

$body = new BandwidthLib\Messaging\Models\MessageRequest();
$body->from = "+12345678901";
$body->to = array("+12345678902");
$body->applicationId = "1234-ce-4567-de";
$body->text = "Greetings!";

try {
    $response = $messagingClient->createMessage($messagingAccountId, $body);
    print_r($response);
} catch (Exception $e) {
    print_r($e);
}
```

### Create BXML

```
$speakSentence = new BandwidthLib\Voice\Bxml\SpeakSentence("Hello!");
$speakSentence->voice("susan");
$speakSentence->locale("en_US");
$speakSentence->gender("female");
$response = new BandwidthLib\Voice\Bxml\Response();
$response->addVerb($speakSentence);
echo $response->toBxml();
```
