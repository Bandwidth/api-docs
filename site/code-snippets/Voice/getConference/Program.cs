using System;
using System.Threading.Tasks;
using Bandwidth.Standard;
using Bandwidth.Standard.Exceptions;
using Bandwidth.Standard.Voice.Models;

class Program
{
    static async Task Main(string[] args)
    {
        var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
        var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
        var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

        var conferenceId = "conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8";

        var client = new BandwidthClient.Builder()
            .VoiceBasicAuthCredentials(username, password)
            .Build();

        try
        {
            var response = await client.Voice.APIController.GetConferenceByIdAsync(accountId, conferenceId);
            Console.WriteLine(response.Data);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
