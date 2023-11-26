import { useEffect, useState } from "react";


const useGuide = () => {
    const[guides,setGuides]=useState([])
    console.log(guides)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("http://localhost:5000/guide")
        .then(res=>res.json())
        .then(data=>{
           
            setGuides(data)
            setLoading(false)
        })
    },[])
    return [guides,loading]
};

export default useGuide;