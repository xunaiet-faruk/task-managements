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
import Createtask from './Taskroute/Createtask/Createtask.jsx';
import Priviouss from './Taskroute/Privious/Priviouss.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

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
    ],  
  },
  {
    path:'task',
    element:<Task/>,
    children:[
      {
        path:'create',
        element:<Createtask/>
      },
      {
        path:'privious',
        element:<Priviouss/>
       
      }
    ]
  }
]);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>

      <Authprovider>
        <RouterProvider router={router} />
      </Authprovider>

  </QueryClientProvider>
  </React.StrictMode>,
)
