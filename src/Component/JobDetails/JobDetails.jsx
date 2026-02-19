import { useLoaderData } from "react-router-dom";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import useAuth from "../../Hook/useAuth/useAuth";
import { toast } from "react-toastify";

const JobDetails = () => {
  const data = useLoaderData();
  const { user } = useAuth();

  const currentDate = new Date();
  const deadlineDate = new Date(data?.applicationDeadline);

  const handleApplyedSubmitButton = (e) => {
    e.preventDefault();
    const form = e.target;

    const userName = form.name.value;
    const userEmail = form.email.value;
    const resumi = form.cv.value;

    if (currentDate > deadlineDate) {
      return toast.error("Application deadline is over");
    }

    if (user?.email === data?.createdBy) {
      return toast.error("You cannot apply to your own job");
    }

    const appliedInfo = {
      userName,
      userEmail,
      resumi,
      jobCategory: data?.jobCategory,
      jobTitle: data?.jobTitle,
      jobId: data?._id,
    };

    axios
      .post("http://localhost:5000/setApplied", appliedInfo)
      .then((res) => {
        if (res.data.insertedId) {
          return axios.patch(
            `http://localhost:5000/inccount/${data?._id}`
          );
        }
      })
      .then((res) => {
        if (res?.data?.modifiedCount > 0) {
          toast.success("Successfully applied!");
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch(() => toast.error("Something went wrong"));
  };

  return (
    <>
      <NabBarAll />

      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-10">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-6">

            <img
              src={data?.bannarImg}
              alt="job banner"
              className="w-full rounded-2xl  "
            />

            <div className="bg-white p-6 rounded-2xl  space-y-5">
              <h1 className=" text-xl md:text-2xl  lg:text-3xl font-bold">
                {data?.jobTitle}
              </h1>

              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                  {data?.jobCategory}
                </span>
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">
                  {data?.type}
                </span>
                <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm">
                  {data?.location}
                </span>
              </div>

              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {data?.jobDescription}
              </p>
            </div>
          </div>

          {/* RIGHT SIDEBAR */}
          <div className="space-y-6">

            <div className="bg-white shadow-xl rounded-2xl p-6 space-y-5 sticky top-24">

              <h3 className="text-xl font-bold border-b pb-3">
                Job Overview
              </h3>

              <div className="space-y-3 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Salary
                  </span>
                  <span className="font-semibold">
                    ${data?.minPrice} - ${data?.maxPrice} / {data?.rate}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Category
                  </span>
                  <span>{data?.jobCategory}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Job Type
                  </span>
                  <span>{data?.type}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Location
                  </span>
                  <span>{data?.location}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Applicants
                  </span>
                  <span>{data?.applicantsNumber}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Deadline
                  </span>
                  <span className="text-red-500 font-semibold">
                    {data?.applicationDeadline}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">
                    Posted
                  </span>
                  <span>
                    {new Date(data?.postDate).toLocaleDateString()}
                  </span>
                </div>
              </div>

              {/* TAGS */}
              <div className="pt-4 border-t">
                <h4 className="font-semibold mb-2">
                  Required Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {data?.tags?.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="w-full bg-black text-white py-3 rounded-xl hover:opacity-90 transition mt-4"
                onClick={() =>
                  document.getElementById("apply_modal").showModal()
                }
              >
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* APPLY MODAL */}
      <dialog id="apply_modal" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>

          <form
            className="space-y-4"
            onSubmit={handleApplyedSubmitButton}
          >
            <div>
              <label>Name</label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName}
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>

            <div>
              <label>Email</label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email}
                className="w-full border px-3 py-2 rounded-lg"
                readOnly
              />
            </div>

            <div>
              <label>Resume Link</label>
              <input
                type="url"
                name="cv"
                className="w-full border px-3 py-2 rounded-lg"
                required
              />
            </div>

            <button className="w-full bg-black text-white py-2 rounded-lg">
              Submit Application
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default JobDetails;
