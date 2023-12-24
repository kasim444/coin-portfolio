import { useIsPresent } from "framer-motion";

export const useFadeIn = () => {
  const isPresent = useIsPresent();

  const animations = {
    position: isPresent ? "static" : "absolute",
    initial: { y: -24, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 24, opacity: 0 },
  };

  return { animations };
};
