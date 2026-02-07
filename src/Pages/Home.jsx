 
 
import Hire from "../Component/Hire/Hire";
import Find from "../Component/JobsByCategory/Find";
import JobsByCategory from "../Component/JobsByCategory/JobsByCategory";
import Sliders from "../Component/sliders";
 
import NabBarAll from './../Shyred/NabBarAll/NabBarAll';
 
 

 

const Home = () => {
 
 
    return (
        <div>
               <NabBarAll></NabBarAll>
            <Sliders></Sliders>
            <JobsByCategory></JobsByCategory>
            <Find></Find>
            <Hire></Hire>
        </div>
    );
};

export default Home;