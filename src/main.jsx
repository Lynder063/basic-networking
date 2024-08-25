import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageError from "./pages/PageError";
import InstallWindowsServer from "./pages/InstallWindowsServer";

// Nastavte basename na jméno vašeho repozitáře na GitHubu
const basename = "/nazev-repozitare"; // Změňte na skutečný název vašeho repozitáře

const router = createBrowserRouter(
  [
    { path: "/", element: <Homepage /> },
    {
      path: "/instalace-windows-serveru",
      element: <InstallWindowsServer />,
    },
    { path: "*", element: <PageError /> }, // Pro neexistující cesty
  ],
  { basename } // Přidá základní název do každé cesty
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
