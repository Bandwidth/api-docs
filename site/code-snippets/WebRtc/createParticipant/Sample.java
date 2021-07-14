import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.webrtc.models.AccountsParticipantsResponse;
import com.bandwidth.webrtc.models.Participant;
import com.bandwidth.webrtc.models.PublishPermissionEnum;

import java.io.IOException;
import java.util.Arrays;
import java.util.List;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        Participant participant = new Participant();
        List<PublishPermissionEnum> publishPermissions = Arrays.asList(PublishPermissionEnum.AUDIO, PublishPermissionEnum.VIDEO);
        participant.setPublishPermissions(publishPermissions);

        try {
            ApiResponse<AccountsParticipantsResponse> response = client.getWebRtcClient().getAPIController().createParticipant(ACCOUNT_ID, participant);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
