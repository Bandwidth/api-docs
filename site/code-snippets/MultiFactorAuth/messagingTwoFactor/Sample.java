import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.multifactorauth.models.TwoFactorCodeRequestSchema;
import com.bandwidth.multifactorauth.models.TwoFactorMessagingResponse;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");
    public static final String APPLICATION_ID = System.getenv("BW_MESSAGING_APPLICATION_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .multiFactorAuthBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        String to = System.getenv("USER_NUMBER");
        String from = System.getenv("BW_NUMBER");
        String scope = "sample";
        int digits = 6;
        String message = "Your temporary {NAME} {SCOPE} code is {CODE}";

        TwoFactorCodeRequestSchema request = new TwoFactorCodeRequestSchema();
        request.setApplicationId(APPLICATION_ID);
        request.setTo(to);
        request.setFrom(from);
        request.setScope(scope);
        request.setDigits(digits);
        request.setMessage(message);

        try {
            CompletableFuture<ApiResponse<TwoFactorMessagingResponse>> completableFuture = client.getMultiFactorAuthClient().getMFAController().createMessagingTwoFactorAsync(ACCOUNT_ID, request);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
