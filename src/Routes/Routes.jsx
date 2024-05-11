import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Component/Login/Login";
 import SingUp from '../Component/SingUp'
import AddJob from "../Component/AddJob/AddJob";
import PrivetRoute from './../Component/PrivetRoute/PrivetRoute';
 
 
 
 

const router = createBrowserRouter([
    

    {
      path: "/",
      element:   <Layout></Layout>   ,
      children:[
        {
            path: '/',
           element: <Home></Home>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/singup',
          element: <SingUp></SingUp>
        },
        {
          path: '/addjob',
          element:   <PrivetRoute><AddJob></AddJob></PrivetRoute>
        }
 
 
      ]
    },
  ]);
  export default router;
