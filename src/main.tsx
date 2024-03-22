import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import GuestHome from './routes/GuestHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestHome />,
    // errorElement: <ErrorPage />
    // },
    // {
    //   path: '/sign-in',
    //   element: <SignIn />,
    //   errorElement: <ErrorPage />
    // }
    // {
    //   path: '/sign-up',
    //   element: <SignUp />,
    //   errorElement: <ErrorPage />
  },
  {
    path: '/app',
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
