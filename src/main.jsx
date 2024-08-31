import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LoginPage from './pages/login';
import RegisterPage from './pages/register';
import ErrorPage from './pages/404';
import ProductsPage from './pages/product';
import ProfilePage from './pages/profile';

const router = createBrowserRouter([
  { path: '/', element: <div>HomePage</div>, errorElement: <ErrorPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/register', element: <RegisterPage /> },
  { path: '/products', element: <ProductsPage /> },
  { path: '/profile', element: <ProfilePage /> },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}

    <RouterProvider router={router} />
  </StrictMode>
);
