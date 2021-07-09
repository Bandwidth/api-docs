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

body = Participant.new
body.publish_permissions = ["AUDIO", "VIDEO"]
body.device_api_version = "V3"

begin
    response = web_rtc_client.create_participant(BW_ACCOUNT_ID, body)
    puts response.data.participant.id
rescue APIException => e
    puts e.response_code
end
