import { useRoutes } from 'react-router-dom';
import Auth from './pages/Auth/Auth.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Auth />,
        path: '/',
      }
      {
        element: <Auth type='register'/>,
        path: '/register',
      },
      {
        element: <Auth type='login'/>,
        path: '/login',
      },
    ]
  );
}

export default AppRouter;
