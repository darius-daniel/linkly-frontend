import { createBrowserRouter } from 'react-router-dom';

import GuestHome from '../routes/GuestHome';
import ErrorPage from '../routes/ErrorPage';
import SignIn from '../routes/SignIn';
import SignUp from '../routes/SignUp';

const router = createBrowserRouter([
  { path: '/', element: <GuestHome />, errorElement: <ErrorPage /> },
  { path: '/sign-in', element: <SignIn /> },
  { path: '/sign-up', element: <SignUp /> },
  // { path: '/user/:userId', element: <User userId={userId} /> },
]);

export default router;
