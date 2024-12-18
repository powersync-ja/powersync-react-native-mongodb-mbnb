# An MBnB Listing Search Demo with Searchable Results when Offline Using the [PowerSync React Native SDK](https://www.npmjs.com/package/@powersync/react-native)

This is a demo application which was used to port a Realm based application to PowerSync. The original Realm
implementation can be [found here](https://github.com/realm/realm-js/tree/main/examples/rn-mbnb).

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
│    ├── AirbnbList.tsx          - Main application screen
│    ├── AppWrapper.tsx          - Main wrapper with PowerSync Providers
├── App.js                    - Entry point
├── package.json              - Dependencies
└── README.md                 - Instructions and info
```

## Use Cases

This app focuses on showing how to use PowerSync to sync items and view them offline.

## Getting Started

### Prerequisites

* [Node.js](https://nodejs.org/)
* [React Native development environment](https://reactnative.dev/docs/environment-setup?guide=native)
    * Refer to the Expo section.
* MongoDB instance with the [sample-airbnb](https://www.mongodb.com/docs/atlas/sample-data/sample-airbnb/) dataset loaded
  * Add the PowerSync instance to your IP whitelist
* PowerSync instance
  * [Cloud instance](https://powersync.mintlify.app/installation/database-connection#create-a-powersync-cloud-instance)
  * [Self-hosted instance](https://powersync.mintlify.app/self-hosting/getting-started)

## Install Dependencies

From the project root directory, run:

```sh
npm install
```

### Run the App

iOS:
```sh
npm run ios
```

Run on Android:

```sh
npm run android
```

## Learn More

Check out [the PowerSync SDK for React Native on GitHub](https://github.com/powersync-ja/powersync-js/tree/main/packages/react-native) - your feedback and contributions are welcome!

To learn more about PowerSync, see the [PowerSync docs](https://docs.powersync.com).