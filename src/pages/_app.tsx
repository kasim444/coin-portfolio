import "@fontsource/raleway";
import "@fontsource/open-sans";

import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "@/components";
import NextProgress from "next-progress";
import theme from "@/theme";
import type { AppProps } from "next/app";
import React from "react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PortfoliosProvider } from "src/context";

function MyApp({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedState}>
          <ChakraProvider theme={theme}>
            <NextProgress delay={300} options={{ showSpinner: false }} />
            <Layout>
              <PortfoliosProvider>
                <Component {...pageProps} />
              </PortfoliosProvider>
            </Layout>
          </ChakraProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </HydrationBoundary>
      </QueryClientProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
