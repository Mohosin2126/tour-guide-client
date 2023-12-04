import { useEffect, useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import Swal from "sweetalert2";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Typewriter } from 'react-simple-typewriter'
import useAxiosPublic from "../../Hook/useAxiosPublic";
import Comment from "./Comment";
const GuideDetails = () => {
  const [rating, setRating] = useState(0);
  const [guides, setGuides] = useState([]);
  const allGuides = useLoaderData();
  const { id } = useParams();
const [inputField, setInputField] = useState("");
const {user}=useContext(AuthContext)
const navigate=useNavigate()
const location=useLocation()
const axiosPublic=useAxiosPublic()
 const handleInputField = () => {
    if(user && user.email){
    const userInfo={
      user,
      inputField,
      guides
    }

      axiosPublic.post("/comments",userInfo)
      .then(res=>{
          if (res.data.insertedId) {
            
            Swal.fire({
              position: "top",
              icon: "success",
              title: "Thank You For Your FeedBack",
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
  };

 
  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }
  useEffect(() => {
    const findGuide = allGuides?.find((singleguide) => singleguide._id == id);
    setGuides(findGuide);
  }, [allGuides, id]);

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="md:hero-content md:text-start text-center ">
          <img src={guides?.profilePicture} className="w-1/2 md:mx-0 mx-auto rounded-lg shadow-2xl" />
          <div>
          <h1 className=" text-2xl md:text-5xl font-semibold font-serif "> <Typewriter
  words={[`${guides?.name}`]}
  loop={5}
  cursor
  cursorStyle='_'
  typeSpeed={70}
  deleteSpeed={50}
  delaySpeed={1000}
  onLoopDone={handleDone}
/> </h1>
            <p className="py-3 text-lg font-sans">Email: {guides?.contactDetails?.email} </p>
            <p className="py-3 text-lg font-sans">Phone: {guides?.contactDetails?.phone} </p>
            <p className="py-3 text-lg font-sans">Address: {guides?.contactDetails?.location} </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h1 className="text-center font-bold text-3xl ">Review</h1>
        <div className="w-60 mt-5 mx-auto">
          <Rating style={{ maxWidth: 250 }} value={rating} onChange={setRating} />
        </div>
        <div className="mt-5">
          <form>
            <div className="w-full mb-4 border rounded-lg bg-gray-50">
              <div className="px-4 py-2 bg-white rounded-t-lg">
                <label htmlFor="comment" className="sr-only">Your comment</label>
                <textarea
                  id="comment"
                  rows="4"
                  className="w-full text-gray-50 px-0 text-lg focus:ring-0"
                  placeholder="Write a comment..."
                  value={inputField}
                  onChange={(e) => setInputField(e.target.value)}
                  required
                ></textarea>
              </div>
              <div className="flex items-center justify-between px-3 py-2 border-t">
                <button onClick={handleInputField}
                  type="button"  
                  className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-blue-700 rounded-lg focus:ring-4 focus:ring-blue-200 dark:focus:ring-blue-900 hover:bg-blue-800"
                >
                  Post comment
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="mt-10">
        <Comment></Comment>
      </div>
    </div>
  );
};

export default GuideDetails;
