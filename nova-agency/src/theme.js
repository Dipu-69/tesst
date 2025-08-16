import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  fonts: {
    heading: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
    body: "Inter, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif",
  },
  colors: {
    brand: {
      50: "#E9F3FF",
      100: "#CFE5FF",
      200: "#A0C7FF",
      300: "#72A9FF",
      400: "#438BFF",
      500: "#156DFF",
      600: "#0F52BF",
      700: "#0A3780",
      800: "#051C40",
      900: "#030E20",
    },
  },
  styles: {
    global: {
      "html, body": { bg: "#0a0b0f", color: "white" },
      a: { color: "brand.200" },
    },
  },
  components: {
    Button: {
      baseStyle: { rounded: "full", fontWeight: "600" },
      variants: {
        primary: {
          bg: "brand.500",
          color: "white",
          _hover: { bg: "brand.400" },
        },
        ghost: {
          bg: "whiteAlpha.100",
          _hover: { bg: "whiteAlpha.200" },
        },
      },
      defaultProps: { variant: "primary" },
    },
    Card: {
      baseStyle: {
        container: {
          bg: "whiteAlpha.50",
          border: "1px solid",
          borderColor: "whiteAlpha.200",
          backdropFilter: "blur(6px)",
        },
      },
    },
  },
});

export default theme;