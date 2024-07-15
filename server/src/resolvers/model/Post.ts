// import data
import { comments, users } from "@/data";

// import types
import { PostResolvers } from "@/types/resolvers-types";
import { TUser } from "@/types/model";

export const RPost: PostResolvers = {
  author({ authorId }) {
    return users.find((user) => user.id === authorId) as TUser;
  },
  comments({ id }) {
    return comments.filter((comment) => comment.postId === id);
  },
};
