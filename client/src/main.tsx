import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Blog from './pages/Blog';
import Search from './pages/Search';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

// state
import store from "./state/store"
import { Provider } from 'react-redux';

export const client = new ApolloClient({
  uri: 'http://localhost:8000/graphql',
  cache: new InMemoryCache(),
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
