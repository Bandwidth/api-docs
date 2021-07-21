import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.phonenumberlookup.models.OrderStatus;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .phoneNumberLookupBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        String requestId = "8a358296-e188-4a3a-b974-8e4d12001dd8";

        try {
            CompletableFuture<ApiResponse<OrderStatus>> completableFuture = client.getPhoneNumberLookupClient().getAPIController().getLookupRequestStatusAsync(ACCOUNT_ID, requestId);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
