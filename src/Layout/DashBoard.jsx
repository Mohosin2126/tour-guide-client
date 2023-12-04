import { NavLink, Outlet } from "react-router-dom";
import { FaHome, FaList, FaShoppingCart, FaUsers, } from "react-icons/fa";
import useGuideDashboard from "../Hook/useGuideDashboard";
import useAdmin from "../Hook/useAdmin";
import { TbPackages } from "react-icons/tb";
import { useContext } from "react";
import { AuthContext } from "../Pages/AuthProvider/AuthProvider";
import { LuLogOut } from "react-icons/lu";
import { MdAssignment } from "react-icons/md";
import { IoBagAdd } from "react-icons/io5";
const DashBoard = () => {
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuideDashboard();
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 mt-20 min-h-screen">
        <ul className="menu p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/myprofile">
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addpackage">
                 < IoBagAdd/>
                  Add Package
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageusers">
                  <FaUsers></FaUsers>
                  Manage Users
                </NavLink>
              </li>
            </>
          ) : isGuide ? (
            <>
              <li>
                <NavLink to="/dashboard/myprofile">
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/myassignedtour">
                <MdAssignment />
                  My Assigned Tours
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/myprofile">
                  <FaHome></FaHome>
                  My Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/mybookings">
                  <FaShoppingCart></FaShoppingCart>
                  My Bookings
                </NavLink>
              </li>

              <li>
                <NavLink to="/dashboard/mywishlist">
                  <FaList></FaList>
                  My Wishlist
                </NavLink>
              </li>
            </>
          )}
          {/* shared nav links */}
          <div className="divider"></div>
          <li>
            <NavLink to="/allpackages">
              <TbPackages />
              All Packages
            </NavLink>
          </li>
          <li>
            <NavLink to="/">
              <FaHome></FaHome>
              Home
            </NavLink>
          </li>
          <li onClick={handleLogOut} className="mt-80">
  {user ? (
    <div>
      <LuLogOut />
      Logout
    </div>
  ) : null}
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
