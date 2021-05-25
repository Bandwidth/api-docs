from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.twofactorauth.models.two_factor_verify_request_schema import TwoFactorVerifyRequestSchema
from bandwidth.exceptions.api_exception import APIException

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]
BW_MFA_VOICE_APPLICATION_ID = os.environ["BW_MFA_VOICE_APPLICATION_ID"]
#BW_MFA_MESSAGING_APPLICATION_ID = os.environ["BW_MFA_MESSAGING_APPLICATION_ID"]
#Both voice and messaging application IDs can be used. The verify request
#must have the same ID as the code request.
USER_NUMBER = os.environ["USER_NUMBER"]

bandwidth_client = BandwidthClient(
    two_factor_auth_basic_auth_user_name=BW_USERNAME,
    two_factor_auth_basic_auth_password=BW_PASSWORD
)
auth_client = bandwidth_client.two_factor_auth_client.mfa

body = TwoFactorVerifyRequestSchema(
    to = USER_NUMBER,
    application_id = BW_MFA_VOICE_APPLICATION_ID,
    #application_id = MFA_MESSAGING_APPLICATION_ID,
    scope = "scope",
    code = "123456", #This is the user's input to validate
    expiration_time_in_minutes = 3
)

try:
    response = auth_client.create_verify_two_factor(BW_ACCOUNT_ID, body)
    print(response.body.valid)
except APIException as e:
    print(e.response_code)
