import { Link } from "react-router-dom";

 

const ErrorPage = () => {
    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
                    <div className="flex justify-center items-center flex-col ">
                        <img src="https://i.ibb.co/YRyNytm/imgerror-removebg-preview.png" alt="" />
                        <Link to={'/'}>        <button className="bg-green-500 text-white px-3 py-2 rounded-lg ">Back Home</button></Link>
                
                    </div>
        </div>
    );
};

export default ErrorPage;