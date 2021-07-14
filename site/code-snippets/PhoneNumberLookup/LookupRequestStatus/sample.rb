require 'bandwidth'
  
include Bandwidth
include Bandwidth::Voice

BW_USERNAME = ENV['BW_USERNAME']
BW_PASSWORD = ENV['BW_PASSWORD']
BW_ACCOUNT_ID = ENV['BW_ACCOUNT_ID']

bandwidth_client = Bandwidth::Client.new(
    phone_number_lookup_basic_auth_user_name: BW_USERNAME,
    phone_number_lookup_basic_auth_password: BW_PASSWORD
)

phone_number_lookup_client = bandwidth_client.phone_number_lookup_client.client

request_id = "1234-abcd"

begin
    result = phone_number_lookup_client.get_lookup_request_status(BW_ACCOUNT_ID, request_id)
    puts result.data.status
rescue APIException => e
    puts e.response_code
end
