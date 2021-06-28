var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");
var applicationId = System.Environment.GetEnvironmentVariable("BW_VOICE_APPLICATION_ID");
var to = System.Environment.GetEnvironmentVariable("USER_NUMBER");
var from = System.Environment.GetEnvironmentVariable("BW_NUMBER");
var baseUrl = System.Environment.GetEnvironmentVariable("BASE_CALLBACK_URL");
var answerUrl = string.Concat(baseUrl, "/callbacks/answer");

// Call id is returned after successfully creating a call.
var callId = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d";

var client = new BandwidthClient.Builder()
    .VoiceBasicAuthCredentials(username, password)
    .Build();

var request = new ApiModifyCallRequest()
{
    State = State1Enum.Completed
};

var response = await client.Voice.APIController.ModifyCallAsync(accountId, callId, request);
