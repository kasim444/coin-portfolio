// FILEPATH: /c:/Users/kasim/Desktop/projects/coin-portfolio/__tests__/prepareStocksForSearch.test.ts

import { IPortfolio } from "@/interfaces";
import { prepareStocksForSearch } from "../src/utils/prepareStocksForSearch";
import STOCKS from "@/mocks/stocks.json";

describe("prepareStocksForSearch", () => {
  it("should return an empty array when input is empty", () => {
    const stocks: IPortfolio[] = [];
    const result = prepareStocksForSearch(STOCKS);
    expect(result).toEqual([]);
  });

  it("should transform an array of stocks into the correct format", () => {
    const result = prepareStocksForSearch(STOCKS);
    const expected = [
      { value: "ETHBTC", label: "ETHBTC" },
      { value: "BNTBTC", label: "BNTBTC" },
    ];
    expect(result).toEqual(expected);
  });
});
