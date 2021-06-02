require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

begin
    result = voice_client.get_query_metadata_for_account(ENV['BW_ACCOUNT_ID'])
    if result.data.length > 0
        puts result.data[0].recording_id
    end
rescue APIException => e
    puts e.response_code
end
