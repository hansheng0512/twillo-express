// Download the helper library from https://www.twilio.com/docs/node/install
const twilio = require("twilio"); // Or, for ESM: import twilio from "twilio";

// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = 'xx';
const authToken = 'xx';
const client = twilio(accountSid, authToken);

async function createValidationRequest() {
    const validationRequest = await client.validationRequests.create({
        friendlyName: "Han Sheng Arkmind",
        phoneNumber: "+60175077820",
    });

    console.log(validationRequest.accountSid);
}

createValidationRequest();