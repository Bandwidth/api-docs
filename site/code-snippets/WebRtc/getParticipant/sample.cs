var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

var participantId = "320e2af6-13ec-498d-8b51-daba52c37853";

var client = new BandwidthClient.Builder()
    .WebRtcBasicAuthCredentials(username, password)
    .Build();

var response = await client.WebRtc.APIController.GetParticipantAsync(accountId, participantId);
