import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Login from "../Component/Login/Login";
import SingUp from "../Component/SingUp";
import AddJob from "../Component/AddJob/AddJob";
import PrivetRoute from "./../Component/PrivetRoute/PrivetRoute";
import Blog from "../Component/Blog/Blog";
import BlogDetails from "../Component/BlogDetails/BlogDetails";
import AllJob from "../Component/AllJob/AllJob";
import JobDetails from "../Component/JobDetails/JobDetails";
import MyJob from "../Component/MyJob/MyJob";
import Update from "../Component/Update/Update";
import JobApplied from "../Component/JobApplied/JobApplied";
import ErrorPage from "../Component/ErrorPage/ErrorPage";
import WishList from "../Pages/WishList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singup",
        element: <SingUp></SingUp>,
      },
      {
        path: "/addjob",
        element: (
          <PrivetRoute>
            <AddJob></AddJob>
          </PrivetRoute>
        ),
      },
      {
        path: "/viewdetails/:id",
        element: <p>This is Dynamic View Details page alhamulillah</p>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/blogdetails/:id",
        element: <BlogDetails></BlogDetails>,
      },
      {
        path: "/alljob",
        element: <AllJob></AllJob>,
      },
      {
        path: "/wishlist",
        element: <WishList></WishList>,
      },
      {
        path: "/job/:id",
        element: (
          <PrivetRoute>
            <JobDetails></JobDetails>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://my-assignment-11-server-bice.vercel.app/getjob/${params.id}`
          ),
      },
      {
        path: "/myjob",
        element: (
          <PrivetRoute>
            <MyJob></MyJob>
          </PrivetRoute>
        ),
      },

      {
        path: "/updatejob/:id",
        element: <Update></Update>,
      },
      {
        path: "/jobapplied",
        element: (
          <PrivetRoute>
            <JobApplied></JobApplied>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
export default router;
