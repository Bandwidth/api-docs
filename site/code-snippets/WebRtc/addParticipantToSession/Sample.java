import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;

import java.io.IOException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String sessionId = "75c21163-e110-41bc-bd76-1bb428ec85d5"; // Returned via WebRTC's create session request.
        String participantId = "568749d5-04d5-483d-adf5-deac7dd3d521"; // Returned via WebRTC's create participant request.

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<Void> response = client.getWebRtcClient().getAPIController().addParticipantToSession(ACCOUNT_ID, sessionId, participantId, null);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
