import { useParams } from "react-router-dom";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth/useAuth";

const BlogDetails = () => {
  const { id } = useParams();

  const [viewData, setViewData] = useState({});
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const {theme} = useAuth()

  // ✅ Fetch blog details
  useEffect(() => {
    fetch(`http://localhost:5000/finalcard/${id}`)
      .then((res) => res.json())
      .then((data) => setViewData(data))
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ Fetch comments by blog id
  useEffect(() => {
    fetch(`http://localhost:5000/comments/${id}`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.log(err));
  }, [id]);

  // ✅ Submit comment
  const handleCommentSubmit = (e) => {
    e.preventDefault();

    const newComment = {
      blogId: id,
      text: comment,
      createdAt: new Date(),
    };

    fetch("http://localhost:5000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newComment),
    })
      .then((res) => res.json())
      .then((data) => {
        setComments([...comments, data]);
        setComment("");
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <NabBarAll />

      <div className="w-9/12 mx-auto my-24 space-y-6">

        {/* Blog Image */}
        <div className="w-full h-[500px] overflow-hidden">
          <img
            src={viewData?.bannerImage}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold">
          {viewData?.title}
        </h1>

        {/* Content */}
        <p className={`text-lg ${theme == "dark" ? "text-green-500" : ""}`}>
          {viewData?.content}
        </p>

        {/* Comment Section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">
            Comments ({comments.length})
          </h2>

          {/* Comment Form */}
          <form
            onSubmit={handleCommentSubmit}
            className="flex flex-col space-y-3"
          >
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="border p-3 rounded"
              placeholder="Write your comment..."
              required
            />

            <button
              type="submit"
              className="bg-blue-600 text-white py-2 rounded"
            >
              Submit Comment
            </button>
          </form>

          {/* Show Comments */}
          <div className="mt-6 space-y-3">
            {comments.map((c) => (
              <div
                key={c._id}
                className="border p-3 rounded shadow-sm"
              >
                <p>{c.text}</p>
                <small className="text-gray-500">
                  {new Date(c.createdAt).toLocaleString()}
                </small>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  );
};

export default BlogDetails;