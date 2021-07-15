import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.voice.models.ConferenceMemberDetail;

import java.io.IOException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        String conferenceId = "conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8";
        String memberId = "c-95ac8d8d-b81437f5-4586-4d5b-9b46-29f8b3fe0aaf";

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        try {
            ApiResponse<ConferenceMemberDetail> response = client.getVoiceClient().getAPIController().getConferenceMember(ACCOUNT_ID, conferenceId, memberId);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
