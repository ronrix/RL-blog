import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Blog from './pages/Blog';
import Search from './pages/Search';
import { ApolloClient, ApolloProvider } from '@apollo/client';
import Cookie from "js-cookie";

// state
import store from "./state/store"
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import { cache } from './state/cache';
import BlogForm from './pages/BlogForm';

const authCookie = Cookie.get("c_user");

export const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache,
  credentials: "include",
});

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
    path: "/u",
    element: authCookie ? <Dashboard /> : <Navigate to="/" />
  },
  {
    path: "/u/write-blog",
    element: authCookie ? <BlogForm /> : <Navigate to="/" />
  },
  {
    path: "/*",
    element: <Blog />
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <RouterProvider router={router} />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
