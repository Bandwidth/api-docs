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
    response = voice_client.get_query_metadata_for_account_and_call(ENV['BW_ACCOUNT_ID'], call_id)
    if response.data.length > 0
        puts response.data[0].media_url
    end
rescue APIException => e
    puts e.response_code
end
