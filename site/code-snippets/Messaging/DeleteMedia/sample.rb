require 'bandwidth'

include Bandwidth
include Bandwidth::Messaging

bandwidth_client = Bandwidth::Client.new(
    messaging_basic_auth_user_name: ENV['BW_USERNAME'],
    messaging_basic_auth_password: ENV['BW_PASSWORD']
)
messaging_client = bandwidth_client.messaging_client.client

begin
  messaging_client.delete_media(ENV['BW_ACCOUNT_ID'], ENV['MEDIA_ID'])
rescue Exception => e
  puts e.description
  puts e.response_code
  exit(1)
end
