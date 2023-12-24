import usePortfolios from "@/context";
import { PortfoliosActionType } from "@/context/actions";
import { useTicker } from "@/hooks";
import { Button, HStack } from "@chakra-ui/react";

export const ActionButtonGroups = () => {
  const { refetch } = useTicker();
  const {
    state: { portfolios },
    dispatch,
  } = usePortfolios();

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
        {portfolios?.length ? "Add / Update" : "Add Stock"}
      </Button>
      <Button colorScheme="blue" onClick={() => refetch()}>
        Refresh
      </Button>
    </HStack>
  );
};
