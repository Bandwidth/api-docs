import { Client, ApiController } from '@bandwidth/messaging';
import * as fs from 'fs';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const mediaId = "abc123.pdf";

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const getMedia = async function() {
  try {
    const response = await controller.getMedia(BW_ACCOUNT_ID, mediaId);
    const chunks = [];
    for await (let chunk of response.result) {
        chunks.push(chunk);
    }
    fs.writeFileSync('file-to-write.pdf', chunks[0], 'binary');
  } catch (error) {
  console.error(error);
}};

getMedia();
