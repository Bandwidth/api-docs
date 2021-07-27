using System.Collections.Generic;
using System.Threading.Tasks;
using Bandwidth.Standard;
using Bandwidth.Standard.PhoneNumberLookup.Models;

class Program
{
    static async Task Main(string[] args)
    {
        var username = System.Environment.GetEnvironmentVariable("BW_USERNAME");
        var password = System.Environment.GetEnvironmentVariable("BW_PASSWORD");
        var accountId = System.Environment.GetEnvironmentVariable("BW_ACCOUNT_ID");

        var client = new BandwidthClient.Builder()
            .PhoneNumberLookupBasicAuthCredentials(username, password)
            .Build();

        var requestId = "8a358296-e188-4a3a-b974-8e4d12001dd8";

        var response = await client.PhoneNumberLookup.APIController.GetLookupRequestStatusAsync(accountId, requestId);
    }
}
