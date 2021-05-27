from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.voice.models.api_modify_call_request import ApiModifyCallRequest
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

body = ApiModifyCallRequest()
body.redirect_url = "http://www.myapp.com/new"
body.state = "active"

try:
    voice_client.modify_call(BW_ACCOUNT_ID, call_id, body)
except APIException as e:
    print(e.response_code)
