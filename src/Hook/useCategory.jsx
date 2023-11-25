import { useEffect, useState } from "react";

const useCategory = () => {
    const[categories,setCategories]=useState([])
    
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("../../public/category.json")
        .then(res=>res.json())
        .then(data=>{
           
            setCategories(data)
            setLoading(false)
        })
    },[])
    return [categories,loading]
};

export default useCategory;