import { PortfolioItem } from "@/components";
import usePortfolios from "@/context";
import { PortfoliosActionType } from "@/context/actions";
import { VStack } from "@chakra-ui/react";
import { AnimatePresence } from "framer-motion";
import { FC } from "react";

export const PortfolioList: FC = () => {
  const {
    state: { portfolios },
    dispatch,
  } = usePortfolios();

  return (
    <AnimatePresence>
      <VStack gap="6" overflow="hidden">
        {portfolios.map((portfolio) => (
          <PortfolioItem
            key={portfolio.symbol}
            {...portfolio}
            handleRemove={(symbol: string) =>
              dispatch({
                type: PortfoliosActionType.REMOVE_PORTFOLIO,
                payload: symbol,
              })
            }
            handleChangeQuantity={(symbol: string, quantity: number) =>
              dispatch({
                type: PortfoliosActionType.SET_QUANTITY_OF_PORTFOLIO,
                payload: { symbol, quantity },
              })
            }
          />
        ))}
      </VStack>
    </AnimatePresence>
  );
};
