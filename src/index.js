import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes"

const router = createBrowserRouter(routes);
console.log(router);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);