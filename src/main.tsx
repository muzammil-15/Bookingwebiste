import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomeListing from './pages/homeListing/HomeListing.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/homelisting",
    element: <HomeListing/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
