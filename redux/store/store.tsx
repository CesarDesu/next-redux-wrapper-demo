import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import logger from "redux-logger";
import { MakeStore, createWrapper, Context } from "next-redux-wrapper";
import { appReducer, IAppState } from "../reducers/appReducer";

const middleware = [thunk];

const composeEnhancers =
  (typeof window !== "undefined" &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

export const makeStore: MakeStore<IAppState> = (context: Context) =>
  createStore(appReducer, composeEnhancers(applyMiddleware(...middleware)));

export const wrapper = createWrapper<IAppState>(makeStore, { debug: true });
