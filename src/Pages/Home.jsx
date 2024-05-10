 
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
        </div>
    );
};

export default Home;