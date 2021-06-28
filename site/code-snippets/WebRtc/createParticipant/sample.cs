var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

var client = new BandwidthClient.Builder()
    .WebRtcBasicAuthCredentials(username, password)
    .Build();

var participant = new Participant()
{
    PublishPermissions = new List<PublishPermissionEnum>() { PublishPermissionEnum.AUDIO, PublishPermissionEnum.VIDEO }
};

var response = await client.WebRtc.APIController.CreateParticipantAsync(accountId, participant);
