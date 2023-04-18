import { lazy } from 'react';

const AuthorizationPage = lazy(() => import('./Authorization/Authorization'));
const ProfilePage = lazy(() => import('./Profile/Profile'));

export { AuthorizationPage, ProfilePage };
