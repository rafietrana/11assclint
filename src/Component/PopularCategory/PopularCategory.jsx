import { useRef } from "react";

const popularCategoryData = [
  {
    name: "Marketing & Sales",
    subtitle: "87 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img-big3.png",
  },
  {
    name: "Human Resources",
    subtitle: "45 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img-big2.png",
  },
  {
    name: "Development & IT",
    subtitle: "120 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/blog/img-big1.png",
  },
  {
    name: "Design & Creative",
    subtitle: "60 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img-big3.png",
  },
  {
    name: "Finance & Accounting",
    subtitle: "50 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img-big2.png",
  },
  {
    name: "Customer Support",
    subtitle: "35 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/blog/img-big1.png",
  },
  {
    name: "Healthcare & Medical",
    subtitle: "40 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img-big2.png",
  },
  {
    name: "Education & Training",
    subtitle: "25 Jobs Available",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img-big2.png",
  },
];

const PopularCategory = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-11/12 mx-auto my-40 relative">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold">Popular Category</h1>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          Search and connect with the right candidates faster.
        </p>
      </div>

      {/* Arrow buttons at top-right */}
      <div className="absolute top-0 right-0 flex gap-2 z-10">
        <button
          onClick={() => scroll("left")}
          className="  bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8592;
        </button>
        <button
          onClick={() => scroll("right")}
          className=" bg-opacity-50 p-2 rounded-full hover:bg-opacity-70 transition"
        >
          &#8594;
        </button>
      </div>

      {/* Category cards container */}
      <div
        ref={scrollRef}
        className="flex gap-5 py-4 overflow-x-auto scrollbar-none"
        style={{
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE 10+
        }}
      >
        {popularCategoryData.map((category, idx) => (
          <div
            key={idx}
            className="min-w-[300px] md:min-w-[300px] h-[400px] rounded-xl relative flex-shrink-0 cursor-pointer hover:scale-105 transition-transform shadow-lg"
            style={{
              backgroundImage: `url(${category.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
       {/* Top-to-Bottom Gradient Overlay */}
            <div className="absolute inset-0 rounded-xl flex flex-col justify-end p-4 bg-gradient-to-b from-black/0 via-black/50 to-black/90">
              <h2 className="text-white text-lg font-semibold">{category.name}</h2>
              <p className="text-gray-200 text-sm">{category.subtitle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Extra CSS to hide scrollbar in Chrome/Safari */}
      <style>
        {`
          .scrollbar-none::-webkit-scrollbar {
            display: none;
          }
        `}
      </style>
    </div>
  );
};

export default PopularCategory;
