# An MBnB Listing Search Demo with Searchable Results when Offline Using the [PowerSync React Native SDK](https://www.npmjs.com/package/@powersync/react-native)

This is a demo application which was used to port a Realm based application to PowerSync. The original Realm
implementation can be [found here](https://github.com/realm/realm-js/tree/main/examples/rn-mbnb).

This repo also contains a Node.js backend API using Express and TypeScript. This API will receive the changes uploaded 
by the client and will write them back to the MongoDB database. You can run this alongside the frontend project.

## Project Structure

The following shows the project structure and the most relevant files.
```
├── app
│    └── powersync
│        ├── ApiClient.ts
│        ├── AppConfig.ts
│        ├── AppSchema.ts
│        ├── BackendConnector.ts
│        └── System.ts
│    ├── AirbnbList.tsx           - Main application screen
│    ├── AppWrapper.tsx           - Main wrapper with PowerSync Providers
├── backend                       - Backend server
│    └── src
│         ├── controllers               
│         ├── middleware               
│         ├── mongo               
│         ├── util
│    ├── Server.ts                        
│    ├── config.ts                        
│    ├── package.json             - Dependencies             
├── App.js                        - App Entry point
├── package.json                  - Dependencies
└── README.md                     - Instructions and info
```

## Use Cases

This app focuses on showing how to use PowerSync to sync items and view them offline.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* [React Native development environment](https://reactnative.dev/docs/environment-setup?guide=native)
  * Refer to the Expo section.
* MongoDB instance with the [sample-airbnb](https://www.mongodb.com/docs/atlas/sample-data/sample-airbnb/) dataset loaded
  * Add the PowerSync instance to your [IP filtering](https://docs.powersync.com/installation/database-setup/security-and-ip-filtering#security-and-ip-filtering)
* PowerSync instance, either:
  * [Cloud instance](https://powersync.mintlify.app/installation/database-connection#create-a-powersync-cloud-instance)
  * [Self-hosted instance](https://powersync.mintlify.app/self-hosting/getting-started)

## Install Dependencies

From the project root directory, run:

```sh
npm install
```
## Set up the Environment Variables
Copy the `.env.template` file and update the variables accordingly:

```bash
cp .env.template .env
```

## Run the App

Before running the app, start the backend server:

```bash
cd backend
npm install
npm start
```
iOS:
```sh
# Run this from the project root directory
npm run ios
```

Run on Android:

```sh
# Run this from the project root directory
npm run android
```

## Learn More

Check out [the PowerSync SDK for React Native on GitHub](https://github.com/powersync-ja/powersync-js/tree/main/packages/react-native) - your feedback and contributions are welcome!

To learn more about PowerSync, see the [PowerSync docs](https://docs.powersync.com).
