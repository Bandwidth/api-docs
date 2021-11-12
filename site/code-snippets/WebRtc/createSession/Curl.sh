curl 'https://api.webrtc.bandwidth.com/v1/accounts/$BW_ACCOUNT_ID/sessions' \
    -X POST \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "tag": "session1"
    }'
