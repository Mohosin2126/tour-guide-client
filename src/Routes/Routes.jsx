
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
import Booking from "../Pages/DashBoard/Tourist/Booking/Booking";
import AllUsers from "../Pages/DashBoard/Admin/AllUsers/AllUsers";
import AllPackages from "../Components/Tourism/AllPackages";
import TouristStoryDetails from "../Components/TouristStory/TouristStoryDetails";
import MyTour from "../Pages/DashBoard/TourGuide/MyTour";
import AllStory from "../Components/TouristStory/AllStory";
import MyProfile from "../Pages/DashBoard/Tourist/MyProfile/MyProfile";
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import GuideRoute from "./GuideRoute";
import AddPackages from "../Pages/DashBoard/Admin/AddPackages/AddPackages";
import DashBoard from "../Layout/DashBoard";
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
        loader: () => fetch("https://y-gold-two.vercel.app/data"),
      },
      {
        path: "/guidedetails/:id",
        element: <GuideDetails></GuideDetails>,
        loader: () => fetch("https://y-gold-two.vercel.app/guide"),
      },
      {
        path: "/tourcategory/:category",
        element: <SingleCategory></SingleCategory>,
        loader: () => fetch("https://y-gold-two.vercel.app/data"),
      },
      {
        path:"/allpackages",
        element:<AllPackages></AllPackages>,
      },
      {
        path: "/story/:id",
        element: <TouristStoryDetails></TouristStoryDetails>,
        loader: () => fetch("https://y-gold-two.vercel.app/story"),
      },
     {
      path:"/allstories",
      element:<AllStory></AllStory>,
     }
    ]
  },
  { path: '/login', element:<Login></Login> },
  { path: '/signup', element: <SignUp></SignUp> },
  {
    path:"/dashboard",
    element: <PrivateRoute> <DashBoard></DashBoard></PrivateRoute>  ,
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
          element:<AdminRoute><AllUsers></AllUsers></AdminRoute>   ,
        },
        {
          path:"/dashboard/myassignedtour",
          element:<GuideRoute><MyTour></MyTour></GuideRoute>  ,
        },
        {
          path:"/dashboard/myprofile",
          element:<MyProfile></MyProfile>,
        },
        {
          path:"/dashboard/addpackage",
          element:<AddPackages></AddPackages>
        }
      
    ]
  }
]);