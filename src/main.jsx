import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from './AppRouter.jsx';
import Navbar from './components/Navbar/Navbar';
import PageContainer from './components/PageContainer/PageContainer';
import { LoggedUserProvider } from './contexts/loggedUserContext.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './colors.css';

import './translations.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <PageContainer>
        <LoggedUserProvider>
          <AppRouter />
        </LoggedUserProvider>
      </PageContainer>
    </BrowserRouter>
  </React.StrictMode>,
);
