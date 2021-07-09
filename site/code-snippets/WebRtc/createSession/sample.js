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

const createSession = async function() {
  try {
    const response = await controller.createSession(accountId, {
      tag: '{"SessionName": "my_session"}'
    })
    console.log(response.body);
  } catch(error) {
    console.error(error);
  }
}

createSession();
