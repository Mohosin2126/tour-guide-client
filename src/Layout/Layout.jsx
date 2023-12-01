import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Navbar from "../Pages/Shared/Navbar/Navbar";

const Layout = () => {
    return (
        <div>
        <div className=" fixed top-0 z-50">
          <Navbar />
        </div>
        <div className="relative ">
          <Outlet />
          <Footer />
        </div>
      </div>
    );
};

export default Layout;