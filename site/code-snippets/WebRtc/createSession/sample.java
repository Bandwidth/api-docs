import java.io.IOException;

import com.bandwidth.*;
import com.bandwidth.webrtc.models.*;
import com.bandwidth.webrtc.controllers.*;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;

class Sample {
    public Sample() {
        String username = System.getenv("BW_USERNAME");
        String password = System.getenv("BW_PASSWORD");
        String accountId = System.getenv("BW_ACCOUNT_ID");

        BandwidthClient client = new BandwidthClient.Builder()
            .webRtcBasicAuthCredentials(username, password)
            .build();

        Session session = new Session();
        session.setTag("new-session");

        try {
            ApiResponse<Session> response = client.getWebRtcClient().getAPIController().createSession(accountId, session);
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
