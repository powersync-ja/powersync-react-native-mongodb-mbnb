import {column, Schema, Table} from "@powersync/react-native";

export const LISTINGS_REVIEW_TABLE = 'listingsAndReviews';

export interface ListingsAndReviewRecord {
  id: string;
  picture_url: string;
  access: string;
  accommodates: number;
  address: string;
  amenities: string;
  availability: string;
  bathrooms: number;
  bed_type: string;
  bedrooms: number;
  beds: number;
  calendar_last_scraped: string;
  cancellation_policy: string;
  cleaning_fee: string;
  description: string;
  extra_people: number;
  first_review: string;
  guests_included: number;
  host: string;
  house_rules: string;
  images: string;
  interaction: string;
  last_review: string;
  last_scraped: string;
  listing_url: string;
  maximum_nights: string;
  minimum_nights: string;
  monthly_price: string;
  name: string;
  neighborhood_overview: string;
  notes: string;
  number_of_reviews: number;
  price: string;
  property_type: string;
  review_scores: string;
  reviews: string;
  room_type: string;
  security_deposit: string;
  space: string;
  summary: string;
  transit: string;
  weekly_price: string;
}

const listingsAndReviews = new Table({
  picture_url: column.text,
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
  listingsAndReviews
});

export type Database = (typeof AppSchema)["types"];
export type ListingsAndReview = Database['listingsAndReviews'];