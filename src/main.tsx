import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainGuest from "./components/MainGuest/MainGuest.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainGuest />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
