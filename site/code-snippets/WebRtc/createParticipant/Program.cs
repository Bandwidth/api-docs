using System;
using System.Collections.Generic;
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

        var client = new BandwidthClient.Builder()
            .WebRtcBasicAuthCredentials(username, password)
            .Build();

        var participant = new Participant()
        {
            PublishPermissions = new List<PublishPermissionEnum>() { PublishPermissionEnum.AUDIO, PublishPermissionEnum.VIDEO }
        };

        try
        {
            var response = await client.WebRtc.APIController.CreateParticipantAsync(accountId, participant);
            Console.WriteLine(response.Data);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
