import { combineReducer } from "../combineReducer";
import { ActionTypes } from "./types";

export const rootReducer = (state: any, action: ActionTypes) => {
  return combineReducer(state, action);
}