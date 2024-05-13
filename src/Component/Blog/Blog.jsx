 
import { useEffect, useState } from "react";
import NabBarAll from "../../Shyred/NabBarAll/NabBarAll";
import BlogsCard from "./BlogsCard";

 
 
const Blog = () => {
    const [blogsData, setBlogsData ] = useState([]);
    console.log(blogsData);
    useEffect(()=>{
        fetch('http://localhost:5000/getBlogs')
         .then(res => res.json())
         .then(data => setBlogsData(data))
    })
    return (
        <>
        <NabBarAll></NabBarAll>
        <div className="w-10/12 mx-auto grid  grid-cols-3 gap-5  my-5">
            {
               blogsData.map(dataBlogs => <BlogsCard dataBlogs={dataBlogs}></BlogsCard>)
            }
        </div>
        </>
    );
};

export default Blog;