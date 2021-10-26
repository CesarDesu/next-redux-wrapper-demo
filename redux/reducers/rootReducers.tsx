import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { toolReducer } from "./toolReducer";

export const rootReducer = combineReducers({
  app: appReducer,
  tool: toolReducer,
});
