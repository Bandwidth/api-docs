from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.exceptions.api_exception import APIException
from bandwidth.webrtc.models.participant import Participant

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]

bandwidth_client = BandwidthClient(
    web_rtc_basic_auth_user_name=BW_USERNAME,
    web_rtc_basic_auth_password=BW_PASSWORD
)

web_rtc_client = bandwidth_client.web_rtc_client.client

body = Participant()
body.publish_permissions = ["AUDIO", "VIDEO"]
body.device_api_version = "V3"

try:
    response = web_rtc_client.create_participant(BW_ACCOUNT_ID, body)
    print(response.body.participant.id)
except APIException as e:
    print(e.response_code)
