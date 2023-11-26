import useCategory from "../../Hook/useCategory";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Link } from "react-router-dom";


const TourType = () => {
    const [categories] = useCategory([])
    console.log(categories)
    return (
        <div className="mt-10">
            <h1 className="font-serif text-center  font-bold text-3xl">Tour Type</h1>
            <p className="text-center font-semibold">Everything You Want Is Here</p>
            <div  className="mt-10">
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 1000,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {
                        categories.map(tourcategory => <SwiperSlide key={tourcategory.id}>
                            <Link>
                               <div className="flex justify-center gap-5">
                              
           <div className="card md:w-1/2 h-56 bg-base-300 shadow-xl image-full">
  <figure><img className="w-full p-1" src={tourcategory.image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{tourcategory.category}</h2>
  </div>
</div>

                               </div>
                            </Link>

                        </SwiperSlide>
                          ) }
                </Swiper>

            </div>
        </div>
    );
};

export default TourType;