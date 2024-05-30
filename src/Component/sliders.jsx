import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/navigation";

import one from "../assets/one.jpg";
// import two from "../assets/two.jpg";
// import tree from "../assets/tree.jpg";
import { GrSearch } from "react-icons/gr";
import { useTypewriter } from "react-simple-typewriter";

const Sliders = () => {
  const [text] = useTypewriter({
    words: ["OnSite", "Remote", "Hybrid"],
    loop: 0,
  });

  return (
    <div className="">
      <Swiper
        pagination={{
          clickable: true,
        }}
        loop={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper w-full  h-[400px]  mx-auto -z-20 bg-gray-100  "
      >
        <SwiperSlide
          className="relative  bg-cover bg-center  "
          // style={{ backgroundImage: `url(${one})` }}
        >
          <div>
            <div className=" absolute  top-[20%] left-[10%]  ">
              <div className="space-y-7 ">
                <h1 className="lg:text-6xl font-bold text-white lg:w-5/12 w-11/12 text-xl ">
 
                  <span className="text-[#22BE0D]">{text}</span><span className="text-black"> Quick and
                  Easy</span>
                </h1>
                <p className="md:w-5/12 w-11/12 text-black  ">
                  Discover your next career move with our cutting-edge job
                  seeking plathtmlForm! Unlock endless opportunities, tailored
                  just htmlFor you. Connect with top employers, browse curated
                  listings, and land your dream job faster than ever behtmlFore.
                  Join the revolution in job hunting today
                </p>
  
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative  bg-cover bg-center "
          // style={{ backgroundImage: `url(${two})` }}
        >
          <div>
            <div className=" absolute  top-[20%] left-[10%] ">
              <div className="space-y-7">
                <h1 className="lg:text-6xl font-bold text-white lg:w-5/12 w-11/12 text-xl ">
 
                  <span className="text-[#22BE0D]">{text}</span><span className="text-black">
                  Quick and
                  Easy
                    </span> 
                </h1>
                <p className="md:w-5/12 w-11/12 text-black ">
                  Discover your next career move with our cutting-edge job
                  seeking plathtmlForm! Unlock endless opportunities, tailored
                  just htmlFor you. Connect with top employers, browse curated
                  listings, and land your dream job faster than ever behtmlFore.
                  Join the revolution in job hunting today
                </p>
 
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative  bg-cover bg-center "
          // style={{ backgroundImage: `url(${tree})` }}
        >
          <div>
            <div className=" absolute   top-[20%] left-[10%]">
              <div className="space-y-7">
                <h1 className="lg:text-6xl font-bold text-white lg:w-5/12 w-11/12 text-xl ">
 
                  <span className="text-[#22BE0D]">{text}</span> <span className="text-black"> Quick and
                  Easy</span>
                </h1>
                <p className="md:w-5/12 w-11/12 text-black ">
                  Discover your next career move with our cutting-edge job
                  seeking plathtmlForm! Unlock endless opportunities, tailored
                  just htmlFor you. Connect with top employers, browse curated
                  listings, and land your dream job faster than ever behtmlFore.
                  Join the revolution in job hunting today
                </p>
 
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
