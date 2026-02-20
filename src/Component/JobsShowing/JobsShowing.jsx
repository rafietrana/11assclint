import axios from "axios";
import { useEffect, useState } from "react";
import {
  FaLaptopCode,
  FaClock,
  FaBriefcase,
  FaMapMarkerAlt,
  FaDollarSign,
  FaUsers,
  FaCalendarAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoLocationOutline } from "react-icons/io5";
import { CiTimer } from "react-icons/ci";

// Job Categories (Backend Synced)
const jobsCategory = [
  { name: "Development", icon: FaLaptopCode },
  { name: "Design", icon: FaClock },
  { name: "Marketing", icon: FaBriefcase },
  { name: "Business", icon: FaMapMarkerAlt },
  { name: "Data_Science", icon: FaBriefcase },
];

const JobsShowing = () => {
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  // ✅ Date Formatter (MM/DD/YYYY)
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
  };

  // Fetch Jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const res = await axios.get("http://localhost:5000/getJobCard");
        setJobs(res.data);
        setFilteredJobs(res.data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };
    fetchJobs();
  }, []);

  // Filter Handler
  const handleCategoryClick = (categoryName) => {
    setSelectedCategory(categoryName);

    if (!categoryName || categoryName === "viewall") {
      setFilteredJobs(jobs);
    } else {
      const filtered = jobs.filter(
        (job) => job.jobCategory?.toLowerCase() === categoryName.toLowerCase(),
      );
      setFilteredJobs(filtered);
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
      <ul className="grid grid-cols-2  lg:w-10/12 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-10">
        {/* View All */}
        <li
          onClick={() => handleCategoryClick("viewall")}
          className="flex items-center gap-3 px-3 py-4 border rounded-lg cursor-pointer hover:border-green-500 hover:shadow transition"
        >
          <FaDollarSign className="text-sm text-green-500" />
          <span className="text-sm">View All</span>
        </li>

        {jobsCategory.map((category, index) => {
          const Icon = category.icon;
          return (
            <li
              key={index}
              onClick={() => handleCategoryClick(category.name)}
              className={`flex items-center gap-3 px-3 py-4 border rounded-lg cursor-pointer hover:border-green-500 hover:shadow transition ${
                selectedCategory === category.name
                  ? "border-green-500 shadow"
                  : ""
              }`}
            >
              <Icon className="text-sm text-green-500" />
              <span className="text-sm ">{category.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredJobs.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">
            No jobs found in this category.
          </p>
        )}

        {filteredJobs.map((job) => (
          <Link key={job._id} to={`/job/${job?._id}`}>
            <div className="rounded-xl border cursor-pointer hover:shadow-lg transition p-5 flex flex-col gap-3">
              {/* Image */}
              <img
                src={job.bannarImg}
                alt={job.jobTitle}
                className="w-full h-52 object-cover rounded-md"
              />

              {/* Category Badge */}
              <span className="self-start px-3 py-1 bg-green-100 text-green-700 text-sm rounded-full font-medium">
                {job.jobCategory}
              </span>

              {/* Title */}
              <h2 className="text-lg font-semibold text-gray-800">
                {job.jobTitle}
              </h2>
              <div className="flex gap-2">
                <div className="flex items-center gap-1">
                  <span className="text-sm">
                    <IoLocationOutline />
                  </span>
                  <p className="text-sm text-gray-500">{job?.location}</p>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm">
                    <CiTimer />
                  </span>
                  <p className="text-sm text-gray-500">30 Min ago</p>
                </div>
              </div>
              <div className="flex gap-5 ">
                <div>
                  <div className="flex items-center gap-1 text-gray-500 font-medium text-sm">
                    <FaDollarSign />
                    <span className="text-gray-500">
                      {job.minPrice} - {job.maxPrice}
                    </span>
                  </div>

                  {/* Applicants */}
                  <div className="flex   items-center gap-1 text-gray-500 text-sm">
                    <FaUsers />
                    <span className="">{job.applicantsNumber || 0} Applicants</span>
                  </div>
                </div>

                {/* Right Section */}
                <div className="flex flex-wrap gap-2">
                  {job?.tags?.slice(0, 3).map((tag, idx) => (
                    <p
                      className="text-sm text-gray-500 bg-[#EAF2FF] h-fit px-2 py-2"
                      key={idx}
                    >
                      {tag}
                    </p>
                  ))}
                </div>
              </div>

              {/* Dates */}
              <div className="grid grid-cols-2 flex-col  text-gray-500 text-sm">
                <div className="flex items-center gap-1">
                  <FaCalendarAlt />
                  <span>Post: {formatDate(job.postDate)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaClock />
                  <span>Deadline: {formatDate(job.applicationDeadline)}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-500 text-sm mt-2 line-clamp-3">
                {job.jobDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default JobsShowing;
