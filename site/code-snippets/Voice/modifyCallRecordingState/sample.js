import { Client, ApiController } from '@bandwidth/voice';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const accountId = BW_ACCOUNT_ID;

const callId = 'c-abc12345-6defabc1-2345-6def-abc1-23456defabc1';

const modifyCallRecordingState = async function() {
  try{
      const response = await controller.modifyCallRecordingState(accountId, callId, {
      state: 'PAUSED'
    });
      console.log(response)
  } catch(error) {
      console.error(error);
  }
}

modifyCallRecordingState();
