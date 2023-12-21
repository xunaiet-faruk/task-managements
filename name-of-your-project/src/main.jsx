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
import Authprovider from './Authentication/Provider/Authprovider.jsx';
import Task from './Component/Dashboard/Task.jsx';

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
      },
      {
        path:'/task',
        element:<Task></Task>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <Authprovider>
      <RouterProvider router={router} />
   </Authprovider>
  </React.StrictMode>,
)
