import { useEffect, useState } from "react";


const useGuide = () => {
    const[guides,setGuides]=useState([])
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("https://y-gold-two.vercel.app/guide")
        .then(res=>res.json())
        .then(data=>{
           
            setGuides(data)
            setLoading(false)
        })
    },[])
    return [guides,loading]
};

export default useGuide;