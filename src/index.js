import "index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import CreateBrowserRoutes from "core/pages/app";
import Home from "core/pages/Home";
import About from "core/pages/About";
import API from "core/pages/Api";

const root = ReactDOM.createRoot(document.getElementById("root"));
const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/api",
    element: <API />,
  },
];
root.render(
  <React.StrictMode>
    <CreateBrowserRoutes data={routes} />
  </React.StrictMode>
);