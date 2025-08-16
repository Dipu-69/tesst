import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./theme";
import App from "./App";
import { LazyMotion, domAnimation } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <LazyMotion features={domAnimation}>
          <App />
        </LazyMotion>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);