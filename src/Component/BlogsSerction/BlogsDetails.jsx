import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import useAuth from "../../Hook/useAuth/useAuth";

const BlogsDetails = () => {
  const { id } = useParams();

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const { user } = useAuth();

  const { theme } = useAuth();

  console.log("alhamdulillah user is", user);

  // ✅ Fetch Blog
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `https://my-assignment-11-server-bice.vercel.app/finalcard/${id}`,
        );
        setBlog(response.data);
      } catch (error) {
        console.error(error);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [id]);

  // ✅ Fetch Comments
  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(
          `https://my-assignment-11-server-bice.vercel.app/comments/${id}`,
        );
        setComments(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [id]);

  // ✅ Submit Comment
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!commentText.trim()) return;

    const newComment = {
      blogId: id,
      text: commentText,
      userName: user?.displayName,
      userPhoto: user?.photoURL,

      createdAt: new Date(),
    };

    try {
      const response = await axios.post(
        "https://my-assignment-11-server-bice.vercel.app/comments",
        newComment,
      );
      setComments([response.data, ...comments]); // newest first
      setCommentText("");
    } catch (error) {
      console.error(error);
    }
  };

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
        <h1 className="text-3xl md:text-4xl font-bold mb-6">{blog?.title}</h1>

        {/* Author Info */}
        <div className="flex items-center gap-4 mb-8">
          <img
            src={blog?.author?.image}
            alt={blog?.author?.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold">{blog?.author?.name}</p>
            <p className="text-sm ">
              {blog?.date} • {blog?.readTime}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className=" text-lg mb-6">{blog?.shortDescription}</p>

        {/* Long Description */}
        <p className=" leading-relaxed mb-10">{blog?.longDescription}</p>

        {/* Content Sections */}
        <div className="space-y-8">
          {blog?.content?.map((item, index) => (
            <div key={index}>
              <h2 className="text-2xl font-semibold mb-2">{item.heading}</h2>
              <p className=" leading-relaxed">{item.paragraph}</p>
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

        {/* ================= COMMENTS SECTION ================= */}
        <div className="mt-16 border-t pt-10">
          <h2 className="text-2xl font-bold mb-6">
            Comments ({comments.length})
          </h2>

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="flex flex-col gap-4 mb-10"
          >
            <textarea
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              className="border p-3 rounded-lg"
              placeholder="Write your comment..."
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Submit Comment
            </button>
          </form>

          {/* Show Comments */}
          <div className="space-y-4">
            {comments.length === 0 && (
              <p className="text-gray-500">No comments yet. Be the first!</p>
            )}

            {comments.map((c) => (
              <div
                key={c._id}
                className="border p-4 rounded-lg shadow-sm flex items-start gap-4"
              >
                {/* User Photo */}
                {c.userPhoto ? (
                  <img
                    src={c.userPhoto}
                    alt={c.userName || "User"}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white">
                    {c.userName?.charAt(0).toUpperCase() || "U"}
                  </div>
                )}

                <div className="flex-1">
                  {/* User Name */}
                  <p className="font-semibold">{c.userName || "Anonymous"}</p>

                  {/* Comment Text */}
                  <p className="mb-1">{c.text}</p>

                  {/* Comment Date */}
                  <small className="text-gray-400 text-sm">
                    {new Date(c.createdAt).toLocaleString()}
                  </small>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* ===================================================== */}
      </div>
    </div>
  );
};

export default BlogsDetails;
