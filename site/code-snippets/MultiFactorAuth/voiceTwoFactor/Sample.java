import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.twofactorauth.models.TwoFactorCodeRequestSchema;
import com.bandwidth.twofactorauth.models.TwoFactorVoiceResponse;

import java.io.IOException;

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
            ApiResponse<TwoFactorVoiceResponse> response = client.getTwoFactorAuthClient().getMFAController().createVoiceTwoFactor(ACCOUNT_ID, request);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
