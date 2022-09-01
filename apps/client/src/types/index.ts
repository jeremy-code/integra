export type IntegraOfficial = {
  id: string;
  api_uri: string;
  date_of_birth: Date;
  fec_candidate_id: string;
  first_name: string;
  gender: string;
  in_office: boolean;
  last_name: string;
  last_updated: bigint;
  ocd_id: string;
  seniority: string;
  short_title: string;
  title: string;
  party: string;
  state: string;
  name: string;
  age: number;
  at_large?: boolean;
  contact_form?: string;
  cook_pvi?: string;
  crp_id?: string;
  cspan_id?: string;
  district?: string;
  dw_nominate?: number;
  facebook_account?: string;
  fax?: string;
  geoid?: string;
  google_entity_id?: string;
  govtrack_id?: string;
  icpsr_id?: string;
  leadership_role?: string;
  lis_id?: string;
  middle_name?: string;
  missed_votes?: number;
  missed_votes_pct?: number;
  next_election?: string;
  office?: string;
  phone?: string;
  rss_url?: string;
  senate_class?: string;
  state_rank?: string;
  suffix?: string;
  total_present?: number;
  total_votes?: number;
  twitter_account?: string;
  url?: string;
  votes_against_party_pct?: number;
  votes_with_party_pct?: number;
  votesmart_id?: string;
  youtube_account?: string;

  slug: string;
  photo_url: string;
  google_knowledge_graph: KnowledgeGraphAPIResponse;
};

type KnowledgeGraphAPIResponse = {
  context: Context;
  type: string;
  itemListElement: ItemListElement[];
};

type Context = {
  vocab: string;
  goog: string;
  resultScore: string;
  detailedDescription: string;
  entitySearchResult: string;
  kg: string;
};

type ItemListElement = {
  result: Result;
  type: string;
  resultScore: string;
};

type Result = {
  name: string;
  id: string;
  type: string[];
  description: string;
  image: Image;
  detailedDescription: DetailedDescription;
  url: string;
};

type Image = {
  contentUrl?: string;
  url: string;
  license?: string;
};

type DetailedDescription = {
  articleBody: string;
  url: string;
  license?: string;
};
