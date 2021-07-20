import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.messaging.models.Media;

import java.io.IOException;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .messagingBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<List<Media>> response = client.getMessagingClient().getAPIController().listMedia(ACCOUNT_ID, null);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
