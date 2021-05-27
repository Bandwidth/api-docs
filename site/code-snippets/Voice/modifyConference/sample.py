from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.voice.models.api_modify_conference_request import ApiModifyConferenceRequest
from bandwidth.voice.models.status_enum import StatusEnum
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

body = ApiModifyConferenceRequest()
body.status = StatusEnum.ACTIVE

try:
    voice_client.modify_conference(BW_ACCOUNT_ID, body)
except APIException as e:
    print(e.response_code)
