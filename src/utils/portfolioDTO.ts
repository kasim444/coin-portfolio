import { IPortfolio } from "@/interfaces";

export class PortfolioDTO {
  symbol: string;
  weightedAvgPrice: string;
  lastPrice: string;
  quantity: number;

  constructor(
    symbol: string,
    weightedAvgPrice: string,
    lastPrice: string,
    quantity: number
  ) {
    this.symbol = symbol;
    this.weightedAvgPrice = weightedAvgPrice;
    this.lastPrice = lastPrice;
    this.quantity = quantity;
  }

  static fromStockEntity(stockEntity: IPortfolio) {
    return new PortfolioDTO(
      stockEntity?.symbol || "",
      stockEntity?.weightedAvgPrice || "",
      stockEntity?.lastPrice || "",
      stockEntity?.quantity || 1
    );
  }
}
