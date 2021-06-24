var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");
var applicationId = System.Environment.GetEnvironmentVariable("BW_MESSAGING_APPLICATION_ID");
var to = System.Environment.GetEnvironmentVariable("USER_NUMBER");
var from = System.Environment.GetEnvironmentVariable("BW_NUMBER");
var scope = "sample";
var digits = 6;
var message = "Your temporary {NAME} {SCOPE} code is {CODE}";

var client = new BandwidthClient.Builder()
    .TwoFactorAuthBasicAuthCredentials(username, password)
    .Build();

var request = new TwoFactorCodeRequestSchema
{
    ApplicationId = applicationId,
    To = to,
    From = from,
    Scope = scope,
    Digits = digits,
    Message = message
};

var response = await client.TwoFactorAuth.MFAController.CreateMessagingTwoFactorAsync(accountId, request);
