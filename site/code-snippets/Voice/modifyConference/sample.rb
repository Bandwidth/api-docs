require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

body = ApiModifyConferenceRequest.new
body.status = StatusEnum::ACTIVE

conference_id = "conf-1234"

begin
    voice_client.modify_conference(ENV['BW_ACCOUNT_ID'], conference_id, :body => body)
rescue APIException => e
    puts e.response_code
end
