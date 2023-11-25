import { useEffect, useState } from "react";


const useGuide = () => {
    const[guides,setGuides]=useState([])
    console.log(guides)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch("../../public/guide.json")
        .then(res=>res.json())
        .then(data=>{
           
            setGuides(data)
            setLoading(false)
        })
    },[])
    return [guides,loading]
};

export default useGuide;