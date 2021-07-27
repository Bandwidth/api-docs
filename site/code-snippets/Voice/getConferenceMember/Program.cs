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
        var memberId = "c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf";

        var client = new BandwidthClient.Builder()
            .VoiceBasicAuthCredentials(username, password)
            .Build();

        var response = await client.Voice.APIController.GetConferenceMemberAsync(accountId, conferenceId, memberId);
    }
}
