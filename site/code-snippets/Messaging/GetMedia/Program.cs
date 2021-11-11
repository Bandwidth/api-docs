using System;
using System.Threading.Tasks;
using Bandwidth.Standard;
using Bandwidth.Standard.Exceptions;
using Bandwidth.Standard.Messaging.Models;

class Program
{
    static async Task Main(string[] args)
    {
        var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
        var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
        var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

        var client = new BandwidthClient.Builder()
            .MessagingBasicAuthCredentials(username, password)
            .Build();

        var mediaId = "media-id-123";

        try
        {
            var response = await client.Messaging.APIController.GetMediaAsync(accountId, mediaId);
            Console.WriteLine(response.Data);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
