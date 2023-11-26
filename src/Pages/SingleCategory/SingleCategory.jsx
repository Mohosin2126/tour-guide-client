import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

import CategoryData from "./CategoryData";
const SingleCategory = () => {
    const allCategories=useLoaderData()
    const {category}=useParams()
    const [allCategoryType,setallCategoryType]=useState([])
    

    
    
     useEffect(()=>{
    
      const categories=allCategories.filter(items=>items.category == category)
      setallCategoryType(categories)
     },[])
     console.log(allCategoryType)
    


    return (
        <div>   
<div className="flex flex-wrap justify-center">
{
    allCategoryType.map(allcategory=><CategoryData allcategory={allcategory} key={allcategory._id}></CategoryData>)
}

</div>

        </div>
    );
};

export default SingleCategory;