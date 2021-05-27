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

conference_id = "conf-1234"
member_id = "m-1234"

try:
    response = voice_client.get_conference_member(BW_ACCOUNT_ID, conference_id, member_id)
    print(response.body.member_url)
except APIException as e:
    print(e.response_code)
