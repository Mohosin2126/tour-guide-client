import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
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
        console.log("Tourist Name:", touristName);
        console.log("Tourist Email:", touristEmail);
        console.log("Tourist Image:", touristImage);
        console.log("Price:", price);
        console.log("Tour Date:", tourDate);
        console.log("Tour Guide:", tourGuide);
 
        if(user && user.email){
            //  send cart item to the database 
    const bookingItem={
        email:user.email,
        touristName ,
        touristEmail,
      touristImage,
      price,
      tourDate,
      tourGuide,
      title:packages.title,
     location: packages.location,
     status:"In Review"
   
    }
    axiosSecure.post("/bookings",bookingItem)
    .then(res=>{
        if (res.data.insertedId) {
          
            
   console.log("data inserted")
        }
    })
    
    
    
        }
        else{
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
                    //   send the user to the login page
                    navigate('/login', { state: { from: location } })
                }
            });
        }



      };
    return (
        <div>
           <form onSubmit={handleBookPackage} >

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Tourist Name</span>
      </label>
      <label className="input-group">
          <input  type="text" name="touristname" required placeholder="Tourist Name" defaultValue={user?.name}  className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">Tourist Email</span>
      </label>
      <label className="input-group">
          <input type="text" name="touristemail"  defaultValue={user?.email}  placeholder="Tourist Email" className="input input-bordered w-full" />
      </label>
  </div>
</div>

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Tourist Image</span>
      </label>
      <label className="input-group">
          <input type="text" name="touristimage"  required placeholder="Tourist Image"  className="input input-bordered w-full" />
      </label>
  </div>
  <div className="form-control md:w-1/2 ml-4">
      <label className="label">
          <span className="label-text">Price</span>
      </label>
      <label className="input-group">
          <input  type="text" name="price" placeholder="price"  defaultValue={packages.price}  className="input input-bordered w-full" />
      </label>
  </div>
</div>

<div className="md:flex mb-8">
  <div className="form-control md:w-1/2">
      <label className="label">
          <span className="label-text">Tour  Date</span>
      </label>
      <label className="input-group">
          <input  type="date" required name="date" placeholder="Tour Date" className="input input-bordered w-full" />
      </label>
  </div>
  <div className="md:flex mb-8">
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Tour Guide</span>
            </label>
            <select
            required
              defaultValue="default"
              name="tourguide"
              className="select select-bordered w-full"
            >


                {
                    guides.map(guide=><option key={guide._id} value={guide.contactDetails.email}>{guide.name}</option>)
                }
            </select>
          </div>
        </div>
</div>
<input type="submit" value="Book Now" className="btn btn-block" />

</form> 
        </div>
    );
};

export default BookingForm;