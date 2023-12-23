import { IPortfolio } from "@/interfaces";

export interface IPortfolioState {
  portfolios: Array<IPortfolio>;
  isLoading: boolean;
  isError: boolean;
  isOpenAddStockModal: boolean;
}

export const initialState = {
  portfolios: [],
  isLoading: false,
  isError: false,
  isOpenAddStockModal: false,
};
