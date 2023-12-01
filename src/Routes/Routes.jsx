
import {
  createBrowserRouter,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import HomePage from "../Pages/HomePage/HomePage";
import PackageDetails from "../Pages/PackageDetails/PackageDetails";
import GuideDetails from "../Pages/GuideDetails/GuideDetails";
import SingleCategory from "../Pages/SingleCategory/SingleCategory";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Wishlist from "../Pages/DashBoard/Tourist/Wishlist/Wishlist";
import DashBoard from "../Layout/Dashboard";
import Booking from "../Pages/DashBoard/Tourist/Booking/Booking";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers/AllUsers";
import AllPackages from "../Components/Tourism/AllPackages";
import TouristStoryDetails from "../Components/TouristStory/TouristStoryDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>
      },
      {
        path: "/packagedetails/:id",
        element: <PackageDetails></PackageDetails>,
        loader: () => fetch("http://localhost:5000/data"),
      },
      {
        path: "/guidedetails/:id",
        element: <GuideDetails></GuideDetails>,
        loader: () => fetch("http://localhost:5000/guide"),
      },
      {
        path: "/tourcategory/:category",
        element: <SingleCategory></SingleCategory>,
        loader: () => fetch("http://localhost:5000/data"),
      },
      {
        path:"/allpackages",
        element:<AllPackages></AllPackages>,
      },
      {
        path: "/story/:id",
        element: <TouristStoryDetails></TouristStoryDetails>,
        loader: () => fetch("http://localhost:5000/story"),
      },
     
    ]
  },
  { path: '/login', element:<Login></Login> },
  { path: '/signup', element: <SignUp></SignUp> },
  {
    path:"/dashboard",
    element:<DashBoard></DashBoard>,
    children:[
      
        {
          path:"/dashboard/mywishlist",
          element:<Wishlist></Wishlist>,
        },
        {
          path:"/dashboard/mybookings",
          element:<Booking></Booking>,
        },
        {
          path:"/dashboard/manageusers",
          element:<AllUsers></AllUsers>,
        }
      
    ]
  }
]);