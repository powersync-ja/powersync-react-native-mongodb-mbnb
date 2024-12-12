import { useSystem } from "../powersync/System";

/**
 * adding * to the end of the search term will match any word that starts with the search term
 * e.g. searching bl will match blue, black, etc.
 * consult FTS5 Full-text Query Syntax documentation for more options
 * @param searchTerm
 * @returns a modified search term with options.
 */
function createSearchTermWithOptions(searchTerm: string): string {
  const searchTermWithOptions: string = `${searchTerm}*`;
  return searchTermWithOptions;
}

/**
 * Search the FTS table for the given searchTerm
 * @param searchTerm
 * @param tableName
 * @returns results from the FTS table
 */
export async function searchTable(searchTerm: string, tableName: string): Promise<any[]> {
  const searchTermWithOptions = createSearchTermWithOptions(searchTerm);
  console.log(`searching for ${searchTermWithOptions} in ${tableName}`);
  return await useSystem().powersync.getAll(`SELECT * FROM fts_${tableName} WHERE fts_${tableName} MATCH ? ORDER BY rank`, [
    searchTermWithOptions
  ]);
}

//Used to display the search results in the autocomplete text field
export class SearchResult {
  id: string;
  name: string | null;

  constructor(id: string, listingName: string | null = null) {
    this.id = id;
    this.name = listingName;
  }
}
