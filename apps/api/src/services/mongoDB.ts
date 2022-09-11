import { MongoClient, Db, Collection } from "mongodb";

import { DATABASE_URL } from "../config";

type Query = {
  query: string;
  path: string;
};

class MongoDB {
  db: Db;
  collection: Collection;

  constructor(database: string, collectionName: string) {
    this.db = new MongoClient(DATABASE_URL).db(database);
    this.collection = this.db.collection(collectionName);
  }

  async search(index: string, queries: Query[], limit = 10) {
    const agg = this.collection.aggregate([
      {
        $search: {
          index,
          compound: {
            should: queries.map(({ query, path }) => ({
              autocomplete: {
                query,
                path,
              },
            })),
          },
        },
      },
      {
        $limit: limit,
      },
    ]);
    return agg.toArray();
  }
}

export default MongoDB;
