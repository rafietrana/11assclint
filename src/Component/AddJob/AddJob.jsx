import { useState } from "react";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import { toast } from "react-toastify";
import useAuth from "../../Hook/useAuth/useAuth";

const AddJob = () => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);

  const IMGBB_API_KEY = "94bd10bad413f751512cfb80beb4cc69";

  const handleAddJobBtn = async (e) => {
    e.preventDefault();
    const form = e.target;
    setLoading(true);

    try {
      const imageFile = form.image.files[0];

      if (!imageFile) {
        toast.error("Please select an image");
        setLoading(false);
        return;
      }

      // Upload image to imgbb
      const imageFormData = new FormData();
      imageFormData.append("image", imageFile);

      const imgbbUrl = `https://api.imgbb.com/1/upload?key=${IMGBB_API_KEY}`;
      const imgRes = await axios.post(imgbbUrl, imageFormData);
      const imageUrl = imgRes.data.data.display_url;

      // Create job object (consistent structure)
      const jobInfo = {
        type: form.type.value, // Remote, On_Site, Hybrid, Part_Time
        jobCategory: form.category.value,
        jobTitle: form.title.value,
        location: form.location.value,
        postDate: new Date().toISOString(),
        applicationDeadline: form.deadline.value,
        minPrice: Number(form.priceFrom.value),
        maxPrice: Number(form.priceTo.value),
        rate: form.rate.value,
        tags: form.tags.value.split(",").map(tag => tag.trim()),
        bannarImg: imageUrl,
        jobDescription: form.description.value,
        applicantsNumber: 0,
        createdBy: user?.email || "anonymous"
      };

      const res = await axios.post("http://localhost:5000/jobpost", jobInfo);

      if (res.data?.insertedId) {
        toast.success("Job added successfully");
        form.reset();
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    }

    setLoading(false);
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
          {/* Banner Image */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Banner Image
            </label>
            <input
              required
              type="file"
              name="image"
              accept="image/*"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Job Type */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Job Type
            </label>
            <select
              required
              name="type"
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select type</option>
              <option value="Remote">Remote</option>
              <option value="On_Site">On Site</option>
              <option value="Hybrid">Hybrid</option>
              <option value="Part_Time">Part Time</option>
            </select>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Category
            </label>
            <select
              required
              name="category"
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select category</option>
              <option value="Development">Development</option>
              <option value="Design">Design</option>
              <option value="Marketing">Marketing</option>
              <option value="Business">Business</option>
              <option value="Data_Science">Data Science</option>
            </select>
          </div>

          {/* Job Title */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Job Title
            </label>
            <input
              required
              type="text"
              name="title"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Location
            </label>
            <input
              required
              type="text"
              name="location"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Salary From */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Salary From
            </label>
            <input
              required
              type="number"
              name="priceFrom"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Salary To */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Salary To
            </label>
            <input
              required
              type="number"
              name="priceTo"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Rate */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Rate
            </label>
            <select
              required
              name="rate"
              className="w-full px-4 py-2 border rounded-md"
            >
              <option value="">Select rate</option>
              <option value="Hour">Hour</option>
              <option value="Month">Month</option>
              <option value="Year">Year</option>
            </select>
          </div>

          {/* Deadline */}
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Application Deadline
            </label>
            <input
              required
              type="date"
              name="deadline"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Tags */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">
              Tags (comma separated)
            </label>
            <input
              required
              type="text"
              name="tags"
              placeholder="React, Node.js, MongoDB"
              className="w-full px-4 py-2 border rounded-md"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm text-gray-600 mb-1">
              Job Description
            </label>
            <textarea
              required
              name="description"
              rows="5"
              className="w-full px-4 py-3 border rounded-md"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 flex justify-end">
            <button
              disabled={loading}
              type="submit"
              className="px-8 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition disabled:opacity-50"
            >
              {loading ? "Adding..." : "Add Job"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddJob;
