require 'bandwidth'

include Bandwidth
include Bandwidth::Messaging

bandwidth_client = Bandwidth::Client.new(
    messaging_basic_auth_user_name: ENV['BW_USERNAME'],
    messaging_basic_auth_password: ENV['BW_PASSWORD']
)
messaging_client = bandwidth_client.messaging_client.client

begin
  downloaded_media = messaging_client.get_media(ENV['BW_ACCOUNT_ID'], ENV['MEDIA_ID'])
  f = File.open("file_to_write", "wb")
  f.puts(downloaded_media.data)
  f.close()
rescue Exception => e
  puts e
  exit(1)
end
