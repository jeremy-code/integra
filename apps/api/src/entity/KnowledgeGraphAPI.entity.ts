import { Field, Int, ObjectType } from "type-graphql";

@ObjectType()
class DetailedDescription {
  @Field()
  url: string;

  @Field()
  articleBody: string;

  @Field()
  license: string;
}

@ObjectType()
class Image {
  @Field({ nullable: true })
  contentUrl: string;

  @Field()
  url: string;

  @Field({ nullable: true })
  license: string;
}

@ObjectType()
class Result {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field(() => [String])
  type: string[];
  @Field()
  description: string;
  @Field(() => Image)
  image: Image;
  @Field(() => DetailedDescription, { nullable: true })
  detailedDescription: DetailedDescription;
  @Field(() => String)
  url: string;
}

@ObjectType()
class Context {
  @Field()
  vocab: string;
  @Field({ nullable: true })
  goog: string;
  @Field()
  resultScore: string;
  @Field({ nullable: true })
  detailedDescription: string;
  @Field()
  EntitySearchResult: string;
  @Field()
  kg: string;
}

@ObjectType()
export class KnowledgeGraphAPIResponse {
  @Field(() => Context)
  context: Context;
  @Field()
  type: string;
  @Field(() => [ItemListElement])
  itemListElement: ItemListElement[];
}

@ObjectType()
export class ItemListElement {
  @Field()
  type: string;

  @Field()
  result: Result;

  @Field(() => Int)
  resultScore: number;
}
