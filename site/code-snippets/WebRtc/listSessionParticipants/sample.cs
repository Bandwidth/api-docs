var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

var sessionId = "75c21163-e110-41bc-bd76-1bb428ec85d5"; // Returned via WebRTC's create session request.

var client = new BandwidthClient.Builder()
    .WebRtcBasicAuthCredentials(username, password)
    .Build();

var response = await client.WebRtc.APIController.ListSessionParticipantsAsync(accountId, sessionId);
