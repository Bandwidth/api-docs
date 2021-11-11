import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

import com.bandwidth.*;
import com.bandwidth.webrtc.models.*;
import com.bandwidth.http.response.ApiResponse;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        Session session = new Session();
        session.setTag("new-session");

        try {
            CompletableFuture<ApiResponse<Session>> completableFuture = client.getWebRtcClient().getAPIController().createSessionAsync(ACCOUNT_ID, session);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
