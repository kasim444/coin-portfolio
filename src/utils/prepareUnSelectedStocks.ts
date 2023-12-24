import { IPortfolio } from "@/interfaces";

export const prepareUnSelectedStocks = (
  selectedStocks: IPortfolio[],
  stocks: IPortfolio[]
) => {
  const unSelectedStocks = stocks.filter(
    (stock) =>
      !selectedStocks.find(
        (selectedStock) => selectedStock.symbol === stock.symbol
      )
  );

  return unSelectedStocks;
};
