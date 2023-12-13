import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './layout/Layout';
import Addproduct from './route/Addproduct';
import Home from './home/Home';
import Register from './pages/Register';
import Login from './pages/Login';
import Authprovider from './authprovider/Authprovider';
import Details from './pages/Details';
import Detail from './pages/Detail';
import Carts from './route/Carts';
import Update from './pages/Update';
import Privateroute from './authprovider/Privateroute';
import Error from './pages/Error';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/cars.json')
      },
      {
        path: '/addproduct',
        element: <Privateroute><Addproduct></Addproduct></Privateroute>
      },
      {
        path: '/carts',
        element: <Privateroute><Carts></Carts></Privateroute>,
        loader: () => fetch('https://assignment-10-server-dsjeonh5x-montasir-mihads-projects.vercel.app/addcars')
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/details/:id',
        element: <Details></Details>,
        loader: () => fetch('https://assignment-10-server-dsjeonh5x-montasir-mihads-projects.vercel.app/cars')
      },
      {
        path: '/detail/:id',
        element: <Privateroute><Detail></Detail></Privateroute>,
        loader: () => fetch('https://assignment-10-server-dsjeonh5x-montasir-mihads-projects.vercel.app/cars')
      },
      {
        path: '/update/:id',
        element: <Privateroute><Update></Update></Privateroute>,
        loader: ({params}) => fetch(`https://assignment-10-server-dsjeonh5x-montasir-mihads-projects.vercel.app/cars/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authprovider>
    <RouterProvider router={router}></RouterProvider>
    </Authprovider>
  </React.StrictMode>,
)
