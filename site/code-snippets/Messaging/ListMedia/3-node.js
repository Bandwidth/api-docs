import { Client, ApiController } from '@bandwidth/messaging';
import * as fs from 'fs';

const BW_USERNAME = process.env["BW_USERNAME"];
const BW_PASSWORD = process.env["BW_PASSWORD"];
const BW_ACCOUNT_ID = process.env["BW_ACCOUNT_ID"];

const client = new Client({
  basicAuthUserName: BW_USERNAME,
  basicAuthPassword: BW_PASSWORD
});

const controller = new ApiController(client);

const listMedia = async function() {
  try {
    const response = await controller.listMedia(BW_ACCOUNT_ID);
    console.log(response.result)
  } catch (error) {
  console.error(error);
}};

listMedia();
