import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ActivitiesCard from "./ActivitiesCard";
import useGuide from "../../Hook/useGuide";
import ActivitiesGuide from "./ActivitiesGuide";
import BookingForm from "./BookingForm";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
const PackageDetails = () => {
  const [packages, setPackages] = useState({});
  const allPackages = useLoaderData();
  const { id } = useParams();
  const[ guides]=useGuide([])




  useEffect(() => {
    
    const findPackage = allPackages?.find((packageItem) => packageItem._id == id);
    
    setPackages(findPackage || {});
  }, [allPackages, id]);



  return (
    <div >
     <div>
     < Carousel>
     {packages?.gallery?.map((item) =><img className=" w-full"  src={item.url} key={item.id}></img>)}

</Carousel>
        

</div>

    <div className="mt-10">
       <div>
       <h1 className="md:text-start  text-center   text-2xl font-serif font-bold"> Tour Section</h1>
        <div className="w-52 mx-auto md:mx-0 bg-red-500 h-1 border rounded-xl">
       </div>
        <div className="mt-5 space-y-2">
       <h1 className="text-lg md:text-start  text-center font-serif">{packages.title}</h1 >
      <h1 className="text-base md:text-start  text-center font-normal">{packages.location}</h1>
      <h2 className="font-medium md:text-start  text-center text-lg text-red-800">{packages.price}</h2>
     </div>
        </div>
        <div className="mt-10">
        <h1 className="md:text-start  text-center    text-2xl font-serif font-bold"> Tour Plan</h1>
        <div className="w-52 mx-auto md:mx-0 bg-red-500 h-1 border rounded-xl">
       </div>
        </div>
    </div>
<div>
  {
    packages?.activities?.map((activity )=><ActivitiesCard key={activity.title} activity={activity}></ActivitiesCard>)
  }
</div>
    <div className=" mt-10">
    <h1 className="md:text-start  text-center  text-2xl font-serif font-semibold"> Tour Guide</h1>
        <div className="w-52 mx-auto md:mx-0  bg-red-500 h-1 border rounded-xl">
       </div>
     <div className=" mt-8 grid md:grid-cols-2 gap-5">
     {  
        guides.map(guide=><ActivitiesGuide guide={guide} key={guide._id}></ActivitiesGuide>)
      }
     </div>
    </div>
    <div className="  mt-10">
     <div>
        <h1 className="md:text-start  text-center text-2xl font-serif font-semibold"> Booking Form</h1>
        <div className="w-52 mx-auto md:mx-0 bg-red-500 h-1 border rounded-xl">
       </div>
     </div>
      <BookingForm packages={packages} key={packages._id}></BookingForm>
    </div>
    </div>
  );
};

export default PackageDetails;
