import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import MyRouter from "./Router/MyRouter.jsx";
import { ThemeProvider } from "@material-tailwind/react";
import AuthProvider from "./Provider/AuthProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={MyRouter} />
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>
);
