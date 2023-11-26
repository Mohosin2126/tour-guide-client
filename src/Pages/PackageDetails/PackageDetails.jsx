import  { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

const PackageDetails = () => {
    const [packages, setPackages] = useState([]);
    const allPackages = useLoaderData();
    const { id } = useParams();

    useEffect(() => {
        const findPackage = allPackages?.find((packageItem) => packageItem._id == id);
        setPackages(findPackage);
    }, [allPackages, id]);
console.log(packages)
    return (
        <div>
           
        </div>
    );
};

export default PackageDetails;
