import { NavLink, Outlet } from "react-router-dom";
import {  FaHome, FaList,  FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import useGuideDashboard from "../Hook/useGuideDashboard";
import useAdmin from "../Hook/useAdmin";
import { TbPackages } from "react-icons/tb";
const DashBoard = () => {
   const [isAdmin]=useAdmin()
   const [isGuide]=useGuideDashboard()

    return (
        <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 mt-20 min-h-screen">
                <ul className="menu p-4">
                    {
                        isAdmin ?
                         <>
                            <li>
                                <NavLink to="/dashboard/myprofile">
                                    <FaHome></FaHome>
                                    My Profile</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/addpackage">
                                 <FaUtensils></FaUtensils>
                                    Add Package</NavLink>
                            </li>
                            <li>
                                <NavLink to="/dashboard/manageusers">
                                <FaUsers></FaUsers>
                                    Manage Users</NavLink>
                            </li>
                       
                        </>
                            :isGuide ? (
                                <>
                                    <li>
                                        <NavLink to="/dashboard/myprofile">
                                            <FaHome></FaHome>
                                            My Profile
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/dashboard/myassignedtour">
                                            <FaUtensils></FaUtensils>
                                            My Assigned Tours
                                        </NavLink>
                                    </li>
                                </>
                            ) :
                            <>
                                <li>
                                    <NavLink to="/dashboard/myprofile">
                                        <FaHome></FaHome>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/mybookings">
                                    <FaShoppingCart></FaShoppingCart>
                                        My Bookings</NavLink>
                                </li>
                              
                                
                                <li>
                                    <NavLink to="/dashboard/mywishlist">
                                        <FaList></FaList>
                                       My Wishlist</NavLink>
                                       
                                </li>
                            </>
                    }
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                    <NavLink to="/allpackages">
                    <TbPackages />
                            All Packages</NavLink>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                            
                    </li>
                   
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default DashBoard;