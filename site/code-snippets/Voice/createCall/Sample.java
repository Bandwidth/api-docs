import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.ApiCallResponse;
import com.bandwidth.voice.models.ApiCreateCallRequest;

import java.io.IOException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String voiceApplicationId = System.getenv("BW_VOICE_APPLICATION_ID");
        String to = System.getenv("USER_NUMBER");
        String from = System.getenv("BW_NUMBER");
        String baseUrl = System.getenv("BASE_CALLBACK_URL");
        String answerUrl = baseUrl.concat("/callbacks/answer");

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        ApiCreateCallRequest request = new ApiCreateCallRequest();
        request.setApplicationId(voiceApplicationId);
        request.setTo(to);
        request.setFrom(from);
        request.setAnswerUrl(answerUrl);

        try {
            ApiResponse<ApiCallResponse> response = client.getVoiceClient().getAPIController().createCall(ACCOUNT_ID, request);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
