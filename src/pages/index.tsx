import { PortfolioTracker } from "@/components";
import { QueryClient, dehydrate } from "@tanstack/react-query";
import type { NextPage } from "next";
import Head from "next/head";
import { fetchTicker } from "@/hooks";

const HomePage: NextPage = () => {
  return (
    <main>
      <Head>
        <title>Coin Portfolio</title>
      </Head>
      <PortfolioTracker />
    </main>
  );
};

export default HomePage;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ["ticker"],
    queryFn: () => fetchTicker(),
  });

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
