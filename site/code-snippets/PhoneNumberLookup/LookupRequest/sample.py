from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.exceptions.api_exception import APIException
from bandwidth.phonenumberlookup.models.order_request import OrderRequest

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]

bandwidth_client = BandwidthClient(
    phone_number_lookup_basic_auth_user_name=BW_USERNAME,
    phone_number_lookup_basic_auth_password=BW_PASSWORD
)
phone_number_lookup_client = bandwidth_client.phone_number_lookup_client.client

body = OrderRequest()
body.tns = ["+15554443333"]

try:
    response = phone_number_lookup_client.create_lookup_request(BW_ACCOUNT_ID, body)
    print(response.body.request_id)
except APIException as e:
    print(e.response_code)
