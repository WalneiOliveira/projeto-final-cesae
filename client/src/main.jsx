import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import Home from './pages/Home.jsx';
import Cursos from './pages/Cursos.jsx';
import Login from './pages/Login.jsx';
import Blog from './pages/Blog.jsx';
import NotFoundPage from './pages/NotFoundPage.jsx';
import Percursos from './pages/Percursos.jsx';
import Form from './pages/Form.jsx';
import Sobre from './pages/Sobre.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/cursos',
    element: <Cursos />,
  },
  {
    path: '/percursos',
    element: <Percursos />,
  },
  {
    path: '/blog',
    element: <Blog />,
  },
  {
    path: '/sobre',
    element: <Sobre />,
  },
  {
    path: '/form',
    element: <Form />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <Home />
    </RouterProvider>
  </React.StrictMode>
);
