import {
  FindFirstOfficialResolver,
  FindManyOfficialResolver,
  FindUniqueOfficialResolver,
} from "database";
import type { NonEmptyArray } from "type-graphql";

import { OfficialResolver } from "./IntegraResolver";

const resolvers: NonEmptyArray<Function> | NonEmptyArray<string> = [
  OfficialResolver,
  FindFirstOfficialResolver,
  FindManyOfficialResolver,
  FindUniqueOfficialResolver,
];

export default resolvers;
