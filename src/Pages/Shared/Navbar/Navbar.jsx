import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/community">Community</Link></li>
      <li><Link to="/blogs">Blogs</Link></li>
      <li><Link to="/aboutus">About Us</Link></li>
      <li><Link to="/contactus">Contact Us</Link></li>
      
    </>
  );

  return (
    <div className="navbar fixed z-10 bg-opacity-30 max-w-screen-2xl bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navOptions}
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Bistro Boss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navOptions}
                    </ul>
                </div>
                <div className="navbar-end">
                <div className="dropdown dropdown-bottom flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
  <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
    <div className="w-10 rounded-full">
      <img alt="Tailwind CSS Navbar component" src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
    </div>
  </label>
  <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
    <li>
      <h1>name</h1>
    </li>
    <li><h1>nmail</h1></li>
    <li><h1>Dashboard</h1></li>
  </ul>
</div>
                </div>
            </div>
  );
};

export default Navbar;
