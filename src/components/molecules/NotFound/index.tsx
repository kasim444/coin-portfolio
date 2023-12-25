import { Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

export const NotFound = () => {
  return (
    <VStack>
      <Image
        src="/images/bitcoin-illustration.png"
        alt="Bitcoin Illustration"
        width={300}
        height={132}
      />
      <Heading>No Portfolio Found</Heading>
      <Text>Please add a stock first.</Text>
    </VStack>
  );
};
