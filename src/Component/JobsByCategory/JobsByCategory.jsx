import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const JobsByCategory = () => {
    return (
        <div className='w-11/12 mx-auto my-28'>


               <div className='w-full flex flex-col mb-8 space-y-3 justify-center items-center'>
                <p className='text-orange-600 font-bold font-poppin text-xl'>Job Seeking</p>
                <p className='font-poppin text-5xl font-bold uppercase '>Find <span className='text-[#029E9D]'>Your Jobs </span></p>
                <p className='w-5/12 mx-auto text-center'>The job market is constantly evolving, with new opportunities emerging regularly.  </p>
               </div>
              <Tabs >
    <TabList>
      <Tab   ><span className='font-semibold bg-gray-50'>All Jobs  </span></Tab>
      <Tab ><span className='font-semibold bg-gray-50 '>OnSite Jobs </span></Tab>
      <Tab ><span className='font-semibold bg-gray-50 '>Remote Jobs </span></Tab>
      <Tab ><span className='font-semibold bg-gray-50 '> Hybrid Jobs  </span></Tab>
      <Tab ><span className='font-semibold bg-gray-50 '> Part Time Jobs  </span></Tab>
    </TabList>

    <TabPanel>
      <h2>All Jobs</h2>
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