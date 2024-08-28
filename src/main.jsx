import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageError from "./pages/PageError";
import SettingUpNetwork from "./pages/SettingUpNetwork";
import InstallWindowsServer from "./pages/InstallWindowsServer";
import InstallOfADwithDNS from "./pages/InstallOfADwithDNS";

const basename = "/basic-networking";

const router = createBrowserRouter(
  [
    { path: "/", element: <Homepage /> },
    {
      path: "/instalace-windows-serveru",
      element: <InstallWindowsServer />,
    },
    { path: "*", element: <PageError /> },
    { path: "/nastavovani-sitovych-karet", element: <SettingUpNetwork /> },
    { path: "/instalace-active-directory-s-dns", element: <InstallOfADwithDNS /> },
  ],
  { basename }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
