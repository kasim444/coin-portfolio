import { IPortfolio } from "@/interfaces";

export enum PortfoliosActionType {
  SET_PORTFOLIOS = "SetPortfolios",
  SET_IS_LOADING = "SetIsLoading",
  SET_IS_ERROR = "SetIsError",
  SET_IS_OPEN_ADD_STOCK_MODAL = "SetIsOpenAddStockModal",
}

export interface SetPortfolios {
  type: PortfoliosActionType.SET_PORTFOLIOS;
  payload: Array<IPortfolio>;
}

export interface SetIsLoading {
  type: PortfoliosActionType.SET_IS_LOADING;
  payload: boolean;
}

export interface SetIsError {
  type: PortfoliosActionType.SET_IS_ERROR;
  payload: boolean;
}

export interface SetIsOpenAddStockModal {
  type: PortfoliosActionType.SET_IS_OPEN_ADD_STOCK_MODAL;
  payload: boolean;
}

export type PortfoliosActions =
  | SetPortfolios
  | SetIsLoading
  | SetIsError
  | SetIsOpenAddStockModal;
