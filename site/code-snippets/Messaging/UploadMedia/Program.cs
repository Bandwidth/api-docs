using System.IO;
using System.Text;
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

        var client = new BandwidthClient.Builder()
            .MessagingBasicAuthCredentials(username, password)
            .Build();

        var mediaId = "media-id-123";
                    
        var content = "Hello world";
        var contentType = "text/plain";

        var memoryStream = new MemoryStream(Encoding.UTF8.GetBytes(content));
        var fileStreamInfo = new FileStreamInfo(memoryStream);

        var response = await client.Messaging.APIController.UploadMediaAsync(accountId, mediaId, fileStreamInfo.FileStream.Length, fileStreamInfo, contentType);
    }
}
