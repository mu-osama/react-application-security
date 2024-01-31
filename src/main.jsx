import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Iframe from "./pages/iframe.jsx";
import Inputurl from "./pages/input-url.jsx";
import InnerHTML from "./pages/inner-html.jsx";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReferrerPolicy from "./pages/referrer-policy.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/iframe",
    element: <Iframe />,
  },
  {
    path: "/input-url",
    element: <Inputurl />,
  },
  {
    path: "/inner-html",
    element: <InnerHTML />,
  },
  {
    path: "/referrer-policy",
    element: <ReferrerPolicy />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
