import "index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import CreateBrowserRoutes from "core/pages/app";
import Home from "core/pages/Home";
import About from "core/pages/About";

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
];
root.render(
  <React.StrictMode>
    <CreateBrowserRoutes data={routes} />
  </React.StrictMode>
);