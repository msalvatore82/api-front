import { useRoutes } from 'react-router-dom';
import Auth from './pages/Auth/Auth.jsx';
import Landing from './pages/Landing/Landing.jsx';
import Profile from './pages/Profile/Profile.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Landing />,
        path: '/',

      },
      {
        element: <Auth type='register'/>,
        path: '/register',
      },
      {
        element: <Auth type='login'/>,
        path: '/login',
      },
      {
        element: <Profile type='profile'/>,
        path: '/profile',
      }
    ]
  );
}

export default AppRouter;
