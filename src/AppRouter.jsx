import { useRoutes } from 'react-router-dom';
import Auth from './pages/Auth/Auth.jsx';
import Landing from './pages/Landing/Landing.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Auth />,
        path: '/login',
      },
      {
        element: <Landing />,
        path: '/',

      }
    ]
  );
}

export default AppRouter;
