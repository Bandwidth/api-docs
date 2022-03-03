require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

body = ConferenceMemberState.new
body.mute = true

conference_id = "conf-1234"
call_id = "c-1234"

begin
    voice_client.modify_conference_member(ENV['BW_ACCOUNT_ID'], conference_id, call_id, body)
rescue APIException => e
    puts e.response_code
end
