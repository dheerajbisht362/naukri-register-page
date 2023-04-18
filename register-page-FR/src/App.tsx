import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import RegisterPage from "./Pages/registerPage";
import React from "react";
import LoginPage from "./Pages/loginPage";
import NotFound from "./Components/Register/notFound";

const router = createBrowserRouter([
    {
      path: "/register",
      element: <RegisterPage/>,
    },
    {
      path: "/login",
      element: <LoginPage/>,
    },
    {
      path: "/",
      element: <RegisterPage/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
)}

export default App