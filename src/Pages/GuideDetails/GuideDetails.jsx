import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const GuideDetails = () => {

    const [guides, setGuides] = useState([]);
    const allGuides = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const findGuide = allGuides ?.find((singleguide) => singleguide._id == id);
        setGuides(findGuide);
    }, [allGuides, id]);
console.log(guides)
    return (
        <div>
            
        </div>
    );
};

export default GuideDetails;