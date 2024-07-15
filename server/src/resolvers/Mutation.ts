// import config
import { BadRequestError, NotFoundError } from "@/config/errors";

// import data
import { comments, posts, users } from "@/data";

// import types
import { MutationResolvers } from "@/types/resolvers-types";

let localPosts = [...posts];
let localComments = [...comments];

export const RMutation: MutationResolvers = {
  createUser(_, args, { pubSub }) {
    const isEmailTaken = users.some((user) => user.email === args.data.email);

    if (isEmailTaken) {
      throw new BadRequestError("Email is already taken");
    }

    const user = {
      id: Math.random().toString(),
      ...args.data,
    };
    users.push(user);

    pubSub.publish("USER_CREATED", { userCreated: user });

    return user;
  },

  updateUser(_, { id, data }) {
    const user = users.find((user) => user.id === id);

    if (!user) {
      throw new NotFoundError(`User with id ${id} not found`);
    }

    if (data.email) {
      const emailTaken = users.some(
        (user) => user.email === data.email && user.id !== id
      );

      if (emailTaken) {
        throw new BadRequestError("Email is already taken");
      }
    }

    Object.assign(user, data);
    return user;
  },

  deleteUser(_, { id }) {
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      throw new NotFoundError(`User with id ${id} not found`);
    }

    const deletedUsers = users.splice(userIndex, 1);

    // Filter out posts by the user and their associated comments
    localPosts = localPosts.filter((post) => {
      const match = post.authorId === id;
      if (match) {
        localComments = localComments.filter(
          (comment) => comment.postId !== post.id
        );
      }
      return !match;
    });

    localComments = localComments.filter((comment) => comment.authorId !== id);
    return deletedUsers[0];
  },
  createPost(_, { data }) {
    const userExists = users.some((user) => user.id === data.authorId);
    if (!userExists) {
      throw new NotFoundError(`User with id ${data.authorId} not found`);
    }

    const post = {
      id: Math.random().toString(),
      ...data,
    };
    posts.push(post);
    return post;
  },

  updatePost(_, { id, data }) {
    const post = posts.find((post) => post.id === id);

    if (!post) {
      throw new NotFoundError(`Post with id ${id} not found`);
    }

    Object.assign(post, data);
    return post;
  },
  deletePost(_, { id }) {
    const postIndex = posts.findIndex((post) => post.id === id);

    if (postIndex === -1) {
      throw new NotFoundError(`Post with id ${id} not found`);
    }

    console.log({ posts });
    const deletedPosts = posts.splice(postIndex, 1);
    console.log({ deletedPosts });

    localComments = localComments.filter((comment) => comment.postId !== id);
    return deletedPosts[0];
  },

  createComment(_, { data }) {
    const postExists = posts.some((post) => post.id === data.postId);

    if (!postExists) {
      throw new NotFoundError(`Post with id ${data.postId} not found`);
    }

    const userExists = users.some((user) => user.id === data.authorId);

    if (!userExists) {
      throw new NotFoundError(`User with id ${data.authorId} not found`);
    }

    const comment = {
      id: Math.random().toString(),
      ...data,
    };
    comments.push(comment);
    return comment;
  },

  updateComment(_, { id, data }) {
    const comment = comments.find((comment) => comment.id === id);

    if (!comment) {
      throw new NotFoundError(`Comment with id ${id} not found`);
    }

    Object.assign(comment, data);
    return comment;
  },

  deleteComment(_, { id }) {
    const commentIndex = comments.findIndex((comment) => comment.id === id);

    if (commentIndex === -1) {
      throw new NotFoundError(`Comment with id ${id} not found`);
    }

    const deletedComments = comments.splice(commentIndex, 1);
    return deletedComments[0];
  },

  sendMessage: (_, { input }, { pubSub }) => {
    const { roomId, from, body } = input;
    const newMessage = { from, body };
    pubSub.publish(`ROOM_${roomId}`, newMessage);
    return newMessage;
  },
};
