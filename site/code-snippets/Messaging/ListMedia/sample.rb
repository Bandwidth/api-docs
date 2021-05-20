require 'bandwidth'

include Bandwidth
include Bandwidth::Messaging

bandwidth_client = Bandwidth::Client.new(
    messaging_basic_auth_user_name: ENV['BW_USERNAME'],
    messaging_basic_auth_password: ENV['BW_PASSWORD']
)
messaging_client = bandwidth_client.messaging_client.client

begin
  media = messaging_client.list_media(ENV['BW_ACCOUNT_ID'])
  media.data.each { |item|
    puts item.media_name
  }
rescue Exception => e
  puts e.description
  puts e.response_code
  exit(1)
end
