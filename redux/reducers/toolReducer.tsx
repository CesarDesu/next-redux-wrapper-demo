import { HYDRATE } from "next-redux-wrapper";

export interface IToolState {
  darkMode: string;
  defaultTheme: string;
}

const initState: IToolState = {
  darkMode: "init",
  defaultTheme: "init",
};

export type ToolAction =
  | { type: "APP2"; payload: IToolState }
  | { type: typeof HYDRATE; payload: IToolState }
  | { type: "PAGE2"; payload: IToolState };

export const toolReducer = (
  state: IToolState = initState,
  action: ToolAction
) => {
  switch (action.type) {
    case HYDRATE:
      if (action.payload.darkMode === "init") delete action.payload.darkMode;
      if (action.payload.defaultTheme === "init")
        delete action.payload.defaultTheme;
      return { ...state, ...action.payload };
    case "APP2":
      return { ...state, app: action.payload };
    case "PAGE2":
      return { ...state, page: action.payload };
    default:
      return state;
  }
};
