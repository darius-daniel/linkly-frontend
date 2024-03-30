import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

import App from './App';
import GuestHome from './routes/GuestHome';
import ErrorPage from './routes/ErrorPage';
import SignIn from './routes/SignIn';
import SignUp from './routes/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestHome />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/sign-in/',
    element: <SignIn />,
  },
  {
    path: '/sign-up',
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
