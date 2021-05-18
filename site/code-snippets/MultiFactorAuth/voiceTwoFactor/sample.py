from bandwidth.bandwidth_client import BandwidthClient
from bandwidth.twofactorauth.models.two_factor_code_request_schema import TwoFactorCodeRequestSchema

import os

BW_USERNAME = os.environ["BW_USERNAME"]
BW_PASSWORD = os.environ["BW_PASSWORD"]
BW_ACCOUNT_ID = os.environ["BW_ACCOUNT_ID"]
BW_MFA_VOICE_APPLICATION_ID = os.environ["BW_MFA_VOICE_APPLICATION_ID"]
BW_MFA_NUMBER = os.environ["BW_MFA_NUMBER"]
USER_NUMBER = os.environ["USER_NUMBER"]

bandwidth_client = BandwidthClient(
    two_factor_auth_basic_auth_user_name=BW_USERNAME,
    two_factor_auth_basic_auth_password=BW_PASSWORD
)
auth_client = bandwidth_client.two_factor_auth_client.mfa

body = TwoFactorCodeRequestSchema(
    mfrom = BW_MFA_NUMBER,
    to = USER_NUMBER,
    application_id = BW_MFA_VOICE_APPLICATION_ID,
    scope = "scope",
    digits = 6,
    message = "Your temporary {NAME} {SCOPE} code is {CODE}"
)
auth_client.create_voice_two_factor(BW_ACCOUNT_ID, body)
