import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://11assserver.vercel.app/getBlogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="w-11/12 mx-auto my-32">
      {/* Heading */}
      <div className="mb-12 flex items-center justify-between">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">News and Blog</h1>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            Get the latest news, updates and tips
          </p>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <Link
            to={`/blogdetails/${blog._id}`}
            key={blog._id}
            className="border rounded-2xl overflow-hidden   hover:shadow-xl transition duration-300"
          >
            {/* Banner Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={blog?.bannerImage}
                alt={blog?.title}
                className="w-full h-full object-cover hover:scale-105 transition duration-300"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              {/* Category */}
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-3">
                {blog?.category}
              </span>

              {/* Title */}
              <h3 className="font-bold text-lg leading-snug mb-3">
                {blog?.title}
              </h3>

              {/* Short Description */}
              <p className="text-sm text-gray-500 mb-5">
                {blog?.shortDescription}
              </p>

              {/* Author + Meta */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-3">
                  <img
                    src={blog?.author?.image}
                    alt={blog?.author?.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-medium text-gray-700">
                      {blog?.author?.name}
                    </p>
                    <p className="text-xs">{blog?.date}</p>
                  </div>
                </div>

                <span className="text-xs">{blog?.readTime}</span>
              </div>

              {/* Views + Likes */}
              <div className="flex justify-between mt-4 text-xs text-gray-400">
                <span>👁 {blog?.views} views</span>
                <span>❤️ {blog?.likes}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
