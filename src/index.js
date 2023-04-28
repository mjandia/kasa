import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Propos from "./components/Propos";
import Home from "./components/Home";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "propos",
    element: <Propos />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);