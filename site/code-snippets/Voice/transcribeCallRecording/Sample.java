import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.*;

import java.io.IOException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String callId = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d";
        String recordingId = "r-d68201ef-d53e-4c6d-a743-1c1283909d41";

        BandwidthClient client = new BandwidthClient.Builder()
                .voiceBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        ApiTranscribeRecordingRequest request = new ApiTranscribeRecordingRequest();
        request.setCallbackUrl("https://sample.com/callbacks/transcribe");

        try {
            ApiResponse<Void> response = client.getVoiceClient().getAPIController().createTranscribeRecording(ACCOUNT_ID, callId, recordingId, request);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
