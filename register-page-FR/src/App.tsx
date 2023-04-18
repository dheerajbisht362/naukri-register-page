import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import './App.css'
import RegisterPage from "./Pages/registerPage";
import React from "react";
import Navbar from "./Components/Register/navbar";

const router = createBrowserRouter([
    {
      path: "/register",
      element: <RegisterPage/>,
    },
  ]);
  
//   ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
//     <React.StrictMode>
//        <RouterProvider router={router} />
//     </React.StrictMode>,
//   )

function App() {
    return (
        <React.StrictMode>
        <RouterProvider router={router} />
     </React.StrictMode>
)}

export default App