import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Mainroute from './Mainroute/Mainroute.jsx';
import Home from './Component/Home/Home.jsx';
import Login from './Authentication/Login/Login.jsx';
import Register from './Authentication/Register/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainroute/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/register',
        element:<Register/>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
