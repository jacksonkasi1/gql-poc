import { TComment, TPost, TUser } from "@/types/model";

// Define the arrays with the types
export let users: TUser[] = [
  {
    id: "123",
    name: "Mike",
    email: "jack@email.com",
    age: 28,
  },
  {
    id: "124",
    name: "John",
    email: "John@email.com",
  },
];

export let posts: TPost[] = [
  {
    id: "123",
    title: "GraphQL",
    body: "GraphQL is awesome",
    published: true,
    authorId: "123",
  },
  {
    id: "124",
    title: "Node.js",
    body: "Node.js is awesome",
    published: true,
    authorId: "124",
  },
];

export let comments: TComment[] = [
  {
    id: "123",
    text: "This is a comment",
    postId: "123",
    authorId: "123",
  },
  {
    id: "124",
    text: "This is another comment",
    postId: "123",
    authorId: "123",
  },
];
