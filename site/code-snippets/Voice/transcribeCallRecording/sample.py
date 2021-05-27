from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.voice.models.api_transcribe_recording_request import ApiTranscribeRecordingRequest
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
recording_id = "r-1234"

body = ApiTranscribeRecordingRequest()
body.callback_url = "https://callback-url.com"

try:
    voice_client.create_transcribe_recording(BW_ACCOUNT_ID, call_id, recording_id, body)
except APIException as e:
    print(e.response_code)
