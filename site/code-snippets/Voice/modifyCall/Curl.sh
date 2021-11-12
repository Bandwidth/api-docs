curl 'https://voice.bandwidth.com/api/v2/accounts/$BW_ACCOUNT_ID/calls/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d' \
    -X POST \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "state": "active",
        "redirectUrl": "http://example.com",
        "redirectFallbackUrl": "http://example.com",
        "redirectMethod": "POST",
        "redirectFallbackMethod": "POST",
        "username": "string",
        "password": "string",
        "fallbackUsername": "string",
        "fallbackPassword": "string",
        "tag": "string"
    }'
