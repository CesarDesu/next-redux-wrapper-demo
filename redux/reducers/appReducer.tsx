import { HYDRATE } from "next-redux-wrapper";

export interface IAppState {
  app: string;
  page: string;
}

const initState: IAppState = {
  app: "init",
  page: "init",
};

export type AppAction =
  | { type: "APP"; payload: IAppState }
  | { type: typeof HYDRATE; payload: IAppState }
  | { type: "PAGE"; payload: IAppState };

export const appReducer = (state: IAppState = initState, action: AppAction) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.app === "init") delete action.payload.app;
      if (action.payload.page === "init") delete action.payload.page;
      return { ...state, ...action.payload };
    case "APP":
      return { ...state, app: action.payload };
    case "PAGE":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
