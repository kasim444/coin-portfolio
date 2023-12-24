import { StockSearch } from "@/components/molecules";
import usePortfolios from "@/context";
import { PortfoliosActionType } from "@/context/actions";
import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { FC } from "react";
import { PortfolioList } from "../PortfolioList";

export const AddStockModal: FC = () => {
  const {
    state: { portfolios, isOpenAddStockModal },
    dispatch,
  } = usePortfolios();

  return (
    <Modal
      isOpen={isOpenAddStockModal}
      onClose={() =>
        dispatch({
          type: PortfoliosActionType.SET_IS_OPEN_ADD_STOCK_MODAL,
          payload: false,
        })
      }
      size="2xl"
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          {portfolios?.length ? "Add / Update" : "Add Stock"}
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody display="flex" flexDirection="column" gap="6" pb="6">
          <StockSearch />
          <PortfolioList />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
