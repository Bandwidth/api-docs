curl 'https://mfa.bandwidth.com/api/v1/accounts/$BW_ACCOUNT_ID/code/voice' \
    -X POST \
    -H 'Authorization: Basic $cURL_AUTH' \
    -H 'Content-Type: application/json' \
    -d '{
        "to": $USER_NUMBER,
        "from": $BW_MFA_NUMBER,
        "applicationId": $BW_MFA_MESSAGING_APPLICATION_ID,
        "scope": "scope",
        "message": "Your temporary {NAME} {SCOPE} code is {CODE}",
        "digits": 5
    }'
