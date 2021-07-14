import java.io.IOException;

import com.bandwidth.*;
import com.bandwidth.webrtc.models.*;
import com.bandwidth.webrtc.controllers.*;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
            .webRtcBasicAuthCredentials(USERNAME, PASSWORD)
            .build();

        Session session = new Session();
        session.setTag("new-session");

        try {
            ApiResponse<Session> response = client.getWebRtcClient().getAPIController().createSession(ACCOUNT_ID, session);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
