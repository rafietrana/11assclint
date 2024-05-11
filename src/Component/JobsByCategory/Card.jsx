 

const Card = ({dataCardJob}) => {
    console.log('from card', dataCardJob);
    
    return (
        <div>
            <div className="max-w-2xl px-8 py-4 bg-white rounded-lg border dark:bg-gray-800">
    <div className="flex items-center justify-between">

 
    </div>

    <div className="mt-2 min-h-11">
        <a href="#" className="text-md font-medium text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabindex="0" role="link">{dataCardJob?.jobTitle}</a><br />

 
    </div>
    <span className="text-sm font-light text-gray-600 dark:text-gray-400"><span className="font-medium">Post Time </span>{dataCardJob?.postDate}</span><br />

    <span className="text-sm font-light text-gray-600 dark:text-gray-400"><span className="font-medium">Application Deadline </span>{dataCardJob?.applicationDeadline}</span><br />

    <span className="text-sm font-light text-gray-600 dark:text-gray-400"><span className="font-medium">Salary Range </span>{`  $${dataCardJob?.minPrice} - $${dataCardJob?.maxPrice}`}</span>
    <span className="text-sm font-light text-gray-600 dark:text-gray-400"><span className="font-medium">Total Applications Number </span>{dataCardJob?.applicantsNumber}</span><br />

    <div className="flex items-center justify-between mt-4">
  <div>
    <button className="font-medium px-3 py-2 rounded-lg bg-gray-100">View Details</button>
  </div>

        <div className="flex items-center">
              <img src="" alt="" />
            <a className="font-normal text-gray-700 cursor-pointer dark:text-gray-200" tabindex="0" role="link"><span className="font-medium"> Author : </span>{dataCardJob?.userName}</a>
        </div>
    </div>
</div>
        </div>
    );
};

export default Card;