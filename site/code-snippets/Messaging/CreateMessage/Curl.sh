curl 'https://messaging.bandwidth.com/api/v2/users/$BW_ACCOUNT_ID/messages' \
    -X POST \
    -H 'Authorization: Basic $cURL_AUTH' \
    -H 'Content-Type: application/json' \
    -d '{
        "applicationId": "$BW_ACCOUNT_ID",
        "to": [
        "$USER_NUMBER",
        "+15552223333"
        ],
        "from": "$BW_NUMBER",
        "text": "Hello World!",
        "media": [
            "https://dev.bandwidth.com/images/bandwidth-logo.png",
            "https://dev.bandwidth.com/images/github_logo.png"
        ],
        "tag": "custom string",
        "priority": "default"
    }'
