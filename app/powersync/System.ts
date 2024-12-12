
import '@azure/core-asynciterator-polyfill';
import React from 'react';
import { PowerSyncDatabase } from '@powersync/react-native';
import { BackendConnector } from './BackendConnector';
import { AppSchema } from './AppSchema';
import { configureFts } from "../utils/fts_setup";

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

    await configureFts();

  }
}

export const system = new System();

export const SystemContext = React.createContext(system);
export const useSystem = () => React.useContext(SystemContext);