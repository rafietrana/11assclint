import React, { useState } from "react";
import NabBarAll from "./../../Shyred/NabBarAll/NabBarAll";
import ReactDatePicker from "react-datepicker";
import useAuth from "../../Hook/useAuth/useAuth";
import axios from "axios";
import { toast } from "react-toastify";

const AddJob = () => {
  const [dedlineDate, setDedlineDate] = useState(new Date());
  const [postingDate, setPostingDate] = useState(new Date());
 

  const { user } = useAuth();

  const handleAddJobBtn = (e) => {
    e.preventDefault();
    const form = e.target;
    const bannarImg = form.bannarImg?.value;
    const jobTitle = form.jobTitle?.value;
    const userName = form.userName?.value;
    const userEmail = form.email?.value;
    const minPrice = form.minPrice?.value;
    const maxPrice = form.maxPrice?.value;
    const postDate = postingDate.toLocaleDateString();
    const jobCategory = form.jobCategory?.value;
    const applicantsNumber = parseInt(form.applicantsNumber?.value);
    const applicationDeadline = dedlineDate?.toLocaleDateString();
    const jobDescription = form.jobDescription?.value;

    // console.log(typeof applicantsNumber);

    const jobInfo = {
      bannarImg,
      jobTitle,
      userName,
      userEmail,
      minPrice,
      maxPrice,
      postDate,
      jobCategory,
      applicantsNumber,
      applicationDeadline,
      jobDescription,
    };

    // console.log(jobInfo);

    axios.post("http://localhost:5000/jobpost", jobInfo).then((res) => {
      // console.log(res.data);
      if (res.data?.insertedId) {
        toast.success("sucessfully Job Added");
      }
    });
  };

  return (
    <>
      <NabBarAll></NabBarAll>
      <div className="w-full h-[900px] flex flex-col justify-center items-center">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Most Popular Jobs
          </h2>

          <form onSubmit={handleAddJobBtn}>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="bannarImg"
                >
                  Bannar Image
                </label>
                <input
                  required
                  id="bannarImg"
                  name="bannarImg"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="jobTitle"
                >
                  Job Title
                </label>
                <input
                  required
                  id="jobTitle"
                  type="text"
                  name="jobTitle"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="userName"
                >
                  User Name
                </label>
                <input
                  required
                  id="userName"
                  type="text"
                  name="userName"
                  defaultValue={user?.displayName}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="usersEmail"
                >
                  User Email
                </label>
                <input
                  required
                  id="usersEmail"
                  type="email"
                  name="email"
                  defaultValue={user?.email}
                  disabled
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="userEmail"
                >
                  Minimam(Salery Range)
                </label>
                <input
                  required
                  id="userEmail"
                  type="text"
                  name="minPrice"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="userEmail"
                >
                  Maximum (Salery Range)
                </label>
                <input
                  required
                  id="userEmail"
                  name="maxPrice"
                  type="text"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="userEmail"
                >
                  Posting Date
                </label>
                <br />
                <ReactDatePicker
                  className="py-3 px-3 border "
                  selected={postingDate}
                  onChange={(date) => setPostingDate(date)}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200 pb-5"
                  htmlFor="userEmail"
                >
                  Application Deadline
                </label>
                <br />
                <ReactDatePicker
                  className="py-3 px-3 border "
                  selected={dedlineDate}
                  onChange={(date) => setDedlineDate(date)}
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="userEmail"
                >
                  Job Category
                </label>
                <br />

                <select
                  name="jobCategory"
                  id="cars"
                  className="w-full border px-3 py-2 outline-none"
                  required
                >
                  <option value="" disabled selected>
                    Select Options{" "}
                  </option>
                  <option value="On_Site">On Site </option>
                  <option value="Remote">Remote</option>
                  <option value="Part_Time">Part Time</option>
                  <option value="Hybrid">Hybrid</option>
                </select>
              </div>
              <div>
                <label htmlFor="applicationNumber">Applicants Number </label>
                <br />
                <input
                  required
                  className="border px-3 py-2 flex items-center"
                  name="applicantsNumber"
                  type="text"
                  defaultValue={0}
                  disabled
                />
              </div>
            </div>
            <div className="my-5">
              <label htmlFor="jobDescription"> Job Description</label>
              <br />
              <textarea
                className="border col-span-2 w-full outline-none mt-5 p-6"
                name="jobDescription"
                id="jobDescription"
              ></textarea>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Add Jobs
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddJob;
