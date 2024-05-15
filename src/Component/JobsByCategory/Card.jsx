import { Link } from "react-router-dom";
import {motion} from 'framer-motion'
import {fadeIn} from '../../../src/variants'

 

const Card = ({dataCardJob}) => {
    // console.log('from card', dataCardJob);



 
    
    return (
        <div>
            <div className="max-w-2xl px-8 py-4    shadow-lg rounded-lg border ">
    <div className="flex items-center justify-between">

 
    </div>

    <div className="mt-2 min-h-11">
        <a href="#" className="text-md font-medium  dark:text-white hover:text-gray-600 hover:underline" tabindex="0" role="link">{dataCardJob?.jobTitle}</a><br />

 
    </div>
    <span className="text-sm font-lig  "><span className="font-medium">Post Time </span>{dataCardJob?.postDate}</span><br />

    <span className="text-sm font-lig  "><span className="font-medium">Application Deadline </span>{dataCardJob?.applicationDeadline}</span><br />

    <span className="text-sm font-lig  "><span className="font-medium">Salary Range </span>{`  $${dataCardJob?.minPrice} - $${dataCardJob?.maxPrice}`}</span><br />
    <span className="text-sm font-lig  "><span className="font-medium">Total Applications Number </span>{dataCardJob?.applicantsNumber}</span><br />

    <div className="flex items-center justify-between mt-4">
  <div>
    <Link to={`/job/${dataCardJob?._id}`}>
    <button   className="font-medium px-3 py-2 rounded-lg ">View Details</button>
    </Link>


  </div>

        <div className="flex items-center">
              <img src="" alt="" />

            <a className="font-normal  cursor-pointer " tabindex="0" role="link"><span className="font-medium"> Author : </span>{dataCardJob?.userName}</a>
        </div>
    </div>
</div>
        </div>
    );
};

export default Card;