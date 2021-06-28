require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

call_id = "c-1234"

begin
    #result = voice_client.get_call_state(ENV['BW_ACCOUNT_ID'], call_id)
    #puts result.data.state
    puts "Method broke"
rescue APIException => e
    puts e.response_code
end
