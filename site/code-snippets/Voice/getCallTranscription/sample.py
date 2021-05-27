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
recording_id = "r-1234"

try:
    response = voice_client.get_recording_transcription(BW_ACCOUNT_ID, call_id, recording_id)
    print(response.body.transcripts)
except APIException as e:
    print(e.response_code)
