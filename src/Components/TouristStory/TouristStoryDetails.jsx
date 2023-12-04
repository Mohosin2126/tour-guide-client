import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { useLoaderData, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
  
} from "react-share";
import { AuthContext } from "../../Pages/AuthProvider/AuthProvider";
const TouristStoryDetails = () => {
    // const {_id,name,age,nationality,gender,trip_destination,trip_activities,accommodation,experience_description,image_url,place_image_url,short_description,trip_title}=story
    const [details, setDetails] = useState({});
  const allStories = useLoaderData();
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
 

  const handleFacebook = () => {
    if (!user || !user.email) {
      // User is not logged in, redirect to login page
   
      navigate('/login', { state: { from: location } });
      return null; // Prevent rendering the rest of the component
    }
  };

  const handleWhatsApp = () => {
    if (!user || !user.email) {
      // User is not logged in, redirect to login page
 
      navigate('/login', { state: { from: location } });
      return null; // Prevent rendering the rest of the component
    }
  };

  const shareUrl = "https://www.facebook.com/";
  const whatsAppUrl = "https://web.whatsapp.com/";

  useEffect(() => {
    const findStories = allStories?.find((story) => story._id == id);
    setDetails(findStories || {});
  }, [allStories, id]);

  

    return (
        <div className="mt-52 mb-20">
             <div className="relative flex bg-clip-border rounded-xl bg-white text-gray-700 shadow-md   flex-row">
      <div className="relative w-2/5 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border rounded-xl shrink-0">
        <img
          src={details.place_image_url}
          alt="card-image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6">
      <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        {details.trip_title}
        </h4>
        <h6 className="block mb-4 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-gray-700 uppercase">
        {details.trip_destination}
        </h6>
        
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        Experience: {details.experience_description}
        </p>
        <p className="block mb-8 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        Activities: {details.trip_activities}
        </p>
        <div className="flex justify-between">
        <figcaption className="flex items-center justify-start">
            <img className="rounded-full w-20 h-20" src={details.image_url} alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
            <div className="text-sm text-gray-500 dark:text-gray-400">{details.name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{details.nationality}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{details.age}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{details.gender}</div>
            </div>

          </figcaption>
        <div className="flex gap-5 justify-around">
     <button onClick={handleFacebook} >
     <FacebookShareButton
          url={shareUrl}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={42} round />
          <p>Facebook</p>
        </FacebookShareButton>
     </button>
      <button onClick={handleWhatsApp} >
      <WhatsappShareButton
          url={whatsAppUrl}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={42} round />
          <p>WhatsApp</p>
        </WhatsappShareButton>
      </button>
        </div>
</div>
        
      </div>
    </div>
        </div>
    );
};

export default TouristStoryDetails;