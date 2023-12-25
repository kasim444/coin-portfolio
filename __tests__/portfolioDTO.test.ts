import { PortfolioDTO } from "@/utils";
import STOCKS from "@/mocks/stocks.json";

describe("PortfolioDTO", () => {
  it("should correctly initialize via constructor", () => {
    const portfolioDTO = new PortfolioDTO(
      STOCKS[0].symbol,
      STOCKS[0].weightedAvgPrice,
      STOCKS[0].lastPrice,
      STOCKS[0].quantity
    );

    expect(portfolioDTO.symbol).toEqual(STOCKS[0].symbol);
    expect(portfolioDTO.weightedAvgPrice).toEqual(STOCKS[0].weightedAvgPrice);
    expect(portfolioDTO.lastPrice).toEqual(STOCKS[0].lastPrice);
    expect(portfolioDTO.quantity).toEqual(STOCKS[0].quantity);
  });

  it("should correctly initialize from a stock entity", () => {
    const portfolioDTO = PortfolioDTO.fromStockEntity(STOCKS[0]);

    expect(portfolioDTO.symbol).toEqual(STOCKS[0].symbol);
    expect(portfolioDTO.weightedAvgPrice).toEqual(STOCKS[0].weightedAvgPrice);
    expect(portfolioDTO.lastPrice).toEqual(STOCKS[0].lastPrice);
    expect(portfolioDTO.quantity).toEqual(STOCKS[0].quantity);
  });
});
