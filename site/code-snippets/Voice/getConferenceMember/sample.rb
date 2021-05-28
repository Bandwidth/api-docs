require 'bandwidth'
  
include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

conference_id = "conf-1234"
member_id = "m-1234"

begin
    response = voice_client.get_conference_member(ENV['BW_ACCOUNT_ID', conference_id, member_id)
    puts response.data.member_url
rescue APIException => e
    puts e.response_code
end
