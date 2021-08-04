using System;
using System.Threading.Tasks;
using Bandwidth.Standard;
using Bandwidth.Standard.Exceptions;
using Bandwidth.Standard.WebRtc.Models;

class Program
{
    static async Task Main(string[] args)
    {
        var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
        var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
        var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

        var sessionId = "75c21163-e110-41bc-bd76-1bb428ec85d5"; // Returned via WebRTC's create session request.
        var participantId = "568749d5-04d5-483d-adf5-deac7dd3d521"; // Returned via WebRTC's create participant request.

        var client = new BandwidthClient.Builder()
            .WebRtcBasicAuthCredentials(username, password)
            .Build();

        var subscriptions = new Subscriptions()
        {
            SessionId = sessionId
        };

        try
        {
            await client.WebRtc.APIController.UpdateParticipantSubscriptionsAsync(accountId, sessionId, participantId, subscriptions);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
