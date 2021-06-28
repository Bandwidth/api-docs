var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

var client = new BandwidthClient.Builder()
    .MessagingBasicAuthCredentials(username, password)
    .Build();

var mediaId = "media-id-123";

var response = await client.GetMediaAsync(accountId, mediaId);
