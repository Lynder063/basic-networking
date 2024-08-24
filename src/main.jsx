import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageError from "./pages/PageError";
import InstallWindowsServer from "./pages/InstallWindowsServer";

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <PageError /> },
  {
    path: "/instalace-windows-serveru",
    element: <InstallWindowsServer />,
    errorElement: <PageError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
