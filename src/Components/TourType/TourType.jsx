import useCategory from "../../Hook/useCategory";
import TourCategory from "./TourCategory";

const TourType = () => {
    const [categories]=useCategory([])
    console.log(categories)
    return (
        <div className="mt-10">
            <h1 className="font-serif text-center  font-bold text-3xl">Tour Type</h1>
            <p className="text-center font-semibold">Everything You Want Is Here</p>
            <div className="flex flex-wrap justify-center mt-6 gap-5">
                {
                    categories.map(tourcategory=><TourCategory tourcategory={tourcategory} key={tourcategory.id} ></TourCategory>)
                }
            </div>
        </div>
    );
};

export default TourType;