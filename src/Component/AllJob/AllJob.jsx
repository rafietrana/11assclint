import { useEffect, useState } from "react";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const AllJob = () => {
  const [tableData, setTableData] = useState([]);

  const [searchText, setSearchText] = useState("");

  console.log(" table data  is ", tableData);

  useEffect(() => {
    fetch(`http://localhost:5000/getTableCard?search=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        setTableData(data);
      });
  }, [searchText]);


  // tanstack query start


  // const {  data, refetch } = useQuery({
  //   queryKey: ['reposData'],
  //   queryFn: () =>
  //        axios(`http://localhost:5000/getTableCard?search=${searchText}`)
  //   .then(res =>{
  //     return res.data;
  //   })
  // })


  // tanstack query end

  const handleSearchBtn = (e) => {

    e.preventDefault();
    console.log("alhamdulillah your button is now working mashallh");

    const text = e.target.search.value;
 
    setSearchText(text);
    refetch();
   
  };

  console.log("search text is", searchText);

  return (
    <>
      <NabBarAll></NabBarAll>
      <div className="w-11/12 mx-auto my-9 ">
        <div className="overflow-x-auto">
          <form onSubmit={handleSearchBtn}>
            <input
              className="border px-3 py-2"
              name="search"
              type="text"
              placeholder="search a Job"
            />
            <button className="bg-green-500 px-3 py-2 text-white">
              Search
            </button>
          </form>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Job Posting Date</th>
                <th>Application Deadline</th>

                <th>Salary Range</th>
                <th>More Info</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {tableData?.map((dataTable, idx) => (
                <tr>
                  <th>{idx + 1}</th>
                  <td>{dataTable?.jobTitle}</td>
                  <td>{dataTable?.postDate}</td>
                  <td>{dataTable?.applicationDeadline}</td>
                  <td>{` $ ${dataTable?.minPrice} -- $ ${dataTable?.maxPrice}`}</td>
                  <td>
                  <Link to={`/job/${dataTable?._id}`}>
                  <button className="px-3 py-2 bg-gray-100 rounded-lg">
                      View Details
                    </button>
                  </Link>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AllJob;
