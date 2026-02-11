// AddJob.jsx (React frontend)
import { useState } from "react";
import NabBarAll from "./../../Shyred/NabBarAll/NabBarAll";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import useAuth from "../../Hook/useAuth/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const AddJob = () => {
  const [deadlineDate, setDeadlineDate] = useState(new Date());
  const [postingDate, setPostingDate] = useState(new Date());
  const { user } = useAuth();

  const IMGBB_API_KEY = "94bd10bad413f751512cfb80beb4cc69";

  const handleAddJobBtn = async (e) => {
    e.preventDefault();
    const form = e.target;

    const imageFile = form.bannarImg.files[0];
    if (!imageFile) return toast.error("Please select an image 🤦‍♂️");

    try {
      // 1️⃣ Upload image to imgbb
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);
      const imgbbUrl = `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`;
      const imgRes = await axios.post(imgbbUrl, imageFormData);
      const imageUrl = imgRes.data.data.display_url;

      // 2️⃣ Prepare job info
      const jobInfo = {
        bannarImg: imageUrl,
        jobTitle: form.jobTitle.value,
        userName: user?.displayName,
        userEmail: user?.email,
        minPrice: form.minPrice.value,
        maxPrice: form.maxPrice.value,
        postDate: postingDate.toLocaleDateString(),
        jobCategory: form.jobCategory.value,
        applicantsNumber: 0,
        applicationDeadline: deadlineDate.toLocaleDateString(),
        jobDescription: form.jobDescription.value,
      };

      // 3️⃣ Send to backend
      const res = await axios.post("http://localhost:5000/jobpost", jobInfo);

      if (res.data?.insertedId) {
        toast.success("Job added successfully 🚀");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong 😤");
    }
  };

  return (
    <>
      <NabBarAll />
      <div className="max-w-5xl mx-auto px-4 py-16">
        <h1 className="text-2xl font-semibold text-gray-800 mb-8">
          Add New Job
        </h1>

        <form
          onSubmit={handleAddJobBtn}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Banner Image
            </label>
            <input
              required
              type="file"
              name="bannarImg"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Job Title
            </label>
            <input
              required
              type="text"
              name="jobTitle"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Minimum Salary
            </label>
            <input
              required
              type="text"
              name="minPrice"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Maximum Salary
            </label>
            <input
              required
              type="text"
              name="maxPrice"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              User Name
            </label>
            <input
              disabled
              defaultValue={user?.displayName}
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              User Email
            </label>
            <input
              disabled
              defaultValue={user?.email}
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Posting Date
            </label>
            <ReactDatePicker
              selected={postingDate}
              onChange={setPostingDate}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Application Deadline
            </label>
            <ReactDatePicker
              selected={deadlineDate}
              onChange={setDeadlineDate}
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Job Category
            </label>
            <select
              required
              name="jobCategory"
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select category</option>
              <option value="On_Site">On Site</option>
              <option value="Remote">Remote</option>
              <option value="Part_Time">Part Time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Applicants
            </label>
            <input
              disabled
              value={0}
              className="w-full px-4 py-2 border rounded-md bg-gray-100"
            />
          </div>

          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">
              Job Description
            </label>
            <textarea
              name="jobDescription"
              rows="5"
              className="w-full px-4 py-3 border rounded-md"
            ></textarea>
          </div>

          <div className="md:col-span-2 flex justify-end">
            <button className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition">
              Add Job
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
