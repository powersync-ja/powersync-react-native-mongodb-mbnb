import '@azure/core-asynciterator-polyfill';
import React from 'react';
import { PowerSyncDatabase } from '@powersync/react-native';
import { BackendConnector } from './BackendConnector';
import { AppSchema } from './AppSchema';

export class System {
  powersync: PowerSyncDatabase;
  backendConnector: BackendConnector;

  constructor() {
    this.backendConnector = new BackendConnector();
    this.powersync = new PowerSyncDatabase({
      schema: AppSchema,
      database: {
        dbFilename: 'sqlite.db'
      }
    });
  }

  async init() {
    await this.powersync.init();
    await this.powersync.connect(this.backendConnector);

    console.log(`Is PowerSync connected: ${this.powersync.connected}`);
    await this.powersync.waitForFirstSync();
    console.log("Finished first initial sync.")
  }
}

export const system = new System();

export const SystemContext = React.createContext(system);
export const useSystem = () => React.useContext(SystemContext);