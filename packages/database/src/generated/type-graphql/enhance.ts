import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Official: crudResolvers.OfficialCrudResolver
};
const actionResolversMap = {
  Official: {
    aggregateOfficial: actionResolvers.AggregateOfficialResolver,
    createManyOfficial: actionResolvers.CreateManyOfficialResolver,
    createOneOfficial: actionResolvers.CreateOneOfficialResolver,
    deleteManyOfficial: actionResolvers.DeleteManyOfficialResolver,
    deleteOneOfficial: actionResolvers.DeleteOneOfficialResolver,
    findFirstOfficial: actionResolvers.FindFirstOfficialResolver,
    findFirstOfficialOrThrow: actionResolvers.FindFirstOfficialOrThrowResolver,
    officials: actionResolvers.FindManyOfficialResolver,
    official: actionResolvers.FindUniqueOfficialResolver,
    getOfficial: actionResolvers.FindUniqueOfficialOrThrowResolver,
    groupByOfficial: actionResolvers.GroupByOfficialResolver,
    updateManyOfficial: actionResolvers.UpdateManyOfficialResolver,
    updateOneOfficial: actionResolvers.UpdateOneOfficialResolver,
    upsertOneOfficial: actionResolvers.UpsertOneOfficialResolver
  }
};
const crudResolversInfo = {
  Official: ["aggregateOfficial", "createManyOfficial", "createOneOfficial", "deleteManyOfficial", "deleteOneOfficial", "findFirstOfficial", "findFirstOfficialOrThrow", "officials", "official", "getOfficial", "groupByOfficial", "updateManyOfficial", "updateOneOfficial", "upsertOneOfficial"]
};
const argsInfo = {
  AggregateOfficialArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyOfficialArgs: ["data"],
  CreateOneOfficialArgs: ["data"],
  DeleteManyOfficialArgs: ["where"],
  DeleteOneOfficialArgs: ["where"],
  FindFirstOfficialArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstOfficialOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyOfficialArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueOfficialArgs: ["where"],
  FindUniqueOfficialOrThrowArgs: ["where"],
  GroupByOfficialArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyOfficialArgs: ["data", "where"],
  UpdateOneOfficialArgs: ["data", "where"],
  UpsertOneOfficialArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & {
    _all?: MethodDecorator[];
    _query?: MethodDecorator[];
    _mutation?: MethodDecorator[];
  };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  const mutationOperationPrefixes = [
    "createOne", "createMany", "deleteOne", "updateOne", "deleteMany", "updateMany", "upsertOne"
  ];
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all;
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      const isWriteOperation = mutationOperationPrefixes.some(prefix => resolverActionName.startsWith(prefix));
      const operationKindDecorators = isWriteOperation ? resolverActionsConfig._mutation : resolverActionsConfig._query;
      const mainDecorators = [
        ...allActionsDecorators ?? [],
        ...operationKindDecorators ?? [],
      ]
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(mainDecorators);
      } else {
        decorators = [...mainDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Official: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialSocialMedia: ["facebook", "twitter", "youtube"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateOfficial: ["_count", "_avg", "_sum", "_min", "_max"],
  OfficialGroupBy: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  OfficialCountAggregate: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id", "_all"],
  OfficialAvgAggregate: ["dw_nominate", "last_updated", "missed_votes", "missed_votes_pct", "total_present", "total_votes", "votes_against_party_pct", "votes_with_party_pct"],
  OfficialSumAggregate: ["dw_nominate", "last_updated", "missed_votes", "missed_votes_pct", "total_present", "total_votes", "votes_against_party_pct", "votes_with_party_pct"],
  OfficialMinAggregate: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialMaxAggregate: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  OfficialWhereInput: ["AND", "OR", "NOT", "id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialOrderByWithRelationInput: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialWhereUniqueInput: ["id", "AND", "OR", "NOT", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialOrderByWithAggregationInput: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id", "_count", "_avg", "_max", "_min", "_sum"],
  OfficialScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialCreateInput: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialUpdateInput: ["at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialCreateManyInput: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialUpdateManyMutationInput: ["at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "social_media", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolNullableFilter: ["equals", "not", "isSet"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "isSet"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  FloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  StringNullableListFilter: ["equals", "has", "hasEvery", "hasSome", "isEmpty"],
  BoolFilter: ["equals", "not"],
  BigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  OfficialSocialMediaCompositeFilter: ["equals", "is", "isNot"],
  OfficialSocialMediaObjectEqualityInput: ["facebook", "twitter", "youtube"],
  OfficialSocialMediaOrderByInput: ["facebook", "twitter", "youtube"],
  OfficialCountOrderByAggregateInput: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "emails", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialAvgOrderByAggregateInput: ["dw_nominate", "last_updated", "missed_votes", "missed_votes_pct", "total_present", "total_votes", "votes_against_party_pct", "votes_with_party_pct"],
  OfficialMaxOrderByAggregateInput: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialMinOrderByAggregateInput: ["id", "at_large", "bioguide_id", "congressional_district", "contact_form", "cook_pvi", "crp_id", "cspan_id", "date_of_birth", "district", "dw_nominate", "fax", "fec_candidate_id", "first_name", "full_name", "gender", "geoid", "google_entity_id", "govtrack_id", "icpsr_id", "in_office", "last_name", "last_updated", "leadership_role", "lis_id", "middle_name", "missed_votes", "missed_votes_pct", "next_election", "ocd_id", "office", "party", "phone", "rss_url", "senate_class", "seniority", "short_title", "state", "state_rank", "suffix", "title", "total_present", "total_votes", "url", "votes_against_party_pct", "votes_with_party_pct", "votesmart_id"],
  OfficialSumOrderByAggregateInput: ["dw_nominate", "last_updated", "missed_votes", "missed_votes_pct", "total_present", "total_votes", "votes_against_party_pct", "votes_with_party_pct"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max", "isSet"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  FloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  BigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  OfficialCreateemailsInput: ["set"],
  OfficialSocialMediaCreateEnvelopeInput: ["set"],
  OfficialSocialMediaCreateInput: ["facebook", "twitter", "youtube"],
  NullableBoolFieldUpdateOperationsInput: ["set", "unset"],
  StringFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set", "unset"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableFloatFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide", "unset"],
  OfficialUpdateemailsInput: ["set", "push"],
  BoolFieldUpdateOperationsInput: ["set"],
  BigIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide", "unset"],
  OfficialSocialMediaUpdateEnvelopeInput: ["set", "update"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolNullableFilter: ["equals", "not", "isSet"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "isSet"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  NestedBoolFilter: ["equals", "not"],
  NestedBigIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "isSet"],
  OfficialSocialMediaWhereInput: ["AND", "OR", "NOT", "facebook", "twitter", "youtube"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolNullableWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max", "isSet"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max", "isSet"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedFloatNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedBigIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max", "isSet"],
  OfficialSocialMediaUpdateInput: ["facebook", "twitter", "youtube"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

