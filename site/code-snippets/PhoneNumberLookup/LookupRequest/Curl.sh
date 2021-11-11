curl --location --request POST 'https://numbers.bandwidth.com/api/v1/accounts/$BW_ACCOUNT_ID/tnlookup' \
    --header 'Authorization: Basic $cURL_AUTH' \
    --header 'Content-Type: application/json' \
    --data-raw '{
        "tns":
        [
            "19196104420"
        ]
    }'
