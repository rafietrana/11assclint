import ReactDatePicker from "react-datepicker";
import useAuth from "../../Hook/useAuth/useAuth";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

 

const Update = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [defultData, setDefultData] = useState({})
    const {user} = useAuth();
    console.log('defultdata is', defultData);




    const  handleUpdateBtn = (e) => {
        e.preventDefault();
        const form = e.target;
        const bannarImg = form.bannarImg?.value;
        const jobTitle = form.jobTitle?.value;
        const userName = form.userName?.value;
        const userEmail = form.email?.value;
        const minPrice = form.minPrice?.value;
        const maxPrice = form.maxPrice?.value;
        const postDate = form.postDate?.value;
        const jobCategory = form.jobCategory?.value;
        const applicantsNumber = parseInt(form.applicantsNumber?.value);
        const applicationDeadline = startDate?.toLocaleDateString();
        const jobDescription = form.jobDescription?.value;
    
    
    
        console.log(typeof applicantsNumber);
    
        const   updateInfo = {
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
    
        console.log('updateInfo', updateInfo);
        

        axios.put(`http://localhost:5000/updatedata/${defultData?._id}`, updateInfo)
        .then(res =>{
            console.log(res.data);


            if(res.data.modifiedCount > 0){
                toast.success('sucessfully updated your data')
            }
        })
 
      };



    //   const handleDeleteBtn = (id) =>{
    //     axios.delete(`http://localhost:5000/deletedata/${id}`)
    //     .then(res =>{
    //         console.log(res.data);
    //     })
    //   }

    const params = useParams()
            useEffect(()=>{
                axios(`http://localhost:5000/getjob/${params.id}`)
                .then(res =>{
                             setDefultData(res?.data)
                })
            },[])
    return (
        <>
       <NabBarAll></NabBarAll>
        <div className="w-10/12 mx-auto my-16">
        <section className="max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md dark:bg-gray-800">
 

          <form  onSubmit={handleUpdateBtn}>
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
                  defaultValue={defultData?.bannarImg}
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
                  defaultValue={defultData?.jobTitle}
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
                  defaultValue={defultData?.minPrice}
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
                  defaultValue={defultData?.maxPrice}
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
                <input
                disabled
                  required
                  id="userEmail"
                  type="date"
                  defaultValue={defultData?.postDate}
                  name="postDate"
                  className="block w-full px-4 py-4 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
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
                  className="py-3 px-3 border w-full "
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
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
                  defaultValue={defultData?.jobCategory}
                  id="cars"
                  className="w-full border px-3 py-2 outline-none"
                  required
                >
 
                  <option      value="On_Site">On Site </option>
                  <option value="Remote">Remote</option>
                  <option value="Part_Time">Part Time</option>
                  <option  value="Hybrid">Hybrid</option>
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
              defaultValue={defultData?.jobDescription}
                className="border col-span-2 w-full outline-none mt-5 p-6"
                name="jobDescription"
                id="jobDescription"
              ></textarea>
            </div>

            <div className="flex justify-end mt-6">
              <button className="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                 Update Job
              </button>
            </div>
          </form>
        </section> 
        </div>
        </>
    );
};

export default Update;