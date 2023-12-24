import { MotionBox } from "@/components";
import { useFadeIn } from "@/hooks";
import { IPortfolio } from "@/interfaces";
import { Button, HStack, Input, VStack } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";

interface IAddPortfolioItem extends IPortfolio {
  handleAddPortfolio: (portfolio: IPortfolio) => void;
}

export const AddPortfolioItem: FC<IAddPortfolioItem> = ({
  handleAddPortfolio,
  symbol,
  weightedAvgPrice,
  lastPrice,
  quantity,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const { animations } = useFadeIn();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleAddPortfolio({
      symbol,
      weightedAvgPrice,
      lastPrice,
      quantity: currentQuantity || 1,
    });
  };

  return (
    <MotionBox {...animations} layout>
      <HStack
        as="form"
        onSubmit={handleFormSubmit}
        justifyContent="space-between"
        width="full"
        gap="5"
        padding="4"
        borderWidth="1px"
        borderColor="gray.200"
        borderRadius="lg"
      >
        <HStack flex={1} flexWrap={"wrap"} justifyContent="space-between">
          <VStack alignItems="flex-start">
            <b>{symbol}</b>
            <span>
              {lastPrice} - {weightedAvgPrice}
            </span>
          </VStack>
          <Input
            type="number"
            name="quantity"
            value={currentQuantity}
            required
            onChange={(e) => setCurrentQuantity(parseInt(e.target.value, 10))}
            width={{ base: "full", xl: 86 }}
          />
        </HStack>
        <HStack>
          <Button type="submit" colorScheme="blue">
            Add
          </Button>
        </HStack>
      </HStack>
    </MotionBox>
  );
};
