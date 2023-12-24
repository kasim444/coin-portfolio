import { ActionButtonGroups, AddStockModal, PortfolioList } from "@/components";
import { Container, SimpleGrid } from "@chakra-ui/react";

export const PortfolioTracker = () => {
  return (
    <Container maxWidth="container.xl" py="4">
      <ActionButtonGroups />
      <SimpleGrid columns={2} spacing={4} mt="10">
        <PortfolioList />
        <div>chart</div>
      </SimpleGrid>
      <AddStockModal />
    </Container>
  );
};
