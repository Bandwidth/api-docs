require 'bandwidth'

include Bandwidth
include Bandwidth::MultiFactorAuth

bandwidth_client = Bandwidth::Client.new(
    multi_factor_auth_basic_auth_user_name: ENV['BW_USERNAME'],
    multi_factor_auth_basic_auth_password: ENV['BW_PASSWORD']
)
auth_client = bandwidth_client.two_factor_auth_client.mfa

body = TwoFactorCodeRequestSchema.new
body.application_id = ENV['BW_VOICE_APPLICATION_ID']
body.to = [ENV['USER_NUMBER']]
body.from = ENV['BW_NUMBER']
body.digits = 6
body.scope = "scope"
body.message = "Your temporary {NAME} {SCOPE} code is {CODE}"
begin
    result = auth_client.create_voice_two_factor(ENV['BW_ACCOUNT_ID'], body)
    puts 'callId: ' + result.data.call_id
rescue APIException => e
    puts e.response_code
end
