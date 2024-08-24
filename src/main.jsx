import React from "react";
import "./index.css";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Homepage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageError from "./pages/PageError";

const router = createBrowserRouter([
  { path: "/", element: <Homepage />, errorElement: <PageError /> },
  {
    path: "/instalace-windows-serveru",
    element: <Homepage />,
    errorElement: <PageError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
