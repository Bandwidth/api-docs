curl 'https://api.webrtc.bandwidth.com/v1/accounts/$BW_ACCOUNT_ID/participants' \
    -X POST \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "callbackUrl": "https://example.com/callback",
        "publishPermissions": [
            "VIDEO",
            "AUDIO"
        ],
        "tag": "participant1",
        "deviceApiVersion": "V3"
    }'
