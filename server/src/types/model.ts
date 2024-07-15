// Define types for User, Post, and Comment
export type TUser = {
  id: string;
  name: string;
  email: string;
  age?: number | null; // age is optional
};

export type TPost = {
  id: string;
  title: string;
  body: string;
  published: boolean;
  authorId: string;
};

export type TComment = {
  id: string;
  text: string;
  postId: string;
  authorId: string;
};
