import "swiper/css";
import { Navigation } from "swiper/modules";
import { SwiperSlide, Swiper } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/navigation";

import one from "../assets/one.jpg";
import two from "../assets/two.jpg";
import tree from "../assets/tree.jpg";
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
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        className="mySwiper w-full  h-[800px] mx-auto -z-20  "
      >
        <SwiperSlide
          className="relative  bg-cover bg-center "
          style={{ backgroundImage: `url(${one})` }}
        >
          <div>
            <div className=" absolute  top-[30%] left-24 ">
              <div className="space-y-7">
                <h1 className="lg:text-6xl font-bold text-white lg:w-5/12 w-11/12 text-xl ">
                  Find Your Perfect{" "}
                  <span className="text-[#22BE0D]">{text}</span> Quick and
                  Easy
                </h1>
                <p className="md:w-5/12 w-11/12 text-white ">
                  Discover your next career move with our cutting-edge job
                  seeking plathtmlForm! Unlock endless opportunities, tailored
                  just htmlFor you. Connect with top employers, browse curated
                  listings, and land your dream job faster than ever behtmlFore.
                  Join the revolution in job hunting today
                </p>
                <div className="flex">
                  <input
                    type="text"
                    className="bg-white px-2 py-3  w-4/12"
                  />
                  <button className="text-white px-5 py-3 bg-green-500 ">
                    <GrSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative  bg-cover bg-center "
          style={{ backgroundImage: `url(${two})` }}
        >
          <div>
            <div className=" absolute  top-[30%] left-24 ">
              <div className="space-y-7">
                <h1 className="lg:text-6xl font-bold text-white lg:w-5/12 w-11/12 text-xl ">
                  Find Your Perfect{" "}
                  <span className="text-[#22BE0D]">{text}</span> Quick and
                  Easy
                </h1>
                <p className="md:w-5/12 w-11/12 text-white ">
                  Discover your next career move with our cutting-edge job
                  seeking plathtmlForm! Unlock endless opportunities, tailored
                  just htmlFor you. Connect with top employers, browse curated
                  listings, and land your dream job faster than ever behtmlFore.
                  Join the revolution in job hunting today
                </p>
                <div className="flex">
                  <input
                    type="text"
                    className="bg-white px-2 py-3  w-4/12"
                  />
                  <button className="text-white px-5 py-3 bg-green-500 ">
                    <GrSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          className="relative  bg-cover bg-center "
          style={{ backgroundImage: `url(${tree})` }}
        >
          <div>
            <div className=" absolute  top-[30%] left-24 ">
              <div className="space-y-7">
                <h1 className="lg:text-6xl font-bold text-white lg:w-5/12 w-11/12 text-xl ">
                  Find Your Perfect{" "}
                  <span className="text-[#22BE0D]">{text}</span> Quick and
                  Easy
                </h1>
                <p className="md:w-5/12 w-11/12 text-white ">
                  Discover your next career move with our cutting-edge job
                  seeking plathtmlForm! Unlock endless opportunities, tailored
                  just htmlFor you. Connect with top employers, browse curated
                  listings, and land your dream job faster than ever behtmlFore.
                  Join the revolution in job hunting today
                </p>
                <div className="flex">
                  <input
                    type="text"
                    className="bg-white px-2 py-3  w-4/12"
                  />
                  <button className="text-white px-5 py-3 bg-green-500 ">
                    <GrSearch />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Sliders;
