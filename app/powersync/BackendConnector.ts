import {
  AbstractPowerSyncDatabase,
  CrudEntry,
  PowerSyncBackendConnector,
  UpdateType,
} from "@powersync/react-native";
import { AppConfig } from "./AppConfig";
import { ApiClient } from "./ApiClient";

export class BackendConnector implements PowerSyncBackendConnector {
  public apiClient: ApiClient;

  constructor() {
    this.apiClient = new ApiClient(AppConfig.backendUrl);
  }

  async fetchCredentials() {
    return {
      endpoint: AppConfig.powersyncUrl ?? "",
      token: AppConfig.powerSyncDevelopmentToken ?? "",
    };
  }

  async uploadData(database: AbstractPowerSyncDatabase): Promise<void> {
    const transaction = await database.getNextCrudTransaction();

    if (!transaction) {
      return;
    }

    let lastOp: CrudEntry | null = null;

    try {
      for (const op of transaction.crud) {
        lastOp = op;
        const record = { table: op.table, data: { ...op.opData, id: op.id } };
        switch (op.op) {
          case UpdateType.PUT:
            await this.apiClient.upsert(record);
            break;
          case UpdateType.PATCH:
            await this.apiClient.update(record);
            break;
          case UpdateType.DELETE:
            await this.apiClient.delete(record);
            break;
        }
        await transaction.complete();
      }
    } catch (ex: any) {
      console.debug(ex);
      console.error("Data upload error - discarding:", lastOp, ex);
      await transaction.complete();
    }
  }
}
