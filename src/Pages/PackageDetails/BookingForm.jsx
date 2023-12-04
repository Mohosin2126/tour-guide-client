import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hook/useAxiosSecure";
import Swal from "sweetalert2";
import useGuide from "../../Hook/useGuide";

const BookingForm = ({packages}) => {
    const {user}=useContext(AuthContext)
    const navigate=useNavigate()
    const location = useLocation();
    const axiosSecure=useAxiosSecure()
const [guides]=useGuide()
const handleBookPackage = (e) => {
    e.preventDefault();
    const form = e.target;
    const touristName = form.touristname.value;
    const touristEmail = user?.email;
    const touristImage = form.touristimage.value;
    const price = form.price.value;
    const tourDate = form.date.value;
    const tourGuide = form.tourguide.value;
  const packagename=form.packagename.value
    if (user && user.email) {
      // send cart item to the database
      const bookingItem = {
        email: user.email,
        touristName,
        touristEmail,
        touristImage,
        price,
        tourDate,
        tourGuide,
        title: packages.title,
        location: packages.location,
        packagename,
        status: "In Review"
      };
  
      Swal.fire({
        title: "Are you sure?",
        text: "You Want To Book ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Book It !"
      }).then((result) => {
        if (result.isConfirmed) {
          axiosSecure.post("/bookings", bookingItem).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                position: 'top',
                icon: 'success',
                title: "Added to Your Booking List",
                html: (
                  <button>
                    <Link to="/dashboard/mybookings">
                      <li>Your Bookings</li>
                    </Link>
                  </button>
                ),
                showConfirmButton: false,
                timer: 4500,
              });
              
                  
            }
          });
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In",
        text: "Please login ",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate('/login', { state: { from: location } });
        }
      });
    }
  };
  
    return (
        <div className="mt-5">
           <form onSubmit={handleBookPackage} >

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text text-lg ">Tourist Name</span>
      </label>
      <label className="input-group">
          <input  type="text" name="touristname" required placeholder="Tourist Name" defaultValue={user?.name}  className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text text-lg ">Tourist Email</span>
      </label>
      <label className="input-group">
          <input type="text" name="touristemail"  defaultValue={user?.email}  placeholder="Tourist Email" className="input input-bordered w-full" />
      </label>
  </div>
</div>

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="text-lg  label-text">Tourist Image</span>
      </label>
      <label className="input-group">
          <input type="text" name="touristimage"  required placeholder="Tourist Image"  className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text text-lg ">Price</span>
      </label>
      <label className="input-group">
          <input  type="text" name="price" placeholder="price"  defaultValue={packages.price}  className="input input-bordered w-full" />
      </label>
  </div>
</div>

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text text-lg ">Tour  Date</span>
      </label>
      <label className="input-group">
          <input  type="date" required name="date" placeholder="Tour Date" className="input input-bordered w-full" />
      </label>
  </div>
  <div className="md:flex mb-8">
          <div className="form-control md:w-full ml-4">
            <label className="label">
              <span className="label-text text-lg ">Tour Guide</span>
            </label>
            <select
            required
              defaultValue="default"
              name="tourguide"
              className="select select-bordered w-full"
            >
               {
                    guides.map(guide=><option key={guide._id} value={guide.contactDetails?.email}>{guide.name}</option>)
                }
            </select>
          </div>
        </div>
</div>
<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text text-lg ">Package Name</span>
      </label>
      <label className="input-group">
          <input  type="text" name="packagename" required placeholder="Package Name"   className="input input-bordered w-full" />
      </label>
  </div>
 
</div>
<input  type="submit" value="Book Now" className="btn-block mb-10 bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border  hover:border-transparent rounded" />

</form> 
        </div>
    );
};

export default BookingForm;