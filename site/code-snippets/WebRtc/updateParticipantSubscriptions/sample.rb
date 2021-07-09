require 'bandwidth'

include Bandwidth
include Bandwidth::WebRtc

BW_USERNAME = ENV['BW_USERNAME']
BW_PASSWORD = ENV['BW_PASSWORD']
BW_ACCOUNT_ID = ENV['BW_ACCOUNT_ID']

bandwidth_client = Bandwidth::Client.new(
    web_rtc_basic_auth_user_name: BW_USERNAME,
    web_rtc_basic_auth_password: BW_PASSWORD
)

web_rtc_client = bandwidth_client.web_rtc_client.client

body = Subscriptions.new
body.session_id = "1234-abcd"

session_id = "1234-abcd"
participant_id = "4321-dcba"

begin
    #web_rtc_client.update_participant_subscriptions(BW_ACCOUNT_ID, session_id, participant_id, body)
    web_rtc_client.update_participant_subscriptions(BW_ACCOUNT_ID, participant_id, session_id, body)
    #NOTE: This is currently improperly defined
rescue APIException => e
    puts e.response_code
end

