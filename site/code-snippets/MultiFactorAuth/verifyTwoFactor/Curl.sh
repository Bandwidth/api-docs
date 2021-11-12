curl 'https://mfa.bandwidth.com/api/v1/accounts/$BW_ACCOUNT_ID/code/verify' \
    -X POST \
    -H 'Authorization: Basic $cURL_AUTH' \
    -H 'Content-Type: application/json' \
    -d '{
        "to": "$USER_NUMBER",
        "applicationId": "$BW_MFA_MESSAGING_APPLICATION_ID",
        "scope": "scope",
        "expirationTimeInMinutes": 3,
        "code": "123456"
    }'
