import { IPortfolio } from "@/interfaces";
import { prepareUnSelectedStocks } from "@/utils";
import STOCKS from "@/mocks/stocks.json";

describe("prepareUnSelectedStocks", () => {
  it("should return all stocks if no stocks are selected", () => {
    const selectedStocks: IPortfolio[] = [];

    const result = prepareUnSelectedStocks(selectedStocks, STOCKS);

    expect(result).toEqual(STOCKS);
  });

  it("should return unselected stocks if some stocks are selected", () => {
    const selectedStocks: IPortfolio[] = [
      {
        symbol: "ETHBTC",
        weightedAvgPrice: "0.05259781",
        lastPrice: "0.05231000",
        quantity: 1,
      },
    ];

    const result = prepareUnSelectedStocks(selectedStocks, STOCKS);

    expect(result).toEqual([
      {
        symbol: "BNTBTC",
        weightedAvgPrice: "0.00001755",
        lastPrice: "0.00001780",
        quantity: 2,
      },
    ]);
  });

  it("should return an empty array if all stocks are selected", () => {
    const selectedStocks: IPortfolio[] = [...STOCKS];

    const result = prepareUnSelectedStocks(selectedStocks, STOCKS);

    expect(result).toEqual([]);
  });
});
