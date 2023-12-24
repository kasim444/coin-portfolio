import { IPortfolio } from "@/interfaces";

export enum PortfoliosActionType {
  SET_IS_OPEN_ADD_STOCK_MODAL = "SetIsOpenAddStockModal",
  ADD_PORTFOLIO = "AddPortfolio",
  REMOVE_PORTFOLIO = "RemovePortfolio",
  UPDATE_PORTFOLIO = "UpdatePortfolio",
  SET_QUANTITY_OF_PORTFOLIO = "SetQuantityOfPortfolio",
}

export interface SetIsOpenAddStockModal {
  type: PortfoliosActionType.SET_IS_OPEN_ADD_STOCK_MODAL;
  payload: boolean;
}
export interface AddPortfolio {
  type: PortfoliosActionType.ADD_PORTFOLIO;
  payload: IPortfolio;
}

export interface RemovePortfolio {
  type: PortfoliosActionType.REMOVE_PORTFOLIO;
  payload: string;
}

export interface UpdatePortfolio {
  type: PortfoliosActionType.UPDATE_PORTFOLIO;
  payload: IPortfolio;
}

export interface SetQuantityOfPortfolio {
  type: PortfoliosActionType.SET_QUANTITY_OF_PORTFOLIO;
  payload: {
    symbol: IPortfolio["symbol"];
    quantity: IPortfolio["quantity"];
  };
}

export type PortfoliosActions =
  | SetIsOpenAddStockModal
  | AddPortfolio
  | RemovePortfolio
  | UpdatePortfolio
  | SetQuantityOfPortfolio;
