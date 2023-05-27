// 1. Import `extendTheme`
import { extendTheme } from "@chakra-ui/react";
import { Button } from "./button";

// 2. Call `extendTheme` and pass your custom values
export const theme = extendTheme({
  colors: {
    brand: {
      100: "#3D1766",
      200: "#6F1AB6",
      300: "#FF0032",
      400: "#CD0404",
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
