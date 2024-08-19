import { createStore } from "redux";
import todoReducer from "./todo";

const store = createStore(todoReducer);
export default store;