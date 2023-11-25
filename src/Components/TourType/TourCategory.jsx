import { Link } from "react-router-dom";


const TourCategory = ({tourcategory}) => {
    const{category,image}=tourcategory
    return (
        <div>
            
           <Link>

<div className="card md:w-96 h-56 bg-base-100 shadow-xl image-full">
<figure><img className="w-full p-1" src={image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{category}</h2>
</div>
</div>

</Link>
        </div>
    );
};

export default TourCategory;