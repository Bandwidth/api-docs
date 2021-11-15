curl 'https://voice.bandwidth.com/api/v2/accounts/$BW_ACCOUNT_ID/calls' \
    -X POST \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "from": "$BW_NUMBER",
        "to": "$USER_NUMBER, sip:john@doe.com",
        "uui": "eyJhbGciOiJIUzI1NiJ9.WyJoaSJd.-znkjYyCkgz4djmHUPSXl9YrJ6Nix_XvmlwKGFh5ERM;encoding=jwt,aGVsbG8gd29ybGQ=;encoding=base64",
        "callTimeout": 0,
        "callbackTimeout": 0,
        "answerUrl": "http://example.com",
        "answerFallbackUrl": "http://example.com",
        "username": "string",
        "password": "string",
        "fallbackUsername": "string",
        "fallbackPassword": "string",
        "answerMethod": "POST",
        "answerFallbackMethod": "POST",
        "disconnectUrl": "http://example.com",
        "disconnectMethod": "POST",
        "tag": "string",
        "applicationId": "string",
        "machineDetection": {
            "mode": "sync",
            "detectionTimeout": 0,
            "silenceTimeout": 0,
            "speechThreshold": 0,
            "speechEndThreshold": 0,
            "delayResult": true,
            "callbackUrl": "http://example.com",
            "callbackMethod": "POST",
            "fallbackUrl": "http://example.com",
            "fallbackMethod": "POST",
            "username": "string",
            "password": "string",
            "fallbackUsername": "string",
            "fallbackPassword": "string"
        }
    }'
