from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.exceptions.api_exception import APIException

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]

bandwidth_client = BandwidthClient(
    voice_basic_auth_user_name=BW_USERNAME,
    voice_basic_auth_password=BW_PASSWORD
)
voice_client = bandwidth_client.voice_client.client

call_id = "c-1234"

try:
    response = voice_client.get_query_metadata_for_account_and_call(BW_ACCOUNT_ID, call_id)
    if len(response.body) > 0:
        print(response.body[0].recording_id)
except APIException as e:
    print(e.response_code)
