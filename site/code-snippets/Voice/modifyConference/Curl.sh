curl 'https://voice.bandwidth.com/api/v2/accounts/$BW_ACCOUNT_ID/conferences/conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8' \
    -X POST \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "status": "active",
        "redirectUrl": "http://example.com",
        "redirectFallbackUrl": "http://example.com",
        "redirectMethod": "POST",
        "redirectFallbackMethod": "POST",
        "username": "string",
        "password": "string",
        "fallbackUsername": "string",
        "fallbackPassword": "string"
    }'
