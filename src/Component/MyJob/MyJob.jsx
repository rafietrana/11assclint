import { useEffect, useState } from "react";
import useAuth from "../../Hook/useAuth/useAuth";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import axios from "axios";
import { Link } from "react-router-dom";
 
import Swal from 'sweetalert2';  
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";

const MyJob = () => {
    // const [myAddedData, setMyAddedData] = useState([]);
    const { user } = useAuth();
    
    // useEffect(() => {
    //     axios(`http://localhost:5000/getmyjob/${user?.email}`)
    //     .then(res => {
    //         setMyAddedData(res?.data);
    //     });
    // });  

    // tanstack query  start 



    const { isPending, error, data } = useQuery({
        queryKey: ['repoData'],
        queryFn: () => 
            axios.get(`http://localhost:5000/getmyjob/${user?.email}`)
                .then((res) => res.data)
    });


    // tanstack query end


    const handleDeleteBtn = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You will delete this ",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5000/deletedata/${id}`)
                .then(res => {
                    console.log(res.data);
                    if (res.data.deletedCount > 0) {
                      toast.success('sucessfully deleted data')
                    setTimeout(()=>{
                      window.location.reload();
                    }, 2000)
                    }
                });
            }
        });
    };

    return (
        <>
            <NabBarAll></NabBarAll>
            <div className="w-12/12 mx-auto my-5">
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>bannarImg</th>
                                <th>Salery Range</th>
                                <th>Job Title</th>
                                <th>userEmail</th>
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
                            {data?.map((dataAddedMy, idx) => (
                                <tr key={dataAddedMy._id}>
                                    <th>{idx + 1}</th>
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
                                    <td>
                                        <Link to={`/updatejob/${dataAddedMy?._id}`}>
                                            <button className="px-3 py-2 rounded-lg bg-green-300 text-white">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDeleteBtn(dataAddedMy?._id)} className="px-3 py-2 rounded-lg bg-red-300 text-white">Delete</button>
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

export default MyJob;
