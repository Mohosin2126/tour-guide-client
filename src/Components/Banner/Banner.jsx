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
        <div>
            <div className="hero h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Y29WPDw/Sajek-Valley-20161205.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div >
    <div data-aos="fade-right">
             <h1 className="text-center font-serif md:font-extrabold md:text-4xl text-2xl text-white">Your Gateway to Extraordinary Travel 
              </h1>
             </div>

             <div data-aos="fade-left">
              <p className="text-center mt-2 md:font-semibold md:text-base text-sm text-stone-300">Welcome to Your Gateway to Extraordinary Travel, where every journey is a carefully curated experience crafted just for you. <br />Embark on a seamless adventure as our expert tour guides lead you through captivating destinations, unveiling hidden gems and cultural treasures</p>
              <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border  hover:border-transparent rounded">
 Continue Reading 
</button>
              </div>
    </div>
  </div>
</div>
        </div>
         
        </SwiperSlide>
        <SwiperSlide>
        <div>
            <div className="hero h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Zm6FDLD/top-ten-tourist-places-to-visit-in-bangladesh-1.webp)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div >
    <div data-aos="fade-right">
             <h1 className="text-center font-serif md:font-extrabold md:text-4xl text-2xl text-white">Your Gateway to Extraordinary Travel 
              </h1>
             </div>

             <div data-aos="fade-left">
              <p className="text-center mt-2 md:font-semibold md:text-base text-sm text-stone-300">Welcome to Your Gateway to Extraordinary Travel, where every journey is a carefully curated experience crafted just for you. <br />Embark on a seamless adventure as our expert tour guides lead you through captivating destinations, unveiling hidden gems and cultural treasures</p>
              <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border  hover:border-transparent rounded">
 Continue Reading 
</button>
              </div>
    </div>
  </div>
</div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
       
        <div>
            <div className="hero h-screen" style={{backgroundImage: 'url(https://i.ibb.co/Sn33hpM/Kuakata-beach.jpg)'}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div >
    <div data-aos="fade-right">
             <h1 className="text-center font-serif md:font-extrabold md:text-4xl text-2xl text-white">Your Gateway to Extraordinary Travel 
              </h1>
             </div>

             <div data-aos="fade-left">
              <p className="text-center mt-2 md:font-semibold md:text-base text-sm text-stone-300">Welcome to Your Gateway to Extraordinary Travel, where every journey is a carefully curated experience crafted just for you. <br />Embark on a seamless adventure as our expert tour guides lead you through captivating destinations, unveiling hidden gems and cultural treasures</p>
              <button className=" mt-5 flex mx-auto bg-transparent hover:bg-red-600 text-red-600 font-serif font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border  hover:border-transparent rounded">
 Continue Reading 
</button>
              </div>
    </div>
  </div>
</div>
        </div>
        </SwiperSlide>
      </Swiper>
      <div >
{/* {autoplayTime} */}
      </div>
     </div>
    </>
  );
};

export default Banner;


