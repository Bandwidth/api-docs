require 'bandwidth'

include Bandwidth
include Bandwidth::Messaging

bandwidth_client = Bandwidth::Client.new(
    messaging_basic_auth_user_name: ENV['BW_USERNAME'],
    messaging_basic_auth_password: ENV['BW_PASSWORD']
)
messaging_client = bandwidth_client.messaging_client.client

begin
  result = messaging_client.get_messages(ENV['BW_ACCOUNT_ID'], source_tn: ENV['BW_NUMBER'])
  puts result.data.total_count
rescue Exception => e
  puts e.description
  puts e.response_code
  exit(1)
end
