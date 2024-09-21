import { ChakraProvider } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import { App } from "./App.tsx";
import theme from "./assets/theme.ts";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
  <ChakraProvider theme={theme}>
    <App />
  </ChakraProvider>
  // </StrictMode>,
);
