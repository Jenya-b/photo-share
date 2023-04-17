import { createBrowserRouter } from 'react-router-dom';

import { AuthorizationPage } from 'modules/pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthorizationPage />,
  },
]);
