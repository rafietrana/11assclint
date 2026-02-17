import axios from "axios";
import { useEffect, useState } from "react";
import { 
  FaBriefcase, 
  FaLaptopCode, 
  FaPaintBrush, 
  FaBullhorn, 
  FaChartLine, 
  FaUserTie, 
  FaMapMarkerAlt, 
  FaClock, 
  FaDollarSign 
} from "react-icons/fa";

// Job Categories
const jobsCategory = [
  { name: "Management", icon: FaUserTie },
  { name: "Development", icon: FaLaptopCode },
  { name: "Design", icon: FaPaintBrush },
  { name: "Marketing", icon: FaBullhorn },
  { name: "Finance", icon: FaChartLine },
  { name: "Business", icon: FaBriefcase },
];

const JobsShowing = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // Fetch jobs from backend
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getNewJob");
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  // Handle category filter
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);
    if (!categoryName) {
      setFilteredJobs(jobs);
    } else {
      setFilteredJobs(
        jobs.filter((job) =>
          job.category?.toLowerCase() === categoryName.toLowerCase()
        )
      );
    }
  };

  return (
    <div className="w-11/12 mx-auto my-10 mt-32 md:mt-40">
      {/* Heading */}
      <div className="mb-10">
        <h1 className="text-2xl md:text-3xl font-bold">Jobs of the day</h1>
        <p className="text-gray-500 text-sm md:text-base mt-1">
          Search and connect with the right candidates faster.
        </p>
      </div>

      {/* Categories */}
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
    
        {jobsCategory.map((category, index) => {
          const Icon = category.icon;
          return (
            <li
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className={`flex items-center gap-3 px-3 py-4 border rounded-lg cursor-pointer hover:border-green-500 hover:shadow transition ${
                selectedCategory === category.name ? "border-green-500 shadow" : ""
              }`}
            >
              <Icon className="text-xl md:text-2xl text-green-500" />
              <span className="text-sm md:text-base font-medium">{category.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredJobs.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No jobs found in this category.
          </p>
        )}
        {filteredJobs.map((job) => (
          <div
            key={job._id}
            className="rounded-xl border hover:shadow-lg transition p-5 flex flex-col gap-3"
          >
            {/* Job image */}
            <img
              src={job.image}
              alt={job.title}
              className="w-full h-40 object-cover rounded-md"
            />

            {/* Job type badge */}
            <span className="self-start px-3 py-1 bg-green-100 text-green-700 text-xs rounded-full font-medium">
              {job.type}
            </span>

            {/* Job title */}
            <h2 className="text-lg font-semibold text-gray-800">{job.title}</h2>

            {/* Location and Time */}
            <div className="flex items-center gap-4 text-gray-500 text-sm">
              <div className="flex items-center gap-1">
                <FaMapMarkerAlt />
                <span>{job.location}</span>
              </div>
              <div className="flex items-center gap-1">
                <FaClock />
                <span>{job.time}</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-1 text-gray-700 font-medium text-sm">
              <FaDollarSign />
              <span>
                {job.priceFrom}-{job.priceTo}/{job.rate}
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-2">
              {job.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Description */}
            <p className="text-gray-500 text-sm mt-2 line-clamp-3">
              {job.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsShowing;
