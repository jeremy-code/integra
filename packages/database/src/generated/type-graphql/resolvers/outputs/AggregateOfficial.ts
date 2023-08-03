import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { OfficialAvgAggregate } from "../outputs/OfficialAvgAggregate";
import { OfficialCountAggregate } from "../outputs/OfficialCountAggregate";
import { OfficialMaxAggregate } from "../outputs/OfficialMaxAggregate";
import { OfficialMinAggregate } from "../outputs/OfficialMinAggregate";
import { OfficialSumAggregate } from "../outputs/OfficialSumAggregate";

@TypeGraphQL.ObjectType("AggregateOfficial", {})
export class AggregateOfficial {
  @TypeGraphQL.Field(_type => OfficialCountAggregate, {
    nullable: true
  })
  _count!: OfficialCountAggregate | null;

  @TypeGraphQL.Field(_type => OfficialAvgAggregate, {
    nullable: true
  })
  _avg!: OfficialAvgAggregate | null;

  @TypeGraphQL.Field(_type => OfficialSumAggregate, {
    nullable: true
  })
  _sum!: OfficialSumAggregate | null;

  @TypeGraphQL.Field(_type => OfficialMinAggregate, {
    nullable: true
  })
  _min!: OfficialMinAggregate | null;

  @TypeGraphQL.Field(_type => OfficialMaxAggregate, {
    nullable: true
  })
  _max!: OfficialMaxAggregate | null;
}
