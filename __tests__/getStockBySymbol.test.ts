import { getStockBySymbol } from "@/utils";

describe("getStockBySymbol", () => {
  const mockStocks = [
    {
      symbol: "ETHBTC",
      weightedAvgPrice: "0.05259781",
      lastPrice: "0.05231000",
      quantity: 1,
    },
    {
      symbol: "LTCBTC",
      weightedAvgPrice: "0.00166073",
      lastPrice: "0.00166000",
      quantity: 2,
    },
  ];

  it("should return undefined if no symbol is provided", () => {
    const result = getStockBySymbol(mockStocks);
    expect(result).toBeUndefined();
  });

  it("should return undefined if the symbol does not match any stock", () => {
    const result = getStockBySymbol(mockStocks, "TSLA");
    expect(result).toBeUndefined();
  });

  it("should return the stock if the symbol matches a stock", () => {
    const result = getStockBySymbol(mockStocks, "ETHBTC");
    expect(result).toEqual(mockStocks[0]);
  });
});
