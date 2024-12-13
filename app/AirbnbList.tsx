import React, { useCallback, useEffect, useState, Ref, useRef } from "react";
import {
  FlatList,
  Text,
  TextInput,
  View,
  StyleSheet,
  Button,
  ListRenderItem,
  Pressable,
  Image
} from "react-native";

import { usePowerSync, useQuery } from "@powersync/react";
import { LISTINGS_REVIEW_TABLE, ListingsAndReview, ListingsAndReviewRecord } from "./powersync/AppSchema";
import { BackendConnector } from "./powersync/BackendConnector";
import { SearchResult, searchTable } from "./utils/fts_helpers";

enum ResultMethod {
  None = "Search Not Performed",
  Cache = "Cache Hit",
  Local = "Local Full Text Search",
  Remote = "Atlas Search",
}

export const AirbnbList = () => {
  const powersync = usePowerSync();
  // Offline mode is toggled in state and will affect how search is performed
  const [offlineMode, setOfflineMode] = useState(false);

  // The search term is stored in state
  // Set the initial value to 'null' to avoid matching any listings
  const [searchTerm, setSearchTerm] = useState("-null-");
  const [inputValue, setInputValue] = useState("");
  const { data: records } = useQuery<ListingsAndReviewRecord>(`
      SELECT * FROM ${LISTINGS_REVIEW_TABLE} WHERE name LIKE '%${searchTerm}%'
      `);

  const handleInputChange = async (value: string) => {
    setSearchTerm(value)
  }

  // Enable/Disable offline
  useEffect(() => {
    offlineMode
      ? powersync.disconnect()
      : powersync.connect(new BackendConnector());
  }, [offlineMode]);

  const renderListing: ListRenderItem<ListingsAndReview> = useCallback(
    ({ item }) => (
      <Pressable
        onPress={() => {
          alert(JSON.stringify(item));
        }}
      >
        <View style={styles.listing}>
          <Image
            style={styles.image}
            source={{uri: item.picture_url}}
          />
          <Text>{item.name}</Text>
        </View>
      </Pressable>
    ),
    []
  );

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter Search Term..."
        style={styles.searchInput}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <Button title="Do Search" onPress={() => handleInputChange(inputValue)} />
      <FlatList
        data={records}
        renderItem={renderListing}
        keyExtractor={(item) => item.id}
      />
      <View style={styles.footer}>
        <Button
          title={`${offlineMode ? "Disable" : "Enable"} Offline Mode`}
          onPress={() => setOfflineMode((prevOfflineMode) => !prevOfflineMode)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listing: {
    flexDirection: "row",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  footer: {
    padding: 20,
    borderTopWidth: 1,
    borderColor: "#ccc",
  },
  searchInput: {
    borderWidth: 1,
    borderColor: "#999",
    borderRadius: 23,
    paddingVertical: 12,
    paddingHorizontal: 6,
    margin: 6,
  },
});
