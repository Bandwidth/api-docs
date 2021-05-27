from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.voice.models.conference_member_detail import ConferenceMemberDetail
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

body = ConferenceMemberDetail()
body.mute = True

conference_id = "conf-1234"
call_id = "c-1234"

try:
    voice_client.modify_conference_member(BW_ACCOUNT_ID, body)
except APIException as e:
    print(e.response_code)
