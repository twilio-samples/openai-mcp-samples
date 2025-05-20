# MCP Samples

This repo contains sample code for using OpenAI's Responses API and MCP server.

## Pre-requisites

Before you start, make sure you already have deployed Twilio MCP Server to your account. For more information, see [Twilio MCP Function Templates](https://github.com/twilio-labs/function-templates/tree/main/mcp-server).

## Usage

This code sample is using OpenAI's Response API and support for remote MCP server.

1) Copy `.env.sample` to `.env`
2) Replace your Twilio `AUTH_TOKEN` and generate a new `OPENAI_API_KEY`
3) Copy the Twilio Function domain that is hosting your Twilio MCP server
4) Make any changes you want to the `index.js` prompt and run `npm start`
