export type OfficialType = {
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
