using System.Threading.Tasks;
using Bandwidth.Standard;
using Bandwidth.Standard.Messaging.Models;

class Program
{
    static async Task Main(string[] args)
    {
        var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
        var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
        var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");
        var bandwidthNumber = System.Environment.GetEnvironmentVariable("BW_NUMBER");

        var client = new BandwidthClient.Builder()
            .MessagingBasicAuthCredentials(username, password)
            .Build();

        var response = await client.Messaging.APIController.GetMessagesAsync(accountId, sourceTn: bandwidthNumber);
    }
}
