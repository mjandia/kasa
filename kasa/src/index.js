import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ReactDOM from "react-dom/client";
import Propos from "./routes/Propos";
import Home from "./routes/Home";
import NotFound from "./routes/NotFound";
import LogementPageProduit from "./routes/LogementPageProduit";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/propos",
    element: <Propos />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "logement/:id",
    element: <LogementPageProduit />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);