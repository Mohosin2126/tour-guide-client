import { Link } from "react-router-dom";


const AllStoryCard = ({story}) => {
    const {_id,name,nationality,trip_destination,image_url,short_description,trip_title}=story
    return (
      <Link to={`/story/${_id}`}>
      <div>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{trip_title}</h3>
            <h3 className="text-base font-base mt-2 text-gray-900 dark:text-white">{trip_destination}</h3>
            <p className="my-4">{short_description}</p>
          </blockquote>
          <figcaption className="flex items-center justify-center">
            <img className="rounded-full w-20 h-20" src={image_url} alt="profile picture" />
            <div className="space-y-0.5 font-medium dark:text-white text-left rtl:text-right ms-3">
              <div>{name}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">{nationality}</div>
            </div>
          </figcaption>
        </figure>
      </div></Link>
    );
};

export default AllStoryCard;