import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import { Theme } from '@radix-ui/themes';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import '@radix-ui/themes/styles.css';
import './index.css';
import { Login } from './features/login/login.tsx';
import { Logout } from './features/logout.tsx';
import { Provider as StoreProvider } from 'react-redux';
import { store } from './store.ts';

const router = createBrowserRouter([
  { path: '/login', element: <Login /> },
  { path: '/logout', element: <Logout /> },
  { path: '/', element: <App /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <Theme>
        <RouterProvider router={router} />
      </Theme>
    </StoreProvider>
  </React.StrictMode>,
);
