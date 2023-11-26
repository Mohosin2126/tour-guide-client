
import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
path:"/",
element:<HomePage></HomePage>
        },
        {
          path:"/packagedetails/:id",
          element:<PackageDetails></PackageDetails>,
          loader:()=>fetch("http://localhost:5000/data"),
        },
        {
          path:"/guidedetails/:id",
          element:<GuideDetails></GuideDetails>,
          loader:()=>fetch("http://localhost:5000/guide"),
        }
      ]
    },
  ]);