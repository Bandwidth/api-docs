import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.webrtc.models.Participant;

import java.io.IOException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String participantId = "568749d5-04d5-483d-adf5-deac7dd3d521";

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<Participant> response = client.getWebRtcClient().getAPIController().getParticipant(ACCOUNT_ID, participantId);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
