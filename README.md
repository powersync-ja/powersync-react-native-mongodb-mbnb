# An MBnB Listing Search Demo with Searchable Results when Offline Using the PowerSync React Native SDK

This is a demo application which was used to port a Realm based application to PowerSync. The original Realm
implementation can be [found here](https://github.com/realm/realm-js/tree/main/examples/rn-mbnb).

## Project Structure

The following shows the project structure and the most relevant files.

```
├── backend                   - App Services App
│   └── (see link above)
│
├── app
│   ├── AirbnbList.tsx        - Main application screen
│   ├── AnonAuth.tsx          - Anonymous authentication component
│   ├── AppWrapper.ts         - Main wrapper with Realm Providers
│   ├── localModels.ts        - Local only realm model schema
│   ├── localRealm.ts         - Local realm context and hooks
│   ├── syncedModels.tsx      - Synced realm model schema
│   └── syncedRealm.tsx       - Synced realm context and hooks
│
├── App.js                    - Entry point
├── sync.config.js            - Add App ID
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

### Set up an Atlas Database with a Sample Dataset

1. [Deploy a free Atlas cluster](https://www.mongodb.com/docs/atlas/getting-started/#get-started-with-atlas) and create an Atlas database.
2. [Load the Sample Airbnb Dataset](https://www.mongodb.com/docs/atlas/sample-data/) into your Atlas database.
    * Several databases and collections exist in the sample dataset, but we will only be using the `sample_airbnb` database and its `listingsAndReviews` collection.
3. [Create a Search Index](https://www.mongodb.com/docs/atlas/atlas-search/tutorial/create-index/) with an Index Name of `mbnb`.  This will be used for Atlas Search within the application.
4. Once pushed, verify that your App shows up in the App Services UI. 
5. 🥳 You can now go ahead and [install dependencies and run the React Native app](#install-dependencies).

### Install Dependencies

From the project root directory, run:

```sh
npm install
```

### Run the App
3. Start Metro (the JavaScript bundler) in its own terminal:
```sh
npm start
```
4. In another terminal, start the app:
```sh
# Open the app on an iOS simulator.
npm run ios

# Open the app on an Android emulator.
npm run android
```

> To run the app on an actual device, see React Native's [Running on Device](https://reactnative.dev/docs/running-on-device).

## Troubleshooting

A great help when troubleshooting is to look at the [Application Logs](https://www.mongodb.com/docs/atlas/app-services/activity/view-logs/) in the App Services UI.

### Permissions

If permission is denied:
  * Make sure your IP address is on the [IP Access List](https://www.mongodb.com/docs/atlas/app-services/security/network/#ip-access-list) for your App.
  * Make sure you have the correct [data access permissions](https://www.mongodb.com/docs/atlas/app-services/rules/roles/#define-roles---permissions) for the collections.

### Removing the Local Realm Database

Removing the local database can be useful for certain errors.

On an iOS simulator:
1. Press and hold the app icon on the Home Screen.
2. Choose to remove the app and its data.

On an Android emulator via Android Studio:
1. Quit the emulator if it is running.
2. Open `Device Manager`.
3. Select `Wipe Data` for the relevant emulator.
