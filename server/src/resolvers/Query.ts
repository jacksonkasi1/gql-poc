// import config
import { NotFoundError } from "@/config/errors";

// import data
import { comments, posts, users } from "@/data";

// import types
import { QueryResolvers } from "@/types/resolvers-types";

export const RQuery: QueryResolvers = {
  users(_, { query }) {
    if (!query) {
      return users;
    }
    return users.filter((user) =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
  },
  me() {
    return users[0];
  },
  post() {
    return posts[0];
  },
  posts(_, { query }) {
    if (!query) {
      return posts;
    }
    return posts.filter((post) => {
      return (
        post.title.toLowerCase().includes(query.toLowerCase()) ||
        post.body.toLowerCase().includes(query.toLowerCase())
      );
    });
  },
  comments() {
    return comments;
  },
  getUser(_, { id }) {
    const user = users.find((user) => user.id === id);
    if (!user) {
      throw new NotFoundError(`User with id ${id} not found`);
    }
    return user;
  },
};
