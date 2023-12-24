import { IPortfolio } from "@/interfaces";

export const getStockBySymbol = (
  stocks: Array<IPortfolio>,
  symbol?: string
): IPortfolio | undefined => {
  if (!symbol) return;

  const selectedStock = stocks.find((stock) => stock.symbol === symbol);

  if (!selectedStock) return;

  return selectedStock;
};
