const blogsData = [
  {
    id: 1,
    category: "News",
    title: "21 Job Interview Tips: How To Make a Great Impression",
    description:
      "Our mission is to create the world’s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: "Sarah Harding",
    date: "06 September",
    readTime: "8 mins to read",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/user1.png", // add later
    authorImage: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/img-news1.png",
    
  },
  {
    id: 2,
    category: "Events",
    title: "39 Strengths and Weaknesses To Discuss in a Job Interview",
    description:
      "Our mission is to create the world’s most sustainable healthcare company by creating high-quality healthcare products in iconic, sustainable packaging.",
    author: "Steven Jobs",
    date: "06 September",
    readTime: "6 mins to read",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/user2.png",
    authorImage: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/img-news3.png",
  },
  {
    id: 3,
    category: "News",
    title: "Interview Question: Why Don't You Have a Degree?",
    description:
      "Learn how to respond if an interviewer asks you why you don't have a degree, and read example answers that can help you craft.",
    author: "Wiliam Kend",
    date: "06 September",
    readTime: "9 mins to read",
    image: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/user3.png",
    authorImage: "https://jobbox-html-frontend.vercel.app/assets/imgs/page/homepage1/img-news2.png",
  },
];

const BlogsSection = () => {
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

        {/* arrows placeholder */}
        <div className="hidden md:flex gap-3">
          <button className="w-10 h-10 rounded-full bg-gray-100">‹</button>
          <button className="w-10 h-10 rounded-full bg-gray-100">›</button>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogsData.map((blog) => (
          <div
            key={blog.id}
            className="border rounded-2xl overflow-hidden bg-white hover:shadow-xl transition"
          >
            {/* Image */}
            <div className="h-56 bg-gray-200 flex items-center justify-center">
          <img src={blog?.authorImage} alt="" />
            </div>

            {/* Content */}
            <div className="p-6">
              <span className="inline-block text-xs px-3 py-1 rounded-full bg-blue-50 text-blue-600 mb-3">
                {blog.category}
              </span>

              <h3 className="font-bold text-lg leading-snug mb-3">
                {blog.title}
              </h3>

              <p className="text-sm text-gray-500 mb-5">
                {blog.description}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between text-sm text-gray-500">
                <div className="flex items-center gap-3">
                    <img src={blog?.image} alt="" />
               
                  <div>
                    <p className="font-medium text-gray-700">
                      {blog.author}
                    </p>
                    <p className="text-xs">{blog.date}</p>
                  </div>
                </div>

                <span className="text-xs">{blog.readTime}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogsSection;
