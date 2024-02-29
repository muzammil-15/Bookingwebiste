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
import HomeListingDetails from './pages/homeListingDetails/HomeListingDetails.tsx';
import AboutUs from './pages/aboutus/AboutUs.tsx';
import TermsAndServices from './pages/termsandservices/Terms.tsx';
import ListProperty from './pages/listproperty/ListProperty.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  },
  {
    path: "/homelisting",
    element: <HomeListing/>,
  },
  {
    path: "/homelistingdetails",
    element: <HomeListingDetails/>,
  },
  {
    path: "/aboutus",
    element: <AboutUs/>,
  },
  {
    path: "/terms",
    element: <TermsAndServices/>,
  },
  {
    path: "/list-property",
    element: <ListProperty/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
     <RouterProvider router={router} />
    
  </React.StrictMode>,
)
