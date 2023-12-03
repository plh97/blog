import { useMediaQuery as uMQ } from "react-responsive";
import resolveConfig from "tailwindcss/resolveConfig";
import tailwindConfig from "@/tailwind.config.js";
import { isCSR } from "@/utils/ssr";

const fullConfig = resolveConfig(tailwindConfig);

export function useMediaQuery() {
  console.log(fullConfig.theme.screens.md);
  const isSm = uMQ({
    query: `(min-width: 786)`,
  });
  return {
    isSm,
  };
}
