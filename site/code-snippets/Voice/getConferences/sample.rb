require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

begin
    response = voice_client.get_conferences_by_account(ENV['BW_ACCOUNT_ID'])
    if response.data.length > 0
        puts response.data[0].id
    end
rescue APIException => e
    puts e.response_code
end
