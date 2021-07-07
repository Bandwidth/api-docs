import { Client, ApiController, Environment } from '@bandwidth/messaging';
import * as fs from 'fs';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];
const mediaId = "abc123.pdf";
const contentType = "application/octet-stream";
const cacheControl = "no-cache";
const contents = 0b12345; // Any binary string will work for the upload. This includes file contents

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD,
});

const controller = new ApiController(client);

const uploadMedia = async function() {
  try {
    const response = await controller.uploadMedia(BW_ACCOUNT_ID, mediaId, contents, contentType, cacheControl);
    console.log(response.statusCode)
  } catch (error) {
  console.error(error);
}};

uploadMedia();
