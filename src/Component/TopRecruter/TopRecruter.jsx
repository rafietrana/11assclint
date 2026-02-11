import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
const topRecruiterData = [
  {
    name: "LinkedIn",
    rating: 5,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
    logo: "https://jobbox-html-frontend.vercel.app/assets/imgs/brands/brand-1.png",  
  },
  {
    name: "Adobe",
    rating: 5,
    reviews: 42,
    location: "New York, US",
    jobs: 17,
    logo: "https://jobbox-html-frontend.vercel.app/assets/imgs/brands/brand-2.png",
  },
  {
    name: "Dailymotion",
    rating: 5,
    reviews: 46,
    location: "New York, US",
    jobs: 65,
    logo: "https://jobbox-html-frontend.vercel.app/assets/imgs/brands/brand-3.png",
  },
  {
    name: "NewSum",
    rating: 5,
    reviews: 68,
    location: "New York, US",
    jobs: 25,
    logo: "https://jobbox-html-frontend.vercel.app/assets/imgs/brands/brand-4.png",
  },
  {
    name: "PowerHome",
    rating: 5,
    reviews: 87,
    location: "New York, US",
    jobs: 34,
    logo: "https://jobbox-html-frontend.vercel.app/assets/imgs/brands/brand-5.png",
  },
];


const TopRecruter = () => {
  return (
    <div className="w-11/12 mx-auto my-16">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold">Top Recruiter</h1>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          Discover your next career move, freelance gig, or internship
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {topRecruiterData.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 bg-white hover:shadow-lg transition"
          >
            {/* Logo */}
            <div className="w-14 h-14 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                 <img src={item?.logo} alt="" />
            </div>


            {/* Name */}
            <h3 className="font-semibold text-lg">{item.name}</h3>

            {/* Rating */}
            <div className="flex items-center gap-1 text-yellow-400 mt-2">
              {[...Array(item.rating)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
              <span className="text-gray-400 text-sm ml-1">
                ({item.reviews})
              </span>
            </div>

            {/* Location */}
            <div className="flex items-center gap-2 text-gray-500 text-sm mt-3">
              <FaMapMarkerAlt />
              <span>{item.location}</span>
            </div>

            {/* Jobs */}
            <p className="text-sm text-gray-500 mt-4">
              {item.jobs} Open Jobs
            </p>
          </div>
        ))}
      </div>




 <div className="grid grid-cols-1 md:grid-cols-2 py-20 gap-11">
         <div className="flex p-5 gap-8 items-center bg-[#FFF6F1] rounded-lg">
        <img className="hidden md:block" src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/job-tools.png" alt="" />
             <div>

                <p className="text-2xl font-semibold mb-2">Job Tools Services</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet rutrum quam, id faucibus erat interdum a. Curabitur eget tortor a nulla interdum semper.</p>
    
             </div>
      </div> 
           <div className="flex p-5 gap-8 items-center bg-[#EFF7FF] rounded-lg">
        <img className="hidden md:block" src="https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/planning-job.png" alt="" />
             <div>

           <p className="text-2xl font-semibold mb-2">Job Tools Services</p>
                <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam laoreet rutrum quam, id faucibus erat interdum a. Curabitur eget tortor a nulla interdum semper.</p>
              
             </div>
      </div>
 </div>
    </div>
  );
};

export default TopRecruter;
