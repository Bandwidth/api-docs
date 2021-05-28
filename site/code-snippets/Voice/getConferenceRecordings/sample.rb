require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

conference_id = "conf-1234"

begin
    response = voice_client.get_query_metadata_for_account_and_conference(ENV['BW_ACCOUNT_ID'], conference_id)
    if response.data.length > 0
        puts response.body[0].name
    end
rescue APIException => e
    puts e.response_code
end
