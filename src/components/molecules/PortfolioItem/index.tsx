import { MotionBox } from "@/components";
import { useFadeIn } from "@/hooks";
import { IPortfolio } from "@/interfaces";
import { Button, HStack, Input, VStack, useDisclosure } from "@chakra-ui/react";
import { FC, FormEvent, useState } from "react";
import { ConfirmModal } from "../ConfirmModal";

export interface IPortfolioItem extends IPortfolio {
  handleRemove: (symbol: string) => void;
  handleChangeQuantity: (symbol: string, quantity: number) => void;
}

export const PortfolioItem: FC<IPortfolioItem> = ({
  symbol,
  weightedAvgPrice,
  lastPrice,
  quantity,
  handleRemove,
  handleChangeQuantity,
}) => {
  const [currentQuantity, setCurrentQuantity] = useState(quantity);

  const {
    isOpen: isOpenConfirm,
    onOpen: onOpenConfirm,
    onClose: onCloseConfirm,
  } = useDisclosure();
  const { animations } = useFadeIn();

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    handleChangeQuantity(symbol, currentQuantity || 1);
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
          <Button type="submit" colorScheme="green">
            Update
          </Button>

          <Button colorScheme="red" onClick={onOpenConfirm}>
            Remove
          </Button>

          <ConfirmModal
            title={`Remove ${symbol}`}
            onConfirm={() => handleRemove(symbol)}
            isOpen={isOpenConfirm}
            onClose={onCloseConfirm}
          />
        </HStack>
      </HStack>
    </MotionBox>
  );
};
