/* Noah Klein */

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";

import ErrorPage from "./ErrorPage";

import './index.css';
import PrivacyPolicy from './routes/PrivacyPolicy/PrivacyPolicy';
import TermsOfService from './routes/TermsOfService/TermsOfService';
import App from './App';
import Home from './routes/Home/Home';
import TinyLeague from './routes/TinyLeague/TinyLeague';
import Order from './routes/Order/Order';
import About from './routes/About/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/tinyLeague",
        element: <TinyLeague />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "terms",
        element: <TermsOfService />,
      },
      {
        path: "privacy",
        element: <PrivacyPolicy />,
      },
    ],
  },
  {
    path: "iphone20",
    element: <img src="iphone20.png" />,
  },
]);



// The ! tells TS not to worry about NULL here
ReactDOM.createRoot(document.getElementById("root")!).render(
  // Strict mode makes events fire twice to check for side effects
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
