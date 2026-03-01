import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hook/useAuth/useAuth";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import {
  FiBriefcase,
  FiDollarSign,
  FiCalendar,
  FiUser,
  FiMail,
  FiFileText,
  FiImage,
  FiTag,
  FiX,
} from "react-icons/fi";

const Update = () => {
  const { user, theme } = useAuth();
  const { id } = useParams();

  const [startDate, setStartDate] = useState(new Date());
  const [defultData, setDefultData] = useState({});
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState("");
  const [loading, setLoading] = useState(true);

 
  



  console.log('alhamdulillah theme is', theme);



  

  // 🔹 Load Existing Data
  useEffect(() => {
    axios(`http://localhost:5000/getjob/${id}`).then((res) => {
      const data = res.data;
      setDefultData(data);

      if (data?.applicationDeadline) {
        setStartDate(new Date(data.applicationDeadline));
      }

      setTags(data?.tags || []);
      setLoading(false);
    });
  }, [id]);

  // 🔹 Add Tag
  const handleAddTag = () => {
    if (tagInput.trim() === "") return;

    if (!tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
    }

    setTagInput("");
  };

  // 🔹 Remove Tag
  const handleRemoveTag = (removeTag) => {
    setTags(tags.filter((tag) => tag !== removeTag));
  };

  // 🔹 Update Job
  const handleUpdateBtn = (e) => {
    e.preventDefault();
    const form = e.target;

    const updateInfo = {
      bannarImg: form.bannarImg.value,
      jobTitle: form.jobTitle.value,
      userName: user?.displayName,
      userEmail: user?.email,
      minPrice: parseFloat(form.minPrice.value),
      maxPrice: parseFloat(form.maxPrice.value),
      applicantsNumber: defultData?.applicantsNumber,
      postDate: defultData?.postDate,
      jobCategory: form.jobCategory.value,
      applicationDeadline: startDate
        ? startDate.toISOString().split("T")[0]
        : null,
      jobDescription: form.jobDescription.value,
      tags: tags,
    };

    axios
      .put(`http://localhost:5000/updatedata/${defultData?._id}`, updateInfo)
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          toast.success("Job Updated Successfully 🚀");
        } else {
          toast.info("No changes made.");
        }
      })
      .catch(() => {
        toast.error("Update Failed!");
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen text-xl font-medium">
        Loading...
      </div>
    );
  }

  return (
    <>
      <NabBarAll />

      <div className={`min-h-screen ${theme == 'light' ? "bg-gray-50" : ""} py-16 px-4`}>
        <div className={`max-w-4xl mx-auto ${theme == 'light' ? 'bg-white' : ""} rounded-2xl  p-10`}>

          {/* Header */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-semibold ">
              Update Job Post
            </h2>
            <p className="text-gray-500 mt-2">
              Keep your job listing updated and optimized ✨
            </p>
          </div>

          <form onSubmit={handleUpdateBtn} className="space-y-8">

            {/* Job Title */}
            <div>
              <label className="label">
                <FiBriefcase className="icon" /> Job Title
              </label>
              <input
                name="jobTitle"
                defaultValue={defultData?.jobTitle}
                required
                className="input"
              />
            </div>

            {/* Banner */}
            <div>
              <label className="label">
                <FiImage className="icon" /> Banner Image URL
              </label>
              <input
                name="bannarImg"
                defaultValue={defultData?.bannarImg}
                required
                className="input"
              />
            </div>

            {/* Salary */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label">
                  <FiDollarSign className="icon" /> Minimum Salary
                </label>
                <input
                  type="number"
                  name="minPrice"
                  defaultValue={defultData?.minPrice}
                  required
                  className="input"
                />
              </div>

              <div>
                <label className="label">
                  <FiDollarSign className="icon" /> Maximum Salary
                </label>
                <input
                  type="number"
                  name="maxPrice"
                  defaultValue={defultData?.maxPrice}
                  required
                  className="input"
                />
              </div>
            </div>

            {/* Category */}
            <div>
              <label className="label">
                <FiBriefcase className="icon" /> Job Category
              </label>
              <select
                name="jobCategory"
                defaultValue={defultData?.jobCategory}
                className="input"
              >
                <option value="On_Site">On Site</option>
                <option value="Remote">Remote</option>
                <option value="Part_Time">Part Time</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>

            {/* Deadline */}
            <div>
              <label className="label">
                <FiCalendar className="icon" /> Application Deadline
              </label>
              <ReactDatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="input"
                dateFormat="yyyy-MM-dd"
              />
            </div>

            {/* Tags Section */}
            <div>
              <label className="label">
                <FiTag className="icon" /> Tags
              </label>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  placeholder="Add a tag"
                  className="input"
                />
                <button
                  type="button"
                  onClick={handleAddTag}
                  className="px-4 bg-black text-white rounded-lg hover:bg-gray-800 transition"
                >
                  Add
                </button>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {tags.map((tag, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                    <FiX
                      className="cursor-pointer text-gray-500 hover:text-red-500"
                      onClick={() => handleRemoveTag(tag)}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label className="label">
                <FiFileText className="icon" /> Job Description
              </label>
              <textarea
                name="jobDescription"
                defaultValue={defultData?.jobDescription}
                rows="5"
                className="input resize-none"
              />
            </div>

            {/* User Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="label">
                  <FiUser className="icon" /> User Name
                </label>
                <input
                  value={user?.displayName || ""}
                  disabled
                  className="input bg-gray-100"
                />
              </div>

              <div>
                <label className="label">
                  <FiMail className="icon" /> User Email
                </label>
                <input
                  value={user?.email || ""}
                  disabled
                  className="input bg-gray-100"
                />
              </div>
            </div>

            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition duration-300"
              >
                Update Job
              </button>
            </div>

          </form>
        </div>
      </div>

      {/* Styling */}
      <style>
        {`
          .label {
            display: flex;
            align-items: center;
            gap: 8px;
            font-weight: 500;
            margin-bottom: 6px;
            color: #374151;
          }
          .icon {
            color: #6b7280;
          }
          .input {
            width: 100%;
            padding: 12px 14px;
            border: 1px solid #e5e7eb;
            border-radius: 8px;
            outline: none;
            transition: all 0.2s ease;
          }
          .input:focus {
            border-color: black;
            box-shadow: 0 0 0 2px rgba(0,0,0,0.05);
          }
        `}
      </style>
    </>
  );
};

export default Update;