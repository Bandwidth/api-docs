using System.Threading.Tasks;
using Bandwidth.Standard;
using Bandwidth.Standard.Voice.Models;

class Program
{
    static async Task Main(string[] args)
    {
        var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
        var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
        var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

        var conferenceId = "conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8";
        // Recording id is returned after retrieving a recording from the call.
        var recordingId = "r-d68201ef-d53e-4c6d-a743-1c1283909d41";

        var client = new BandwidthClient.Builder()
            .VoiceBasicAuthCredentials(username, password)
            .Build();

        var response = await client.Voice.APIController.GetStreamConferenceRecordingMediaAsync(accountId, conferenceId, recordingId);
    }
}
