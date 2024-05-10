import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Component/Login/Login";
 import SingUp from '../Component/SingUp'
import AddJob from "../Component/AddJob/AddJob";
 
 
 
 

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
          element: <AddJob></AddJob>
        }
 
 
      ]
    },
  ]);
  export default router;
