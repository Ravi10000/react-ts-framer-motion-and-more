import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";
import CountProvider from "./contexts/count.context";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </NextUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
