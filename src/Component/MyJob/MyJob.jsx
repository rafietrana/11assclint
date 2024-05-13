import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth/useAuth";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";


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
    })



    const handleDeleteBtn = (id) =>{
      axios.delete(`http://localhost:5000/deletedata/${id}`)
      .then(res =>{
          console.log(res.data);
          if(res.data.deletedCount > 0){
                     toast.success('sucessfully deleted your data ')

                     setTimeout(()=>{
                      window.location.reload()
                     },2000)
          }
      })
    }

    return (
        <>
        <NabBarAll></NabBarAll>
        <div className="w-12/12 mx-auto my-5">

        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>bannarImg</th>
        <th>Salery Range</th>
        <th>Job Title  </th>
        <th>userEmail  </th>
        <th>Job Posting Date</th>
        <th>Application Deadline</th>
        <th>User Name</th>
        <th>jobCategory</th>
        <th>applyNumber</th>
        <th>Update Data</th>
        <th>Delete Data</th>

      </tr>
    </thead>
    <tbody>
        {
            myAddedData.map((dataAddedMy, idx) =>(
                <tr>
                <th>{idx+1}</th>
                <td>
                  <div>
                    <img className="w-10 h-10" src={dataAddedMy?.bannarImg} alt="" />
                  </div>
                </td>
                <td>{`${dataAddedMy?.minPrice}-${dataAddedMy?.maxPrice}`}</td>
                <td>{dataAddedMy?.jobTitle}</td>
                <td>{dataAddedMy?.userEmail}</td>
                <td>{dataAddedMy?.postDate}</td>
                <td>{dataAddedMy?.applicationDeadline}</td>
                <td>{dataAddedMy?.userName}</td>
                <td>{dataAddedMy?.jobCategory}</td>
                <td>
                  <div className="flex justify-center items-center">
                    <p>{dataAddedMy?.applicantsNumber}</p>
                  </div>
          
                  </td>
                <Link to={`/updatejob/${dataAddedMy?._id}`}>         <td><button className="px-3 py-2 rounded-lg bg-green-300  text-white">Update </button></td></Link>
       
                <td><button onClick={()=>handleDeleteBtn(dataAddedMy?._id)} className="px-3 py-2 rounded-lg bg-red-300 text-whtie">Delete</button></td>
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