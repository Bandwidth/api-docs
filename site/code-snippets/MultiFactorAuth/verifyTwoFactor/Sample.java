import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.twofactorauth.models.TwoFactorVerifyCodeResponse;
import com.bandwidth.twofactorauth.models.TwoFactorVerifyRequestSchema;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");
    public static final String APPLICATION_ID = System.getenv("BW_VOICE_APPLICATION_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .twoFactorAuthBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        String to = System.getenv("USER_NUMBER");
        String scope = "sample";
        String code = "159193";
        int expirationTimeInMinutes = 3;

        TwoFactorVerifyRequestSchema request = new TwoFactorVerifyRequestSchema();
        request.setApplicationId(APPLICATION_ID);
        request.setTo(to);
        request.setScope(scope);
        request.setCode(code);
        request.setExpirationTimeInMinutes(expirationTimeInMinutes);

        try {
            CompletableFuture<ApiResponse<TwoFactorVerifyCodeResponse>> completableFuture = client.getTwoFactorAuthClient().getMFAController().createVerifyTwoFactorAsync(ACCOUNT_ID, request);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
