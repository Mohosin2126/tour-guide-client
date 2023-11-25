import usePlace from "../../Hook/usePlace";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TourPackages from "./TourPackages";

const TourismData = () => {
  const [places] = usePlace([]);  // Assuming usePlace returns an array of places with a structure similar to travel packages
  console.log(places);

  return (
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
        <div className="lg:flex flex-cols justify-evenly mt-5 ">
        {
            places.slice(0, 3).map(place => <TourPackages place={place} key={place.id} />)
          }
        </div>
        </TabPanel>

        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TourismData;
