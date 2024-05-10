import React, { useState } from "react";
import NabBarAll from "./../../Shyred/NabBarAll/NabBarAll";
import ReactDatePicker from "react-datepicker";

const AddJob = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <>
      <NabBarAll></NabBarAll>
      <div className="w-full h-screen flex flex-col justify-center items-center">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
          <h2 className="text-lg font-semibold text-gray-700 capitalize dark:text-white">
            Add a Job
          </h2>

          <form>
            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="bannarImg"
                >
                  Bannar Image
                </label>
                <input
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
                  id="jobTitle"
                  type="email"
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
                  id="userName"
                  type="password"
                  className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>

              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="userEmail"
                >
                  User Email
                </label>
                <input
                  id="userEmail"
                  type="password"
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
                  id="userEmail"
                  type="password"
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
                  id="userEmail"
                  type="password"
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
                <input
                  id="userEmail"
                  type="date"
                  className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200 pb-5"
                  htmlFor="userEmail"
                >
                  Application Deadline
                </label><br />
                <ReactDatePicker className="py-3 px-3 border " selected={startDate} onChange={(date) => setStartDate(date)} />
              </div>
              <div>
                <label
                  className="text-gray-700 dark:text-gray-200"
                  htmlFor="userEmail"
                >
                  Job Category
                
                </label>
                <br />
     

                <select name="cars" id="cars" className="w-full border px-3 py-2 outline-none">
                  <option value="volvo">On Site </option>
                  <option value="saab">Remote</option>
                  <option value="mercedes">Part Time</option>
                  <option value="audi">HyBrid</option>
                </select>
              </div>
              <div>
                <label htmlFor="applicationNumber">Applicants Number </label><br />
                <input className="border px-3 py-2 flex items-center" type="text" defaultValue={0} disabled />
              </div>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </>
  );
};

export default AddJob;
