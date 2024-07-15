import { readFileSync } from "node:fs";
import { createSchema } from "graphql-yoga";

// import types
import { Resolvers } from "@/types/resolvers-types";

// import resolvers
import { RQuery } from "@/resolvers/Query";
import { RMutation } from "@/resolvers/Mutation";
import { RSubscription } from "@/resolvers/Subscription";

// import resolvers-models
import { RPost } from "@/resolvers/model/Post";
import { RUser } from "@/resolvers/model/User";
import { RComment } from "@/resolvers/model/Comment";

const typeDefs = readFileSync("./src/gql/schema.graphql", "utf8");

const resolvers: Resolvers = {
  Query: RQuery,
  Mutation: RMutation,
  Subscription: RSubscription,
  Post: RPost,
  User: RUser,
  Comment: RComment,
};

export const schema = createSchema({
  typeDefs,
  resolvers,
});
