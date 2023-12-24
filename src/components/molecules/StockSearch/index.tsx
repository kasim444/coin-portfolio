import usePortfolios from "@/context";
import { PortfoliosActionType } from "@/context/actions";
import { useTicker } from "@/hooks";
import { IPortfolio } from "@/interfaces";
import {
  getStockBySymbol,
  prepareStocksForSearch,
  prepareUnSelectedStocks,
} from "@/utils";
import { Skeleton, VStack } from "@chakra-ui/react";
import { Select } from "chakra-react-select";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { AddPortfolioItem } from "../AddPortfolioItem";

interface ISelectedStock {
  label: string;
  value: string;
}

export const StockSearch = () => {
  const {
    state: { portfolios },
    dispatch,
  } = usePortfolios();
  const { data, isLoading, isError } = useTicker();
  const [selectedSymbol, setSelectedSymbol] = useState<ISelectedStock | null>(
    null
  );

  if (isError) {
    return null;
  }

  const unselectedStocks = prepareUnSelectedStocks(portfolios, data);

  const selectedStock = getStockBySymbol(
    unselectedStocks,
    selectedSymbol?.value
  );

  const handleAddPortfolio = (newPortfolio: IPortfolio) => {
    dispatch({
      type: PortfoliosActionType.ADD_PORTFOLIO,
      payload: newPortfolio,
    });
    setSelectedSymbol(null);
  };

  return (
    <Skeleton isLoaded={!isLoading} width="full" borderRadius="lg">
      <AnimatePresence>
        <VStack gap="6">
          <Select
            placeholder="Search"
            size="lg"
            options={prepareStocksForSearch(unselectedStocks)}
            chakraStyles={{
              container: (provided) => ({
                ...provided,
                width: "full",
              }),
            }}
            value={selectedSymbol}
            onChange={(value) => setSelectedSymbol(value)}
          />

          {selectedStock ? (
            <AddPortfolioItem
              {...selectedStock}
              handleAddPortfolio={handleAddPortfolio}
            />
          ) : null}
        </VStack>
      </AnimatePresence>
    </Skeleton>
  );
};
