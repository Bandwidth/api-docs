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

const createParticipant = async function() {
  try{
    const response = await controller.createParticipant(accountId, {
      callbackUrl: "http://www.myapp.com/new",
      publishPermissions: ["AUDIO"]
    })
    console.log(response.body);
  } catch(error) {
    console.error(error);
  }
}

createParticipant();
