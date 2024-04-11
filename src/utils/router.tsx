import { createBrowserRouter } from 'react-router-dom';

import GuestHome from '../routes/GuestHome';
import ErrorPage from '../routes/ErrorPage';
import SignIn from '../routes/SignIn';
import SignUp from '../routes/SignUp';
import UserHome from '../routes/UserHome';

const router = createBrowserRouter([
  {
    path: '/',
    element: <GuestHome />,
    errorElement: <ErrorPage />,
  },
  { path: '/sign_in', element: <SignIn /> },
  { path: '/sign_up', element: <SignUp /> },
  { path: '/user/:userId', element: <UserHome /> },
]);

export default router;
