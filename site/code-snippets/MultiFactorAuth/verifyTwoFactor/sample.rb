require 'bandwidth'

include Bandwidth
include Bandwidth::MultiFactorAuth

bandwidth_client = Bandwidth::Client.new(
    multi_factor_auth_basic_auth_user_name: ENV['BW_USERNAME'],
    multi_factor_auth_basic_auth_password: ENV['BW_PASSWORD']
)
auth_client = bandwidth_client.two_factor_auth_client.mfa

body = TwoFactorVerifyRequestSchema.new
body.application_id = ENV['BW_VOICE_APPLICATION_ID']
body.to = [ENV['USER_NUMBER']]
body.scope = "scope"
body.code = "123456"
body.expiration_time_in_minutes = 3
begin
    result = auth_client.create_verify_two_factor(ENV['BW_ACCOUNT_ID'], body)
    puts 'valid?: ' + result.data.valid
rescue APIException => e
    puts e.response_code
end
