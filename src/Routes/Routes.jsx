import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Component/Login/Login";
 import SingUp from '../Component/SingUp'
 
 
 

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
          path: 'singup',
          element: <SingUp></SingUp>
        }
 
      ]
    },
  ]);
  export default router;
