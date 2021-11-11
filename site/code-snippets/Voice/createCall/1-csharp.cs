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
        var to = System.Environment.GetEnvironmentVariable("USER_NUMBER");
        var from = System.Environment.GetEnvironmentVariable("BW_NUMBER");
        var baseUrl = System.Environment.GetEnvironmentVariable("BASE_CALLBACK_URL");
        var answerUrl = string.Concat(baseUrl, "/callbacks/answer");

        var client = new BandwidthClient.Builder()
            .VoiceBasicAuthCredentials(username, password)
            .Build();

        var request = new CreateCallRequest()
        {
            ApplicationId = applicationId,
            To = to,
            From = from,
            AnswerUrl = answerUrl
        };

        try
        {
            var response = await client.Voice.APIController.CreateCallAsync(accountId, request);
            Console.WriteLine(response.Data);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
