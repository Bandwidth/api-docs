var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");
var applicationId = System.Environment.GetEnvironmentVariable("BW_MESSAGING_APPLICATION_ID");
var bandwidthNumber = System.Environment.GetEnvironmentVariable("BW_NUMBER");
var userNumber = System.Environment.GetEnvironmentVariable("USER_NUMBER");

var client = new BandwidthClient.Builder()
    .MessagingBasicAuthCredentials(username, password)
    .Build();

var request = new MessageRequest()
{
    ApplicationId = applicationId,
    To = new List<string> { userNumber },
    From = bandwidthNumber,
    Text = "Hello world"
};

var response = client.CreateMessage(accountId, request);
