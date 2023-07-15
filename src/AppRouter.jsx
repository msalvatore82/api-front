import { useRoutes } from 'react-router-dom';
import Auth from './pages/Auth/Auth.jsx';

function AppRouter() {
  return useRoutes(
    [
      {
        element: <Auth />,
        path: '/',
      }
    ]
  );
}

export default AppRouter;
