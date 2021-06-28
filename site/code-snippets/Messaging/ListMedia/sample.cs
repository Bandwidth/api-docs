var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

var client = new BandwidthClient.Builder()
    .MessagingBasicAuthCredentials(username, password)
    .Build();

var response = await client.ListMediaAsync(accountId);
