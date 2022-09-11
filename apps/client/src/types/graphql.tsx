import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig,
} from "graphql";
import { gql } from "@apollo/client";

export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type RequireFields<T, K extends keyof T> = Omit<T, K> & {
  [P in K]-?: NonNullable<T[P]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigInt: any;
  DateTime: any;
};

export type Asset = {
  __typename?: "Asset";
  holdings_high?: Maybe<Scalars["Int"]>;
  holdings_low?: Maybe<Scalars["Int"]>;
  industry?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  sector?: Maybe<Scalars["String"]>;
  subsidiary_of?: Maybe<Scalars["String"]>;
};

export type BigIntFilter = {
  equals?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export type Bill = {
  __typename?: "Bill";
  bill_id: Scalars["String"];
  bill_uri?: Maybe<Scalars["String"]>;
  latest_action?: Maybe<Scalars["String"]>;
  number: Scalars["String"];
  title?: Maybe<Scalars["String"]>;
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type BoolNullableFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type DetailedDescription = {
  __typename?: "DetailedDescription";
  articleBody: Scalars["String"];
  license: Scalars["String"];
  url: Scalars["String"];
};

export type FloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type Image = {
  __typename?: "Image";
  contentUrl?: Maybe<Scalars["String"]>;
  license?: Maybe<Scalars["String"]>;
  url: Scalars["String"];
};

export type Industry = {
  __typename?: "Industry";
  indivs: Scalars["Float"];
  industry_code: Scalars["String"];
  industry_name: Scalars["String"];
  pacs: Scalars["Float"];
  total: Scalars["Float"];
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type ItemListElement = {
  __typename?: "ItemListElement";
  result: Result;
  resultScore: Scalars["Int"];
  type: Scalars["String"];
};

export type MemPfdProfile = {
  __typename?: "MemPFDProfile";
  asset?: Maybe<Array<Asset>>;
  member_profile?: Maybe<MemberProfile>;
  position?: Maybe<Array<Position>>;
  transaction?: Maybe<Array<Transaction>>;
};

export type MemberProfile = {
  __typename?: "MemberProfile";
  asset_count?: Maybe<Scalars["Int"]>;
  asset_high?: Maybe<Scalars["Int"]>;
  asset_low?: Maybe<Scalars["Int"]>;
  member_id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
  net_high?: Maybe<Scalars["Int"]>;
  net_low?: Maybe<Scalars["Int"]>;
  origin: Scalars["String"];
  positions_held_count?: Maybe<Scalars["Int"]>;
  source: Scalars["String"];
  transaction_count?: Maybe<Scalars["Int"]>;
  tx_high?: Maybe<Scalars["Int"]>;
  tx_low?: Maybe<Scalars["Int"]>;
  update_timestamp: Scalars["String"];
};

export type NestedBigIntFilter = {
  equals?: InputMaybe<Scalars["BigInt"]>;
  gt?: InputMaybe<Scalars["BigInt"]>;
  gte?: InputMaybe<Scalars["BigInt"]>;
  in?: InputMaybe<Array<Scalars["BigInt"]>>;
  lt?: InputMaybe<Scalars["BigInt"]>;
  lte?: InputMaybe<Scalars["BigInt"]>;
  not?: InputMaybe<NestedBigIntFilter>;
  notIn?: InputMaybe<Array<Scalars["BigInt"]>>;
};

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedBoolNullableFilter = {
  equals?: InputMaybe<Scalars["Boolean"]>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  not?: InputMaybe<NestedBoolNullableFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars["DateTime"]>;
  gt?: InputMaybe<Scalars["DateTime"]>;
  gte?: InputMaybe<Scalars["DateTime"]>;
  in?: InputMaybe<Array<Scalars["DateTime"]>>;
  lt?: InputMaybe<Scalars["DateTime"]>;
  lte?: InputMaybe<Scalars["DateTime"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTime"]>>;
};

export type NestedFloatNullableFilter = {
  equals?: InputMaybe<Scalars["Float"]>;
  gt?: InputMaybe<Scalars["Float"]>;
  gte?: InputMaybe<Scalars["Float"]>;
  in?: InputMaybe<Array<Scalars["Float"]>>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Float"]>;
  lte?: InputMaybe<Scalars["Float"]>;
  not?: InputMaybe<NestedFloatNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]>>;
};

export type NestedIntNullableFilter = {
  equals?: InputMaybe<Scalars["Int"]>;
  gt?: InputMaybe<Scalars["Int"]>;
  gte?: InputMaybe<Scalars["Int"]>;
  in?: InputMaybe<Array<Scalars["Int"]>>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["Int"]>;
  lte?: InputMaybe<Scalars["Int"]>;
  not?: InputMaybe<NestedIntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Official = {
  __typename?: "Official";
  age: Scalars["Int"];
  at_large?: Maybe<Scalars["Boolean"]>;
  bioguide_id: Scalars["String"];
  candIndustry: CandIndustry;
  candSummary: CandSummary;
  congressional_district?: Maybe<Scalars["String"]>;
  contact_form?: Maybe<Scalars["String"]>;
  cook_pvi?: Maybe<Scalars["String"]>;
  crp_id: Scalars["String"];
  cspan_id?: Maybe<Scalars["String"]>;
  date_of_birth: Scalars["DateTime"];
  district?: Maybe<Scalars["String"]>;
  dw_nominate?: Maybe<Scalars["Float"]>;
  fax?: Maybe<Scalars["String"]>;
  fec_candidate_id: Scalars["String"];
  first_name: Scalars["String"];
  gender: Scalars["String"];
  geoid?: Maybe<Scalars["String"]>;
  googleKnowledgeGraph: Array<ItemListElement>;
  google_entity_id?: Maybe<Scalars["String"]>;
  govtrack_id?: Maybe<Scalars["String"]>;
  icpsr_id?: Maybe<Scalars["String"]>;
  id: Scalars["String"];
  in_office: Scalars["Boolean"];
  last_name: Scalars["String"];
  last_updated: Scalars["BigInt"];
  leadership_role?: Maybe<Scalars["String"]>;
  lis_id?: Maybe<Scalars["String"]>;
  memPFDProfile: MemPfdProfile;
  middle_name?: Maybe<Scalars["String"]>;
  missed_votes?: Maybe<Scalars["Int"]>;
  missed_votes_pct?: Maybe<Scalars["Float"]>;
  name: Scalars["String"];
  next_election?: Maybe<Scalars["String"]>;
  ocd_id: Scalars["String"];
  office?: Maybe<Scalars["String"]>;
  party: Scalars["String"];
  phone?: Maybe<Scalars["String"]>;
  photo_url: Scalars["String"];
  recentBills: Array<RecentBill>;
  rss_url?: Maybe<Scalars["String"]>;
  senate_class?: Maybe<Scalars["String"]>;
  seniority: Scalars["String"];
  short_title: Scalars["String"];
  slug: Scalars["String"];
  social_media: OfficialSocialMedia;
  state: Scalars["String"];
  state_rank?: Maybe<Scalars["String"]>;
  suffix?: Maybe<Scalars["String"]>;
  title: Scalars["String"];
  total_present?: Maybe<Scalars["Int"]>;
  total_votes?: Maybe<Scalars["Int"]>;
  url: Scalars["String"];
  votes: Array<Vote>;
  votes_against_party_pct?: Maybe<Scalars["Float"]>;
  votes_with_party_pct?: Maybe<Scalars["Float"]>;
  votesmart_id?: Maybe<Scalars["String"]>;
};

export type OfficialOrderByWithRelationInput = {
  at_large?: InputMaybe<SortOrder>;
  bioguide_id?: InputMaybe<SortOrder>;
  congressional_district?: InputMaybe<SortOrder>;
  contact_form?: InputMaybe<SortOrder>;
  cook_pvi?: InputMaybe<SortOrder>;
  crp_id?: InputMaybe<SortOrder>;
  cspan_id?: InputMaybe<SortOrder>;
  date_of_birth?: InputMaybe<SortOrder>;
  district?: InputMaybe<SortOrder>;
  dw_nominate?: InputMaybe<SortOrder>;
  fax?: InputMaybe<SortOrder>;
  fec_candidate_id?: InputMaybe<SortOrder>;
  first_name?: InputMaybe<SortOrder>;
  gender?: InputMaybe<SortOrder>;
  geoid?: InputMaybe<SortOrder>;
  google_entity_id?: InputMaybe<SortOrder>;
  govtrack_id?: InputMaybe<SortOrder>;
  icpsr_id?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  in_office?: InputMaybe<SortOrder>;
  last_name?: InputMaybe<SortOrder>;
  last_updated?: InputMaybe<SortOrder>;
  leadership_role?: InputMaybe<SortOrder>;
  lis_id?: InputMaybe<SortOrder>;
  middle_name?: InputMaybe<SortOrder>;
  missed_votes?: InputMaybe<SortOrder>;
  missed_votes_pct?: InputMaybe<SortOrder>;
  next_election?: InputMaybe<SortOrder>;
  ocd_id?: InputMaybe<SortOrder>;
  office?: InputMaybe<SortOrder>;
  party?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  rss_url?: InputMaybe<SortOrder>;
  senate_class?: InputMaybe<SortOrder>;
  seniority?: InputMaybe<SortOrder>;
  short_title?: InputMaybe<SortOrder>;
  social_media?: InputMaybe<OfficialSocialMediaOrderByInput>;
  state?: InputMaybe<SortOrder>;
  state_rank?: InputMaybe<SortOrder>;
  suffix?: InputMaybe<SortOrder>;
  title?: InputMaybe<SortOrder>;
  total_present?: InputMaybe<SortOrder>;
  total_votes?: InputMaybe<SortOrder>;
  url?: InputMaybe<SortOrder>;
  votes_against_party_pct?: InputMaybe<SortOrder>;
  votes_with_party_pct?: InputMaybe<SortOrder>;
  votesmart_id?: InputMaybe<SortOrder>;
};

export enum OfficialScalarFieldEnum {
  AtLarge = "at_large",
  BioguideId = "bioguide_id",
  CongressionalDistrict = "congressional_district",
  ContactForm = "contact_form",
  CookPvi = "cook_pvi",
  CrpId = "crp_id",
  CspanId = "cspan_id",
  DateOfBirth = "date_of_birth",
  District = "district",
  DwNominate = "dw_nominate",
  Fax = "fax",
  FecCandidateId = "fec_candidate_id",
  FirstName = "first_name",
  Gender = "gender",
  Geoid = "geoid",
  GoogleEntityId = "google_entity_id",
  GovtrackId = "govtrack_id",
  IcpsrId = "icpsr_id",
  Id = "id",
  InOffice = "in_office",
  LastName = "last_name",
  LastUpdated = "last_updated",
  LeadershipRole = "leadership_role",
  LisId = "lis_id",
  MiddleName = "middle_name",
  MissedVotes = "missed_votes",
  MissedVotesPct = "missed_votes_pct",
  NextElection = "next_election",
  OcdId = "ocd_id",
  Office = "office",
  Party = "party",
  Phone = "phone",
  RssUrl = "rss_url",
  SenateClass = "senate_class",
  Seniority = "seniority",
  ShortTitle = "short_title",
  State = "state",
  StateRank = "state_rank",
  Suffix = "suffix",
  Title = "title",
  TotalPresent = "total_present",
  TotalVotes = "total_votes",
  Url = "url",
  VotesAgainstPartyPct = "votes_against_party_pct",
  VotesWithPartyPct = "votes_with_party_pct",
  VotesmartId = "votesmart_id",
}

export type OfficialSocialMedia = {
  __typename?: "OfficialSocialMedia";
  facebook?: Maybe<Scalars["String"]>;
  twitter?: Maybe<Scalars["String"]>;
  youtube?: Maybe<Scalars["String"]>;
};

export type OfficialSocialMediaCompositeFilter = {
  equals?: InputMaybe<OfficialSocialMediaObjectEqualityInput>;
  is?: InputMaybe<OfficialSocialMediaWhereInput>;
  isNot?: InputMaybe<OfficialSocialMediaWhereInput>;
};

export type OfficialSocialMediaObjectEqualityInput = {
  facebook?: InputMaybe<Scalars["String"]>;
  twitter?: InputMaybe<Scalars["String"]>;
  youtube?: InputMaybe<Scalars["String"]>;
};

export type OfficialSocialMediaOrderByInput = {
  facebook?: InputMaybe<SortOrder>;
  twitter?: InputMaybe<SortOrder>;
  youtube?: InputMaybe<SortOrder>;
};

export type OfficialSocialMediaWhereInput = {
  AND?: InputMaybe<Array<OfficialSocialMediaWhereInput>>;
  NOT?: InputMaybe<Array<OfficialSocialMediaWhereInput>>;
  OR?: InputMaybe<Array<OfficialSocialMediaWhereInput>>;
  facebook?: InputMaybe<StringNullableFilter>;
  twitter?: InputMaybe<StringNullableFilter>;
  youtube?: InputMaybe<StringNullableFilter>;
};

export type OfficialWhereInput = {
  AND?: InputMaybe<Array<OfficialWhereInput>>;
  NOT?: InputMaybe<Array<OfficialWhereInput>>;
  OR?: InputMaybe<Array<OfficialWhereInput>>;
  at_large?: InputMaybe<BoolNullableFilter>;
  bioguide_id?: InputMaybe<StringFilter>;
  congressional_district?: InputMaybe<StringNullableFilter>;
  contact_form?: InputMaybe<StringNullableFilter>;
  cook_pvi?: InputMaybe<StringNullableFilter>;
  crp_id?: InputMaybe<StringFilter>;
  cspan_id?: InputMaybe<StringNullableFilter>;
  date_of_birth?: InputMaybe<DateTimeFilter>;
  district?: InputMaybe<StringNullableFilter>;
  dw_nominate?: InputMaybe<FloatNullableFilter>;
  fax?: InputMaybe<StringNullableFilter>;
  fec_candidate_id?: InputMaybe<StringFilter>;
  first_name?: InputMaybe<StringFilter>;
  gender?: InputMaybe<StringFilter>;
  geoid?: InputMaybe<StringNullableFilter>;
  google_entity_id?: InputMaybe<StringNullableFilter>;
  govtrack_id?: InputMaybe<StringNullableFilter>;
  icpsr_id?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  in_office?: InputMaybe<BoolFilter>;
  last_name?: InputMaybe<StringFilter>;
  last_updated?: InputMaybe<BigIntFilter>;
  leadership_role?: InputMaybe<StringNullableFilter>;
  lis_id?: InputMaybe<StringNullableFilter>;
  middle_name?: InputMaybe<StringNullableFilter>;
  missed_votes?: InputMaybe<IntNullableFilter>;
  missed_votes_pct?: InputMaybe<FloatNullableFilter>;
  next_election?: InputMaybe<StringNullableFilter>;
  ocd_id?: InputMaybe<StringFilter>;
  office?: InputMaybe<StringNullableFilter>;
  party?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringNullableFilter>;
  rss_url?: InputMaybe<StringNullableFilter>;
  senate_class?: InputMaybe<StringNullableFilter>;
  seniority?: InputMaybe<StringFilter>;
  short_title?: InputMaybe<StringFilter>;
  social_media?: InputMaybe<OfficialSocialMediaCompositeFilter>;
  state?: InputMaybe<StringFilter>;
  state_rank?: InputMaybe<StringNullableFilter>;
  suffix?: InputMaybe<StringNullableFilter>;
  title?: InputMaybe<StringFilter>;
  total_present?: InputMaybe<IntNullableFilter>;
  total_votes?: InputMaybe<IntNullableFilter>;
  url?: InputMaybe<StringFilter>;
  votes_against_party_pct?: InputMaybe<FloatNullableFilter>;
  votes_with_party_pct?: InputMaybe<FloatNullableFilter>;
  votesmart_id?: InputMaybe<StringNullableFilter>;
};

export type OfficialWhereUniqueInput = {
  id?: InputMaybe<Scalars["String"]>;
};

export type Position = {
  __typename?: "Position";
  organization?: Maybe<Scalars["String"]>;
  title?: Maybe<Scalars["String"]>;
};

export type Query = {
  __typename?: "Query";
  findFirstOfficial?: Maybe<Official>;
  findOfficialByLocation: Array<Official>;
  findOfficialByName: Array<Official>;
  official?: Maybe<Official>;
  officials: Array<Official>;
};

export type QueryFindFirstOfficialArgs = {
  cursor?: InputMaybe<OfficialWhereUniqueInput>;
  distinct?: InputMaybe<Array<OfficialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OfficialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OfficialWhereInput>;
};

export type QueryFindOfficialByLocationArgs = {
  location: Scalars["String"];
};

export type QueryFindOfficialByNameArgs = {
  name: Scalars["String"];
};

export type QueryOfficialArgs = {
  where: OfficialWhereUniqueInput;
};

export type QueryOfficialsArgs = {
  cursor?: InputMaybe<OfficialWhereUniqueInput>;
  distinct?: InputMaybe<Array<OfficialScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<OfficialOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]>;
  take?: InputMaybe<Scalars["Int"]>;
  where?: InputMaybe<OfficialWhereInput>;
};

export enum QueryMode {
  Default = "default",
  Insensitive = "insensitive",
}

export type RecentBill = {
  __typename?: "RecentBill";
  active: Scalars["Boolean"];
  bill_id: Scalars["String"];
  bill_type: Scalars["String"];
  bill_uri: Scalars["String"];
  committees?: Maybe<Scalars["String"]>;
  congress: Scalars["Float"];
  congressdotgov_url: Scalars["String"];
  cosponsors: Scalars["Int"];
  govtrack_url: Scalars["String"];
  introduced_date: Scalars["String"];
  latest_major_action: Scalars["String"];
  latest_major_action_date: Scalars["String"];
  primary_subject: Scalars["String"];
  short_title: Scalars["String"];
  sponsor_name: Scalars["String"];
  sponsor_party: Scalars["String"];
  sponsor_state: Scalars["String"];
  sponsor_title: Scalars["String"];
  sponsor_uri: Scalars["String"];
  summary: Scalars["String"];
  summary_short: Scalars["String"];
  title: Scalars["String"];
};

export type Result = {
  __typename?: "Result";
  description: Scalars["String"];
  detailedDescription?: Maybe<DetailedDescription>;
  id: Scalars["String"];
  image: Image;
  name: Scalars["String"];
  type: Array<Scalars["String"]>;
  url: Scalars["String"];
};

export enum SortOrder {
  Asc = "asc",
  Desc = "desc",
}

export type StringFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars["String"]>;
  endsWith?: InputMaybe<Scalars["String"]>;
  equals?: InputMaybe<Scalars["String"]>;
  gt?: InputMaybe<Scalars["String"]>;
  gte?: InputMaybe<Scalars["String"]>;
  in?: InputMaybe<Array<Scalars["String"]>>;
  isSet?: InputMaybe<Scalars["Boolean"]>;
  lt?: InputMaybe<Scalars["String"]>;
  lte?: InputMaybe<Scalars["String"]>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]>>;
  startsWith?: InputMaybe<Scalars["String"]>;
};

export type Transaction = {
  __typename?: "Transaction";
  asset_name: Scalars["String"];
  tx_action: Scalars["String"];
  tx_date: Scalars["String"];
  value_high: Scalars["Int"];
  value_low: Scalars["Int"];
};

export type Vote = {
  __typename?: "Vote";
  bill: Bill;
  chamber: Scalars["String"];
  date: Scalars["String"];
  description: Scalars["String"];
  member_id: Scalars["String"];
  position: Scalars["String"];
  question: Scalars["String"];
  result: Scalars["String"];
  roll_call: Scalars["String"];
  time: Scalars["String"];
  total: VoteTotal;
  vote_uri: Scalars["String"];
};

export type VoteTotal = {
  __typename?: "VoteTotal";
  no: Scalars["Int"];
  not_voting: Scalars["Int"];
  present: Scalars["Int"];
  yes: Scalars["Int"];
};

export type CandIndustry = {
  __typename?: "candIndustry";
  cand_name: Scalars["String"];
  cid: Scalars["String"];
  cycle: Scalars["String"];
  industries: Array<Industry>;
  last_updated: Scalars["String"];
  origin: Scalars["String"];
  source: Scalars["String"];
};

export type CandSummary = {
  __typename?: "candSummary";
  cand_name: Scalars["String"];
  cash_on_hand: Scalars["Float"];
  chamber: Scalars["String"];
  cid: Scalars["String"];
  cycle: Scalars["String"];
  debt: Scalars["Float"];
  first_elected: Scalars["String"];
  last_updated: Scalars["String"];
  next_election: Scalars["String"];
  origin: Scalars["String"];
  party: Scalars["String"];
  source: Scalars["String"];
  spent: Scalars["Float"];
  state: Scalars["String"];
  total: Scalars["Float"];
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> {
  subscribe: SubscriptionSubscribeFn<
    { [key in TKey]: TResult },
    TParent,
    TContext,
    TArgs
  >;
  resolve?: SubscriptionResolveFn<
    TResult,
    { [key in TKey]: TResult },
    TContext,
    TArgs
  >;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
  TResult,
  TKey extends string,
  TParent,
  TContext,
  TArgs
> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
  TResult,
  TKey extends string,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Asset: ResolverTypeWrapper<Asset>;
  BigInt: ResolverTypeWrapper<Scalars["BigInt"]>;
  BigIntFilter: BigIntFilter;
  Bill: ResolverTypeWrapper<Bill>;
  BoolFilter: BoolFilter;
  BoolNullableFilter: BoolNullableFilter;
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]>;
  DateTimeFilter: DateTimeFilter;
  DetailedDescription: ResolverTypeWrapper<DetailedDescription>;
  Float: ResolverTypeWrapper<Scalars["Float"]>;
  FloatNullableFilter: FloatNullableFilter;
  Image: ResolverTypeWrapper<Image>;
  Industry: ResolverTypeWrapper<Industry>;
  Int: ResolverTypeWrapper<Scalars["Int"]>;
  IntNullableFilter: IntNullableFilter;
  ItemListElement: ResolverTypeWrapper<ItemListElement>;
  MemPFDProfile: ResolverTypeWrapper<MemPfdProfile>;
  MemberProfile: ResolverTypeWrapper<MemberProfile>;
  NestedBigIntFilter: NestedBigIntFilter;
  NestedBoolFilter: NestedBoolFilter;
  NestedBoolNullableFilter: NestedBoolNullableFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Official: ResolverTypeWrapper<Official>;
  OfficialOrderByWithRelationInput: OfficialOrderByWithRelationInput;
  OfficialScalarFieldEnum: OfficialScalarFieldEnum;
  OfficialSocialMedia: ResolverTypeWrapper<OfficialSocialMedia>;
  OfficialSocialMediaCompositeFilter: OfficialSocialMediaCompositeFilter;
  OfficialSocialMediaObjectEqualityInput: OfficialSocialMediaObjectEqualityInput;
  OfficialSocialMediaOrderByInput: OfficialSocialMediaOrderByInput;
  OfficialSocialMediaWhereInput: OfficialSocialMediaWhereInput;
  OfficialWhereInput: OfficialWhereInput;
  OfficialWhereUniqueInput: OfficialWhereUniqueInput;
  Position: ResolverTypeWrapper<Position>;
  Query: ResolverTypeWrapper<{}>;
  QueryMode: QueryMode;
  RecentBill: ResolverTypeWrapper<RecentBill>;
  Result: ResolverTypeWrapper<Result>;
  SortOrder: SortOrder;
  String: ResolverTypeWrapper<Scalars["String"]>;
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Transaction: ResolverTypeWrapper<Transaction>;
  Vote: ResolverTypeWrapper<Vote>;
  VoteTotal: ResolverTypeWrapper<VoteTotal>;
  candIndustry: ResolverTypeWrapper<CandIndustry>;
  candSummary: ResolverTypeWrapper<CandSummary>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Asset: Asset;
  BigInt: Scalars["BigInt"];
  BigIntFilter: BigIntFilter;
  Bill: Bill;
  BoolFilter: BoolFilter;
  BoolNullableFilter: BoolNullableFilter;
  Boolean: Scalars["Boolean"];
  DateTime: Scalars["DateTime"];
  DateTimeFilter: DateTimeFilter;
  DetailedDescription: DetailedDescription;
  Float: Scalars["Float"];
  FloatNullableFilter: FloatNullableFilter;
  Image: Image;
  Industry: Industry;
  Int: Scalars["Int"];
  IntNullableFilter: IntNullableFilter;
  ItemListElement: ItemListElement;
  MemPFDProfile: MemPfdProfile;
  MemberProfile: MemberProfile;
  NestedBigIntFilter: NestedBigIntFilter;
  NestedBoolFilter: NestedBoolFilter;
  NestedBoolNullableFilter: NestedBoolNullableFilter;
  NestedDateTimeFilter: NestedDateTimeFilter;
  NestedFloatNullableFilter: NestedFloatNullableFilter;
  NestedIntNullableFilter: NestedIntNullableFilter;
  NestedStringFilter: NestedStringFilter;
  NestedStringNullableFilter: NestedStringNullableFilter;
  Official: Official;
  OfficialOrderByWithRelationInput: OfficialOrderByWithRelationInput;
  OfficialSocialMedia: OfficialSocialMedia;
  OfficialSocialMediaCompositeFilter: OfficialSocialMediaCompositeFilter;
  OfficialSocialMediaObjectEqualityInput: OfficialSocialMediaObjectEqualityInput;
  OfficialSocialMediaOrderByInput: OfficialSocialMediaOrderByInput;
  OfficialSocialMediaWhereInput: OfficialSocialMediaWhereInput;
  OfficialWhereInput: OfficialWhereInput;
  OfficialWhereUniqueInput: OfficialWhereUniqueInput;
  Position: Position;
  Query: {};
  RecentBill: RecentBill;
  Result: Result;
  String: Scalars["String"];
  StringFilter: StringFilter;
  StringNullableFilter: StringNullableFilter;
  Transaction: Transaction;
  Vote: Vote;
  VoteTotal: VoteTotal;
  candIndustry: CandIndustry;
  candSummary: CandSummary;
};

export type AssetResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Asset"] = ResolversParentTypes["Asset"]
> = {
  holdings_high?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  holdings_low?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  industry?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  sector?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  subsidiary_of?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface BigIntScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["BigInt"], any> {
  name: "BigInt";
}

export type BillResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Bill"] = ResolversParentTypes["Bill"]
> = {
  bill_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bill_uri?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  latest_action?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  number?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DetailedDescriptionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["DetailedDescription"] = ResolversParentTypes["DetailedDescription"]
> = {
  articleBody?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  license?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ImageResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Image"] = ResolversParentTypes["Image"]
> = {
  contentUrl?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  license?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IndustryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Industry"] = ResolversParentTypes["Industry"]
> = {
  indivs?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  industry_code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  industry_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  pacs?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ItemListElementResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["ItemListElement"] = ResolversParentTypes["ItemListElement"]
> = {
  result?: Resolver<ResolversTypes["Result"], ParentType, ContextType>;
  resultScore?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemPfdProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MemPFDProfile"] = ResolversParentTypes["MemPFDProfile"]
> = {
  asset?: Resolver<
    Maybe<Array<ResolversTypes["Asset"]>>,
    ParentType,
    ContextType
  >;
  member_profile?: Resolver<
    Maybe<ResolversTypes["MemberProfile"]>,
    ParentType,
    ContextType
  >;
  position?: Resolver<
    Maybe<Array<ResolversTypes["Position"]>>,
    ParentType,
    ContextType
  >;
  transaction?: Resolver<
    Maybe<Array<ResolversTypes["Transaction"]>>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MemberProfileResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["MemberProfile"] = ResolversParentTypes["MemberProfile"]
> = {
  asset_count?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  asset_high?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  asset_low?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  member_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  net_high?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  net_low?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  origin?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  positions_held_count?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  source?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  transaction_count?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  tx_high?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  tx_low?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  update_timestamp?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficialResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Official"] = ResolversParentTypes["Official"]
> = {
  age?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  at_large?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType
  >;
  bioguide_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  candIndustry?: Resolver<
    ResolversTypes["candIndustry"],
    ParentType,
    ContextType
  >;
  candSummary?: Resolver<
    ResolversTypes["candSummary"],
    ParentType,
    ContextType
  >;
  congressional_district?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  contact_form?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  cook_pvi?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  crp_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cspan_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  date_of_birth?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  district?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  dw_nominate?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  fax?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  fec_candidate_id?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  first_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  gender?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  geoid?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  googleKnowledgeGraph?: Resolver<
    Array<ResolversTypes["ItemListElement"]>,
    ParentType,
    ContextType
  >;
  google_entity_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  govtrack_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  icpsr_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  in_office?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  last_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  last_updated?: Resolver<ResolversTypes["BigInt"], ParentType, ContextType>;
  leadership_role?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  lis_id?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  memPFDProfile?: Resolver<
    ResolversTypes["MemPFDProfile"],
    ParentType,
    ContextType
  >;
  middle_name?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  missed_votes?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  missed_votes_pct?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  next_election?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  ocd_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  office?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  party?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phone?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  photo_url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  recentBills?: Resolver<
    Array<ResolversTypes["RecentBill"]>,
    ParentType,
    ContextType
  >;
  rss_url?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  senate_class?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  seniority?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  short_title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  slug?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  social_media?: Resolver<
    ResolversTypes["OfficialSocialMedia"],
    ParentType,
    ContextType
  >;
  state?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  state_rank?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  suffix?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  total_present?: Resolver<
    Maybe<ResolversTypes["Int"]>,
    ParentType,
    ContextType
  >;
  total_votes?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  votes?: Resolver<Array<ResolversTypes["Vote"]>, ParentType, ContextType>;
  votes_against_party_pct?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  votes_with_party_pct?: Resolver<
    Maybe<ResolversTypes["Float"]>,
    ParentType,
    ContextType
  >;
  votesmart_id?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type OfficialSocialMediaResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["OfficialSocialMedia"] = ResolversParentTypes["OfficialSocialMedia"]
> = {
  facebook?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  twitter?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  youtube?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PositionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Position"] = ResolversParentTypes["Position"]
> = {
  organization?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]
> = {
  findFirstOfficial?: Resolver<
    Maybe<ResolversTypes["Official"]>,
    ParentType,
    ContextType,
    Partial<QueryFindFirstOfficialArgs>
  >;
  findOfficialByLocation?: Resolver<
    Array<ResolversTypes["Official"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindOfficialByLocationArgs, "location">
  >;
  findOfficialByName?: Resolver<
    Array<ResolversTypes["Official"]>,
    ParentType,
    ContextType,
    RequireFields<QueryFindOfficialByNameArgs, "name">
  >;
  official?: Resolver<
    Maybe<ResolversTypes["Official"]>,
    ParentType,
    ContextType,
    RequireFields<QueryOfficialArgs, "where">
  >;
  officials?: Resolver<
    Array<ResolversTypes["Official"]>,
    ParentType,
    ContextType,
    Partial<QueryOfficialsArgs>
  >;
};

export type RecentBillResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["RecentBill"] = ResolversParentTypes["RecentBill"]
> = {
  active?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  bill_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bill_type?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  bill_uri?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  committees?: Resolver<
    Maybe<ResolversTypes["String"]>,
    ParentType,
    ContextType
  >;
  congress?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  congressdotgov_url?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  cosponsors?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  govtrack_url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  introduced_date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  latest_major_action?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  latest_major_action_date?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType
  >;
  primary_subject?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  short_title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sponsor_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sponsor_party?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sponsor_state?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sponsor_title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  sponsor_uri?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  summary?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  summary_short?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Result"] = ResolversParentTypes["Result"]
> = {
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  detailedDescription?: Resolver<
    Maybe<ResolversTypes["DetailedDescription"]>,
    ParentType,
    ContextType
  >;
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  image?: Resolver<ResolversTypes["Image"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type TransactionResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Transaction"] = ResolversParentTypes["Transaction"]
> = {
  asset_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tx_action?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  tx_date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  value_high?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  value_low?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["Vote"] = ResolversParentTypes["Vote"]
> = {
  bill?: Resolver<ResolversTypes["Bill"], ParentType, ContextType>;
  chamber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  date?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  member_id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  position?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  question?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  result?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  roll_call?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  time?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["VoteTotal"], ParentType, ContextType>;
  vote_uri?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type VoteTotalResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["VoteTotal"] = ResolversParentTypes["VoteTotal"]
> = {
  no?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  not_voting?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  present?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  yes?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CandIndustryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["candIndustry"] = ResolversParentTypes["candIndustry"]
> = {
  cand_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cycle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  industries?: Resolver<
    Array<ResolversTypes["Industry"]>,
    ParentType,
    ContextType
  >;
  last_updated?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  source?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CandSummaryResolvers<
  ContextType = any,
  ParentType extends ResolversParentTypes["candSummary"] = ResolversParentTypes["candSummary"]
> = {
  cand_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cash_on_hand?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  chamber?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cid?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  cycle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  debt?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  first_elected?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  last_updated?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  next_election?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  origin?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  party?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  source?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  spent?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  state?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  Asset?: AssetResolvers<ContextType>;
  BigInt?: GraphQLScalarType;
  Bill?: BillResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DetailedDescription?: DetailedDescriptionResolvers<ContextType>;
  Image?: ImageResolvers<ContextType>;
  Industry?: IndustryResolvers<ContextType>;
  ItemListElement?: ItemListElementResolvers<ContextType>;
  MemPFDProfile?: MemPfdProfileResolvers<ContextType>;
  MemberProfile?: MemberProfileResolvers<ContextType>;
  Official?: OfficialResolvers<ContextType>;
  OfficialSocialMedia?: OfficialSocialMediaResolvers<ContextType>;
  Position?: PositionResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  RecentBill?: RecentBillResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Transaction?: TransactionResolvers<ContextType>;
  Vote?: VoteResolvers<ContextType>;
  VoteTotal?: VoteTotalResolvers<ContextType>;
  candIndustry?: CandIndustryResolvers<ContextType>;
  candSummary?: CandSummaryResolvers<ContextType>;
};
