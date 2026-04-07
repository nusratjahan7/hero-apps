import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from "react-router/dom";
import { createBrowserRouter } from 'react-router';
import Root from './Layout/Root';
import ErrorPage from './Pages/ErrorPage/ErrorPage';
import Homepage from './Pages/Homepage/Homepage';
import Apps from './Pages/Apps/Apps';
import Installation from './Pages/Installation/Installation';

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
       index: true,      
       Component: Homepage
      },
      {
       path: 'apps',      
       Component: Apps
      },
      {
       path: 'installation',      
       Component: Installation
      },
    ],
    errorElement: <ErrorPage />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
