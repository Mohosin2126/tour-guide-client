import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ActivitiesCard from "./ActivitiesCard";
import useGuide from "../../Hook/useGuide";
import ActivitiesGuide from "./ActivitiesGuide";
import BookingForm from "./BookingForm";


const PackageDetails = () => {
  const [packages, setPackages] = useState({});
  const allPackages = useLoaderData();
  const { id } = useParams();
  const[ guides]=useGuide([])

console.log(guides)


  useEffect(() => {
    
    const findPackage = allPackages?.find((packageItem) => packageItem._id == id);
    
    setPackages(findPackage || {});
  }, [allPackages, id]);
 console.log(packages.activities)


  return (
    <div className="mt-52">
    <div className="ml-10">
       <div>
       <h1 className="text-start  font-serif text-xl font-bold"> Tour Section</h1>
        <div className="w-52 bg-red-500 h-1 border rounded-xl">
       </div>
        <div className="mt-5">
       <h1>{packages.title}</h1>
      <h1>{packages.location}</h1>
      <h2>{packages.price}</h2>
     </div>
        </div>
        <div>
        <h1 className="text-start  font-serif text-xl font-bold"> Tour Plan</h1>
        <div className="w-52 bg-red-500 h-1 border rounded-xl">
       </div>
        </div>
    </div>
<div>
  {
    packages?.activities?.map((activity )=><ActivitiesCard key={activity.title} activity={activity}></ActivitiesCard>)
  }
</div>
    <div className="ml-10 mt-10">
    <h1 className="text-start  font-serif text-xl font-bold"> Tour Guide</h1>
        <div className="w-52 bg-red-500 h-1 border rounded-xl">
       </div>
     <div className="grid grid-cols-2 gap-5">
     {
        guides.map(guide=><ActivitiesGuide guide={guide} key={guide._id}></ActivitiesGuide>)
      }
     </div>
    </div>
    <div className="ml-10 mt-10">
     <div>
        <h1 className="text-start  font-serif text-xl font-bold"> Booking Form</h1>
        <div className="w-52 bg-red-500 h-1 border rounded-xl">
       </div>
     </div>
      <BookingForm packages={packages} key={packages._id}></BookingForm>
    </div>
    </div>
  );
};

export default PackageDetails;
