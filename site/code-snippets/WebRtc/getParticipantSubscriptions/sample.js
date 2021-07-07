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

const getParticipantSubscriptions = async function() {
  try{
    const response = await controller.getParticipantSubscriptions(accountId, sessionId, participantId)
    console.log(response.body);
  } catch(error) {
    console.error(error);
  }
}

getParticipantSubscriptions();
