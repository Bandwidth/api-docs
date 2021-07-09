from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.exceptions.api_exception import APIException

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]

bandwidth_client = BandwidthClient(
    web_rtc_basic_auth_user_name=BW_USERNAME,
    web_rtc_basic_auth_password=BW_PASSWORD
)
web_rtc_client = bandwidth_client.web_rtc_client.client

session_id = "1234-abcd"
participant_id = "4321-dcba"

try:
    web_rtc_client.add_participant_to_session(BW_ACCOUNT_ID, body)
except APIException as e:
    print(e.response_code)
