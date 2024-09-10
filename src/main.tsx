/* Noah Klein */

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import ErrorPage from "./ErrorPage";

import './index.css';
import Home from './routes/Home/Home';
import CLKR from './routes/CLKR/CLKR';
import Order from './routes/Order/Order';
import About from './routes/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/clkr",
    element: <CLKR />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/order",
    element: <Order />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <ErrorPage />,
  },
]);


// The ! tells TS not to worry about NULL here
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Strict mode makes events fire twice to check for side effects
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
