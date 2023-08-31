import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './Components/Home';
import Questions from './Components/Questions';
import ErrorPage from './Components/ErrorPage';
import { Provider } from 'react-redux';
import { store } from './store';

const router = createBrowserRouter([
  {
    element:<Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element:<Home /> },
      { path: '/questions', element: <Questions /> },
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
