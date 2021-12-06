import { ActionMethod } from "../utils/Enums";
import axio from "./config";

export const getAll = () => ({
  type: "",
  payload: {
    api: () => axio.get("https://jsonplaceholder.typicode.com/posts"),
    table: "post",
    AlwaysUpdated: ActionMethod.FromStore,
  },
});
