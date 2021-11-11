import { Client, ApiController } from '@bandwidth/messaging';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const mediaId = 'abc12345-6def-abc1-2345-6defabc123451.mp3';

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const deleteMedia = async function() {
  try {
    const response = await controller.deleteMedia(BW_ACCOUNT_ID, mediaId);
    console.log(response.statusCode);
  } catch (error) {
  console.error(error);
}};

deleteMedia();
