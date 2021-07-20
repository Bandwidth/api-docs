import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.ConferenceRecordingMetadataResponse;

import java.io.IOException;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String conferenceId = "conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8";
        String recordingId = "r-d68201ef-d53e-4c6d-a743-1c1283909d41";

        BandwidthClient client = new BandwidthClient.Builder()
                .voiceBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<List<ConferenceRecordingMetadataResponse>> response = client.getVoiceClient().getAPIController().getQueryMetadataForAccountAndConference(ACCOUNT_ID, conferenceId);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
