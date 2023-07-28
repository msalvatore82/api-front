import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './colors.css';

import './translations.js';
import { UserProvider } from './contexts/UserContexts.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
