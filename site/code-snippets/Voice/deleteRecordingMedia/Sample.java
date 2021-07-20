import com.bandwidth.BandwidthClient;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.ApiCallResponse;
import com.bandwidth.voice.models.ApiCreateCallRequest;

import java.util.concurrent.CompletableFuture;
import java.util.concurrent.ExecutionException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        // Call id is returned after successfully creating a call.
        String callId = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d";
        // Recording id is returned after retrieving a recording from the call.
        String recordingId = "r-d68201ef-d53e-4c6d-a743-1c1283909d41";

        BandwidthClient client = new BandwidthClient.Builder()
                .voiceBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            CompletableFuture<ApiResponse<Void>> completableFuture = client.getVoiceClient().getAPIController().deleteRecordingMediaAsync(ACCOUNT_ID, callId, recordingId);
            System.out.println(completableFuture.get().getResult());
        } catch (InterruptedException | ExecutionException e) {
            System.out.println(e.getMessage());
        }
    }
}
