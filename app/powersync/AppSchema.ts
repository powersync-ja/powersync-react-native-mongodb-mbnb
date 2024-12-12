import {column, Schema, Table} from "@powersync/react-native";

export const LISTINGS_REVIEW_TABLE = 'listingsAndReview';

const listingsAndReview = new Table({
  access: column.text,
  accommodates: column.integer,
  address: column.text,
  amenities: column.text,
  availability: column.text,
  bathrooms: column.integer,
  bed_type: column.text,
  bedrooms: column.integer,
  beds: column.integer,
  calendar_last_scraped: column.text,
  cancellation_policy: column.text,
  cleaning_fee: column.text,
  description: column.text,
  extra_people: column.integer,
  first_review: column.text,
  guests_included: column.integer,
  host: column.text,
  house_rules: column.text,
  images: column.text,
  interaction: column.text,
  last_review: column.text,
  last_scraped: column.text,
  listing_url: column.text,
  maximum_nights: column.text,
  minimum_nights: column.text,
  monthly_price: column.text,
  name: column.text,
  neighborhood_overview: column.text,
  notes: column.text,
  number_of_reviews: column.integer,
  price: column.text,
  property_type: column.text,
  review_scores: column.text,
  reviews: column.text,
  room_type: column.text,
  security_deposit: column.text,
  space: column.text,
  summary: column.text,
  transit: column.text,
  weekly_price: column.text
});

export const AppSchema = new Schema({
  listingsAndReview
});

export type Database = (typeof AppSchema)["types"];
export type ListingsAndReview = Database['listingsAndReview'];