import { Client, ApiController } from '@bandwidth/messaging';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const messageId = "1589228074636lm4k2je7j7jklbn2";

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const getMessage = async function() {
  try {
    const response = await controller.getMessages(BW_ACCOUNT_ID, messageId);
    console.log(response.body)
  } catch (error) {
  console.error(error);
}};

getMessage();
