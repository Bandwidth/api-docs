from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.messaging.models.message_request import MessageRequest

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]
BW_MESSAGING_APPLICATION_ID = os.environ["BW_MESSAGING_APPLICATION_ID"]
BW_NUMBER = os.environ["BW_NUMBER"]
USER_NUMBER = os.environ["USER_NUMBER"]

bandwidth_client = BandwidthClient(
    messaging_basic_auth_user_name=BW_USERNAME,
    messaging_basic_auth_password=BW_PASSWORD
)
voice_client = bandwidth_client.voice_client.client

body = MessageRequest()
body.application_id = BW_MESSAGING_APPLICATION_ID
body.to = [USER_NUMBER]
body.mfrom = BW_NUMBER
body.text = "Hello world"
response = self.messaging_client.create_message(BW_ACCOUNT_ID, body)
print(response.body.id)
