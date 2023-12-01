import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {

  const{user,logOut}=useContext(AuthContext)
      const handleLogOut=()=>{
      logOut()
      .then(()=>{})
      .catch(error=>console.log(error))
  }


  const navOptions = (
    <>
      <li className="font-bold font-serif text-lg text-rose-600"><Link to="/">Home</Link></li>
      <li className="font-bold font-serif text-lg text-rose-600"><Link>Community</Link></li>
      <li className="font-bold font-serif text-lg text-rose-600"><Link >Blogs</Link></li>
      <li className="font-bold font-serif text-lg text-rose-600"><Link >About Us</Link></li>
     
      {
        user ? (
          <button onClick={handleLogOut} className="font-bold font-serif text-lg text-rose-600">LogOut</button>
        ) : (
          <li className="font-bold font-serif text-lg text-rose-600"><Link to="/login">Login</Link></li>
        )
      }
    </>
  );

  return (
    <div  className="navbar justify-between md:justify-normal md:space-x-[300px] gap-36 h-28 mb-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navOptions}
          </ul>
        </div>
        <div className="flex">
          <a className="btn btn-ghost normal-case text-xl">Tour</a>
          <img className="h-10 w-10" src="https://i.ibb.co/54n73qD/168111-travel-icon-free-png-hq.png" alt="" />
        </div>
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
          <ul tabIndex={0} className=" mt-3 z-[1]  shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            <li>
              <h1>name</h1>
            </li>
            <li><h1>email</h1></li>
            <Link to={"/dashboard"}><li>Dashboard</li></Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
