import { useParams } from "react-router-dom";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import { useEffect, useState } from "react";


 

const BlogDetails = () => {


const  param = useParams();
const [viewData, setViewData] = useState({});
console.log('view data is', viewData);
const id = param.id;
        useEffect(()=>{
            fetch(`http://localhost:5000/finalcard/${id}`)
            .then(res =>res.json())
            .then(data =>setViewData(data))
        })
    return (
        <>
        <NabBarAll></NabBarAll>
        <div className="w-9/12 flex flex-col h-full justify-start items-center  mx-auto space-y-5">
            <div className="w-full py-5 h-[700px] my-24  overflow-hidden object-cover flex flex-col justify-center items-center">
            <img src={viewData?.bannerImage} alt="" />
            </div>
            <div>
                <p className="font-bold text-3xl">{viewData?.title}</p>
            </div>
            <div>
                <p>{viewData?.content}</p>
            </div>
            <div>

            </div>
        
 
 

        </div>
        </>
    );
};

export default BlogDetails;