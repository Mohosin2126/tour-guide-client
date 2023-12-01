import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Banner = () => {
  useEffect(() => {
    AOS.init({
        duration:2000,
        delay: 100,
        easing: 'ease-in-out',
    });
}, []);

  const [autoplayTime, setAutoplayTime] = useState(0);

  const onAutoplayTimeLeft = (s, time) => {
    setAutoplayTime(Math.ceil(time / 1000));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setAutoplayTime((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
     <div className="relative">
     <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="h-screen  relative">
            <img className="h-screen w-screen" src="https://i.ibb.co/t4qMpFP/Exploring-Coxs-Bazar.jpg" alt="" />
            <div className="absolute inset-0  mt-48">
             <div data-aos="fade-right">
             <h1 className="text-center font-serif font-extrabold text-4xl text-white">Your Gateway to Extraordinary Travel 
              </h1>
             </div>
              <div data-aos="fade-left">
              <p className="text-center mt-2 font-semibold text-base text-stone-300">Welcome to Your Gateway to Extraordinary Travel, where every journey is a carefully curated experience crafted just for you. <br />Embark on a seamless adventure as our expert tour guides lead you through captivating destinations, unveiling hidden gems and cultural treasures</p>
              <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
 Continue Reading 
</button>
              </div>
            
             <div>
             
             </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-screen  relative">
            <img className="h-screen w-screen" src="https://i.ibb.co/R6MV1MP/4683.jpg" alt="" />
            <div className="absolute inset-0  mt-48">
             <div data-aos="fade-right">
             <h1 className="text-center font-serif font-extrabold text-4xl text-white">Your Gateway to Extraordinary Travel 
              </h1>
             </div>
              <div data-aos="fade-left">
              <p className="text-center mt-2 font-semibold text-base text-stone-300">Welcome to Your Gateway to Extraordinary Travel, where every journey is a carefully curated experience crafted just for you. <br />Embark on a seamless adventure as our expert tour guides lead you through captivating destinations, unveiling hidden gems and cultural treasures</p>
              <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
 Continue Reading 
</button>
              </div>
            
             <div>
             
             </div>
            </div>
          </div>
          {/* <img className="h-screen w-screen" src="https://i.ibb.co/R6MV1MP/4683.jpg" alt="" /> */}
        </SwiperSlide>
        <SwiperSlide>
        <div className="h-screen  relative">
            <img className="h-screen w-screen" src="https://i.ibb.co/JBcp8Qt/714047.jpg" alt="" />
            <div className="absolute inset-0  mt-48">
             <div data-aos="fade-right">
             <h1 className="text-center font-serif font-extrabold text-4xl text-white">Your Gateway to Extraordinary Travel 
              </h1>
             </div>
              <div data-aos="fade-left">
              <p className="text-center mt-2 font-semibold text-base text-stone-300">Welcome to Your Gateway to Extraordinary Travel, where every journey is a carefully curated experience crafted just for you. <br />Embark on a seamless adventure as our expert tour guides lead you through captivating destinations, unveiling hidden gems and cultural treasures</p>
              <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-2 px-4 border  hover:border-transparent rounded">
 Continue Reading 
</button>
              </div>
            
             <div>
             
             </div>
            </div>
          </div>
          {/* <img className="h-screen w-screen" src="https://i.ibb.co/JBcp8Qt/714047.jpg" alt="" /> */}
        </SwiperSlide>
      </Swiper>

      {/* <div className=" block absolute -mt-28"  >
        <BannerExtended></BannerExtended>
      </div> */}
      <div >
{autoplayTime}
      </div>
     </div>
    </>
  );
};

export default Banner;
