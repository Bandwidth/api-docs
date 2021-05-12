require 'bandwidth'

include Bandwidth
include Bandwidth::Messaging

bandwidth_client = Bandwidth::Client.new(
    messaging_basic_auth_user_name: ENV['BW_USERNAME'],
    messaging_basic_auth_password: ENV['BW_PASSWORD']
)
messaging_client = bandwidth_client.messaging_client.client

body = MessageRequest.new
body.application_id = ENV['BW_MESSAGING_APPLICATION_ID']
body.to = [ENV['USER_NUMBER']]
body.from = ENV['BW_NUMBER']
body.text = 'Hey, check this out!'
body.tag = '{"test": "message"}'
begin
    result = messaging_client.create_message(ENV['BW_ACCOUNT_ID'], body)
    puts 'messageId: ' + result.data.id
rescue Exception => e
    puts e
    exit(1)
end
