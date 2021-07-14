require 'bandwidth'
  
include Bandwidth
include Bandwidth::Voice

BW_USERNAME = ENV['BW_USERNAME']
BW_PASSWORD = ENV['BW_PASSWORD']
BW_ACCOUNT_ID = ENV['BW_ACCOUNT_ID']

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: BW_USERNAME,
    voice_basic_auth_password: BW_PASSWORD
)

voice_client = bandwidth_client.voice_client.client

call_id = "c-1234"
recording_id = "r-1234"

begin
    result = voice_client.get_stream_recording_media(BW_ACCOUNT_ID, call_id, recording_id)
    downloaded_recording = result.data
rescue APIException => e
    puts e.response_code
end
