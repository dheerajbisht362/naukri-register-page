import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import RegisterPage from "./Pages/registerPage";
import React from "react";

const router = createBrowserRouter([
    {
      path: "/register",
      element: <RegisterPage/>,
    },
]);

function App() {
    return (
        <React.StrictMode>
            <RouterProvider router={router} />
        </React.StrictMode>
)}

export default App