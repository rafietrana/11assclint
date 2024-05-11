import axios from 'axios';
import { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Card from './Card';

const JobsByCategory = () => {
   const [JobCardData, setJobCardData] = useState([]);


   console.log('JobCardData', JobCardData);

    useEffect(()=>{
         axios('http://localhost:5000/getJobCard')
         .then(res =>{
             console.log(res.data);
            setJobCardData(res.data)
         })
    },[])


    return ( 
        <div className='w-9/12 mx-auto my-28 border-none'>



               <div className='w-full flex flex-col mb-8 space-y-3 justify-center items-center'>
                <p className='text-orange-600 font-bold font-poppin text-xl'>Job Seeking</p>
                <p className='font-poppin text-5xl font-bold uppercase '>Find <span className='text-[#029E9D]'>Your Jobs </span></p>
                <p className='w-5/12 mx-auto text-center'>The job market is constantly evolving, with new opportunities emerging regularly.  </p>
               </div>
              <Tabs >
    <TabList>
      <Tab   ><span className=' font-poppin p-2'>All Jobs  </span></Tab>
      <Tab ><span className=' font-poppin p-2'>OnSite Jobs </span></Tab>
      <Tab ><span className=' font-poppin p-2'>Remote Jobs </span></Tab>
      <Tab ><span className=' font-poppin p-2'> Hybrid Jobs  </span></Tab>
      <Tab ><span className=' font-poppin p-2'> Part Time Jobs  </span></Tab>
    </TabList>

    <TabPanel>
   <div className='grid grid-cols-3 gap-5  my-5'>
   {
      JobCardData.map(dataCardJob => <Card dataCardJob={dataCardJob}></Card>)
    }
   </div>

    </TabPanel>
    <TabPanel>
      <h2 className=''>On Sites Job</h2>
    </TabPanel>
    <TabPanel>
      <h2>Remote Job</h2>
    </TabPanel>
    <TabPanel>
      <h2>Hybrid  Job</h2>
    </TabPanel>
    <TabPanel>
      <h2>Part Time Jobs</h2>
    </TabPanel>
  </Tabs>
        </div>
    );
};

export default JobsByCategory;