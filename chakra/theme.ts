// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#000",
      200:"#000",
      400: "#6F1AB6",
      300: "#EA047E",
      500: "#A31ACB",
    },
  },

  fonts: {
    body: "Inter,  sans-serif",
  },

  styles: {
    global: () => ({
      body: {
        bg: "gray.200",
      },
    }),
  },

  components: {
    Button,
  },
});
