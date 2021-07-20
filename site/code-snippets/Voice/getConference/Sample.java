import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.ConferenceDetail;
import com.bandwidth.voice.models.RecordingMetadataResponse;
import com.bandwidth.voice.models.TranscriptionResponse;

import java.io.IOException;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        // Conference id is returned after successfully creating a conference.
        String conferenceId = "conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8";

        BandwidthClient client = new BandwidthClient.Builder()
                .voiceBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<ConferenceDetail> response = client.getVoiceClient().getAPIController().getConferenceById(ACCOUNT_ID, conferenceId);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
