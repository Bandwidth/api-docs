curl 'https://api.webrtc.bandwidth.com/v1/accounts/$BW_ACCOUNT_ID/sessions/75c21163-e110-41bc-bd76-1bb428ec85d5/participants/568749d5-04d5-483d-adf5-deac7dd3d521/subscriptions' \
    -X PUT \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "sessionId": "d8886aad-b956-4e1b-b2f4-d7c9f8162772",
        "participants": [
            {
                "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521"
            },
            {
                "participantId": "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
            }
        ]
    }'
