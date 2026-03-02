import BlogsSection from "../Component/BlogsSerction/BlogsSection";


import PopularCategory from "../Component/PopularCategory/PopularCategory";
import Sliders from "../Component/sliders";
import TopRecruter from "../Component/TopRecruter/TopRecruter";
import WorkCounter from "../Component/WorkCounter/WorkCounter";
import JobsShowing from "../Component/JobsShowing/JobsShowing";

import NabBarAll from "./../Shyred/NabBarAll/NabBarAll";

const Home = () => {
  return (
    <div>
      <NabBarAll />
      <Sliders />
      <JobsShowing></JobsShowing>
      <PopularCategory></PopularCategory>
      <WorkCounter></WorkCounter>
      <TopRecruter></TopRecruter>
      <BlogsSection></BlogsSection>
    </div>
  );
};

export default Home;
