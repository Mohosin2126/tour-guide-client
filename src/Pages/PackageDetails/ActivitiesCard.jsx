
const ActivitiesCard = ({activity}) => {
   const{title,description,schedule}=activity
    return (
   <div className="ml-10 mt-5">
    <div className="collapse bg-base-200">
  <input type="radio" name="my-accordion-1" /> 
  <div className="collapse-title text-xl font-medium">
   {title}
  </div>
  <div className="collapse-content"> 
    <p>{description}</p>
    <p>{schedule}</p>
  </div>
</div>
   </div>
    );
};

export default ActivitiesCard;