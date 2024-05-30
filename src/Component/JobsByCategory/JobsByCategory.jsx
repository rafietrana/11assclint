import axios from "axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Card from "./Card";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const JobsByCategory = () => {
  //  const [JobCardData, setJobCardData] = useState([]);

  //  console.log('JobCardData', JobCardData);

  //   useEffect(()=>{
  //        axios('https://my-assignment-11-server-bice.vercel.app/getJobCard')
  //        .then(res =>{
  //            console.log(res.data);
  //           setJobCardData(res.data)
  //        })
  //   },[])

  // tanstack query
  const { isLoading, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios("https://my-assignment-11-server-bice.vercel.app/getJobCard").then(
        (res) => {
          return res.data;
        }
      ),
  });

  if (isLoading) {
    return (
      <div className="w-full h-screen flex justify-center items-center">
        <span className="loading loading-bars loading-lg"></span>
      </div>
    );
  }

  return (
    <div className="w-9/12 mx-auto my-28 border-none">
      <div className="w-full flex flex-col mb-8 space-y-3 justify-center items-center">
        <p className=" font-bold font-poppin text-xl">Job Seeking</p>
        <p className="font-poppin lg:text-5xl md:text-3xl text-xl font-bold uppercase ">
          Find <span className="text-[#029E9D]">Your Jobs </span>
        </p>
        <p className="w-5/12 mx-auto text-center">
          The job market is constantly evolving, with new opportunities emerging
          regularly.{" "}
        </p>
        <Link to={"/wishlist"}>
          <button className="bg-gray-100 px-3 py-2  uppercase font-semibold">
            View WishList
          </button>
        </Link>
      </div>
      <Tabs>
        <TabList>
          <Tab>
            <span className=" font-poppin p-2 ">All Jobs </span>
          </Tab>
          <Tab>
            <span className=" font-poppin p-2">OnSite Jobs </span>
          </Tab>
          <Tab>
            <span className=" font-poppin p-2">Remote Jobs </span>
          </Tab>
          <Tab>
            <span className=" font-poppin p-2"> Hybrid Jobs </span>
          </Tab>
          <Tab>
            <span className=" font-poppin p-2"> Part Time Jobs </span>
          </Tab>
        </TabList>

        <TabPanel>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5  my-5">
            {data?.map((dataCardJob) => (
              <Card dataCardJob={dataCardJob}></Card>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5  my-5">
            {data
              ?.filter((j) => j.jobCategory == "On_Site")
              .map((dataCardJob) => (
                <Card dataCardJob={dataCardJob}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5  my-5">
            {data
              ?.filter((j) => j.jobCategory == "Remote")
              .map((dataCardJob) => (
                <Card dataCardJob={dataCardJob}></Card>
              ))}
          </div>
        </TabPanel>

        <TabPanel>
          <div className="grid grid-cols-3 gap-5  my-5">
            {data
              ?.filter((j) => j.jobCategory == "Hybrid")
              .map((dataCardJob) => (
                <Card dataCardJob={dataCardJob}></Card>
              ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-3 gap-5  my-5">
            {data
              ?.filter((j) => j.jobCategory == "Part_Time")
              .map((dataCardJob) => (
                <Card dataCardJob={dataCardJob}></Card>
              ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default JobsByCategory;
