using Bandwidth.Standard;
using Bandwidth.Standard.WebRtc.Models;

// ...

var client = new BandwidthClient.Builder()
    .Environment(Bandwidth.Standard.Environment.Production)
    .WebRtcBasicAuthCredentials("username", "password")
    .Build();

var session = new Session()
{
    Tag = "new-session"
};

var response = await _client.WebRtc.APIController.CreateSessionAsync("1111111", session);
