import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";

const BlogsDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/finalcard/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setBlog(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div>
        <NabBarAll />
        <div className="text-center mt-20 text-xl font-semibold">
          Loading...
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div>
        <NabBarAll />
        <div className="text-center mt-20 text-red-500 font-semibold">
          Blog Not Found
        </div>
      </div>
    );
  }

  return (
    <div>
      <NabBarAll />

      <div className="w-11/12 md:w-8/12 mx-auto my-16">

        {/* Banner */}
        <img
          src={blog?.bannerImage}
          alt={blog?.title}
          className="w-full h-96 object-cover rounded-xl mb-8"
        />

        {/* Category */}
        <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-4">
          {blog?.category}
        </span>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold mb-6">
          {blog?.title}
        </h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={blog?.author?.image}
            alt={blog?.author?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{blog?.author?.name}</p>
            <p className="text-sm text-gray-500">
              {blog?.date} • {blog?.readTime}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-gray-700 text-lg mb-6">
          {blog?.shortDescription}
        </p>

        {/* Long Description */}
        <p className="text-gray-700 leading-relaxed mb-10">
          {blog?.longDescription}
        </p>

        {/* Blog Content Sections */}
        <div className="space-y-8">
          {blog?.content?.map((item, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-2">
                {item.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {item.paragraph}
              </p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-10 flex flex-wrap gap-3">
          {blog?.tags?.map((tag, index) => (
            <span
              key={index}
              className="text-sm bg-gray-100 px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogsDetails;