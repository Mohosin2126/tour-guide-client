import { useEffect, useState } from "react";

const useCategory = () => {
    const[categories,setCategories]=useState([])
    
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("https://y-gold-two.vercel.app/category")
        .then(res=>res.json())
        .then(data=>{
           
            setCategories(data)
            setLoading(false)
        })
    },[])
    return [categories,loading]
};

export default useCategory;