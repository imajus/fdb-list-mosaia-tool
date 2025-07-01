# FiloDataBroker Dataset Lister - Mosaia Tool

A Mosaia Tool for listing available datasets from FiloDataBroker, a secure, decentralized marketplace for data trading.

## About This Tool

This tool enables AI agents to discover datasets available for querying on the FiloDataBroker platform. The tool requires no parameters and returns a list of all available datasets that can be accessed through the marketplace.

## Getting Started

1. Register for an account on [mosaia.ai](https://mosaia.ai)
2. Fork/copy this repo
3. Install the GitHub app to the repo by clicking the "Launch App" button on: https://mosaia.ai/org/mosaia/app/github
4. The `.mosaia` manifest file is already configured for FiloDataBroker dataset listing
5. Validate your `.mosaia` manifest file: `npm run validate:manifest`
6. (Optional) Test your tool locally: `npm run start:dev` in one terminal and `npm run test:request` in another
7. Push your changes to `main`. Once pushed, the deployment script will kick off
8. Your tool will appear at `https://mosaia.ai/user/YOUR_USERNAME?tab=tools` in about a minute
9. Add your tool to an agent to enable dataset discovery functionality

## Tool Configuration

This tool is pre-configured with:

- **Name**: "List FiloDataBroker Datasets"
- **Description**: Lists available FiloDataBroker datasets for AI agents
- **Parameters**: None required (returns all available datasets)
- **Environment Variables**: None required for basic dataset listing

## Local Development

### Build Process

```bash
npm run build          # Compile TypeScript to JavaScript
npm run start:dev      # Start local development server on port 3000
npm run test:request   # Test the tool with a sample request
```

### Testing Options

- **Command Line**: Use `npm run test:request` for quick testing
- **Postman**: Import the collection from `postman/` directory
- **Browser**: Access `http://localhost:3000` directly

## Validation

The project includes manifest validation:

```bash
npm run validate:manifest
```

This validates the `.mosaia` file structure including:

- Tool name and description requirements
- Function schema definition
- Parameter specifications (none for this tool)

## Architecture

### Core Files

- **`.mosaia`** - Tool manifest defining the FiloDataBroker dataset lister interface
- **`src/index.ts`** - Handler function that processes Mosaia events
- **`src/tool-call.ts`** - Core implementation for listing FiloDataBroker datasets
- **`package.json`** - Build configuration and dependencies

### Deployment Requirements

1. Valid `.mosaia` manifest file
2. Successful `npm run build` outputting to `dist/` directory
3. Main entry point at `dist/index.js` after build

## FiloDataBroker Integration

This tool integrates with FiloDataBroker's API to:

- Discover available datasets in the marketplace
- Provide dataset metadata for AI agent decision-making
- Enable secure, decentralized data access workflows

Once deployed, AI agents can use this tool to explore data availability before initiating data trading operations on the FiloDataBroker platform.
