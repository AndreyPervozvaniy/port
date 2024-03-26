import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { ParallaxProvider } from "react-scroll-parallax";
const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <ParallaxProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ParallaxProvider>
  </QueryClientProvider>
);
