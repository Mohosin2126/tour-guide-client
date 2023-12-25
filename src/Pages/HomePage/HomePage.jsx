import Banner from "../../Components/Banner/Banner";
import ContactUs from "../../Components/ContactUs/ContactUs";
import TourType from "../../Components/TourType/TourType";
import Tourism from "../../Components/Tourism/Tourism";
import TouristStory from "../../Components/TouristStory/TouristStory";

const HomePage = () => {
   

    return (
        <div>
           <Banner></Banner>
           <Tourism></Tourism>
           <TourType></TourType>
        <TouristStory></TouristStory>
        <ContactUs></ContactUs>
        </div>
    );
};

export default HomePage;