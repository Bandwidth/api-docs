import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.messaging.models.BandwidthMessage;
import com.bandwidth.messaging.models.MessageRequest;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
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
                .messagingBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        MessageRequest request = new MessageRequest();
        request.setApplicationId(messagingApplicationId);
        request.setTo(Collections.singletonList(to));
        request.setFrom(from);
        request.setText("Hello world");

        try {
            CompletableFuture<ApiResponse<BandwidthMessage>> completableFuture = client.getMessagingClient().getAPIController().createMessageAsync(ACCOUNT_ID, request);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
