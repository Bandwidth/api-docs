import { Client, MFAController } from '@bandwidth/mfa';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const BW_MESSAGING_APPLICATION_ID = process.env["BW_VOICE_APPLICATION_ID"];
const toNumber = process.env["USER_NUMBER"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new MFAController(client);

const payload = {
  applicationId: BW_MESSAGING_APPLICATION_ID,
  to: toNumber,
  code: "12345",
  scope: "scope",
  expirationTimeInMinutes: 3
}

const verifyTwoFactor = async function() {
  try {
    const response = await controller.verifyTwoFactor(BW_ACCOUNT_ID, payload);
    console.log(JSON.stringify(response, null, 2));
  } catch (error) {
    console.error(error);
}};

verifyTwoFactor();
