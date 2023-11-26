import { useEffect, useState } from "react";

const useCategory = () => {
    const[categories,setCategories]=useState([])
    
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/category")
        .then(res=>res.json())
        .then(data=>{
           
            setCategories(data)
            setLoading(false)
        })
    },[])
    return [categories,loading]
};

export default useCategory;