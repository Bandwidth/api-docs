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

const getConferences = async function() {
  try{
      const response = await controller.getConferencesByAccount(accountId);
      console.log(response)
  } catch(error) {
      console.error(error);
  }
}

getConferences();
