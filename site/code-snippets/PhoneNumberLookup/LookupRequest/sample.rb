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

body = OrderRequest.new
body.tns = ["+15554443333"]

begin
    result = phone_number_lookup_client.create_lookup_request(BW_ACCOUNT_ID, body)
    puts result.data.request_id
rescue APIException => e
    puts e.response_code
end
