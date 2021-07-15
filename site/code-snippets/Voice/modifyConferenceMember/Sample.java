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
        String conferenceId = "conf-95ac8d8d-28e06798-2afe-434c-b0f4-666a79cd47f8";
        String callId = "c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d";

        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        ConferenceMemberDetail conferenceMemberDetail = new ConferenceMemberDetail();
        conferenceMemberDetail.setMute(true);

        try {
            ApiResponse<Void> response = client.getVoiceClient().getAPIController().modifyConferenceMember(ACCOUNT_ID, conferenceId, callId, conferenceMemberDetail);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
