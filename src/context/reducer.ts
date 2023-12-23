import { PortfoliosActions } from "./actions";
import { IPortfolioState } from "./state";

const portfoliosReducer = (
  state: IPortfolioState,
  action: PortfoliosActions
): IPortfolioState => {
  const { type, payload } = action;

  switch (type) {
    case "SetPortfolios":
      return {
        ...state,
        portfolios: payload,
      };
    case "SetIsLoading":
      return {
        ...state,
        isLoading: payload,
      };
    case "SetIsError":
      return {
        ...state,
        isError: payload,
      };
    case "SetIsOpenAddStockModal":
      return {
        ...state,
        isOpenAddStockModal: payload,
      };
    default:
      return state;
  }
};

export default portfoliosReducer;
