import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.ApiModifyCallRequest;
import com.bandwidth.voice.models.ConferenceDetail;
import com.bandwidth.voice.models.State1Enum;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String callId = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d";

        BandwidthClient client = new BandwidthClient.Builder()
                .voiceBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        ApiModifyCallRequest request = new ApiModifyCallRequest();
        request.setState(State1Enum.COMPLETED);

        try {
            CompletableFuture<ApiResponse<Void>> completableFuture = client.getVoiceClient().getAPIController().modifyCallAsync(ACCOUNT_ID, callId, request);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
