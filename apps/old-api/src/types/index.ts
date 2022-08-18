export type Representative = {
  name: string;
  address: {
    line1: string;
    city: string;
    state: string;
    zip: string;
  }[];
  photoUrl: string;
  party: string;
  phones: string[];
  urls: string[];
  channels: {
    type: string;
    id: string;
  }[];
  geocodingSummaries: any[];
};

export type GoogleCivicResponse = {
  normalizedInput: {
    [key: string]: string;
  };
  kind: string;
  division: any;
  offices: any[];
  officials: Representative[];
};
