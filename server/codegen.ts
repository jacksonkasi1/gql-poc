import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["./src/gql/schema.graphql"],
  generates: {
    "./src/types/resolvers-types.ts": {
      plugins: ["typescript", "typescript-resolvers"],
    },
  },
  config: {
    contextType: "@/types/context#GraphQLContext",
    mappers: {
      User: "@/types/model#TUser",
      Post: "@/types/model#TPost",
      Comment: "@/types/model#TComment",
    },
  },
};
export default config;
