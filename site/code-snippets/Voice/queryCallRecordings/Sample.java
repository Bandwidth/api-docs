import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.*;

import java.io.IOException;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        ConferenceMemberDetail conferenceMemberDetail = new ConferenceMemberDetail();
        conferenceMemberDetail.setMute(true);

        try {
            ApiResponse<List<RecordingMetadataResponse>> response = client.getVoiceClient().getAPIController().getQueryMetadataForAccount(ACCOUNT_ID, null, null, null, null);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
