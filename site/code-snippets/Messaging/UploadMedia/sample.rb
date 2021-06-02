require 'bandwidth'

include Bandwidth
include Bandwidth::Messaging

bandwidth_client = Bandwidth::Client.new(
    messaging_basic_auth_user_name: ENV['BW_USERNAME'],
    messaging_basic_auth_password: ENV['BW_PASSWORD']
)
messaging_client = bandwidth_client.messaging_client.client

begin
  #f = File.open("some_file", "rb")
  #file_content = f.read
  file_content = "12345"
  messaging_client.upload_media(
    ENV['BW_ACCOUNT_ID'],
    ENV['MEDIA_ID'],
    file_content.length.to_s,
    file_content,
    :content_type => "application/octet-stream",
    :cache_control => "no-cache"
  )
  f.close()
rescue APIException => e
  puts e.response_code
end
