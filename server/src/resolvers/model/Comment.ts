// import data
import { posts, users } from "@/data";

// import types
import { CommentResolvers } from "@/types/resolvers-types";
import { TPost, TUser } from "@/types/model";

export const RComment: CommentResolvers = {
  author(parent) {
    return users.find((user) => user.id === parent.authorId) as TUser;
  },
  post(parent) {
    return posts.find((post) => post.id == parent.postId) as TPost;
  },
};
