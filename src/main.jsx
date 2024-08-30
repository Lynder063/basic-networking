import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ConfiguringDHCPserver from "./pages/ConfiguringDHCPserver";
import ConfiguringVirtualWebsites from "./pages/ConfiguringVirtualWebsites";
import Homepage from "./pages/Homepage";
import InstallingIISwithASPsupport from "./pages/InstallingIISwithASPsupport";
import InstallOfADwithDNS from "./pages/InstallOfADwithDNS";
import InstallWindowsServer from "./pages/InstallWindowsServer";
import PageError from "./pages/PageError";
import SettingUpNetwork from "./pages/SettingUpNetwork";
import SettingUpSpolecna from "./pages/SettingUpSpolecna";
import TerminalAccessForDomainUsers from "./pages/TerminalAccessForDomainUsers";
import WindowsServerAsRouter from "./pages/WindowsServerAsRouter";

const basename = "/basic-networking";

const router = createBrowserRouter(
  [
    { path: "/", element: <Homepage /> },
    {
      path: "/instalace-windows-serveru",
      element: <InstallWindowsServer />,
    },
    { path: "*", element: <PageError /> },
    {
      path: "/nastavovani-sitovych-karet",
      element: <SettingUpNetwork />,
    },
    {
      path: "/instalace-active-directory-s-dns",
      element: <InstallOfADwithDNS />,
    },
    {
      path: "/nastaveni-sdilene-slozky-spolecne",
      element: <SettingUpSpolecna />,
    },
    {
      path: "/instalace-iis-s-podporou-asp",
      element: <InstallingIISwithASPsupport />,
    },
    {
      path: "/konfigurace-dhcp-serveru",
      element: <ConfiguringDHCPserver />,
    },
    {
      path: "/konfigurace-virtualnich-webu",
      element: <ConfiguringVirtualWebsites />,
    },
    {
      path: "/terminalovy-pristup-pro-domenove-uzivatele",
      element: <TerminalAccessForDomainUsers />,
    },
    {
      path: "/windows-server-jako-router",
      element: <WindowsServerAsRouter />,
    },
  ],
  { basename }
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
