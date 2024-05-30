import { Link } from "react-router-dom";

 

const CardWish = ({dataWish}) => {
    console.log(dataWish);
    return (
        <div className="w-9/12 mx-auto  shadow-lg p-5">
        < div
 
        >
          <div className="flex items-center justify-between"></div>
  
          <div className="mt-2 min-h-11">
            <div className=" ">
              <div>
                <a
                  href="#"
                  className="text-md font-medium  dark:text-white hover:text-gray-600 hover:underline"
                  tabindex="0"
                  role="link"
                >
                  {dataWish?.jobTitle}
                </a>
              </div>
 
            </div>
  
            <br />
          </div>
          <span className="text-sm font-lig  ">
            <span className="font-medium">Post Time </span>
            {dataWish?.postDate}
          </span>
          <br />
  
          <span className="text-sm font-lig  ">
            <span className="font-medium">Application Deadline </span>
            {dataWish?.applicationDeadline}
          </span>
          <br />
  
          <span className="text-sm font-lig  ">
            <span className="font-medium">Salary Range </span>
            {`  $${dataWish?.minPrice} - $${dataWish?.maxPrice}`}
          </span>
          <br />
          <span className="text-sm font-lig  ">
            <span className="font-medium">Total Applications Number </span>
            {dataWish?.applicantsNumber}
          </span>
          <br />
  
          <div className="flex items-center justify-between mt-4">
            <div>
              <Link to={`/job/${dataWish?._id}`}>
                <button className="font-medium px-3 py-2 rounded-lg ">
                  View Details
                </button>
              </Link>
            </div>
  
            <div className="flex items-center">
              <img src="" alt="" />
  
              <a
                className="font-normal  cursor-pointer "
                tabindex="0"
                role="link"
              >
                <span className="font-medium"> Author : </span>
                {dataWish?.userName}
              </a>
            </div>
          </div>
        </ div>
      </div>
    );
};

export default CardWish;