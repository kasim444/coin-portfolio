import { IPortfolio } from "@/interfaces";

export const prepareStocksForSearch = (stocks: Array<IPortfolio>) => {
  return stocks.map((stock) => ({
    value: stock.symbol,
    label: stock.symbol,
  }));
};
