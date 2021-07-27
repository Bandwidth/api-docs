using System.Threading.Tasks;
using System.Collections.Generic;
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
        var applicationId = System.Environment.GetEnvironmentVariable("BW_MESSAGING_APPLICATION_ID");
        var bandwidthNumber = System.Environment.GetEnvironmentVariable("BW_NUMBER");
        var userNumber = System.Environment.GetEnvironmentVariable("USER_NUMBER");

        var client = new BandwidthClient.Builder()
            .MessagingBasicAuthCredentials(username, password)
            .Build();

        var request = new MessageRequest()
        {
            ApplicationId = applicationId,
            To = new List<string> { userNumber },
            From = bandwidthNumber,
            Text = "Hello world"
        };

        try
        {
            var response = await client.Messaging.APIController.CreateMessageAsync(accountId, request);
            Console.WriteLine(response.Data);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
