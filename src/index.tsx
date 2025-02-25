import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LazyLoadedSalesPageBuilderTest } from "./features/SalesPageBuilderTest/LazyLoadedSalesPageBuilder";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLoadedSalesPageBuilderTest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
