This page discusses at a high level how to use the MFA service

# Step 1: Create A Request

In order to create a request, you need your user's phone number, your Bandwidth phone number, your scope (which currently is just `scope`), and your voice OR messaging application ID. Your application IDs must be useable with your Bandwidth phone number.

Simply use the voice or messaging endpoint to make the request.

# Step 2: Receive Your User Input

After the request is made, your user will receive a text message containing the 6 digit MFA code, or a phone call that speaks the 6 digit MFA code. The user needs to input this code into your system.

# Step 3: Validate The User Input

Once your system has received the user's code, you can use the verify endpoint to verify the user's inputted code. Note that the `scope` and `applicationId` of the verify request must match the `scope` and ID of the first request. As an example, if you used messaging to send the code to your user, you must use the messaging account ID when verifying the user.

The verify response tells you if the code is correct or incorrect.
