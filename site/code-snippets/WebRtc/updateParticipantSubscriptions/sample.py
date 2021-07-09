from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.exceptions.api_exception import APIException
from bandwidth.webrtc.models.subscriptions import Subscriptions

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]

bandwidth_client = BandwidthClient(
    web_rtc_basic_auth_user_name=BW_USERNAME,
    web_rtc_basic_auth_password=BW_PASSWORD
)

web_rtc_client = bandwidth_client.web_rtc_client.client

body = Subscriptions()
body.session_id = "1234-abcd"

session_id = "1234-abcd"
participant_id = "4321-dcba"

try:
    #web_rtc_client.update_participant_subscriptions(BW_ACCOUNT_ID, session_id, participant_id, body)
    web_rtc_client.update_participant_subscriptions(BW_ACCOUNT_ID, participant_id, session_id, body)
    #NOTE: This is currently improperly defined
except APIException as e:
    print(e.response_code)
