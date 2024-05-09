import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import React from "react";
import ReactDOM from "react-dom/client";

import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor } from "./store/store";

import { Provider } from "react-redux";
import { store } from "./store/store";

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);
