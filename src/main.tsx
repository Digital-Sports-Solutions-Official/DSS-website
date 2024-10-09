/* Noah Klein */

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import ErrorPage from "./ErrorPage";

import './index.css';
import Home from './routes/Home/Home';
import TinyLeague from './routes/TinyLeague/TinyLeague';
import Order from './routes/Order/Order';
import About from './routes/About/About';
import PrivacyPolicy from './routes/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './routes/TermsOfService/TermsOfService';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/tinyLeague",
    element: <TinyLeague />,
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
  {
    path: "/terms",
    element: <TermsOfService />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/privacy",
    element: <PrivacyPolicy />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/iphone20",
    element: <img src="iphone20.png" />,
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
