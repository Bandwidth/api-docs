import { Client, ApiController } from '@bandwidth/webrtc';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const accountId = BW_ACCOUNT_ID;
const sessionId = "75c21163-e110-41bc-bd76-1bb428ec85d5"
const participantId = "320e2af6-13ec-498d-8b51-daba52c37853"
const body = {  "sessionId": "75c21163-e110-41bc-bd76-1bb428ec85d5",
                "participants": [{
                    "participantId": "568749d5-04d5-483d-adf5-deac7dd3d521"
                  }, {
                    "participantId": "0275e47f-dd21-4cf0-a1e1-dfdc719e73a7"
                  }]
              }

const updateParticipantSubscriptions = async function() {
  try {
    const response = await controller.updateParticipantSubscriptions(accountId, sessionId, participantId, body)
    console.log(response.body);
  } catch(error) {
    console.error(error);
  }
}

updateParticipantSubscriptions();
