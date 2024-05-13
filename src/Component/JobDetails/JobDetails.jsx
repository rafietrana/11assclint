import { useLoaderData } from "react-router-dom";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";

const JobDetails = () => {
  const data = useLoaderData();
  console.log("data is", data);



  const handleApplyedSubmitButton = (e) =>{
         const form = e.target;
         const userName = form.name.value;
        
  }

  return (
    <>
      <NabBarAll></NabBarAll>
      <div className="w-9/12 mx-auto my-14 shadow-lg">
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
            <form className="my-5 space-y-5 " >
                <div>
                <label   htmlFor="name">Name</label> <br />
                <input type="text"  defaultValue={data?.userName}  className="px-3 py-2 w-full outline-none border" />
                </div>
                <div>
                <label htmlFor="email">Email</label> <br />
                <input type="text" defaultValue={data?.userEmail}   className="px-3 py-2 w-full outline-none border" />
                </div>
                <div>
                <label htmlFor="resumiLink">Resumi Link</label> <br />
                <input type="text" className="px-3 py-2 w-full outline-none border" />
                </div>
                <button className="bg-gray-100 px-3 py-2 rounded-lg">Submit</button>

 
 
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
