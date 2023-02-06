//Call all functions inside services and log updated value/s
import { updateUser, getAllUsers } from "./services/users";
import {
  getCommentById,
  getCommentsByPostId,
  updateCommentBody,
  deleteCommentById,
} from "./services/comments";
import {
  getPostById,
  getPosts,
  getPostsByUser,
  updatePostTitle,
  updatePostBody,
  updatePost,
  deletePostBy,
  deletePostsByUserId,
} from "./services/posts";

console.log(getAllUsers());
updateUser(1, { email: "roger@77.com", website: "hilde-edit.org" });
console.log(getAllUsers());

console.log(getCommentById(1));
console.log(getCommentsByPostId(1));
updateCommentBody(2, { body: "hello world" });
console.log(getCommentById(2));
console.log(deleteCommentById(1));

console.log(getPosts());
console.log(getPostsByUser(1));
console.log(getPostById(2));
updatePostTitle(1, { title: "Mickey Mouse" });
console.log(getPostById(1));
updatePostBody(1, { body: "Club House" });
updatePost(1, { title: "Jabber Jay", body: "hello" });
console.log(deletePostBy(1));
console.log(deletePostsByUserId(2));
