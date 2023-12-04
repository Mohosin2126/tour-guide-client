
const ActivitiesCard = ({activity}) => {
   const{title,description,schedule}=activity
    return (
   <div className=" mt-5">
    <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="text-green-500 md:text-start  text-center collapse-title text-xl font-medium">
   {title}
  </div>
  <div className="collapse-content space-y-2"> 
    <p className="text-xl font-serif">{description}</p>
    <p className="text-base font-medium text-red-800">{schedule}</p>
  </div>
</div>
   </div>
    );
};

export default ActivitiesCard;