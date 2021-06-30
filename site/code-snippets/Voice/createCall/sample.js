import { Client, ApiController } from '@bandwidth/voice';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const BW_VOICE_APPLICATION_ID = process.env["BW_VOICE_APPLICATION_ID"];
const BW_NUMBER = process.env["BW_NUMBER"];
const USER_NUMBER = process.env["USER_NUMBER"];
const VOICE_CALLBACK_URL = process.env["VOICE_CALLBACK_URL"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const accountId = BW_ACCOUNT_ID;

const makeCall = async function() {
  try{
    const response = await controller.createCall(accountId, {
        applicationId: BW_VOICE_APPLICATION_ID,
        to: USER_NUMBER,
        from: BW_NUMBER,
        answerUrl: VOICE_CALLBACK_URL,
        answerMethod: 'POST',
        callTimeout: 30
    });
    console.log(response.body);
  } catch(error) {
      console.error(error);
  }
}

makeCall();
