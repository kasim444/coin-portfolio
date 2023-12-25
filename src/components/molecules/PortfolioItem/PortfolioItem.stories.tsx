import { PortfolioItem } from ".";
import { action } from "@storybook/addon-actions";

export default {
  title: "components/molecules/PortfolioItem",
  component: PortfolioItem,
  tags: ["autodocs"],
};

export const Default = {
  args: {
    symbol: "BTC",
    weightedAvgPrice: 100,
    lastPrice: 100,
    quantity: 1,
    handleRemove: action("handleRemove"),
    handleChangeQuantity: action("handleChangeQuantity"),
  },
};
