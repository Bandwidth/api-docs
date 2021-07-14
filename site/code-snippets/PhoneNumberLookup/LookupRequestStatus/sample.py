from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.exceptions.api_exception import APIException

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]

bandwidth_client = BandwidthClient(
    phone_number_lookup_basic_auth_user_name=BW_USERNAME,
    phone_number_lookup_basic_auth_password=BW_PASSWORD
)
phone_number_lookup_client = bandwidth_client.phone_number_lookup_client.client

request_id = "1234-abcd"

try:
    response = phone_number_lookup_client.get_lookup_request_status(BW_ACCOUNT_ID, request_id)
    print(response.body.status)
except APIException as e:
    print(e.response_code)
