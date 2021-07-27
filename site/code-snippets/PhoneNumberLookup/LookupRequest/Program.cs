using System.Collections.Generic;
using System.Threading.Tasks;
using Bandwidth.Standard;
using Bandwidth.Standard.Exceptions;

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

        var request = new OrderRequest
        {
            Tns = new List<string> { System.Environment.GetEnvironmentVariable("USER_NUMBER") }
        };

        try
        {
            var response = await client.PhoneNumberLookup.APIController.CreateLookupRequestAsync(accountId, request);
            Console.WriteLine(response.Result);
        }
        catch (ApiException e)
        {
            Console.WriteLine(e.Message);
        }
    }
}
