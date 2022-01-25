curl 'https://voice.bandwidth.com/api/v2/accounts/$BW_ACCOUNT_ID/conferences/conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8/members/c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d' \
    -X PUT \
    -H 'Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=' \
    -H 'Content-Type: application/json' \
    -d '{
        "callId": "string",
        "conferenceId": "string",
        "memberUrl": "string",
        "mute": true,
        "hold": true,
        "callIdsToCoach": [
            "string"
        ]
    }'
