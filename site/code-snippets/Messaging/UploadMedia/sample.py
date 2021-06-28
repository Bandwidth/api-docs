from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.exceptions.api_exception import APIException

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]

bandwidth_client = BandwidthClient(
    messaging_basic_auth_user_name=BW_USERNAME,
    messaging_basic_auth_password=BW_PASSWORD
)
messaging_client = bandwidth_client.messaging_client.client

media_file_name = 'sample_file_name'
media_file = b'12345' #Any binary string will work for the upload. This includes file contents

try:
    messaging_client.upload_media(BW_ACCOUNT_ID, media_file_name, str(len(media_file)), body=media_file)
except APIException as e:
    print(e.response_code)
