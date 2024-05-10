 
import JobsByCategory from "../Component/JobsByCategory/JobsByCategory";
import Sliders from "../Component/sliders";
import useAuth from "../Hook/useAuth/useAuth";
import Navbar from "../Shyred/Navbar";
 

 

const Home = () => {
    const {user} = useAuth();
    console.log('users value frome  auth and context', user);
 
    return (
        <div>
            <Navbar></Navbar>
            <Sliders></Sliders>
            <JobsByCategory></JobsByCategory>
        </div>
    );
};

export default Home;