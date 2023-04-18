import { createBrowserRouter } from 'react-router-dom';

import { AuthorizationPage, ProfilePage } from 'modules/pages';
import { RequireAuth } from 'hocs/RequireAuth';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizationPage />,
  },
  {
    path: 'profile',
    element: (
      <RequireAuth>
        <ProfilePage />
      </RequireAuth>
    ),
  },
]);
