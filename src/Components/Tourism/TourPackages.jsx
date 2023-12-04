

import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";

import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";

const TourPackages = ({place}) => {
const {user}=useContext(AuthContext)
  const navigate=useNavigate()
  const location = useLocation();
  const axiosSecure=useAxiosSecure()

    const{_id,image,category,title,price,}=place
    
    const handleAddToWishlist=(place)=>{
      if(user && user.email){
          //  send cart item to the database 
      
  const wishlistItem={
     categoryId :_id,
      email:user.email,
      title,
      image,
      price
  }
  
  axiosSecure.post("/wishlist",wishlistItem)
  .then(res=>{
      if (res.data.insertedId) {
        
        Swal.fire({
          position: "top",
          icon: "success",
          title: "Added To Wishlist",
          showConfirmButton: false,
          timer: 1500
        });
      }
  })
  
  
  
      }
      else{
          Swal.fire({
            position:"top",
              title: "You are not Logged In",
              text: "Please login to add to the cart?",
              icon: "warning",
              showCancelButton: true,
              confirmButtonColor: "#3085d6",
              cancelButtonColor: "#d33",
              confirmButtonText: "Yes, login!"
          }).then((result) => {
              if (result.isConfirmed) {
                  //   send the user to the login page
                  navigate('/login', { state: { from: location } })
              }
          });
      }
  }


    return (
       <div>
        <div className="relative flex w-96 h-[500px] mx-auto flex-col rounded-xl  bg-clip-border light: dark:bg-gray-800  text-gray-700 shadow-lg">
  <div className="relative  overflow-hidden text-white shadow-lg rounded-lg bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
    <img className="h-48 w-full"
      src={image}
      alt="ui/ux review check"
    />
    <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
    <button onClick={()=>handleAddToWishlist(place)}   
      className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-dark="true"
    >
      <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="w-6 h-6"
        >
          <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
        </svg>
      </span>
    </button>
  </div>
  <div className="p-6">
    <div className="flex items-center justify-between mb-3">
      <h5 className="block font-sans text-xl antialiased font-medium text-white leading-snug tracking-normal text-blue-gray-900">
    {title}
      </h5>
      <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-white antialiased">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="-mt-0.5 h-5 w-5 text-yellow-700"
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          ></path>
        </svg>
        5.0
      </p>
    </div>
    <p className="text-start font-serif font-lg bold text-white ">
    {category}
    </p>
   <p className="text-start mt-2 font-semibold text-red-800">{price}</p>
  </div>
  <div className="p-6 pt-3">
   <Link to={`/packagedetails/${_id}`}>
         <button className="bg-transparent block w-full hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
View Package
</button>
</Link>
  </div>
</div>
       </div>
    );
};

export default TourPackages;
