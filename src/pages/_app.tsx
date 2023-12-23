import "@fontsource/raleway";
import "@fontsource/open-sans";

import { Analytics } from "@vercel/analytics/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Layout } from "@/components";
import NextProgress from "next-progress";
import theme from "@/theme";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ChakraProvider theme={theme}>
        <NextProgress delay={300} options={{ showSpinner: false }} />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ChakraProvider>
      <Analytics />
    </>
  );
}

export default MyApp;
