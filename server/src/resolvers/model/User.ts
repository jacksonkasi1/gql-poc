// import data
import { comments, posts } from "@/data";

// import types
import { UserResolvers } from "@/types/resolvers-types";

export const RUser: UserResolvers = {
  posts(parent) {
    return posts.filter((post) => post.authorId === parent.id);
  },
  comments(parent, { comment_query }) {
    const comments_list = comments.filter(
      (comment) => comment.authorId === parent.id
    );
    if (!comment_query) {
      return comments_list;
    }
    return comments_list.filter((comment) =>
      comment.text.toLowerCase().includes(comment_query.toLowerCase())
    );
  },
};
