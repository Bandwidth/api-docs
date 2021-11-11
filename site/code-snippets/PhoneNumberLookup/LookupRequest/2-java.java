import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.phonenumberlookup.models.OrderRequest;
import com.bandwidth.phonenumberlookup.models.OrderResponse;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.ArrayList;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .phoneNumberLookupBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        List<String> numbers = new ArrayList<>();
        numbers.add(System.getenv("USER_NUMBER"));

        OrderRequest request = new OrderRequest(numbers);

        try {
            CompletableFuture<ApiResponse<OrderResponse>> completableFuture = client.getPhoneNumberLookupClient().getAPIController().createLookupRequestAsync(ACCOUNT_ID, request);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
