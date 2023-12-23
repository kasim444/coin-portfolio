import { ThemeConfig, extendTheme } from "@chakra-ui/react";

import foundations from "./foundations";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme: ThemeConfig = extendTheme({
  ...foundations,
  config,
});

export default theme;
