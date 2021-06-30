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

const conferenceId = 'conf-abc12345-6defabc1-2345-6def-abc1-23456defabc1';
const memberId = 'c-abc12345-6defabc1-2345-6def-abc1-23456defabc1';

const modifyConferenceMember = async function() {
  try{
      const response = await controller.modifyConferenceMember(accountId, conferenceId, memberId, {
        mute: true,
        callIdsToCoach : ["c-95ac8d6e-1a31c52e-b38f-4198-93c1-51633ec68f8d", "c-2a913f94-6a486f3a-3cae-4034-bcc3-f0c9fa77ca2f"]
      });
      console.log(response)
  } catch(error) {
      console.error(error);
  }
}

modifyConferenceMember();
