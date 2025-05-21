# MCP Samples

This repo contains sample code for using OpenAI's Responses API and MCP server.

## Pre-requisites

Before you start, make sure you already have deployed Twilio MCP Server to your account. For more information, see [Twilio MCP Function Templates](https://github.com/twilio-labs/function-templates/tree/main/mcp-server).

## Usage

### OpenAI Playground

You can use [OpenAI Playground](https://platform.openai.com/playground) to try out the Twilio MCP server.

1) Visit [Twilio MCP Function Templates](https://github.com/twilio-labs/function-templates/tree/main/mcp-server) to deploy your server on Twilio Functions.
2) Visit [OpenAI Playground](https://platform.openai.com/playground) and click on `Create` in front of Tools. Then select `MCP Server` from the dropdown menu. Then select `Add new`.
3) Paste the URL of Twilio Functions MCP Server from step 1) in the URL `https://{functions-domain}.twil.io/mcp`. Include any services you want in the query parameter.
4) For the `Authorization`, select `Custom headers`. For the header key, type in `x-twilio-signature`.
5) For the header value, open your terminal and type `npx twilio-signature-cli -t AUTH_TOKEN -u https://{functions-domain}.twil.io/mcp`. Copy the output and paste it in the header value
6) `Connect`

_NOTE_: You can filter different Twilio Services by using the query param `services` in the URL. For example `https://{functions-domain}.twil.io/mcp?services=Studio&services=PhoneNumbers` would give you `Studio` and `Phone Numbers` services. If you change this URL, remember to re-run the `npx twilio-signature-cli ...` with the updated URL (including the query params) to generate a new signature. For a list of all available services, visit [Twilio Functions](https://github.com/twilio-labs/function-templates/tree/main/mcp-server#filtering-tools-by-service).

### Locally

This code sample is using OpenAI's Response API and support for remote MCP server.

1) Copy `.env.sample` to `.env`
2) Replace your Twilio `AUTH_TOKEN` and generate a new `OPENAI_API_KEY`
3) Copy the Twilio Function domain that is hosting your Twilio MCP server
4) Make any changes you want to the `index.js` prompt and run `npm start`

## Security Recommandations

This MCP server function will provide Tools to your LLM that provide access to your Twilio account. We recommend the following considerations when giving clients access to your server:

* Always set your MCP client to require tool approval to ensure that there are no unintended actions taken within your account.
* Use scoped permissions for your Twilio API Key. Not all endpoints support scoped permissions, but some do. See https://www.twilio.com/docs/iam/api-keys/restricted-api-keys for more information about which actions are supported per API Service.
* To ensure privacy, do not use other MCP servers in conjunction with your Twilio MCP server.
