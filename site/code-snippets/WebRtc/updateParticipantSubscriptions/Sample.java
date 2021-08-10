import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.webrtc.models.Subscriptions;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String sessionId = "75c21163-e110-41bc-bd76-1bb428ec85d5";
        String participantId = "568749d5-04d5-483d-adf5-deac7dd3d521";

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        Subscriptions subscriptions = new Subscriptions();
        subscriptions.setSessionId(sessionId);

        try {
            CompletableFuture<ApiResponse<Void>> completableFuture = client.getWebRtcClient().getAPIController().updateParticipantSubscriptionsAsync(ACCOUNT_ID, sessionId, participantId, subscriptions);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
