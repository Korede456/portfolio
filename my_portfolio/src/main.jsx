import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Box, ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider >
      <Box w="100%" px={{ sm: "2%", md: "5%", lg: "10%" }} m="0" bg="#181A2A" color="#fff">
        <App />
      </Box>
    </ChakraProvider>
  </React.StrictMode>
);
