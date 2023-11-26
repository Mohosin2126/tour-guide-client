import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const CategoryData = ({allcategory}) => {
    const{_id,image,type,title,price,}=allcategory
    return (
        <div>
            <div className="card card-compact h-96 w-96 bg-base-100 shadow-xl">
      <div className="relative">
      <figure><img className="h-48 w-96" src={image}alt="Shoes" /></figure>
     <div className="absolute right-3 top-4" >
     <FaHeart className="w-7 h-7" />
     </div>
      </div>
        <div className="card-body">
       
          <h2 className="card-title font-serif ">{type}</h2>
          <p className="text-start font-sans ">{title}</p>
          <p className="text-start font-sans ">{price}</p>
          <div className="card-actions">
         <Link to={`/packagedetails/${_id}`}>
         <button className="bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
View Package
</button>
</Link>
          </div>
        </div>
      </div>
    
        </div>
    );
};

export default CategoryData;