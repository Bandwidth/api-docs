require 'bandwidth'

include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    voice_basic_auth_user_name: ENV['BW_USERNAME'],
    voice_basic_auth_password: ENV['BW_PASSWORD']
)

voice_client = bandwidth_client.voice_client.client

conference_id = "conf-1234"
recording_id = "r-1234"

begin
    response = voice_client.get_metadata_for_conference_recording(BW_ACCOUNT_ID, conference_id, recording_id)
    print(response.body.application_id)
except APIException as e:
    print(e.response_code)
