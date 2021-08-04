import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.CreateCallRequest;
import com.bandwidth.voice.models.CreateCallResponse;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

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
                .voiceBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        CreateCallRequest request = new CreateCallRequest();
        request.setApplicationId(voiceApplicationId);
        request.setTo(to);
        request.setFrom(from);
        request.setAnswerUrl(answerUrl);

        try {
            CompletableFuture<ApiResponse<CreateCallResponse>> completableFuture = client.getVoiceClient().getAPIController().createCallAsync(ACCOUNT_ID, request);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
