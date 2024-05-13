import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth/useAuth";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import { Link } from "react-router-dom";


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
                <td>{dataAddedMy?.jobTitle}</td>
                <td>{dataAddedMy?.postDate}</td>
                <td>{dataAddedMy?.applicationDeadline}</td>
                <Link to={`/updatejob/${dataAddedMy?._id}`}>         <td><button className="px-3 py-2 rounded-lg bg-green-300  text-white">Update </button></td></Link>
       
                <td><button className="px-3 py-2 rounded-lg bg-red-300 text-whtie">Delete</button></td>
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