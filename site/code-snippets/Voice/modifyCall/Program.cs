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
        var applicationId = System.Environment.GetEnvironmentVariable("BW_VOICE_APPLICATION_ID");

        // Call id is returned after successfully creating a call.
        var callId = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d";

        var client = new BandwidthClient.Builder()
            .VoiceBasicAuthCredentials(username, password)
            .Build();

        var request = new ModifyCallRequest()
        {
            State = StateEnum.Completed
        };

        try
        {
            await client.Voice.APIController.ModifyCallAsync(accountId, callId, request);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
