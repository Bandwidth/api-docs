curl 'https://numbers.bandwidth.com/api/v1/accounts/$BW_ACCOUNT_ID/tnlookup' \
    -X POST \
    -H 'Authorization: Basic $cURL_AUTH' \
    -H 'Content-Type: application/json' \
    -d '{
        "tns":
        [
            "19196104420"
        ]
    }'
