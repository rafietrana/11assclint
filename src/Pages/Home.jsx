import JobsShowing from "../Component/jobsShowing/jobsShowing";
import PopularCategory from "../Component/PopularCategory/PopularCategory";
import Sliders from "../Component/sliders";

import NabBarAll from "./../Shyred/NabBarAll/NabBarAll";
 
 

const Home = () => {
  return (
 <div>
      <NabBarAll />
      <Sliders />
      <JobsShowing></JobsShowing>
      <PopularCategory></PopularCategory>
    
    </div>
  );
};

export default Home;
