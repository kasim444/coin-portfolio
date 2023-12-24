import { PortfoliosActions } from "./actions";
import { IPortfolioState } from "./state";

const portfoliosReducer = (
  state: IPortfolioState,
  action: PortfoliosActions
): IPortfolioState => {
  const { type, payload } = action;

  switch (type) {
    case "SetIsOpenAddStockModal":
      return {
        ...state,
        isOpenAddStockModal: payload,
      };

    case "AddPortfolio":
      return {
        ...state,
        portfolios: [...state.portfolios, payload],
      };

    case "RemovePortfolio":
      return {
        ...state,
        portfolios: state.portfolios.filter(
          (portfolio) => portfolio.symbol !== payload
        ),
      };

    case "UpdatePortfolio":
      return {
        ...state,
        portfolios: state.portfolios.map((portfolio) =>
          portfolio.symbol === payload.symbol ? payload : portfolio
        ),
      };

    case "SetQuantityOfPortfolio":
      return {
        ...state,
        portfolios: state.portfolios.map((portfolio) =>
          portfolio.symbol === payload.symbol
            ? { ...portfolio, quantity: payload.quantity }
            : portfolio
        ),
      };

    default:
      return state;
  }
};

export default portfoliosReducer;
