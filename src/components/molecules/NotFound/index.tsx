import { Heading, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";
import React, { FC } from "react";

interface INotFound {
  title?: string;
  description?: string;
  imageUri?: string;
}

export const NotFound: FC<INotFound> = ({
  title = "No Portfolio Found",
  description = "Please add a stock first.",
  imageUri = "/images/bitcoin-illustration.png",
}) => {
  return (
    <VStack>
      <Image
        src={imageUri}
        alt="Bitcoin Illustration"
        width={300}
        height={132}
      />
      <Heading>{title}</Heading>
      <Text>{description}</Text>
    </VStack>
  );
};
