import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Root from "./routes/root";
import ErrorPage from "./error-page";



// import Dashboard from "./pages/Dashboard";
import Stake from "./pages/Stake";
import Swap from "./pages/Swap";
import Learning from "./pages/Learning";


import reportWebVitals from "./reportWebVitals";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Dashboard from "./pages/Dashboard";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "binance-testnet";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "swap",
        element: <Swap />,
      },

      {
        path: "stake",
        element: <Stake />,
      },

      {
        path: "learning",
        element: <Learning />,
      },
    ],
  },

  // {
  //   path: "swap",
  //   element: <Swap />,
  // },

  // {
  //   path: "stake",
  //   element: <Stake />,
  // },

  // {
  //   path: "learning",
  //   element: <Learning />,
  // },

]);

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider activeChain={activeChain}>
    <RouterProvider router={router} />
    </ThirdwebProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
