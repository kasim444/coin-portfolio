import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { PortfoliosActions } from "./actions";
import portfoliosReducer from "./reducer";
import { IPortfolioState, initialState } from "./state";

const PortfoliosContext = createContext<{
  state: IPortfolioState;
  dispatch: Dispatch<PortfoliosActions>;
}>({
  state: initialState,
  dispatch: () => null,
});

export const PortfoliosProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(portfoliosReducer, initialState);

  return (
    <PortfoliosContext.Provider value={{ state, dispatch }}>
      {children}
    </PortfoliosContext.Provider>
  );
};

const usePortfolios = () => {
  const context = useContext(PortfoliosContext);

  if (context === undefined) {
    throw new Error("usePortfolios must be used within PortfoliosContext");
  }

  return context;
};

export default usePortfolios;
