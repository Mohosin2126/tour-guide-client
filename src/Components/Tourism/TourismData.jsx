import usePlace from "../../Hook/usePlace";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import TourPackages from "./TourPackages";
import useGuide from "../../Hook/useGuide";
import TourGuide from "./TourGuide";
import { Link } from "react-router-dom";
import OverView from "./OverView";



const TourismData = () => {
  const [places] = usePlace([]); 
  const [guides]=useGuide([])

  
  return (
   <div>
     <div className="text-center mt-6">
      <Tabs>
        <TabList>
          <Tab ><h1 className="text-lg font-serif ">Overview</h1></Tab>
          <Tab> <h1 className="text-lg font-serif ">Our Packages</h1></Tab>
          <Tab><h1 className="text-lg font-serif ">Meet Our Tour Guides</h1></Tab>
        </TabList>
        <TabPanel>
        <div className="card md:flex  lg:card-side bg-base-100 shadow-xl">
  <div className="hidden  md:block"><OverView></OverView></div>
  <div className="card-body  md:block">
    <h2 className="card-title">Dhaka Delights</h2>
    <p className="text-start mt-3 font-mono">
 {` Dhaka, the bustling capital of Bangladesh, is a city that captivates the taste buds with its diverse and delectable culinary offerings. From the lively streets of Old Dhaka to the fine dining establishments, the city is a paradise for food enthusiasts. Ahsan Manzil, a historical gem, is surrounded by eateries serving iconic Bangladeshi dishes, creating a perfect fusion of history and gastronomy. Bengali street food takes center stage, with aromatic and flavorful delicacies tempting passersby. Dhaka's biryanis, infused with local spices, showcase the city's unique culinary identity. The teeming street markets, such as Kawran Bazar, offer an array of local snacks and sweets, providing a sensory overload of tastes and aromas. Whether savoring traditional sweets, indulging in riverfront dining with a view of the Buriganga River, or exploring the fusion restaurants, Dhaka's culinary landscape is a journey into the heart of Bangladesh's rich and diverse food culture...`}
</p>

    <div className="card-actions justify-end">
    <button className=" mt-5  bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
Explore
</button>
    </div>
  </div>
</div>
        </TabPanel>
        <TabPanel>
       <div>
       <div className="lg:flex flex-cols justify-evenly mt-5 ">
        {
            places?.slice(0, 3).map(place => <TourPackages place={place}  key={place.id} />)
          }
       
        </div>
       <Link to={"/allpackages"}> <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
All Packages
</button></Link>
       </div>
        </TabPanel>

        <TabPanel>
          <div className="flex flex-wrap justify-center gap-3">
            {
              guides?.map(guide=><TourGuide guide={guide} key={guide.id}></TourGuide>)
            }
          </div>
        </TabPanel>
      </Tabs>
    </div>
   </div>
  );
};

export default TourismData;
