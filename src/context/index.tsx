import {
  Dispatch,
  PropsWithChildren,
  createContext,
  useContext,
  useEffect,
  useMemo,
  useReducer,
} from "react";
import { PortfoliosActions } from "./actions";
import portfoliosReducer from "./reducer";
import { IPortfolioState, initialState } from "./state";

const PortfoliosContext = createContext<{
  state: IPortfolioState;
  dispatch: Dispatch<PortfoliosActions>;
  chartData: (string | number)[][];
}>({
  state: initialState,
  dispatch: () => null,
  chartData: [],
});

export const PortfoliosProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(portfoliosReducer, initialState);

  const chartData = useMemo(() => {
    const data = state?.portfolios?.map((portfolio) => [
      portfolio.symbol,
      portfolio.quantity,
    ]);

    return [["Symbol", "Quantity"], ...data];
  }, [state?.portfolios]);

  return (
    <PortfoliosContext.Provider value={{ state, dispatch, chartData }}>
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
