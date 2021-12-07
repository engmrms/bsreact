import { ActionMethod } from "../utils/Enums";
import axios from "./config";
import http from "./config/http";

export const getAll = () => http.get("https://jsonplaceholder.typicode.com/posts", { table: "posts", AlwaysUpdated: ActionMethod.FromStore });
export const getAxiosAll = () => axios.get("https://jsonplaceholder.typicode.com/posts");
export const getComments = () =>
  http.get("https://jsonplaceholder.typicode.com/posts/1/comments", { table: "comments", AlwaysUpdated: ActionMethod.FromStore });
export const newPost = () =>
  http.post(
    "https://jsonplaceholder.typicode.com/posts",
    {
      title: "foo",
      body: "bar",
      userId: 1,
    },
    { table: "post", AlwaysUpdated: ActionMethod.AlwaysUpdated }
  );
