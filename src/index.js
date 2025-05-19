import dotenv from "dotenv";
import twilio from "twilio";
import OpenAI from "openai";

dotenv.config();

const { AUTH_TOKEN, MCP_SERVER, OPEN_API_KEY } = process.env;

// For list of services, see ...
const url = `${MCP_SERVER}/mcp?services=Studio&services=PhoneNumbers`;
const signature = twilio.getExpectedTwilioSignature(AUTH_TOKEN, url, {});

const openai = new OpenAI({ apiKey: OPEN_API_KEY });
const response = await openai.responses.create({
  model: "o3",
  instructions:
    "Use the provided Twilio tools to accomplish the task given to you.",
  input:
    "Create and publish a simple IVR using Twilio to answer calls. When you press one, it should connect me to sales on +15555555551. Pressing two should connect me to support on +15555555552. Buy me a Canadian number and hook it up to this IVR.",
  tools: [
    {
      type: "mcp",
      server_label: "twilio",
      server_url: url,
      require_approval: "never",
      headers: {
        "x-twilio-signature": signature,
      },
    },
  ],
});

console.log(response.output_text);
