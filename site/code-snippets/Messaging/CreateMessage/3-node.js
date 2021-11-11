import { Client, ApiController } from '@bandwidth/messaging';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const BW_MESSAGING_APPLICATION_ID = process.env["BW_MESSAGING_APPLICATION_ID"];
const BW_NUMBER = process.env["BW_NUMBER"];
const USER_NUMBER = process.env["USER_NUMBER"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const accountId = BW_ACCOUNT_ID;

const sendMessage = async function() {
  try {
    const response = await controller.createMessage(accountId, {
        applicationId: BW_MESSAGING_APPLICATION_ID,
        to: [USER_NUMBER],
        from: BW_NUMBER,
        text: 'The quick brown fox jumps over the lazy dog.'
    });
    console.log(response.body);
  } catch (error) {
  console.error(error);
}};

sendMessage();
