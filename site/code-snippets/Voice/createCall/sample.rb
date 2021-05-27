require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

body = ApiCreateCallRequest.new
body.from = ENV['BW_NUMBER']
body.to = ENV['USER_NUMBER']
body.answer_url = "http://www.myapp.com/hello"
body.application_id = "7fc9698a-b04a-468b-9e8f-91238c0d0086"

begin
    result = voice_client.create_call(ENV['BW_ACCOUNT_ID'], :body => body)
    puts result.data.call_id
rescue APIException => e
    puts e.response_code
end
