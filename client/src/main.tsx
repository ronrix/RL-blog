import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import './index.css'
import Search from './pages/Search';
import { ApolloClient, ApolloProvider } from '@apollo/client';

// state
import store from "./state/store"
import { Provider } from 'react-redux';
import Dashboard from './pages/Dashboard';
import { cache } from './state/cache';
import BlogForm from './pages/BlogForm';
import Home from './pages/Home';

import { authCookie  } from "./state/store";
import CompleteProfile from './pages/CompleteProfile';
import BlogPage from './pages/Blog';
import About from './pages/About';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'http://localhost:8000/graphql',
  credentials: "include",
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://localhost:8000/subscriptions',
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

export const client = new ApolloClient({
  link: splitLink,
  cache,
  connectToDevTools: true,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/search",
    element: <Search />
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/terms",
    element: <Terms />
  },
  {
    path: "/privacy",
    element: <Privacy />
  },
  {
    path: "/complete-profile",
    element: <CompleteProfile />
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
    path: "*",
    element: <BlogPage />
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
