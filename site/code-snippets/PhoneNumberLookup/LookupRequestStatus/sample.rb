require 'bandwidth'
  
include Bandwidth
include Bandwidth::Voice

bandwidth_client = Bandwidth::Client.new(
    phone_number_lookup_basic_auth_user_name: ENV['BW_USERNAME'],
    phone_number_lookup_basic_auth_password: ENV['BW_PASSWORD']
)

phone_number_lookup_client = bandwidth_client.phone_number_lookup_client.client

request_id = "1234-abcd"

begin
    result = phone_number_lookup_client.get_lookup_request_status(ENV['BW_ACCOUNT_ID'], request_id)
    puts result.data.status
rescue APIException => e
    puts e.response_code
end
