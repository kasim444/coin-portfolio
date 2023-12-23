import { PropsWithChildren } from "react";
import Head from "next/head";

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content="Keep up-to-date with your cryptocurrencies using our crypto portfolio tracker  ✔️ Free ✔️ Secure ✔️ Private ✔️ Real-time data ✔️ Thousands of coins & tokens ✔️"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <main>{children}</main>
    </>
  );
};
