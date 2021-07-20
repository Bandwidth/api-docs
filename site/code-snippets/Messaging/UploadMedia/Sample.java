import com.bandwidth.BandwidthClient;
import com.bandwidth.exceptions.ApiException;
import com.bandwidth.http.response.ApiResponse;
import com.bandwidth.utilities.FileWrapper;

import java.io.File;
import java.io.IOException;

public class Sample {
    public static final String USERNAME = System.getenv("BW_USERNAME");
    public static final String PASSWORD = System.getenv("BW_PASSWORD");
    public static final String ACCOUNT_ID = System.getenv("BW_ACCOUNT_ID");

    public static void main(String[] args) {
        BandwidthClient client = new BandwidthClient.Builder()
                .messagingBasicAuthCredentials(USERNAME, PASSWORD)
                .build();

        String mediaId = "media-id-123";
        FileWrapper fileWrapper = new FileWrapper(new File("/path/to/file"));

        try {
            ApiResponse<Void> response = client.getMessagingClient().getAPIController().uploadMedia(ACCOUNT_ID, mediaId, fileWrapper.getFile().length(), fileWrapper, "content/type", "no-cache");
        } catch (ApiException|IOException ex) {
            // Handle exceptions from the request.
        }
    }
}
