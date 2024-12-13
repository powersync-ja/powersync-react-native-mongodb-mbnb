import React, { useCallback, useEffect, useState } from "react";
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

  // const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  // The search term is stored in state
  const [searchTerm, setSearchTerm] = useState("");

  const { data: records } = useQuery<ListingsAndReviewRecord>(`
      SELECT
        ${LISTINGS_REVIEW_TABLE}.*
      FROM
        ${LISTINGS_REVIEW_TABLE}
      LIMIT 10
      `);

  // console.log(records)

  // const handleInputChange = async (value: string) => {
  //   if (value.length !== 0) {
  //     let searchResults: any[] = [];
  //     const listingItemsSearchResults = await searchTable(value, 'listingsAndReview');
  //     console.log('listingItemsSearchResults', listingItemsSearchResults);
  //     for (let i = 0; i < listingItemsSearchResults.length; i++) {
  //       const res = await powersync.get<ListingsAndReview>(`SELECT * FROM ${LISTINGS_REVIEW_TABLE} WHERE id = ?`, [
  //         listingItemsSearchResults[i]['list_id']
  //       ]);
  //       listingItemsSearchResults[i]['list_name'] = res.name;
  //     }
  //     if (!listingItemsSearchResults.length) {
  //       searchResults = await searchTable(value, 'lists');
  //     }
  //     const formattedListResults: SearchResult[] = searchResults.map(
  //       (result) => new SearchResult(result['id'], result['name'])
  //     );
  //     setSearchResults([...formattedListResults]);
  //   }
  // };

  // This is fake offline mode for demo purposes.
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
          {/*<FastImage*/}
          {/*  style={styles.image}*/}
          {/*  source={{*/}
          {/*    uri: item.images.picture_url,*/}
          {/*    priority: FastImage.priority.normal,*/}
          {/*    cache: FastImage.cacheControl.immutable,*/}
          {/*  }}*/}
          {/*/>*/}
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
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      {/*<Button title="Do Search" onPress={() => handleInputChange(searchTerm)} />*/}
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
