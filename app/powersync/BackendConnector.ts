import { AbstractPowerSyncDatabase, CrudEntry, PowerSyncBackendConnector, UpdateType } from '@powersync/react-native';
import { AppConfig } from './AppConfig';

export class BackendConnector implements PowerSyncBackendConnector {

  async fetchCredentials() {
    return {
      endpoint: AppConfig.powersyncUrl ?? '',
      token: AppConfig.powerSyncDevelopmentToken ?? '',
    };
  }

  async uploadData(database: AbstractPowerSyncDatabase): Promise<void> {
    const transaction = await database.getNextCrudTransaction();

    if (!transaction) {
      return;
    }

    let lastOp: CrudEntry | null = null;
    try {
        await transaction.complete();
    } catch (ex: any) {
      console.debug(ex);
      console.error('Data upload error - discarding:', lastOp, ex);
      await transaction.complete();
    }
    // else {
    //   throw Error();
    // }
  }
}
