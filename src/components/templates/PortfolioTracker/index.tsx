import {
  ActionButtonGroups,
  AddStockModal,
  PortfolioChart,
  PortfolioList,
} from "@/components";
import { Container, SimpleGrid } from "@chakra-ui/react";

export const PortfolioTracker = () => {
  return (
    <Container as="section" maxWidth="container.xl" py="4">
      <ActionButtonGroups />
      <SimpleGrid columns={{ base: 1, xl: 2 }} spacing={4} mt="10">
        <PortfolioList />
        <PortfolioChart />
      </SimpleGrid>
      <AddStockModal />
    </Container>
  );
};
