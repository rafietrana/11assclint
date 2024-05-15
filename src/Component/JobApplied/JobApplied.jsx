import { useEffect, useState } from "react";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import useAuth from "../../Hook/useAuth/useAuth";

const JobApplied = () => {
  const [appliedData, setAppliedData] = useState([]);
  const [filterValue, setFilterValue] = useState("");
  console.log("alhamdulillah filter is", filterValue);
  const { user } = useAuth();
  // console.log(user?.email);
  // console.log("applied job is", appliedData);

  useEffect(() => {
    axios(
      `http://localhost:5000/gets?email=${user?.email}&filter=${filterValue}`
    ).then((res) => {
      // console.log("applied data is", res.data);
      setAppliedData(res.data);
    });
  }, [filterValue, appliedData]);

  const handleFilterBtn = (e) => {
    // console.log("alhamdulillah yor button is now woking");
    // console.log("e is", e);
  };

  return (
    <>
      <NabBarAll></NabBarAll>
      <div className="w-9/12 mx-auto">
        <div className="overflow-x-auto">
          <div className="my-10">
            <label for="cars" className="">
              Filter By JobCategory:
            </label>{" "}
            <br />
            <br />
            <select
              onChange={(e) => setFilterValue(e.target.value)}
              name="filter"
              id="filter"
              className="outline-none border px-3 py-2"
            >
              <option value="">Select Option</option>
              <option value="On_Site">On_Site</option>
              <option value="Remote">Remote</option>
              <option value="Part_Time">Part_Time</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>userName</th>
                <th>userEmail</th>
                <th>Category Name</th>
                <th>Job Title</th>
                <th>Resumi</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {appliedData.map((dataApplied) => (
                <tr>
                  <th>1</th>
                  <td>{dataApplied?.userName}</td>
                  <td>{dataApplied?.userEmail}</td>
                  <td>{dataApplied?.jobCategorys}</td>
                  <td>{dataApplied?.jobTitles}</td>
                  <td>
                    <div>
                      <a
                        href={dataApplied?.resumi}
                        target="_blank"
                        className="text-red-500"
                      >
                        Resumi
                      </a>
                    </div>
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

export default JobApplied;
