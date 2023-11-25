import usePlace from "../../Hook/usePlace";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TourPackages from "./TourPackages";
import useGuide from "../../Hook/useGuide";
import TourGuide from "./TourGuide";

const TourismData = () => {
  const [places] = usePlace([]);  // Assuming usePlace returns an array of places with a structure similar to travel packages
  console.log(places);
const [guides]=useGuide([])
console.log(guides)
  return (
   <div>
     <div className="text-center">
      <Tabs>
        <TabList>
          <Tab>Overview</Tab>
          <Tab>Our Packages</Tab>
          <Tab>Meet Our Tour Guides</Tab>
        </TabList>

        <TabPanel>
          <h2>Overview is not ready yet</h2>
        </TabPanel>
        
        <TabPanel>
       <div>
       <div className="lg:flex flex-cols justify-evenly mt-5 ">
        {
            places.slice(0, 3).map(place => <TourPackages place={place} key={place.id} />)
          }
       
        </div>
        <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
All Packages
</button>
       </div>
        </TabPanel>

        <TabPanel>
          <div>
            {
              guides.map(guide=><TourGuide guide={guide} key={guide.id}></TourGuide>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
  
   </div>
  );
};

export default TourismData;
