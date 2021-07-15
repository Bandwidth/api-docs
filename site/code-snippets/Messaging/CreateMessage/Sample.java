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
        String messagingApplicationId = System.getenv("BW_MESSAGING_APPLICATION_ID");
        String to = System.getenv("USER_NUMBER");
        String from = System.getenv("BW_NUMBER");

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        MessageRequest request = new MessageRequest();
        request.setApplicationId(messagingApplicationId);
        request.setTo(Collections.singletonList(to));
        request.setFrom(from);
        request.setText("Hello world");

        try {
            ApiResponse<BandwidthMessage> response = client.getMessagingClient().getAPIController().createMessage(ACCOUNT_ID, request);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
