import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";

import {createBrowserRouter,RouterProvider,Navigate} from "react-router-dom";

import App from "./App";
import Login from "./routes/Login";
import Cadastro from "./routes/Cadastro";
import Error from "./routes/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [

      { index: true, element: <Navigate to="/login" replace /> }, 
      { path: "login", element: <Login /> },
      { path: "cadastro", element: <Cadastro /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>
);
