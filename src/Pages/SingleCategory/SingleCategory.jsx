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

    


    return (
        <div> 
<div className="flex md:mt-52 flex-wrap gap-4 justify-center">
{
    allCategoryType.map(allcategory=><CategoryData allcategory={allcategory} key={allcategory._id}></CategoryData>)
}

</div>

        </div>
    );
};

export default SingleCategory;