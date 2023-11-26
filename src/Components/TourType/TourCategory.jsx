import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

const TourCategory = ({tourcategory}) => {
    const{category,image}=tourcategory
    return (
        <div>
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >

{

}

        <SwiperSlide>
          <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
        </SwiperSlide>
      </Swiper>
           <Link>

<div className="card md:w-96 h-56 bg-base-100 shadow-xl image-full">
<figure><img className="w-full p-1" src={image} alt="Shoes" /></figure>
<div className="card-body">
<h2 className="card-title">{category}</h2>
</div>
</div>

</Link>
        </div>
    );
};

export default TourCategory;