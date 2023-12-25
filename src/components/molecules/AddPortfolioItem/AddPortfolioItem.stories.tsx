import { AddPortfolioItem } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/molecules/AddPortfolioItem",
  component: AddPortfolioItem,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    symbol: "BTC",
    weightedAvgPrice: 100,
    lastPrice: 100,
    quantity: 1,
    handleAddPortfolio: action("handleAddPortfolio"),
  },
};
