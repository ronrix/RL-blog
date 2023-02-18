import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Blog from './pages/Blog';
import Search from './pages/Search';

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>This is home</h1> 
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/*",
    element: <Blog />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
