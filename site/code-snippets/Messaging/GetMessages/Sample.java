import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.messaging.models.BandwidthMessagesList;

import java.io.IOException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String bandwidthNumber = System.getenv("BW_NUMBER");

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<BandwidthMessagesList> response = client.getMessagingClient().getAPIController().getMessages(ACCOUNT_ID, null, bandwidthNumber, null, null, null, null, null, null, null);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
