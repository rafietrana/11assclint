import { FaSearch } from "react-icons/fa";
import CountUp from "react-countup";



const Sliders = () => {
  return (
    <div
      className="min-h-[500px] bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/zTMY3sLC/Work-Jone-website-slider-background-image.png')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-[#0529]/95"></div>

      {/* CONTENT */}
      <div className="relative flex flex-col justify-center items-center gap-6 min-h-[500px] text-white">
        <h1 className="font-bold text-3xl md:text-4xl text-center">
          The #1 <span className="text-green-500">Job Board for</span> <br />
          Hiring or Find your next job
        </h1>

        <p className="w-10/12 md:w-8/12 text-center text-gray-200">
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </p>

        {/* SEARCH BAR */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-10/12 md:w-6/12">
          <input
            type="text"
            placeholder="Search jobs, keywords..."
            className="flex-1 px-4 py-3 text-black bg-white outline-none"
          />
          <button className="bg-green-500 px-5 py-3 mr-2 text-white hover:bg-green-600">
            <FaSearch />
          </button>
        </div>
        {/* COUNTER SECTION */}
        {/* COUNTER SECTION */}
<div className=" grid-cols-2 hidden md:grid md:grid-cols-4 gap-6 mt-10 w-11/12 md:w-9/12 text-center">
  <div className="   rounded-lg  ">
     <h2 className="text-3xl font-bold ">
      <CountUp start={0} end={30} duration={2.5} separator="," />+
    </h2>
    <p className="text-gray-200 mt-1 opacity-50">Job Seekers</p>
  </div>

  <div className="    rounded-lg  ">
     <h2 className="text-3xl font-bold ">
      <CountUp start={0} end={120} duration={2.5} separator="," />k+
    </h2>
    <p className="text-gray-200 mt-1 opacity-50">Daily Applications</p>
  </div>

  <div className="    rounded-lg  ">
     <h2 className="text-3xl font-bold ">
      <CountUp start={0} end={25} duration={2.5} separator="," />+
    </h2>
    <p className="text-gray-200 mt-1 opacity-50">Companies</p>
  </div>

  <div className="  rounded-lg  ">
       <h2 className="text-3xl font-bold ">
      <CountUp start={0} end={98} duration={2.5} separator="," />%
    </h2>
    <p className="text-gray-200 opacity-50 mt-1">Success Rate</p>
  </div>
</div>


  
      </div>
    </div>
  );
};

export default Sliders;
