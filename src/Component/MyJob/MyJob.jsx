import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth/useAuth";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";


const MyJob = () => {
    const [myAddedData, setMyAddedData] = useState([]);
    // console.log('alhamdulillah my added data is', myAddedData);

    const {user} = useAuth();
    console.log('user is ', user);
        



    useEffect(()=>{
        axios(`http://localhost:5000/getmyjob/${user?.email}`)
        .then(res =>{
            setMyAddedData(res?.data)
        })
    },[])

    return (
        <>
        <NabBarAll></NabBarAll>
        <div className="w-11/12 mx-auto my-24">

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Job Title  </th>
        <th>Job Posting Date</th>
        <th>Application Deadline</th>
        <th>Update Data</th>
        <th>Delete Data</th>

      </tr>
    </thead>
    <tbody>
        {
            myAddedData.map(dataAddedMy =>(
                <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
                <td><button className="px-3 py-2 rounded-lg bg-green-300 ">Update </button></td>
                <td><button className="px-3 py-2 rounded-lg bg-red-300">Delete</button></td>
              </tr>
            ))
        }

 
    </tbody>
  </table>
</div>
            
        </div>
        </>
    );
};

export default MyJob;