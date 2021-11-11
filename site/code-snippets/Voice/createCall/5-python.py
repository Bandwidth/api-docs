from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.voice.models.create_call_request import CreateCallRequest
from bandwidth.exceptions.api_exception import APIException

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]
BW_VOICE_APPLICATION_ID = os.environ["BW_VOICE_APPLICATION_ID"]
BW_NUMBER = os.environ["BW_NUMBER"]
USER_NUMBER = os.environ["USER_NUMBER"]
VOICE_CALLBACK_URL = os.environ["VOICE_CALLBACK_URL"]

bandwidth_client = BandwidthClient(
    voice_basic_auth_user_name=BW_USERNAME,
    voice_basic_auth_password=BW_PASSWORD
)
voice_client = bandwidth_client.voice_client.client

body = CreateCallRequest()
body.application_id = BW_VOICE_APPLICATION_ID
body.to = USER_NUMBER
body.mfrom = BW_NUMBER
body.answer_url = VOICE_CALLBACK_URL
try:
    response = voice_client.create_call(BW_ACCOUNT_ID, body)
    print(response.body.call_id)
except APIException as e:
    print(e.response_code)
