 
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

// Job Data with realistic content
const jobsData = [
  {
    id: 1,
    type: "Freelancer",
    title: "React Native Web Developer",
    location: "New York, US",
    time: "3 mins ago",
    priceFrom: 90,
    priceTo: 120,
    rate: "Hour",
    tags: ["React Native", "JavaScript", "API Integration"],
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img1.png",
    description:
      "Build and maintain React Native applications for cross-platform mobile and web. Collaborate with designers to implement UI and integrate REST APIs.",
  },
  {
    id: 2,
    type: "Full time",
    title: "Digital Marketing Manager",
    location: "Chicago, US",
    time: "6 mins ago",
    priceFrom: 80,
    priceTo: 150,
    rate: "Hour",
    tags: ["SEO", "Content Marketing", "Google Ads"],
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img2.png",
    description:
      "Lead digital marketing campaigns, optimize SEO, manage Google Ads, and track analytics to improve brand visibility and drive sales.",
  },
  {
    id: 3,
    type: "Full time",
    title: "Web Designer / Developer",
    location: "Chicago, US",
    time: "9 mins ago",
    priceFrom: 120,
    priceTo: 150,
    rate: "Hour",
    tags: ["HTML", "CSS", "JavaScript", "React"],
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img3.png",
    description:
      "Design and develop responsive websites with clean code. Collaborate with clients to deliver modern and user-friendly web applications.",
  },
  {
    id: 4,
    type: "Part time",
    title: "UI/UX Designer",
    location: "San Francisco, US",
    time: "12 mins ago",
    priceFrom: 70,
    priceTo: 100,
    rate: "Hour",
    tags: ["Figma", "Adobe XD", "Prototyping"],
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img4.png",
    description:
      "Create intuitive and visually appealing UI/UX designs for web and mobile apps. Conduct user research and improve usability of applications.",
  },
  {
    id: 5,
    type: "Remote",
    title: "Node.js Backend Developer",
    location: "Remote",
    time: "15 mins ago",
    priceFrom: 100,
    priceTo: 180,
    rate: "Hour",
    tags: ["Node.js", "Express", "MongoDB", "API Development"],
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img5.png",
    description:
      "Develop and maintain backend services using Node.js and Express. Build RESTful APIs and integrate with MongoDB databases for high-performance applications.",
  },
  {
    id: 6,
    type: "Full time",
    title: "Data Analyst",
    location: "Boston, US",
    time: "20 mins ago",
    priceFrom: 85,
    priceTo: 140,
    rate: "Hour",
    tags: ["Excel", "SQL", "Power BI", "Data Visualization"],
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage2/img6.png",
    description:
      "Analyze large datasets, create dashboards using Power BI, and provide actionable insights to support business decision-making.",
  },
];

const JobsShowing = () => {
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
              className="flex items-center gap-3 px-3 py-4 border rounded-lg hover:border-green-500 hover:shadow transition cursor-pointer"
            >
              <Icon className="text-xl md:text-2xl text-green-500" />
              <span className="text-sm md:text-base font-medium">{category.name}</span>
            </li>
          );
        })}
      </ul>

      {/* Job Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {jobsData.map((job) => (
          <div
            key={job.id}
            className="  rounded-xl  border hover:shadow-lg transition p-5 flex flex-col gap-3"
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
