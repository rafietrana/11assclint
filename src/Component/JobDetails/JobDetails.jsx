import { useLoaderData } from "react-router-dom";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import useAuth from "../../Hook/useAuth/useAuth";
import { toast } from "react-toastify";

const JobDetails = () => {
  const data = useLoaderData();
  // console.log("data is", data);

  const currentDate = new Date();
  const deadline = data?.applicationDeadline;

  const { user } = useAuth();

  const handleApplyedSubmitButton = (e) => {
    e.preventDefault();
    const form = e.target;
    const userName = form.name.value;
    const userEmail = form.email.value;
    const resumi = form.cv.value;
    const jobCategorys = data?.jobCategory;
    const jobTitles = data?.jobTitle;

    if (currentDate > deadline) {
      return toast.error("deadline is over");
    }

    if (user?.email == data?.userEmail) {
      return toast.error("you are not permited for this job");
    }

    const appliedInfo = {
      userName,
      userEmail,
      resumi,
      jobCategorys,
      jobTitles,
    };

    axios.post("http://localhost:5000/setApplied", appliedInfo).then((res) => {
      // console.log("updated data is", res.data);

      if (res.data.insertedId) {
        axios
          .patch(`http://localhost:5000/inccount/${data?._id}`)
          .then((res) => {
            // console.log(res.data);
            // console.log("alhamdulillah sucessfully updated data mashallah");
            if (res.data.modifiedCount > 0) {
              toast.success("sucessfully updated data");
              setTimeout(() => {
                window.location.reload();
              }, 2000);
            }
          });
      }
    });
  };

  return (
    <>
      <NabBarAll></NabBarAll>
      <div className="w-9/12 mx-auto my-14 ">
        {/* modal */}

        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <form
              className="my-5 space-y-5 "
              onSubmit={handleApplyedSubmitButton}
            >
              <div>
                <label htmlFor="name">Name</label> <br />
                <input
                  type="text"
                  name="name"
                  defaultValue={data?.userName}
                  className="px-3 py-2 w-full outline-none border"
                />
              </div>
              <div>
                <label htmlFor="email">Email</label> <br />
                <input
                  type="text"
                  name="email"
                  defaultValue={user?.email}
                  className="px-3 py-2 w-full outline-none border"
                />
              </div>
              <div>
                <label htmlFor="resumiLink">Resumi Link</label> <br />
                <input
                  type="text"
                  name="cv"
                  className="px-3 py-2 w-full outline-none border"
                />
              </div>
              <button className="bg-gray-100 px-3 py-2 rounded-lg">
                Submit
              </button>
            </form>
          </div>
        </dialog>

        {/* modal  end */}

        <div className="grid lg:grid-cols-2  grid-cols-1 gap-5 ">
          <div className=" flex justify-center items-center ">
            <img src={data?.bannarImg} alt="" />
          </div>
          <div className="  m-5 space-y-4">
            <p>
              <span className="font-medium mr-2">Job Title</span>
              {data?.jobTitle}
            </p>
            <p>
              {" "}
              <span className="font-medium mr-2">Description</span>
              {data?.jobDescription}
            </p>
            <p>
              <span className="font-medium">Salary Range </span>
              {`$${data?.minPrice} -$ ${data?.maxPrice}`}
            </p>
            <p>
              <span className="mr-2 font-medium">Total Applicants Number</span>
              {data?.applicantsNumber}
            </p>
            <p>
              <span className="mr-2 font-medium">Application Deadline</span>
              {data?.applicationDeadline}
            </p>

            <button
              className="btn"
              onClick={() => document.getElementById("my_modal_3").showModal()}
            >
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
