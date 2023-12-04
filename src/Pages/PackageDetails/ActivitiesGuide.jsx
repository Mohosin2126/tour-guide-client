import { Link } from "react-router-dom";

const ActivitiesGuide = ({ guide }) => {
    const {_id,name,profilePicture,contactDetails}=guide
    return (
        <div>
            <Link to={`/guidedetails/${_id}`}>
            <div className="w-full  p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
        <h5 className="text-xl font-bold font-serif leading-none text-gray-900 dark:text-white">{name}</h5>
        <a href="#" className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
       Details
        </a>
   </div>
                <div className="flow-root">
                    <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
                        <li className="py-3 sm:py-4">
                            <div className="flex items-center">
                                <div className="flex-shrink-0">
                                    <img className=" w-14 h-14 rounded-full" src={profilePicture} alt="Neil image" />
                                </div>
                                <div className="flex-1 min-w-0 ms-4">
                                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                                    {contactDetails?.email}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                    {contactDetails?.phone}
                                    </p>
                                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                                        {contactDetails?.location}
                                    </p>
                                </div>
                                
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            </Link>
           
        </div>
    );
};

export default ActivitiesGuide;
