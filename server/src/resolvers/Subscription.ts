// Subscription.ts
import { SubscriptionResolvers } from "@/types/resolvers-types";

export const RSubscription: SubscriptionResolvers = {
  count: {
    subscribe: async function* (_, __, { pubSub }) {
      let count = 0;
      while (true) {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        yield { count: count++ };
      }
    },
  },
  userCreated: {
    subscribe: (_, __, { pubSub }) => pubSub.subscribe("USER_CREATED"),
  },
  roomMessage: {
    subscribe: (_, { roomId }, { pubSub }) =>
      pubSub.subscribe(`ROOM_${roomId}`),
    resolve: (payload: any) => payload,
  },
};
