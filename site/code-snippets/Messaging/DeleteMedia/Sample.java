import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.messaging.models.BandwidthMessage;
import com.bandwidth.messaging.models.MessageRequest;

import java.io.IOException;
import java.util.Collections;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String mediaId = "media-id-123";

        BandwidthClient client = new BandwidthClient.Builder()
                .messagingBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<Void> response = client.getMessagingClient().getAPIController().deleteMedia(ACCOUNT_ID, mediaId);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
