import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.ConferenceDetail;

import java.io.IOException;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .voiceBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<List<ConferenceDetail>> response = client.getVoiceClient().getAPIController().getConferencesByAccount(ACCOUNT_ID, null, null, null, null, null);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
