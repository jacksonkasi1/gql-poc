import { createServer } from "node:http";
import { createYoga, createPubSub } from "graphql-yoga";
import { GraphQLError } from "graphql";

// import config
import {
  BadRequestError,
  InternalServerError,
  NotFoundError,
  UnauthorizedError,
} from "./config/errors";

// import schema
import { schema } from "./schema";

// import types
import { GraphQLContext, PubSubEvents } from "./types/context";

const pubSub = createPubSub<PubSubEvents>();

// Create a Yoga instance with a GraphQL schema.
const yoga = createYoga({
  schema,
  context: ({ request, params }): GraphQLContext => ({
    params,
    request,
    specialContextValue: 31,
    pubSub,
  }),
  maskedErrors: {
    maskError(error, message) {
      const cause = (error as GraphQLError).originalError;

      // Transform JS error objects into GraphQL errors
      if (cause instanceof BadRequestError) {
        return new GraphQLError(cause.message, {
          extensions: { http: { status: 400 } },
        });
      }
      if (cause instanceof UnauthorizedError) {
        return new GraphQLError(cause.message, {
          extensions: { http: { status: 401 } },
        });
      }
      if (cause instanceof NotFoundError) {
        return new GraphQLError(cause.message, {
          extensions: { http: { status: 404 } },
        });
      }
      if (cause instanceof InternalServerError) {
        return new GraphQLError(cause.message, {
          extensions: { http: { status: 500 } },
        });
      }

      // Default to 500 with a generic message
      return new GraphQLError(cause!.message || message, {
        extensions: { http: { status: 500 } },
      });
    },
  },
});

// Pass it into a server to hook into request handlers.
const server = createServer(yoga);

// Start the server and you're done!
server.listen(4000, () => {
  console.info("Server is running on http://localhost:4000/graphql");
});
