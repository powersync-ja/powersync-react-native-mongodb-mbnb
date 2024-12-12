import React, { useMemo } from "react";
import { Platform, SafeAreaView, StyleSheet } from "react-native";

import { AirbnbList } from "./AirbnbList";
import { System, useSystem } from "./powersync/System";
import { PowerSyncContext } from "@powersync/react";

export const AppWrapper: React.FC = () => {

  const system: System = useSystem();
  const db = useMemo(() => {
    return system.powersync;
  }, []);

  return (
    <PowerSyncContext.Provider value={db}>
      <SafeAreaView style={styles.screen}>
          <AirbnbList />
      </SafeAreaView>
    </PowerSyncContext.Provider>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 30 : 0,
  },
});

export default AppWrapper;
