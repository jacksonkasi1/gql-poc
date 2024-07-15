import { PubSub, YogaInitialContext } from "graphql-yoga";

import { TUser } from "./model";

export type KnownPubSubEvents = {
  USER_CREATED: [{ userCreated: TUser }];
  COUNT: [{ count: number }];
};

export type DynamicPubSubEvents = {
  [key: `ROOM_${string}`]: [{ from: string; body: string }];
};

export type PubSubEvents = KnownPubSubEvents & DynamicPubSubEvents;

export interface GraphQLContext extends YogaInitialContext {
  specialContextValue: number;
  pubSub: PubSub<PubSubEvents>;
}
