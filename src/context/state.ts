import { IPortfolio } from "@/interfaces";

export interface IPortfolioState {
  portfolios: Array<IPortfolio>;
  isOpenAddStockModal: boolean;
}

export const initialState = {
  portfolios: [],
  isOpenAddStockModal: false,
};
