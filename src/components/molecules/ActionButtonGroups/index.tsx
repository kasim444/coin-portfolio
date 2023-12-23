import { useTicker } from "@/hooks";
import { Button, HStack } from "@chakra-ui/react";
import usePortfolios from "@/context";
import { PortfoliosActionType } from "@/context/actions";

export const ActionButtonGroups = () => {
  const { refetch } = useTicker();
  const { dispatch } = usePortfolios();

  return (
    <HStack>
      <Button
        colorScheme="blue"
        onClick={() =>
          dispatch({
            type: PortfoliosActionType.SET_IS_OPEN_ADD_STOCK_MODAL,
            payload: true,
          })
        }
      >
        Add Stock
      </Button>
      <Button colorScheme="blue" onClick={() => refetch()}>
        Refresh
      </Button>
    </HStack>
  );
};
